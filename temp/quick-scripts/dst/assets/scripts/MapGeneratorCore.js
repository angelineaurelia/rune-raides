
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MapGeneratorCore.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67e35QjBHdNv7coHUqfA/Sf', 'MapGeneratorCore');
// scripts/MapGeneratorCore.ts

"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map_Graph = exports.mapRoomUnit = exports.Map_selected_edge = exports.Map_edge = exports.Map_node = void 0;
var Map_node = /** @class */ (function () {
    function Map_node(_ip) {
        this.disjoint_set_height = 1;
        this.disjoint_set_ptr = _ip;
    }
    return Map_node;
}()); // able to modify (have to modify related code, too)
exports.Map_node = Map_node;
var Map_edge = /** @class */ (function () {
    function Map_edge(_f, _t) {
        this.from = _f;
        this.to = _t;
        this.weight = Math.random();
    }
    return Map_edge;
}());
exports.Map_edge = Map_edge;
var Map_selected_edge = /** @class */ (function () {
    function Map_selected_edge(_f, _t) {
        this.from = _f;
        this.to = _t;
    }
    return Map_selected_edge;
}());
exports.Map_selected_edge = Map_selected_edge;
var mapRoomUnit = /** @class */ (function () {
    function mapRoomUnit(_init) {
        this.up = _init;
        this.down = _init;
        this.right = _init;
        this.left = _init;
    }
    return mapRoomUnit;
}());
exports.mapRoomUnit = mapRoomUnit;
var Map_Graph = /** @class */ (function () {
    function Map_Graph(_xmax, _ymax) {
        /*
        _blockWidth : number;
        _LineWidth : number;
        */
        this.vertexList = new Map();
        this.edgeList = [];
        this.selectedEdgeList = [];
        this.mapBlock = []; // mapBlock[_y][_x] // true -> wall
        this.ymax = _ymax;
        this.xmax = _xmax;
        //this.vertexList = new Map<number,Map_node>();
        for (var _y = 0; _y < this.ymax; _y += 1) {
            this.mapBlock[_y] = [];
            for (var _x = 0; _x < this.xmax; _x += 1) {
                this.mapBlock[_y][_x] = new mapRoomUnit(true);
            }
        }
        this.initializeGraph();
    }
    Map_Graph.prototype.disjoint_set_top = function (_ip) {
        while (true) {
            if (this.vertexList.get(_ip) === undefined) {
                return -1;
            }
            if (_ip === this.vertexList.get(_ip).disjoint_set_ptr) {
                return _ip;
            }
            _ip = this.vertexList.get(_ip).disjoint_set_ptr;
        }
    };
    Map_Graph.prototype.initializeGraph = function () {
        var totalVertex = 0;
        //initialize vertex
        for (var _x = 0; _x < this.xmax; _x += 1) {
            for (var _y = 0; _y < this.ymax; _y += 1) {
                var nodeNum = _x + _y * this.xmax;
                var nodeProperty = new Map_node(nodeNum);
                this.vertexList.set(nodeNum, nodeProperty);
                totalVertex += 1;
            }
        }
        //initialize horizontal edge
        for (var _x = 0; _x < this.xmax - 1; _x += 1) {
            for (var _y = 0; _y < this.ymax; _y += 1) {
                var nodeNum = _x + _y * this.xmax;
                if ((this.vertexList.get(nodeNum) === undefined) || (this.vertexList.get(nodeNum + 1) === undefined)) {
                    continue;
                }
                var newEdge = new Map_edge(nodeNum, nodeNum + 1);
                this.edgeList.push(newEdge);
            }
        }
        //initialize virtical edge
        for (var _x = 0; _x < this.xmax; _x += 1) {
            for (var _y = 0; _y < this.ymax - 1; _y += 1) {
                var nodeNum = _x + _y * this.xmax;
                if ((this.vertexList.get(nodeNum) === undefined) || (this.vertexList.get(nodeNum + this.xmax) === undefined)) {
                    continue;
                }
                var newEdge = new Map_edge(nodeNum, nodeNum + this.xmax);
                this.edgeList.push(newEdge);
            }
        }
        //initialize edgeList
        this.edgeList.sort(function (ipa, ipb) { return ipa.weight - ipb.weight; });
        /*for(let i:number =0;i<this.edgeList.length;i++){
            //this.edgeList[i].disjoint_set_ptr = i;//wrong
        }*/
        //
        this.calculateMinimumSpanningTree(); //totalVertex-1
        this.calculate_block();
    };
    Map_Graph.prototype.calculate_block = function () {
        for (var i = 0; i < this.selectedEdgeList.length; i++) {
            if ((this.selectedEdgeList[i].to - this.selectedEdgeList[i].from) === 1) {
                //horizontal
                var _x = this.selectedEdgeList[i].from % this.xmax;
                var _y = (this.selectedEdgeList[i].from - _x) / this.xmax;
                this.mapBlock[_y][_x].right = false;
                this.mapBlock[_y][_x + 1].left = false;
            }
            else {
                //vertical
                var _x = this.selectedEdgeList[i].from % this.xmax;
                var _y = (this.selectedEdgeList[i].from - _x) / this.xmax;
                this.mapBlock[_y][_x].down = false;
                this.mapBlock[_y + 1][_x].up = false;
            }
        }
    };
    Map_Graph.prototype.calculateMinimumSpanningTree = function () {
        for (var i = 0; i < this.edgeList.length; i++) {
            if (this.disjoint_set_top(this.edgeList[i].from) === this.disjoint_set_top(this.edgeList[i].to)) {
                continue;
            }
            var newE = new Map_selected_edge(this.edgeList[i].from, this.edgeList[i].to);
            this.selectedEdgeList.push(newE);
            var setA_id = this.disjoint_set_top(this.edgeList[i].from);
            var setB_id = this.disjoint_set_top(this.edgeList[i].to);
            if (this.vertexList.get(setA_id).disjoint_set_height === this.vertexList.get(setB_id).disjoint_set_height) {
                this.vertexList.get(setB_id).disjoint_set_ptr = setA_id;
                this.vertexList.get(setA_id).disjoint_set_height += 1;
            }
            else if (this.vertexList.get(setA_id).disjoint_set_height > this.vertexList.get(setB_id).disjoint_set_height) {
                this.vertexList.get(setB_id).disjoint_set_ptr = setA_id;
            }
            else {
                this.vertexList.get(setA_id).disjoint_set_ptr = setB_id;
            }
            /*treeEdges -= 1;
            if(treeEdges === 0){
                break;
            }*/
        }
    };
    return Map_Graph;
}());
exports.Map_Graph = Map_Graph;
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

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hcEdlbmVyYXRvckNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7RUFNRTtBQUNGOzs7Ozs7R0FNRzs7O0FBRUg7SUFHSSxrQkFBWSxHQUFVO1FBQ2xCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsZUFBQztBQUFELENBUEEsQUFPQyxJQUFBLENBQUEsb0RBQW9EO0FBUHhDLDRCQUFRO0FBUXJCO0lBSUksa0JBQVksRUFBRSxFQUFDLEVBQUU7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLDRCQUFRO0FBVXJCO0lBR0ksMkJBQVksRUFBRSxFQUFDLEVBQUU7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDTCx3QkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksOENBQWlCO0FBUTlCO0lBS0kscUJBQVksS0FBZTtRQUN2QixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQVhZLGtDQUFXO0FBYXhCO0lBV0ksbUJBQVksS0FBSyxFQUFD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SSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQW1CLEVBQUM7Z0JBQ3JHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztnQkFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFDO2FBQ3pEO2lCQUFLLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQW1CLEVBQUM7Z0JBQ3pHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQzthQUMzRDtpQkFBSTtnQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7YUFDM0Q7WUFDRDs7O2VBR0c7U0FDTjtJQUNMLENBQUM7SUFDTCxnQkFBQztBQUFELENBcEhBLEFBb0hDLElBQUE7QUFwSFksOEJBQVM7QUFxSHRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE0REU7QUFDRjs7b0NBRW9DIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbmZ1bmN0aW9uIGluaXQoKXtcbiAgICBjb25zb2xlLmxvZyhcIm15c2NyaXB0LnRzIGxpbmUgMlwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQwXCIpLmlubmVySFRNTCA9IFwiSGVsbG8gV29ybGQhXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250cm9sQnRuMFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZHJhd01hcCk7XG59XG4qL1xuLypjbGFzcyBfR3JhcGhOb2Rle1xuICAgIG5vZGVOdW1iZXIgOiBudW1iZXI7XG4gICAgZWRnZUxpc3QgOiBudW1iZXJbXTtcbiAgICBjb25zdHJ1Y3Rvcihfbm9kZU51bWJlcil7XG4gICAgICAgIHRoaXMubm9kZU51bWJlciA9IF9ub2RlTnVtYmVyO1xuICAgIH1cbn0qL1xuXG5leHBvcnQgY2xhc3MgTWFwX25vZGV7XG4gICAgZGlzam9pbnRfc2V0X3B0ciA6IG51bWJlcjtcbiAgICBkaXNqb2ludF9zZXRfaGVpZ2h0IDogbnVtYmVyXG4gICAgY29uc3RydWN0b3IoX2lwOm51bWJlcil7XG4gICAgICAgIHRoaXMuZGlzam9pbnRfc2V0X2hlaWdodCA9IDE7XG4gICAgICAgIHRoaXMuZGlzam9pbnRfc2V0X3B0ciA9IF9pcDtcbiAgICB9XG59Ly8gYWJsZSB0byBtb2RpZnkgKGhhdmUgdG8gbW9kaWZ5IHJlbGF0ZWQgY29kZSwgdG9vKVxuZXhwb3J0IGNsYXNzIE1hcF9lZGdle1xuICAgIGZyb20gOiBudW1iZXI7XG4gICAgdG8gOiBudW1iZXI7XG4gICAgd2VpZ2h0IDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKF9mLF90KXtcbiAgICAgICAgdGhpcy5mcm9tID0gX2Y7XG4gICAgICAgIHRoaXMudG8gPSBfdDtcbiAgICAgICAgdGhpcy53ZWlnaHQgPSBNYXRoLnJhbmRvbSgpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNYXBfc2VsZWN0ZWRfZWRnZXtcbiAgICBmcm9tIDogbnVtYmVyO1xuICAgIHRvIDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKF9mLF90KXtcbiAgICAgICAgdGhpcy5mcm9tID0gX2Y7XG4gICAgICAgIHRoaXMudG8gPSBfdDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgbWFwUm9vbVVuaXR7Ly8gdHJ1ZSAtPiB3YWxsXG4gICAgdXAgOiBib29sZWFuO1xuICAgIGRvd24gOiBib29sZWFuO1xuICAgIHJpZ2h0IDogYm9vbGVhbjtcbiAgICBsZWZ0IDogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihfaW5pdCA6IGJvb2xlYW4pe1xuICAgICAgICB0aGlzLnVwID0gX2luaXQ7XG4gICAgICAgIHRoaXMuZG93biA9IF9pbml0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gX2luaXQ7XG4gICAgICAgIHRoaXMubGVmdCA9IF9pbml0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hcF9HcmFwaHtcbiAgICB4bWF4IDogbnVtYmVyO1xuICAgIHltYXggOiBudW1iZXI7XG4gICAgLypcbiAgICBfYmxvY2tXaWR0aCA6IG51bWJlcjtcbiAgICBfTGluZVdpZHRoIDogbnVtYmVyO1xuICAgICovXG4gICAgdmVydGV4TGlzdCA6IE1hcDxudW1iZXIsTWFwX25vZGU+ID0gbmV3IE1hcDxudW1iZXIsTWFwX25vZGU+KCk7XG4gICAgZWRnZUxpc3QgOiBNYXBfZWRnZVtdID0gW107XG4gICAgc2VsZWN0ZWRFZGdlTGlzdCA6IE1hcF9zZWxlY3RlZF9lZGdlW10gPSBbXTtcbiAgICBtYXBCbG9jayA6IG1hcFJvb21Vbml0W11bXSA9IFtdOyAvLyBtYXBCbG9ja1tfeV1bX3hdIC8vIHRydWUgLT4gd2FsbFxuICAgIGNvbnN0cnVjdG9yKF94bWF4LF95bWF4KXtcbiAgICAgICAgdGhpcy55bWF4ID0gX3ltYXg7XG4gICAgICAgIHRoaXMueG1heCA9IF94bWF4O1xuICAgICAgICAvL3RoaXMudmVydGV4TGlzdCA9IG5ldyBNYXA8bnVtYmVyLE1hcF9ub2RlPigpO1xuICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8dGhpcy55bWF4O195ICs9IDEpe1xuICAgICAgICAgICAgdGhpcy5tYXBCbG9ja1tfeV0gPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDx0aGlzLnhtYXg7X3ggKz0gMSl7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBCbG9ja1tfeV1bX3hdID0gbmV3IG1hcFJvb21Vbml0KHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUdyYXBoKCk7XG4gICAgfVxuICAgIGRpc2pvaW50X3NldF90b3AoX2lwIDogbnVtYmVyKTogbnVtYmVye1xuICAgICAgICB3aGlsZSh0cnVlKXtcbiAgICAgICAgICAgIGlmKHRoaXMudmVydGV4TGlzdC5nZXQoX2lwKSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihfaXAgPT09IHRoaXMudmVydGV4TGlzdC5nZXQoX2lwKS5kaXNqb2ludF9zZXRfcHRyKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2lwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2lwID0gdGhpcy52ZXJ0ZXhMaXN0LmdldChfaXApLmRpc2pvaW50X3NldF9wdHI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdGlhbGl6ZUdyYXBoKCkge1xuICAgICAgICBsZXQgdG90YWxWZXJ0ZXg6bnVtYmVyID0gMDtcbiAgICAgICAgLy9pbml0aWFsaXplIHZlcnRleFxuICAgICAgICBmb3IobGV0IF94Om51bWJlciA9IDA7X3g8dGhpcy54bWF4O194ICs9IDEpe1xuICAgICAgICAgICAgZm9yKGxldCBfeTpudW1iZXIgPSAwO195PHRoaXMueW1heDtfeSArPSAxKXtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZU51bSA6IG51bWJlciA9IF94K195KnRoaXMueG1heDtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZVByb3BlcnR5IDogTWFwX25vZGUgPSBuZXcgTWFwX25vZGUobm9kZU51bSk7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhMaXN0LnNldChub2RlTnVtLG5vZGVQcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgdG90YWxWZXJ0ZXgrPTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9pbml0aWFsaXplIGhvcml6b250YWwgZWRnZVxuICAgICAgICBmb3IobGV0IF94Om51bWJlciA9IDA7X3g8dGhpcy54bWF4LTE7X3ggKz0gMSl7XG4gICAgICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8dGhpcy55bWF4O195ICs9IDEpe1xuICAgICAgICAgICAgICAgIGxldCBub2RlTnVtIDogbnVtYmVyID0gX3grX3kqdGhpcy54bWF4O1xuICAgICAgICAgICAgICAgIGlmKCh0aGlzLnZlcnRleExpc3QuZ2V0KG5vZGVOdW0pID09PSB1bmRlZmluZWQpIHx8ICh0aGlzLnZlcnRleExpc3QuZ2V0KG5vZGVOdW0rMSkgPT09IHVuZGVmaW5lZCkpe1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG5ld0VkZ2UgOiBNYXBfZWRnZSA9IG5ldyBNYXBfZWRnZShub2RlTnVtLG5vZGVOdW0rMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGdlTGlzdC5wdXNoKG5ld0VkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vaW5pdGlhbGl6ZSB2aXJ0aWNhbCBlZGdlXG4gICAgICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDx0aGlzLnhtYXg7X3ggKz0gMSl7XG4gICAgICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8dGhpcy55bWF4LTE7X3kgKz0gMSl7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGVOdW0gOiBudW1iZXIgPSBfeCtfeSp0aGlzLnhtYXg7XG4gICAgICAgICAgICAgICAgaWYoKHRoaXMudmVydGV4TGlzdC5nZXQobm9kZU51bSkgPT09IHVuZGVmaW5lZCkgfHwgKHRoaXMudmVydGV4TGlzdC5nZXQobm9kZU51bSt0aGlzLnhtYXgpID09PSB1bmRlZmluZWQpKXtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBuZXdFZGdlIDogTWFwX2VkZ2UgPSBuZXcgTWFwX2VkZ2Uobm9kZU51bSxub2RlTnVtK3RoaXMueG1heCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGdlTGlzdC5wdXNoKG5ld0VkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vaW5pdGlhbGl6ZSBlZGdlTGlzdFxuICAgICAgICB0aGlzLmVkZ2VMaXN0LnNvcnQoKGlwYSxpcGIpPT57cmV0dXJuIGlwYS53ZWlnaHQtaXBiLndlaWdodH0pO1xuICAgICAgICAvKmZvcihsZXQgaTpudW1iZXIgPTA7aTx0aGlzLmVkZ2VMaXN0Lmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgLy90aGlzLmVkZ2VMaXN0W2ldLmRpc2pvaW50X3NldF9wdHIgPSBpOy8vd3JvbmdcbiAgICAgICAgfSovXG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlTWluaW11bVNwYW5uaW5nVHJlZSgpOy8vdG90YWxWZXJ0ZXgtMVxuICAgICAgICB0aGlzLmNhbGN1bGF0ZV9ibG9jaygpO1xuICAgIH1cbiAgICBjYWxjdWxhdGVfYmxvY2soKXtcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9MDtpPHRoaXMuc2VsZWN0ZWRFZGdlTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKCh0aGlzLnNlbGVjdGVkRWRnZUxpc3RbaV0udG8tdGhpcy5zZWxlY3RlZEVkZ2VMaXN0W2ldLmZyb20pID09PSAxKXtcbiAgICAgICAgICAgICAgICAvL2hvcml6b250YWxcbiAgICAgICAgICAgICAgICB2YXIgX3ggOm51bWJlciA9IHRoaXMuc2VsZWN0ZWRFZGdlTGlzdFtpXS5mcm9tICUgdGhpcy54bWF4O1xuICAgICAgICAgICAgICAgIHZhciBfeSA6bnVtYmVyID0gKHRoaXMuc2VsZWN0ZWRFZGdlTGlzdFtpXS5mcm9tLV94KSAvIHRoaXMueG1heDtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcEJsb2NrW195XVtfeF0ucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcEJsb2NrW195XVtfeCsxXS5sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAvL3ZlcnRpY2FsXG4gICAgICAgICAgICAgICAgdmFyIF94IDpudW1iZXIgPSB0aGlzLnNlbGVjdGVkRWRnZUxpc3RbaV0uZnJvbSAlIHRoaXMueG1heDtcbiAgICAgICAgICAgICAgICB2YXIgX3kgOm51bWJlciA9ICh0aGlzLnNlbGVjdGVkRWRnZUxpc3RbaV0uZnJvbS1feCkgLyB0aGlzLnhtYXg7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBCbG9ja1tfeV1bX3hdLmRvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcEJsb2NrW195KzFdW194XS51cCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhbGN1bGF0ZU1pbmltdW1TcGFubmluZ1RyZWUoKXsvL3RyZWVFZGdlcyA6IG51bWJlclxuICAgICAgICBmb3IobGV0IGk6bnVtYmVyID0wO2k8dGhpcy5lZGdlTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMuZGlzam9pbnRfc2V0X3RvcCh0aGlzLmVkZ2VMaXN0W2ldLmZyb20pID09PSB0aGlzLmRpc2pvaW50X3NldF90b3AodGhpcy5lZGdlTGlzdFtpXS50bykpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5ld0UgOiBNYXBfc2VsZWN0ZWRfZWRnZSA9IG5ldyBNYXBfc2VsZWN0ZWRfZWRnZSh0aGlzLmVkZ2VMaXN0W2ldLmZyb20sdGhpcy5lZGdlTGlzdFtpXS50byk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRWRnZUxpc3QucHVzaChuZXdFKTtcbiAgICAgICAgICAgIGxldCBzZXRBX2lkID0gdGhpcy5kaXNqb2ludF9zZXRfdG9wKHRoaXMuZWRnZUxpc3RbaV0uZnJvbSk7XG4gICAgICAgICAgICBsZXQgc2V0Ql9pZCA9IHRoaXMuZGlzam9pbnRfc2V0X3RvcCh0aGlzLmVkZ2VMaXN0W2ldLnRvKTtcbiAgICAgICAgICAgIGlmKHRoaXMudmVydGV4TGlzdC5nZXQoc2V0QV9pZCkuZGlzam9pbnRfc2V0X2hlaWdodCA9PT0gdGhpcy52ZXJ0ZXhMaXN0LmdldChzZXRCX2lkKS5kaXNqb2ludF9zZXRfaGVpZ2h0KXtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRleExpc3QuZ2V0KHNldEJfaWQpLmRpc2pvaW50X3NldF9wdHIgPSBzZXRBX2lkO1xuICAgICAgICAgICAgICAgIHRoaXMudmVydGV4TGlzdC5nZXQoc2V0QV9pZCkuZGlzam9pbnRfc2V0X2hlaWdodCArPSAxO1xuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy52ZXJ0ZXhMaXN0LmdldChzZXRBX2lkKS5kaXNqb2ludF9zZXRfaGVpZ2h0ID4gdGhpcy52ZXJ0ZXhMaXN0LmdldChzZXRCX2lkKS5kaXNqb2ludF9zZXRfaGVpZ2h0KXtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRleExpc3QuZ2V0KHNldEJfaWQpLmRpc2pvaW50X3NldF9wdHIgPSBzZXRBX2lkO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhMaXN0LmdldChzZXRBX2lkKS5kaXNqb2ludF9zZXRfcHRyID0gc2V0Ql9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qdHJlZUVkZ2VzIC09IDE7XG4gICAgICAgICAgICBpZih0cmVlRWRnZXMgPT09IDApe1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSovXG4gICAgICAgIH1cbiAgICB9XG59XG4vKlxuZnVuY3Rpb24gZHJhd01hcCgpe1xuICAgIC8vY29uc29sZS5sb2coXCJvbkNsaWNrXCIpO1xuICAgIHZhciBtYXBTaXplID0gMTA7XG4gICAgdmFyIG15TWFwIDogTWFwX0dyYXBoID0gbmV3IE1hcF9HcmFwaChtYXBTaXplLG1hcFNpemUpO1xuICAgIHZhciBfYmxvY2tXaWR0aCA6IG51bWJlciA9IDQwO1xuICAgIHZhciBfTGluZVdpZHRoIDogbnVtYmVyID0gMjtcbiAgICBjb25zdCBteUNhbnZhcyA6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzMFwiKTtcbiAgICBjb25zdCBjdHggPSBteUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnIzAwMDAwMCc7XG4gICAgLy8gY3R4LmNsZWFyUmVjdFxuICAgIC8vIGN0eC5maWxsUmVjdFxuICAgIC8vaW5pdGlhbGl6ZSB2ZXJ0ZXhcbiAgICBjb25zb2xlLmxvZyhcIm15c2NyaXB0LnRzIGxpbmUgMTQ3XCIpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwwLDUxMiw1MTIpO1xuICAgIGZvcihsZXQgX3k6bnVtYmVyID0gMDtfeTxtYXBTaXplO195ICs9IDEpe1xuICAgICAgICBmb3IobGV0IF94Om51bWJlciA9IDA7X3g8bWFwU2l6ZTtfeCArPSAxKXtcbiAgICAgICAgICAgIGlmKG15TWFwLm1hcEJsb2NrW195XVtfeF0udXApe1xuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChfeCpfYmxvY2tXaWR0aCxfeSpfYmxvY2tXaWR0aCxfYmxvY2tXaWR0aCxfTGluZVdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKG15TWFwLm1hcEJsb2NrW195XVtfeF0ubGVmdCl7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KF94Kl9ibG9ja1dpZHRoLF95Kl9ibG9ja1dpZHRoLF9MaW5lV2lkdGgsX2Jsb2NrV2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYobXlNYXAubWFwQmxvY2tbX3ldW194XS5kb3duKXtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoX3gqX2Jsb2NrV2lkdGgsX3kqX2Jsb2NrV2lkdGgrX2Jsb2NrV2lkdGgtX0xpbmVXaWR0aCxfYmxvY2tXaWR0aCxfTGluZVdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKG15TWFwLm1hcEJsb2NrW195XVtfeF0ucmlnaHQpe1xuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChfeCpfYmxvY2tXaWR0aCtfYmxvY2tXaWR0aC1fTGluZVdpZHRoLF95Kl9ibG9ja1dpZHRoLF9MaW5lV2lkdGgsX2Jsb2NrV2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qXG4gICAgZm9yKGxldCBfeDpudW1iZXIgPSAwO194PD1tYXBTaXplO194ICs9IDEpe1xuICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8PW1hcFNpemU7X3kgKz0gMSl7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoX2Jsb2NrV2lkdGgqX3gsX2Jsb2NrV2lkdGgqX3ksX0xpbmVXaWR0aCxfTGluZVdpZHRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2luaXRpYWxpemUgaG9yaXpvbnRhbCBlZGdlXG4gICAgZm9yKGxldCBfeDpudW1iZXIgPSAtMTtfeDxtYXBTaXplO194ICs9IDEpe1xuICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8bWFwU2l6ZTtfeSArPSAxKXtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChfYmxvY2tXaWR0aCtfYmxvY2tXaWR0aCpfeCxfYmxvY2tXaWR0aCpfeSxfTGluZVdpZHRoLF9ibG9ja1dpZHRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2luaXRpYWxpemUgdmlydGljYWwgZWRnZVxuICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDxtYXBTaXplO194ICs9IDEpe1xuICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IC0xO195PG1hcFNpemU7X3kgKz0gMSl7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoX2Jsb2NrV2lkdGgqX3gsX2Jsb2NrV2lkdGgrX2Jsb2NrV2lkdGgqX3ksX2Jsb2NrV2lkdGgsX0xpbmVXaWR0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKGxldCBpOm51bWJlcj0wO2k8bXlNYXAuc2VsZWN0ZWRFZGdlTGlzdC5sZW5ndGg7aSs9MSl7XG4gICAgICAgIHZhciBfeCA6bnVtYmVyID0gbXlNYXAuc2VsZWN0ZWRFZGdlTGlzdFtpXS5mcm9tICUgbWFwU2l6ZTtcbiAgICAgICAgdmFyIF95IDpudW1iZXIgPSAobXlNYXAuc2VsZWN0ZWRFZGdlTGlzdFtpXS5mcm9tLV94KSAvIG1hcFNpemU7XG4gICAgICAgIGlmKChteU1hcC5zZWxlY3RlZEVkZ2VMaXN0W2ldLnRvLW15TWFwLnNlbGVjdGVkRWRnZUxpc3RbaV0uZnJvbSkgPT09IDEpe1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdChfYmxvY2tXaWR0aCtfYmxvY2tXaWR0aCpfeCwrX2Jsb2NrV2lkdGgqX3ksX0xpbmVXaWR0aCxfYmxvY2tXaWR0aCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdChfYmxvY2tXaWR0aCpfeCxfYmxvY2tXaWR0aCtfYmxvY2tXaWR0aCpfeSxfYmxvY2tXaWR0aCxfTGluZVdpZHRoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuKi9cbi8qXG5pbml0KCk7XG5jb25zb2xlLmxvZyhcIm15c2NyaXB0LnRzIGxpbmUgN1wiKTsqL1xuIl19