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

    @property(cc.Prefab)
    chestWallPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    keyToNextLevel: cc.Prefab = null;

    @property(cc.Prefab)
    lockToNextLevel: cc.Prefab = null;

    @property(cc.Prefab)
    groundPrefab: cc.Prefab = null;

    private myMap : Map_Graph = null;
    private Map_xmax : number = 10;
    private Map_ymax : number = 5;
    private chestboxes : number = 2;
    private blocksize_x : number = 100;
    private blocksize_y : number = 100;
    public get MapXmax(): number {
        return this.Map_xmax* this.blocksize_x;
    }
    public get MapYmax(): number {
        return this.Map_ymax * this.blocksize_y;
    }
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        ;
    }

    GeneratorMap () {
        this.myMap = new Map_Graph(this.Map_xmax,this.Map_ymax);// generate map
        //Please set the Anchor of Prefab into (0,0) first
        for(let _x:number = 0;_x<this.Map_xmax;_x++){
            for(let _y:number = 0;_y<this.Map_ymax;_y++){
                const prefab_temp = cc.instantiate(this.groundPrefab);
                prefab_temp.setPosition(_x*this.blocksize_x,_y*this.blocksize_y);
                this.wallList.addChild(prefab_temp,0,'ground');
            }
        }
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
        // Generate the outer walls
        for(let i:number = 0;i<this.Map_xmax;i++){
            const prefab_temp = cc.instantiate(this.horizontalWallPrefab);
            prefab_temp.setPosition(i*this.blocksize_x,this.Map_ymax*this.blocksize_y);
            this.wallList.addChild(prefab_temp,1,'wall');
        }

        // Generate the vertical walls
        for(let i:number = 0;i<this.Map_ymax;i++){
            const prefab_temp = cc.instantiate(this.verticalWallPrefab);
            prefab_temp.setPosition(this.Map_xmax*this.blocksize_x,i*this.blocksize_y);
            this.wallList.addChild(prefab_temp,1,'wall');
        }
        this.generateKey_Lock();
    }

    regenerateMap(level: number) {
        this.wallList.removeAllChildren();
        // Find Level
        this.Map_xmax = level*4 + 6 ; // Level 1,2,3...，Map_xmax  = 10,14,18...
        this.Map_ymax = level*2 + 3 ; // Level 1,2,3...，Map_ymax = 5,7,9...
        this.chestboxes = level*2 + 1 ;

        this.myMap = new Map_Graph(this.Map_xmax, this.Map_ymax);
        
        for(let _x:number = 0;_x<this.Map_xmax;_x++){
            for(let _y:number = 0;_y<this.Map_ymax;_y++){
                const prefab_temp = cc.instantiate(this.groundPrefab);
                prefab_temp.setPosition(_x*this.blocksize_x,_y*this.blocksize_y);
                this.wallList.addChild(prefab_temp,0,'ground');
            }
        }

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
        this.generateKey_Lock();
    }
    
    generateKey_Lock(){
        let _x0:number = 0;_x0 = Math.floor(Math.random() * this.Map_xmax) + 0.5;
        let _y0:number = 0;_y0 = Math.floor(Math.random() * this.Map_ymax) + 0.5;
        let _x1:number = 0;_x1 = Math.floor(Math.random() * this.Map_xmax) + 0.5;
        let _y1:number = 0;_y1 = Math.floor(Math.random() * this.Map_ymax) + 0.5;

        while((_x0 === _x1) && (_y0 === _y1)){
            _x1 = Math.floor(Math.random() * this.Map_xmax) + 0.5;
            _y1 = Math.floor(Math.random() * this.Map_ymax) + 0.5;
        }

        let mapBlocks : boolean[][] = []; // mapBlocks[_y][_x] mapBlocks[_i][_j]
        for(let _i:number = 0;_i<this.MapYmax;_i += 1){
            mapBlocks[_i] = [];
            for(let _j:number = 0;_j<this.MapXmax;_j += 1){
                mapBlocks[_i][_j] = false;
            }
        }
        mapBlocks[Math.floor(_y0)][Math.floor(_x0)] = true;
        mapBlocks[Math.floor(_y1)][Math.floor(_x1)] = true;

        for(let i:number=0;i<this.chestboxes;i+=1){
            let _x:number = 0;_x = Math.floor(Math.random() * this.Map_xmax) + 0.5;
            let _y:number = 0;_y = Math.floor(Math.random() * this.Map_ymax) + 0.5;
            while(mapBlocks[Math.floor(_y)][Math.floor(_x)]){
                _x = Math.floor(Math.random() * this.Map_xmax) + 0.5;
                _y = Math.floor(Math.random() * this.Map_ymax) + 0.5;
            }
            mapBlocks[Math.floor(_y)][Math.floor(_x)] = true;
            //=====================================================================
            const prefab_temp_2 = cc.instantiate(this.chestWallPrefab);
            prefab_temp_2.setPosition(_x*this.blocksize_x,_y*this.blocksize_y);
            this.wallList.addChild(prefab_temp_2,1,'chest');
            console.log("chest at:",_x, _y);
        }
        
        const prefab_temp_0 = cc.instantiate(this.keyToNextLevel);
        prefab_temp_0.setPosition(_x0*this.blocksize_x,_y0*this.blocksize_y);
        this.wallList.addChild(prefab_temp_0,1,'key');
        console.log("Key at:",_x0, _y0);

        const prefab_temp_1 = cc.instantiate(this.lockToNextLevel);
        prefab_temp_1.setPosition(_x1*this.blocksize_x,_y1*this.blocksize_y);
        this.wallList.addChild(prefab_temp_1,1,'lock');
        console.log("Lock at:",_x1, _y1);
    }
    // update (dt) {}
}