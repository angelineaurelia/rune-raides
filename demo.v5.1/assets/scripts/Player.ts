// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import GameManager from "./GameManager";

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

    onLoad(){
        ;
    }

    public SetPlayer(level: number){
        //reset player position
        this.hp = this.maxHp;
        this.updatelife(0, this.hp);
        this.node.setPosition(20,20);
        this.holdingKey = false;

    }

    update(dt){
        cc.find("Canvas/Main Camera/UI/Key").active = this.holdingKey;
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

    public get worldPosition(): cc.Vec3 {
        return this.node.convertToWorldSpaceAR(cc.v3(0, 0, 0));
    }

    public get localPosition(): cc.Vec3 {
        return this.node.position;
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
                if(otherCollider.node){
                    otherCollider.node.destroy();
                }else{
                    cc.log("can't deal with otherCollider.node.destroy(); properly");
                }
                this.gameManager = cc.find("GameManager").getComponent("GameManager");
                this.gameManager.GoNextLevel();
            },1.2);
        }
    }

}