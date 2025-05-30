/*
function init(){
    console.log("myscript.ts line 2");
    document.getElementById("text0").innerHTML = "Hello World!";
    document.getElementById("controlBtn0").addEventListener('click',drawMap);
}
*/
/*class _GraphNode{
    nodeNumber : number;
    edgeList : number[];
    constructor(_nodeNumber){
        this.nodeNumber = _nodeNumber;
    }
}*/

export class Map_node{
    disjoint_set_ptr : number;
    disjoint_set_height : number
    constructor(_ip:number){
        this.disjoint_set_height = 1;
        this.disjoint_set_ptr = _ip;
    }
}// able to modify (have to modify related code, too)
export class Map_edge{
    from : number;
    to : number;
    weight : number;
    constructor(_f,_t){
        this.from = _f;
        this.to = _t;
        this.weight = Math.random();
    }
}
export class Map_selected_edge{
    from : number;
    to : number;
    constructor(_f,_t){
        this.from = _f;
        this.to = _t;
    }
}
export class mapRoomUnit{// true -> wall
    up : boolean;
    down : boolean;
    right : boolean;
    left : boolean;
    constructor(_init : boolean){
        this.up = _init;
        this.down = _init;
        this.right = _init;
        this.left = _init;
    }
}

export class Map_Graph{
    xmax : number;
    ymax : number;
    /*
    _blockWidth : number;
    _LineWidth : number;
    */
    vertexList : Map<number,Map_node> = new Map<number,Map_node>();
    edgeList : Map_edge[] = [];
    selectedEdgeList : Map_selected_edge[] = [];
    mapBlock : mapRoomUnit[][] = []; // mapBlock[_y][_x] // true -> wall
    constructor(_xmax,_ymax){
        this.ymax = _ymax;
        this.xmax = _xmax;
        //this.vertexList = new Map<number,Map_node>();
        for(let _y:number = 0;_y<this.ymax;_y += 1){
            this.mapBlock[_y] = [];
            for(let _x:number = 0;_x<this.xmax;_x += 1){
                this.mapBlock[_y][_x] = new mapRoomUnit(true);
            }
        }
        this.initializeGraph();
    }
    disjoint_set_top(_ip : number): number{
        while(true){
            if(this.vertexList.get(_ip) === undefined){
                return -1;
            }
            if(_ip === this.vertexList.get(_ip).disjoint_set_ptr){
                return _ip;
            }
            _ip = this.vertexList.get(_ip).disjoint_set_ptr;
        }
    }
    initializeGraph() {
        let totalVertex:number = 0;
        //initialize vertex
        for(let _x:number = 0;_x<this.xmax;_x += 1){
            for(let _y:number = 0;_y<this.ymax;_y += 1){
                let nodeNum : number = _x+_y*this.xmax;
                let nodeProperty : Map_node = new Map_node(nodeNum);
                this.vertexList.set(nodeNum,nodeProperty);
                totalVertex+=1;
            }
        }
        //initialize horizontal edge
        for(let _x:number = 0;_x<this.xmax-1;_x += 1){
            for(let _y:number = 0;_y<this.ymax;_y += 1){
                let nodeNum : number = _x+_y*this.xmax;
                if((this.vertexList.get(nodeNum) === undefined) || (this.vertexList.get(nodeNum+1) === undefined)){
                    continue;
                }
                let newEdge : Map_edge = new Map_edge(nodeNum,nodeNum+1);
                this.edgeList.push(newEdge);
            }
        }
        //initialize virtical edge
        for(let _x:number = 0;_x<this.xmax;_x += 1){
            for(let _y:number = 0;_y<this.ymax-1;_y += 1){
                let nodeNum : number = _x+_y*this.xmax;
                if((this.vertexList.get(nodeNum) === undefined) || (this.vertexList.get(nodeNum+this.xmax) === undefined)){
                    continue;
                }
                let newEdge : Map_edge = new Map_edge(nodeNum,nodeNum+this.xmax);
                this.edgeList.push(newEdge);
            }
        }
        //initialize edgeList
        this.edgeList.sort((ipa,ipb)=>{return ipa.weight-ipb.weight});
        /*for(let i:number =0;i<this.edgeList.length;i++){
            //this.edgeList[i].disjoint_set_ptr = i;//wrong
        }*/
        //
        this.calculateMinimumSpanningTree();//totalVertex-1
        this.calculate_block();
    }
    calculate_block(){
        for(let i:number =0;i<this.selectedEdgeList.length;i++){
            if((this.selectedEdgeList[i].to-this.selectedEdgeList[i].from) === 1){
                //horizontal
                var _x :number = this.selectedEdgeList[i].from % this.xmax;
                var _y :number = (this.selectedEdgeList[i].from-_x) / this.xmax;
                this.mapBlock[_y][_x].right = false;
                this.mapBlock[_y][_x+1].left = false;
            }else{
                //vertical
                var _x :number = this.selectedEdgeList[i].from % this.xmax;
                var _y :number = (this.selectedEdgeList[i].from-_x) / this.xmax;
                this.mapBlock[_y][_x].down = false;
                this.mapBlock[_y+1][_x].up = false;
            }
        }
    }
    calculateMinimumSpanningTree(){//treeEdges : number
        for(let i:number =0;i<this.edgeList.length;i++){
            if(this.disjoint_set_top(this.edgeList[i].from) === this.disjoint_set_top(this.edgeList[i].to)){
                continue;
            }
            let newE : Map_selected_edge = new Map_selected_edge(this.edgeList[i].from,this.edgeList[i].to);
            this.selectedEdgeList.push(newE);
            let setA_id = this.disjoint_set_top(this.edgeList[i].from);
            let setB_id = this.disjoint_set_top(this.edgeList[i].to);
            if(this.vertexList.get(setA_id).disjoint_set_height === this.vertexList.get(setB_id).disjoint_set_height){
                this.vertexList.get(setB_id).disjoint_set_ptr = setA_id;
                this.vertexList.get(setA_id).disjoint_set_height += 1;
            }else if(this.vertexList.get(setA_id).disjoint_set_height > this.vertexList.get(setB_id).disjoint_set_height){
                this.vertexList.get(setB_id).disjoint_set_ptr = setA_id;
            }else{
                this.vertexList.get(setA_id).disjoint_set_ptr = setB_id;
            }
            /*treeEdges -= 1;
            if(treeEdges === 0){
                break;
            }*/
        }
    }
}
/*
function drawMap(){
    //console.log("onClick");
    var mapSize = 10;
    var myMap : Map_Graph = new Map_Graph(mapSize,mapSize);
    var _blockWidth : number = 40;
    var _LineWidth : number = 2;
    const myCanvas : any = document.getElementById("canvas0");
    const ctx = myCanvas.getContext('2d');
    ctx.fillStyle = '#000000';
    // ctx.clearRect
    // ctx.fillRect
    //initialize vertex
    console.log("myscript.ts line 147");
    ctx.clearRect(0,0,512,512);
    for(let _y:number = 0;_y<mapSize;_y += 1){
        for(let _x:number = 0;_x<mapSize;_x += 1){
            if(myMap.mapBlock[_y][_x].up){
                ctx.fillRect(_x*_blockWidth,_y*_blockWidth,_blockWidth,_LineWidth);
            }
            if(myMap.mapBlock[_y][_x].left){
                ctx.fillRect(_x*_blockWidth,_y*_blockWidth,_LineWidth,_blockWidth);
            }
            if(myMap.mapBlock[_y][_x].down){
                ctx.fillRect(_x*_blockWidth,_y*_blockWidth+_blockWidth-_LineWidth,_blockWidth,_LineWidth);
            }
            if(myMap.mapBlock[_y][_x].right){
                ctx.fillRect(_x*_blockWidth+_blockWidth-_LineWidth,_y*_blockWidth,_LineWidth,_blockWidth);
            }
        }
    }
    /*
    for(let _x:number = 0;_x<=mapSize;_x += 1){
        for(let _y:number = 0;_y<=mapSize;_y += 1){
            ctx.fillRect(_blockWidth*_x,_blockWidth*_y,_LineWidth,_LineWidth);
        }
    }
    //initialize horizontal edge
    for(let _x:number = -1;_x<mapSize;_x += 1){
        for(let _y:number = 0;_y<mapSize;_y += 1){
            ctx.fillRect(_blockWidth+_blockWidth*_x,_blockWidth*_y,_LineWidth,_blockWidth);
        }
    }
    //initialize virtical edge
    for(let _x:number = 0;_x<mapSize;_x += 1){
        for(let _y:number = -1;_y<mapSize;_y += 1){
            ctx.fillRect(_blockWidth*_x,_blockWidth+_blockWidth*_y,_blockWidth,_LineWidth);
        }
    }
    for(let i:number=0;i<myMap.selectedEdgeList.length;i+=1){
        var _x :number = myMap.selectedEdgeList[i].from % mapSize;
        var _y :number = (myMap.selectedEdgeList[i].from-_x) / mapSize;
        if((myMap.selectedEdgeList[i].to-myMap.selectedEdgeList[i].from) === 1){
            ctx.clearRect(_blockWidth+_blockWidth*_x,+_blockWidth*_y,_LineWidth,_blockWidth);
        }else{
            ctx.clearRect(_blockWidth*_x,_blockWidth+_blockWidth*_y,_blockWidth,_LineWidth);
        }
    }
}

*/
/*
init();
console.log("myscript.ts line 7");*/
