// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
enum MonsterType {
    BlueSlime,
    GreenSlime,
    GreenBoss,
    LavaSlime
}

@ccclass
export default class NewClass extends cc.Component {

    private level: number = 1;
    private monsterManager: cc.Node = null;
    private Map_xmax: number = 0;
    private Map_ymax: number = 0;


    onLoad () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;
        this.level = cc.find("GameManager").getComponent("GameManager").Level;
        //Initialize the monster manager
        this.monsterManager = cc.find("Canvas/MapManager/MonsterManager");
        console.log("Monster onload");
    }

    start () {
    }

    // update (dt) {}
    initMonster() {
        console.log("Map_xmax =", this.Map_xmax, "Map_ymax =", this.Map_ymax);
        let monsterCount = Math.floor((this.Map_xmax/100)*(this.Map_ymax/100)/9);
        console.log("monster COunt = ",monsterCount);
        for (let i = 0; i < monsterCount; i++) {
            let randomType = Math.floor(Math.random()*3.9999);
            console.log("Monster Type:", randomType);
            switch (randomType) {
                case MonsterType.BlueSlime:
                    this.initBlueSlime();
                    break;
                case MonsterType.GreenSlime:
                    this.initGreenSlime();
                    break;
                case MonsterType.GreenBoss:
                    this.initGreenBoss();
                    break;
                case MonsterType.LavaSlime:
                    this.initLavaSlime();
                    break;
                default:
                    cc.error("Unknown monster type:", randomType);
            }
        }

    }

    initBlueSlime() {
        cc.resources.load("prefabs/Blue Slime", cc.Prefab, (err, prefab) => {
            if (err) {
                cc.error("Failed to load Blue Slime:", err);
                return;
            }
            const SlimeNode = cc.instantiate(prefab);
            this.monsterManager.addChild(SlimeNode,1,'Blue Slime');
            let x = Math.floor(Math.random() * (this.Map_xmax + 1)) ;
            let y = Math.floor(Math.random() * (this.Map_ymax + 1)) ;
            SlimeNode.setPosition(x,y);
        })
        console.log("Map_xmax =", this.Map_xmax, "Map_ymax =", this.Map_ymax);
    }
    initGreenSlime() {
        cc.resources.load("prefabs/Green Slime", cc.Prefab, (err, prefab) => {
            if (err) {
                cc.error("Failed to load Green Slime:", err);
                return;
            }
            const SlimeNode = cc.instantiate(prefab);
            this.monsterManager.addChild(SlimeNode, 1,'Green Slime');
            let x = Math.floor(Math.random() * (this.Map_xmax + 1)) ;
            let y = Math.floor(Math.random() * (this.Map_ymax + 1)) ;
            SlimeNode.setPosition(x,y);
            console.log("x=", x, "y=",y);
        })
        
    }
    initGreenBoss() {
        cc.resources.load("prefabs/Green Boss", cc.Prefab, (err, prefab) => {
            if (err) {
                cc.error("Failed to load Green Boss", err);
                return;
            }
            const SlimeNode = cc.instantiate(prefab);
            this.monsterManager.addChild(SlimeNode, 1, 'Green Boss');
            let x = Math.floor(Math.random() * (this.Map_xmax + 1)) ;
            let y = Math.floor(Math.random() * (this.Map_ymax + 1)) ;
            SlimeNode.setPosition(x,y);
        })
        console.log("Map_xmax =", this.Map_xmax, "Map_ymax =", this.Map_ymax);
    }
    initLavaSlime() {
        cc.resources.load("prefabs/Lava Slime", cc.Prefab, (err, prefab) => {
            if (err) {
                cc.error("Failed to load Lava Slime:", err);
                return;
            }
            const SlimeNode = cc.instantiate(prefab);
            this.monsterManager.addChild(SlimeNode, 1, 'Lava Slime');
            let x = Math.floor(Math.random() * (this.Map_xmax + 1)) ;
            let y = Math.floor(Math.random() * (this.Map_ymax + 1)) ;
            SlimeNode.setPosition(x,y);
        })
        console.log("Map_xmax =", this.Map_xmax, "Map_ymax =", this.Map_ymax);
    }

    public SetMonster(_level: number) {
        this.level = _level;
        let MapGEn = cc.find("GameManager").getComponent("GameManager");
        this.Map_xmax = Number((this.level *4+6)*100);
        this.Map_ymax = Number((this.level *2+3)*100);
        console.log("Level = ", this.level, typeof this.level);
        console.log("Map_xmax = ", this.Map_xmax, typeof this.Map_xmax);

        this.monsterManager.removeAllChildren();
        this.initMonster();
        console.log("set monster");
    }
}
