// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import GameManager from "./GameManeger";

@ccclass
export default class Player extends cc.Component {
    @property({type: cc.Integer, tooltip: "最大血量"})
    maxHp: number = 10;

    @property({type: cc.Integer, tooltip: "攻擊力"})
    attackPower: number = 3;

    @property({type: cc.Integer, tooltip: "初始血量"})
    hp: number = 10;

    @property(cc.Node)
    gameMgr: cc.Node = null;

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
        this.gameMgr.getComponent("GameManeger").updatelife(-amount, this.hp);
        if(this.hp <= 0){
            this.die();
        }
    }

    public heal(amount: number) {
        
        this.hp += amount;
        if (this.hp > this.maxHp) this.hp = this.maxHp;
        this.gameMgr.getComponent("GameManeger").updatelife(amount, this.hp);
        this.playhealsound();
    }

    public attack(target: Player) {
        target.takeDamage(this.attackPower);
    }
    public die() {
        if(this.hp <= 0){
            this.gameMgr.getComponent("GameManeger").updatelife(-this.maxHp, 0);
            this.controller.getComponent("ActorController").godie();
        }
    }
}