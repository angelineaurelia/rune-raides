// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Chest extends cc.Component {
    @property(cc.Prefab)
    potionPrefab: cc.Prefab = null;

    @property(cc.AudioClip)
    openSound: cc.AudioClip = null;

    private _animation: cc.Animation = null;

    private _isOpened: boolean = false;

    onLoad() {
    }
    onCollisionEnter(other, self){
        if (this._isOpened) return;
        if (other.node.name === "Player"){
            //播放開啟寶箱動畫animation
            this.openChest();
            this._isOpened = true;
        }
    }
    openChest() {
        let anim = this.getComponent(cc.Animation);
        if (anim) anim.play("chest_open");
        
        //藥水放在寶箱的節點之下
        this.scheduleOnce(()=>{},0.5);
        const potion = cc.instantiate(this.potionPrefab);
        potion.parent = this.node;
        potion.setPosition(this.node.position);

    }
}
