// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

import {Map_node, Map_edge, Map_selected_edge, mapRoomUnit, Map_Graph} from './MapGeneratorCore';

@ccclass
export default class MapGenerator extends cc.Component {

    /*@property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';*/

    @property(cc.Node)
    wallList: cc.Node = null;

    //Please set the Anchor of Prefab into (0,0) first
    @property(cc.Prefab)
    verticalWallPrefab: cc.Prefab = null;

    //Please set the Anchor of Prefab into (0,0) first
    @property(cc.Prefab)
    horizontalWallPrefab: cc.Prefab = null;

    private myMap : Map_Graph = null;
    private Map_xmax : number = 10;
    private Map_ymax : number = 5;
    private blocksize_x : number = 100;
    private blocksize_y : number = 100;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        ;
    }

    start () {
        
        this.myMap = new Map_Graph(this.Map_xmax,this.Map_ymax);// generate map
        //Please set the Anchor of Prefab into (0,0) first
        for(let _x:number = 0;_x<this.Map_xmax;_x++){
            for(let _y:number = 0;_y<this.Map_ymax;_y++){
                if(this.myMap.mapBlock[_y][_x].up){
                    const prefab_temp = cc.instantiate(this.horizontalWallPrefab);
                    prefab_temp.setPosition(_x*this.blocksize_x,_y*this.blocksize_y);
                    this.wallList.addChild(prefab_temp,1,'wall');
                }
                if(this.myMap.mapBlock[_y][_x].left){
                    const prefab_temp = cc.instantiate(this.verticalWallPrefab);
                    prefab_temp.setPosition(_x*this.blocksize_x,_y*this.blocksize_y);
                    this.wallList.addChild(prefab_temp,1,'wall');
                }
            }
        }
        for(let i:number = 0;i<this.Map_xmax;i++){
            const prefab_temp = cc.instantiate(this.horizontalWallPrefab);
            prefab_temp.setPosition(i*this.blocksize_x,this.Map_ymax*this.blocksize_y);
            this.wallList.addChild(prefab_temp,1,'wall');
        }
        for(let i:number = 0;i<this.Map_ymax;i++){
            const prefab_temp = cc.instantiate(this.verticalWallPrefab);
            prefab_temp.setPosition(this.Map_xmax*this.blocksize_x,i*this.blocksize_y);
            this.wallList.addChild(prefab_temp,1,'wall');
        }
    }

    // update (dt) {}
}

/*
export class YourScriptName extends Component {

    @property(Prefab)
    ground0: Prefab = null!;

    start() {
        const groundNode = instantiate(this.ground0);
        groundNode.setPosition(new Vec3(0, 0, 0));
        this.node.addChild(groundNode);
    }
}
*/
