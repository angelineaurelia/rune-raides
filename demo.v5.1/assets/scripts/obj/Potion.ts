// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Potion extends cc.Component {
    @property({type: cc.Integer})
    healAmount: number = 10;

    onLoad() {
        // 開啟時 播放pot_out動畫
        let anim = this.getComponent(cc.Animation);
        console.log("pot");
        if (anim){
            anim.play("pot_out");
        } else {
            console.log("pot no show");
        }
        // 撥放完 改成pot_idle動畫
        this.scheduleOnce(() =>{
            if (anim) anim.play("pot_idle");        
        }, 0.5);
    }

    onPickup() {
        // 取得玩家並回復血量
        let player = cc.find("Canvas/MapManager/Actors/Player"); 
        console.log("pickup")
        if (player) {
            player.getComponent("Player").heal(this.healAmount);
        }
        this.node.destroy();
    }
    onCollisionEnter(other, self) {
        if (other.node.name === "Player") {
            this.onPickup();
        }
    }
}


