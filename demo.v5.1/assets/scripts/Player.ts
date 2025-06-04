// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import GameManager from "./GameManager";
import BlueSlimeAI from "./ai/BlueSlimeAI";

type FacingDirection = "up" | "down" | "left" | "right";

@ccclass
export default class Player extends cc.Component {
    @property({type: cc.Integer, tooltip: "最大血量"})
    maxHp: number = 40;

    @property({type: cc.Integer, tooltip: "攻擊力"})
    attackPower: number = 5;

    @property({type: cc.Integer, tooltip: "初始血量"})
    hp: number = 40;

    @property(cc.Node)
    private lifebar: cc.Node = null;

    @property(cc.Node)
    controller: cc.Node = null;

    @property(cc.AudioClip)
    attack1sound: cc.AudioClip = null;

    @property(cc.AudioClip)
    attack2sound: cc.AudioClip = null;

    @property(cc.AudioClip)
    attack3sound: cc.AudioClip = null;

    @property(cc.AudioClip)
    hurtsound: cc.AudioClip = null;

    @property(cc.AudioClip)
    healsound: cc.AudioClip = null;

    @property(GameManager)
    gameManager: GameManager = null;

    public holdingKey : boolean = false;

    private isAttacking: boolean = false; // Prevent overlapping swings
    private anim: cc.Animation;
    @property({ type: cc.Integer, tooltip: "Player attack range in pixels" })
    attackRange: number = 50;

    // Delay (seconds) into the attack animation when damage is actually applied
    @property({ type: cc.Float, tooltip: "When (sec) to check hit in attack anim" })
    attackHitDelay: number = 0.2;

    // Total length (seconds) of the attack animation
    @property({ type: cc.Float, tooltip: "Length of PlayerAttack animation" })
    attackAnimDuration: number = 0.5;

    onLoad(){
        this.anim = this.getComponent(cc.Animation);
        cc.systemEvent.on(
            cc.SystemEvent.EventType.KEY_DOWN,
            this.onKeyDown,
            this
        );

    }
    onDestroy() {
        // Clean up listener
        cc.systemEvent.off(
            cc.SystemEvent.EventType.KEY_DOWN,
            this.onKeyDown,
            this
        );
    }
    private onKeyDown(event: cc.Event.EventKeyboard) {
        // Use Space as the attack key (change if you prefer another key)
        if (event.keyCode === cc.macro.KEY.z || event.keyCode === cc.macro.KEY.c || event.keyCode === cc.macro.KEY.v) {
            this.tryAttack();
        }
    }
    private tryAttack() {
        if (this.isAttacking) return;
        this.isAttacking = true;

        // 1) Play attack animation & sound
        if (this.anim) {
            this.anim.play("PlayerAttack"); // ensure you have a clip named “PlayerAttack”
        }
        if (this.attack1sound) {
            cc.audioEngine.playEffect(this.attack1sound, false);
        }

        // 2) Schedule the actual “hit” moment
        this.scheduleOnce(this.applyAttackHit, this.attackHitDelay);

        // 3) Once the full animation is done, allow attacking again
        this.scheduleOnce(() => {
            this.isAttacking = false;
        }, this.attackAnimDuration);
    }

    // Runs attackHitDelay seconds into the swing to check for any slimes in range
    private applyAttackHit() {
        // 1) Convert the player's position to world space (Vec3) and then to Vec2
        const playerWorld3 = this.node.convertToWorldSpaceAR(cc.v3(0, 0, 0));
        const playerWorld2 = cc.v2(playerWorld3.x, playerWorld3.y);

        // 2) Find all slimes under “Canvas/MapManager/Actors”
        const actorsRoot = cc.find("Canvas/MapManager/MonsterManager");
        if (!actorsRoot) return;

        actorsRoot.children.forEach((childNode) => {
            const slimeComp = childNode.getComponent("BlueSlimeAI");
            if (!slimeComp) console.log("no-Monster"); // skip non‐slime nodes
            else console.log("Monster :", childNode.name);
            // 3) Convert that slime’s position to world-space Vec2
            const slimeWorld3 = childNode.convertToWorldSpaceAR(cc.v3(0, 0, 0));
            const slimeWorld2 = cc.v2(slimeWorld3.x, slimeWorld3.y);

            // 4) Distance check
            const dist = playerWorld2.sub(slimeWorld2).mag();
            if (dist <= this.attackRange) {
                // 5) Slash hits this slime → deal damage
                if (slimeComp) slimeComp.takeDamage(this.attackPower);
                // (Optional) If you only want one slime per swing, uncomment:
                // return;
            }
        });
    }

     public get worldPosition(): cc.Vec3 {
        return this.node.convertToWorldSpaceAR(cc.v3(0, 0, 0));
    }

    public get localPosition(): cc.Vec3 {
        return this.node.position;
    }
    public SetPlayer(level: number){
        //reset player position
        this.hp = this.maxHp;
        this.updatelife(0, this.hp);
        this.node.setPosition(20,20);
        this.holdingKey = false;

    }

    updatelife(num: number, hp: number){
        console.log(num, hp);
        this.lifebar.width = hp;
        if(hp<=10) this.lifebar.color = cc.Color.RED;
        else if(hp<=20) this.lifebar.color = cc.Color.ORANGE;
        else this.lifebar.color = cc.Color.GREEN;
    }

    public playattack1sound(){
        if(this.attack1sound) cc.audioEngine.playEffect(this.attack1sound,false);
        else console.log("No attack1 sound");
    }

    public playhealsound(){
        if(this.healsound) cc.audioEngine.playEffect(this.healsound,false);
    }

    public playhurtsound(){
        if(this.hurtsound) cc.audioEngine.playEffect(this.hurtsound,false);
    }

    public playattack2sound(){
        if(this.attack2sound) cc.audioEngine.playEffect(this.attack2sound,false);
    }

    public playattack3sound(){
        if(this.attack3sound) cc.audioEngine.playEffect(this.attack3sound,false);
    }

    public takeDamage(amount: number) {
        this.hp -= amount; 
        this.updatelife(-amount, this.hp);
        if(this.hp <= 0){
            this.die();
        }
    }

    public heal(amount: number) {
        
        this.hp += amount;
        if (this.hp > this.maxHp) this.hp = this.maxHp;
        this.updatelife(amount, this.hp);
        this.playhealsound();
    }

    public attack(target: Player) {
        target.takeDamage(this.attackPower);
    }
    public die() {
        if(this.hp <= 0){
            this.updatelife(-this.maxHp, 0);
            this.controller.getComponent("ActorController").godie();
        } 
        // Call GameManager to handle game over logic
    }

    onBeginContact(contact, selfCollider, otherCollider){
        if(otherCollider.node.name == 'key'){
            this.holdingKey = true;
            otherCollider.node.active = false;
        }
        if(otherCollider.node.name == 'lock' && this.holdingKey){
            const temp = otherCollider.getComponent("Lock");
            if(temp){
                temp.playAnim();
            }
            this.scheduleOnce(()=>{
                otherCollider.node.destroy();
                this.gameManager = cc.find("GameManager").getComponent("GameManager");
                this.gameManager.GoNextLevel();
            },1.2);
        }
    }

}