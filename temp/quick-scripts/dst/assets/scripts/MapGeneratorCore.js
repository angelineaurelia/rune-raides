
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFwR2VuZXJhdG9yQ29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztFQU1FO0FBQ0Y7Ozs7OztHQU1HOzs7QUFFSDtJQUdJLGtCQUFZLEdBQVU7UUFDbEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO0lBQ2hDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUEsQ0FBQSxvREFBb0Q7QUFQeEMsNEJBQVE7QUFRckI7SUFJSSxrQkFBWSxFQUFFLEVBQUMsRUFBRTtRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsZUFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksNEJBQVE7QUFVckI7SUFHSSwyQkFBWSxFQUFFLEVBQUMsRUFBRTtRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSw4Q0FBaUI7QUFROUI7SUFLSSxxQkFBWSxLQUFlO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDTCxrQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksa0NBQVc7QUFheEI7SUFXSSxtQkFBWSxLQUFLLEVB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QUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBbUIsRUFBQztnQkFDckcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLENBQUM7YUFDekQ7aUJBQUssSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBbUIsRUFBQztnQkFDekcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO2FBQzNEO2lCQUFJO2dCQUNELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQzthQUMzRDtZQUNEOzs7ZUFHRztTQUNOO0lBQ0wsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FwSEEsQUFvSEMsSUFBQTtBQXBIWSw4QkFBUztBQXFIdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTRERTtBQUNGOztvQ0FFb0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5mdW5jdGlvbiBpbml0KCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIm15c2NyaXB0LnRzIGxpbmUgMlwiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dDBcIikuaW5uZXJIVE1MID0gXCJIZWxsbyBXb3JsZCFcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHJvbEJ0bjBcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRyYXdNYXApO1xyXG59XHJcbiovXHJcbi8qY2xhc3MgX0dyYXBoTm9kZXtcclxuICAgIG5vZGVOdW1iZXIgOiBudW1iZXI7XHJcbiAgICBlZGdlTGlzdCA6IG51bWJlcltdO1xyXG4gICAgY29uc3RydWN0b3IoX25vZGVOdW1iZXIpe1xyXG4gICAgICAgIHRoaXMubm9kZU51bWJlciA9IF9ub2RlTnVtYmVyO1xyXG4gICAgfVxyXG59Ki9cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXBfbm9kZXtcclxuICAgIGRpc2pvaW50X3NldF9wdHIgOiBudW1iZXI7XHJcbiAgICBkaXNqb2ludF9zZXRfaGVpZ2h0IDogbnVtYmVyXHJcbiAgICBjb25zdHJ1Y3RvcihfaXA6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLmRpc2pvaW50X3NldF9oZWlnaHQgPSAxO1xyXG4gICAgICAgIHRoaXMuZGlzam9pbnRfc2V0X3B0ciA9IF9pcDtcclxuICAgIH1cclxufS8vIGFibGUgdG8gbW9kaWZ5IChoYXZlIHRvIG1vZGlmeSByZWxhdGVkIGNvZGUsIHRvbylcclxuZXhwb3J0IGNsYXNzIE1hcF9lZGdle1xyXG4gICAgZnJvbSA6IG51bWJlcjtcclxuICAgIHRvIDogbnVtYmVyO1xyXG4gICAgd2VpZ2h0IDogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoX2YsX3Qpe1xyXG4gICAgICAgIHRoaXMuZnJvbSA9IF9mO1xyXG4gICAgICAgIHRoaXMudG8gPSBfdDtcclxuICAgICAgICB0aGlzLndlaWdodCA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1hcF9zZWxlY3RlZF9lZGdle1xyXG4gICAgZnJvbSA6IG51bWJlcjtcclxuICAgIHRvIDogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoX2YsX3Qpe1xyXG4gICAgICAgIHRoaXMuZnJvbSA9IF9mO1xyXG4gICAgICAgIHRoaXMudG8gPSBfdDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgbWFwUm9vbVVuaXR7Ly8gdHJ1ZSAtPiB3YWxsXHJcbiAgICB1cCA6IGJvb2xlYW47XHJcbiAgICBkb3duIDogYm9vbGVhbjtcclxuICAgIHJpZ2h0IDogYm9vbGVhbjtcclxuICAgIGxlZnQgOiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoX2luaXQgOiBib29sZWFuKXtcclxuICAgICAgICB0aGlzLnVwID0gX2luaXQ7XHJcbiAgICAgICAgdGhpcy5kb3duID0gX2luaXQ7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IF9pbml0O1xyXG4gICAgICAgIHRoaXMubGVmdCA9IF9pbml0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWFwX0dyYXBoe1xyXG4gICAgeG1heCA6IG51bWJlcjtcclxuICAgIHltYXggOiBudW1iZXI7XHJcbiAgICAvKlxyXG4gICAgX2Jsb2NrV2lkdGggOiBudW1iZXI7XHJcbiAgICBfTGluZVdpZHRoIDogbnVtYmVyO1xyXG4gICAgKi9cclxuICAgIHZlcnRleExpc3QgOiBNYXA8bnVtYmVyLE1hcF9ub2RlPiA9IG5ldyBNYXA8bnVtYmVyLE1hcF9ub2RlPigpO1xyXG4gICAgZWRnZUxpc3QgOiBNYXBfZWRnZVtdID0gW107XHJcbiAgICBzZWxlY3RlZEVkZ2VMaXN0IDogTWFwX3NlbGVjdGVkX2VkZ2VbXSA9IFtdO1xyXG4gICAgbWFwQmxvY2sgOiBtYXBSb29tVW5pdFtdW10gPSBbXTsgLy8gbWFwQmxvY2tbX3ldW194XSAvLyB0cnVlIC0+IHdhbGxcclxuICAgIGNvbnN0cnVjdG9yKF94bWF4LF95bWF4KXtcclxuICAgICAgICB0aGlzLnltYXggPSBfeW1heDtcclxuICAgICAgICB0aGlzLnhtYXggPSBfeG1heDtcclxuICAgICAgICAvL3RoaXMudmVydGV4TGlzdCA9IG5ldyBNYXA8bnVtYmVyLE1hcF9ub2RlPigpO1xyXG4gICAgICAgIGZvcihsZXQgX3k6bnVtYmVyID0gMDtfeTx0aGlzLnltYXg7X3kgKz0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMubWFwQmxvY2tbX3ldID0gW107XHJcbiAgICAgICAgICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDx0aGlzLnhtYXg7X3ggKz0gMSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcEJsb2NrW195XVtfeF0gPSBuZXcgbWFwUm9vbVVuaXQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplR3JhcGgoKTtcclxuICAgIH1cclxuICAgIGRpc2pvaW50X3NldF90b3AoX2lwIDogbnVtYmVyKTogbnVtYmVye1xyXG4gICAgICAgIHdoaWxlKHRydWUpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnZlcnRleExpc3QuZ2V0KF9pcCkgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoX2lwID09PSB0aGlzLnZlcnRleExpc3QuZ2V0KF9pcCkuZGlzam9pbnRfc2V0X3B0cil7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2lwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF9pcCA9IHRoaXMudmVydGV4TGlzdC5nZXQoX2lwKS5kaXNqb2ludF9zZXRfcHRyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGluaXRpYWxpemVHcmFwaCgpIHtcclxuICAgICAgICBsZXQgdG90YWxWZXJ0ZXg6bnVtYmVyID0gMDtcclxuICAgICAgICAvL2luaXRpYWxpemUgdmVydGV4XHJcbiAgICAgICAgZm9yKGxldCBfeDpudW1iZXIgPSAwO194PHRoaXMueG1heDtfeCArPSAxKXtcclxuICAgICAgICAgICAgZm9yKGxldCBfeTpudW1iZXIgPSAwO195PHRoaXMueW1heDtfeSArPSAxKXtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlTnVtIDogbnVtYmVyID0gX3grX3kqdGhpcy54bWF4O1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGVQcm9wZXJ0eSA6IE1hcF9ub2RlID0gbmV3IE1hcF9ub2RlKG5vZGVOdW0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhMaXN0LnNldChub2RlTnVtLG5vZGVQcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFZlcnRleCs9MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2luaXRpYWxpemUgaG9yaXpvbnRhbCBlZGdlXHJcbiAgICAgICAgZm9yKGxldCBfeDpudW1iZXIgPSAwO194PHRoaXMueG1heC0xO194ICs9IDEpe1xyXG4gICAgICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8dGhpcy55bWF4O195ICs9IDEpe1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGVOdW0gOiBudW1iZXIgPSBfeCtfeSp0aGlzLnhtYXg7XHJcbiAgICAgICAgICAgICAgICBpZigodGhpcy52ZXJ0ZXhMaXN0LmdldChub2RlTnVtKSA9PT0gdW5kZWZpbmVkKSB8fCAodGhpcy52ZXJ0ZXhMaXN0LmdldChub2RlTnVtKzEpID09PSB1bmRlZmluZWQpKXtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBuZXdFZGdlIDogTWFwX2VkZ2UgPSBuZXcgTWFwX2VkZ2Uobm9kZU51bSxub2RlTnVtKzEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGdlTGlzdC5wdXNoKG5ld0VkZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vaW5pdGlhbGl6ZSB2aXJ0aWNhbCBlZGdlXHJcbiAgICAgICAgZm9yKGxldCBfeDpudW1iZXIgPSAwO194PHRoaXMueG1heDtfeCArPSAxKXtcclxuICAgICAgICAgICAgZm9yKGxldCBfeTpudW1iZXIgPSAwO195PHRoaXMueW1heC0xO195ICs9IDEpe1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGVOdW0gOiBudW1iZXIgPSBfeCtfeSp0aGlzLnhtYXg7XHJcbiAgICAgICAgICAgICAgICBpZigodGhpcy52ZXJ0ZXhMaXN0LmdldChub2RlTnVtKSA9PT0gdW5kZWZpbmVkKSB8fCAodGhpcy52ZXJ0ZXhMaXN0LmdldChub2RlTnVtK3RoaXMueG1heCkgPT09IHVuZGVmaW5lZCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0VkZ2UgOiBNYXBfZWRnZSA9IG5ldyBNYXBfZWRnZShub2RlTnVtLG5vZGVOdW0rdGhpcy54bWF4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRnZUxpc3QucHVzaChuZXdFZGdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2luaXRpYWxpemUgZWRnZUxpc3RcclxuICAgICAgICB0aGlzLmVkZ2VMaXN0LnNvcnQoKGlwYSxpcGIpPT57cmV0dXJuIGlwYS53ZWlnaHQtaXBiLndlaWdodH0pO1xyXG4gICAgICAgIC8qZm9yKGxldCBpOm51bWJlciA9MDtpPHRoaXMuZWRnZUxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIC8vdGhpcy5lZGdlTGlzdFtpXS5kaXNqb2ludF9zZXRfcHRyID0gaTsvL3dyb25nXHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZU1pbmltdW1TcGFubmluZ1RyZWUoKTsvL3RvdGFsVmVydGV4LTFcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZV9ibG9jaygpO1xyXG4gICAgfVxyXG4gICAgY2FsY3VsYXRlX2Jsb2NrKCl7XHJcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9MDtpPHRoaXMuc2VsZWN0ZWRFZGdlTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYoKHRoaXMuc2VsZWN0ZWRFZGdlTGlzdFtpXS50by10aGlzLnNlbGVjdGVkRWRnZUxpc3RbaV0uZnJvbSkgPT09IDEpe1xyXG4gICAgICAgICAgICAgICAgLy9ob3Jpem9udGFsXHJcbiAgICAgICAgICAgICAgICB2YXIgX3ggOm51bWJlciA9IHRoaXMuc2VsZWN0ZWRFZGdlTGlzdFtpXS5mcm9tICUgdGhpcy54bWF4O1xyXG4gICAgICAgICAgICAgICAgdmFyIF95IDpudW1iZXIgPSAodGhpcy5zZWxlY3RlZEVkZ2VMaXN0W2ldLmZyb20tX3gpIC8gdGhpcy54bWF4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBCbG9ja1tfeV1bX3hdLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcEJsb2NrW195XVtfeCsxXS5sZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy92ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgdmFyIF94IDpudW1iZXIgPSB0aGlzLnNlbGVjdGVkRWRnZUxpc3RbaV0uZnJvbSAlIHRoaXMueG1heDtcclxuICAgICAgICAgICAgICAgIHZhciBfeSA6bnVtYmVyID0gKHRoaXMuc2VsZWN0ZWRFZGdlTGlzdFtpXS5mcm9tLV94KSAvIHRoaXMueG1heDtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFwQmxvY2tbX3ldW194XS5kb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcEJsb2NrW195KzFdW194XS51cCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FsY3VsYXRlTWluaW11bVNwYW5uaW5nVHJlZSgpey8vdHJlZUVkZ2VzIDogbnVtYmVyXHJcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9MDtpPHRoaXMuZWRnZUxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZGlzam9pbnRfc2V0X3RvcCh0aGlzLmVkZ2VMaXN0W2ldLmZyb20pID09PSB0aGlzLmRpc2pvaW50X3NldF90b3AodGhpcy5lZGdlTGlzdFtpXS50bykpe1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG5ld0UgOiBNYXBfc2VsZWN0ZWRfZWRnZSA9IG5ldyBNYXBfc2VsZWN0ZWRfZWRnZSh0aGlzLmVkZ2VMaXN0W2ldLmZyb20sdGhpcy5lZGdlTGlzdFtpXS50byk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRFZGdlTGlzdC5wdXNoKG5ld0UpO1xyXG4gICAgICAgICAgICBsZXQgc2V0QV9pZCA9IHRoaXMuZGlzam9pbnRfc2V0X3RvcCh0aGlzLmVkZ2VMaXN0W2ldLmZyb20pO1xyXG4gICAgICAgICAgICBsZXQgc2V0Ql9pZCA9IHRoaXMuZGlzam9pbnRfc2V0X3RvcCh0aGlzLmVkZ2VMaXN0W2ldLnRvKTtcclxuICAgICAgICAgICAgaWYodGhpcy52ZXJ0ZXhMaXN0LmdldChzZXRBX2lkKS5kaXNqb2ludF9zZXRfaGVpZ2h0ID09PSB0aGlzLnZlcnRleExpc3QuZ2V0KHNldEJfaWQpLmRpc2pvaW50X3NldF9oZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhMaXN0LmdldChzZXRCX2lkKS5kaXNqb2ludF9zZXRfcHRyID0gc2V0QV9pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVydGV4TGlzdC5nZXQoc2V0QV9pZCkuZGlzam9pbnRfc2V0X2hlaWdodCArPSAxO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnZlcnRleExpc3QuZ2V0KHNldEFfaWQpLmRpc2pvaW50X3NldF9oZWlnaHQgPiB0aGlzLnZlcnRleExpc3QuZ2V0KHNldEJfaWQpLmRpc2pvaW50X3NldF9oZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhMaXN0LmdldChzZXRCX2lkKS5kaXNqb2ludF9zZXRfcHRyID0gc2V0QV9pZDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRleExpc3QuZ2V0KHNldEFfaWQpLmRpc2pvaW50X3NldF9wdHIgPSBzZXRCX2lkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qdHJlZUVkZ2VzIC09IDE7XHJcbiAgICAgICAgICAgIGlmKHRyZWVFZGdlcyA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qXHJcbmZ1bmN0aW9uIGRyYXdNYXAoKXtcclxuICAgIC8vY29uc29sZS5sb2coXCJvbkNsaWNrXCIpO1xyXG4gICAgdmFyIG1hcFNpemUgPSAxMDtcclxuICAgIHZhciBteU1hcCA6IE1hcF9HcmFwaCA9IG5ldyBNYXBfR3JhcGgobWFwU2l6ZSxtYXBTaXplKTtcclxuICAgIHZhciBfYmxvY2tXaWR0aCA6IG51bWJlciA9IDQwO1xyXG4gICAgdmFyIF9MaW5lV2lkdGggOiBudW1iZXIgPSAyO1xyXG4gICAgY29uc3QgbXlDYW52YXMgOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhczBcIik7XHJcbiAgICBjb25zdCBjdHggPSBteUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwMDAwJztcclxuICAgIC8vIGN0eC5jbGVhclJlY3RcclxuICAgIC8vIGN0eC5maWxsUmVjdFxyXG4gICAgLy9pbml0aWFsaXplIHZlcnRleFxyXG4gICAgY29uc29sZS5sb2coXCJteXNjcmlwdC50cyBsaW5lIDE0N1wiKTtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwwLDUxMiw1MTIpO1xyXG4gICAgZm9yKGxldCBfeTpudW1iZXIgPSAwO195PG1hcFNpemU7X3kgKz0gMSl7XHJcbiAgICAgICAgZm9yKGxldCBfeDpudW1iZXIgPSAwO194PG1hcFNpemU7X3ggKz0gMSl7XHJcbiAgICAgICAgICAgIGlmKG15TWFwLm1hcEJsb2NrW195XVtfeF0udXApe1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KF94Kl9ibG9ja1dpZHRoLF95Kl9ibG9ja1dpZHRoLF9ibG9ja1dpZHRoLF9MaW5lV2lkdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG15TWFwLm1hcEJsb2NrW195XVtfeF0ubGVmdCl7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoX3gqX2Jsb2NrV2lkdGgsX3kqX2Jsb2NrV2lkdGgsX0xpbmVXaWR0aCxfYmxvY2tXaWR0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYobXlNYXAubWFwQmxvY2tbX3ldW194XS5kb3duKXtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChfeCpfYmxvY2tXaWR0aCxfeSpfYmxvY2tXaWR0aCtfYmxvY2tXaWR0aC1fTGluZVdpZHRoLF9ibG9ja1dpZHRoLF9MaW5lV2lkdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG15TWFwLm1hcEJsb2NrW195XVtfeF0ucmlnaHQpe1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KF94Kl9ibG9ja1dpZHRoK19ibG9ja1dpZHRoLV9MaW5lV2lkdGgsX3kqX2Jsb2NrV2lkdGgsX0xpbmVXaWR0aCxfYmxvY2tXaWR0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAgZm9yKGxldCBfeDpudW1iZXIgPSAwO194PD1tYXBTaXplO194ICs9IDEpe1xyXG4gICAgICAgIGZvcihsZXQgX3k6bnVtYmVyID0gMDtfeTw9bWFwU2l6ZTtfeSArPSAxKXtcclxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KF9ibG9ja1dpZHRoKl94LF9ibG9ja1dpZHRoKl95LF9MaW5lV2lkdGgsX0xpbmVXaWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9pbml0aWFsaXplIGhvcml6b250YWwgZWRnZVxyXG4gICAgZm9yKGxldCBfeDpudW1iZXIgPSAtMTtfeDxtYXBTaXplO194ICs9IDEpe1xyXG4gICAgICAgIGZvcihsZXQgX3k6bnVtYmVyID0gMDtfeTxtYXBTaXplO195ICs9IDEpe1xyXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoX2Jsb2NrV2lkdGgrX2Jsb2NrV2lkdGgqX3gsX2Jsb2NrV2lkdGgqX3ksX0xpbmVXaWR0aCxfYmxvY2tXaWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9pbml0aWFsaXplIHZpcnRpY2FsIGVkZ2VcclxuICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDxtYXBTaXplO194ICs9IDEpe1xyXG4gICAgICAgIGZvcihsZXQgX3k6bnVtYmVyID0gLTE7X3k8bWFwU2l6ZTtfeSArPSAxKXtcclxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KF9ibG9ja1dpZHRoKl94LF9ibG9ja1dpZHRoK19ibG9ja1dpZHRoKl95LF9ibG9ja1dpZHRoLF9MaW5lV2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvcihsZXQgaTpudW1iZXI9MDtpPG15TWFwLnNlbGVjdGVkRWRnZUxpc3QubGVuZ3RoO2krPTEpe1xyXG4gICAgICAgIHZhciBfeCA6bnVtYmVyID0gbXlNYXAuc2VsZWN0ZWRFZGdlTGlzdFtpXS5mcm9tICUgbWFwU2l6ZTtcclxuICAgICAgICB2YXIgX3kgOm51bWJlciA9IChteU1hcC5zZWxlY3RlZEVkZ2VMaXN0W2ldLmZyb20tX3gpIC8gbWFwU2l6ZTtcclxuICAgICAgICBpZigobXlNYXAuc2VsZWN0ZWRFZGdlTGlzdFtpXS50by1teU1hcC5zZWxlY3RlZEVkZ2VMaXN0W2ldLmZyb20pID09PSAxKXtcclxuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdChfYmxvY2tXaWR0aCtfYmxvY2tXaWR0aCpfeCwrX2Jsb2NrV2lkdGgqX3ksX0xpbmVXaWR0aCxfYmxvY2tXaWR0aCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoX2Jsb2NrV2lkdGgqX3gsX2Jsb2NrV2lkdGgrX2Jsb2NrV2lkdGgqX3ksX2Jsb2NrV2lkdGgsX0xpbmVXaWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4qL1xyXG4vKlxyXG5pbml0KCk7XHJcbmNvbnNvbGUubG9nKFwibXlzY3JpcHQudHMgbGluZSA3XCIpOyovXHJcbiJdfQ==