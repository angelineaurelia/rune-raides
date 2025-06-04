
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '89a10c6NgNMSaSJuLQEf/RT', 'GameManager');
// scripts/GameManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = null;
        _this.LevelLabel = null;
        _this.maxhp = 10;
        _this.player = null;
        _this.VolumnValue = null;
        _this.Level = 1;
        return _this;
    }
    GameManager.prototype.onLoad = function () {
        var pauseBtnNode = cc.find("Canvas/Main Camera/UI/Pause");
        if (pauseBtnNode) {
            var PauseButton = new cc.Component.EventHandler();
            PauseButton.target = this.node;
            PauseButton.component = "GameManager";
            PauseButton.handler = "PauseGame";
            pauseBtnNode.getComponent(cc.Button).clickEvents.push(PauseButton);
        }
        else {
            cc.error("Pause 按鈕節點找不到，請檢查 Canvas/Main Camera/UI/Pause 是否存在！");
        }
        // Initialize the level label
        this.LevelLabel = cc.find("Canvas/Main Camera/UI/Level").getComponent(cc.Label);
        if (this.LevelLabel)
            this.LevelLabel.string = "Level: " + this.Level;
        else
            cc.error("Level label not found");
        this.player = cc.find("Canvas/MapManager/Actors/Player");
        //assign blank space for next level
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    GameManager.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    GameManager.prototype.onKeyDown = function (event) {
        if (event.keyCode === cc.macro.KEY.space) {
            this.GoNextLevel();
        }
    };
    GameManager.prototype.start = function () {
        cc.director.getCollisionManager().enabled = true;
        var savedVolumn = cc.sys.localStorage.getItem("VolumnValue");
        if (savedVolumn !== null)
            this.VolumnValue = Number(savedVolumn);
        else
            this.VolumnValue = 0.5;
        cc.audioEngine.setEffectsVolume(this.VolumnValue);
        cc.audioEngine.setMusicVolume(this.VolumnValue);
        this.playMusic();
        this.startGame();
    };
    GameManager.prototype.PauseGame = function () {
        var _this = this;
        console.log("Pause prefab load");
        //Pausesetting is a prefab
        cc.resources.load("prefabs/PauseSetting", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load PauseSetting prefab:", err);
                return;
            }
            var PauseNode = cc.instantiate(prefab);
            var Canvas = cc.find("Canvas");
            Canvas.addChild(PauseNode);
            PauseNode.name = "PauseSetting";
            var cameraNode = cc.find("Canvas/Main Camera");
            if (cameraNode) {
                var worldPos = cameraNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
                var localPos = Canvas.convertToNodeSpaceAR(worldPos);
                PauseNode.setPosition(localPos);
            }
            else {
                cc.warn("找不到 Main Camera，使用預設位置 (0, 0)");
                PauseNode.setPosition(0, 0);
            }
            PauseNode.scaleX = 1;
            PauseNode.scaleY = 1;
            //Pause the game，停止鍵盤事件
            cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, _this.onKeyDown, _this);
            cc.director.getScheduler().setTimeScale(0);
            cc.director.getPhysicsManager().enabled = false;
            var Canvas = cc.find("Canvas");
            _this.PauseAllAnimation(Canvas);
            _this.initPause();
        });
        console.log("Pause prefab load...");
    };
    GameManager.prototype.initPause = function () {
        //Resume button
        var ResumeButton = new cc.Component.EventHandler();
        ResumeButton.target = this.node;
        ResumeButton.component = "GameManager";
        ResumeButton.handler = "ResumeGame";
        cc.find("Canvas/PauseSetting/Resume").getComponent(cc.Button).clickEvents.push(ResumeButton);
        //Volumn slider
        var VolumnSlider = cc.find("Canvas/PauseSetting/Volumn/VolumnSlider").getComponent(cc.Slider);
        var savedVolumn = cc.sys.localStorage.getItem("VolumnValue");
        if (savedVolumn !== null)
            VolumnSlider.progress = Number(savedVolumn);
        else
            VolumnSlider.progress = 0.5;
        VolumnSlider.node.on('slide', this.onVolumnChange, this);
        //Restart button
        var RestartButton = new cc.Component.EventHandler();
        RestartButton.target = this.node;
        RestartButton.component = "GameManager";
        RestartButton.handler = "RestartGame";
        cc.find("Canvas/PauseSetting/Restart").getComponent(cc.Button).clickEvents.push(RestartButton);
        //
        var DescButton = new cc.Component.EventHandler();
        DescButton.target = this.node;
        DescButton.component = "GameManager";
        DescButton.handler = "showDesc";
        cc.find("Canvas/PauseSetting/How").getComponent(cc.Button).clickEvents.push(DescButton);
        var Desc = cc.find("Canvas/PauseSetting/Description");
        Desc.active = false;
        var ExitDescButton = new cc.Component.EventHandler();
        ExitDescButton.target = this.node;
        ExitDescButton.component = "GameManager";
        ExitDescButton.handler = "HideDesc";
        cc.find("Canvas/PauseSetting/Description/Exit").getComponent(cc.Button).clickEvents.push(ExitDescButton);
    };
    GameManager.prototype.HideDesc = function () {
        var Desc = cc.find("Canvas/PauseSetting/Description");
        Desc.active = false;
    };
    GameManager.prototype.showDesc = function () {
        var Desc = cc.find("Canvas/PauseSetting/Description");
        Desc.active = true;
    };
    GameManager.prototype.RestartGame = function () {
        cc.director.getScheduler().setTimeScale(1);
        cc.director.getPhysicsManager().enabled = true;
        var Canvas = cc.find("Canvas");
        this.ResumeAllAnimation(Canvas);
        cc.director.loadScene("Loading", function () {
            var loadingManager = cc.find("Canvas/LoadingManager").getComponent("LoadingManager");
            loadingManager.startLoading("menu");
        });
        //Destroy Pausetting node if it exists
        var PauseSettingNode = cc.find("Canvas/Pausetting");
        if (PauseSettingNode)
            PauseSettingNode.destroy();
        else
            cc.error("PauseSetting node not found");
    };
    GameManager.prototype.ResumeGame = function () {
        var PauseSettingNode = cc.find("Canvas/PauseSetting");
        if (PauseSettingNode)
            PauseSettingNode.destroy();
        else
            cc.error("PauseSetting node not found");
        //Resume the game
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.director.getScheduler().setTimeScale(1);
        cc.director.getPhysicsManager().enabled = true;
        var Canvas = cc.find("Canvas");
        this.ResumeAllAnimation(Canvas);
    };
    GameManager.prototype.onVolumnChange = function (slider) {
        cc.audioEngine.setMusicVolume(slider.progress); // 0~1
        cc.audioEngine.setEffectsVolume(slider.progress);
        this.VolumnValue = slider.progress;
        cc.sys.localStorage.setItem("VolumnValue", this.VolumnValue.toString());
    };
    GameManager.prototype.PauseAllAnimation = function (node) {
        var anims = node.getComponentsInChildren(cc.Animation);
        for (var _i = 0, anims_1 = anims; _i < anims_1.length; _i++) {
            var anim = anims_1[_i];
            if (anim)
                anim.pause();
            else
                cc.error("Animation component not found on node:", node.name);
        }
        var children = node.children;
        for (var _a = 0, children_1 = children; _a < children_1.length; _a++) {
            var child = children_1[_a];
            this.PauseAllAnimation(child);
        }
    };
    GameManager.prototype.ResumeAllAnimation = function (node) {
        var anims = node.getComponentsInChildren(cc.Animation);
        for (var _i = 0, anims_2 = anims; _i < anims_2.length; _i++) {
            var anim = anims_2[_i];
            if (anim)
                anim.resume();
            else
                cc.error("Animation component not found on node:", node.name);
        }
        var children = node.children;
        for (var _a = 0, children_2 = children; _a < children_2.length; _a++) {
            var child = children_2[_a];
            this.ResumeAllAnimation(child);
        }
    };
    GameManager.prototype.playMusic = function () {
        if (this.bgm)
            cc.audioEngine.playMusic(this.bgm, true);
        else
            cc.error("BGM not assigned!");
    };
    GameManager.prototype.pauseMusic = function () {
        cc.audioEngine.pauseMusic();
    };
    GameManager.prototype.resumeMusic = function () {
        cc.audioEngine.resumeMusic();
    };
    GameManager.prototype.startGame = function () {
        //Initialize the game state
        this.Level = 1;
        if (this.LevelLabel)
            this.LevelLabel.string = "Level: " + this.Level;
        else
            cc.error("Level Label not found");
        //set player position
        this.player.getComponent("Player").SetPlayer(this.Level);
        //set Map
        var GenMap = cc.find("GameManager").getComponent("MapGenerator");
        GenMap.GeneratorMap();
        //set monster
        var MonsterMgr = cc.find("Canvas/MapManager/MonsterManager").getComponent("MonsterManager");
        MonsterMgr.SetMonster(this.Level);
    };
    GameManager.prototype.GoNextLevel = function () {
        this.Level++;
        if (this.LevelLabel)
            this.LevelLabel.string = "Level: " + this.Level;
        else
            cc.error("Level label not found");
        // regenate the map
        var MapGenerator = cc.find("GameManager").getComponent("MapGenerator");
        if (MapGenerator)
            MapGenerator.regenerateMap(this.Level);
        else
            cc.error("MapGenerator component not found");
        //reset player position
        if (this.player)
            this.player.getComponent("Player").SetPlayer(this.Level);
        else
            cc.error("Player component not found");
        //reset monster
        var MonsterMgr = cc.find("Canvas/MapManager/MonsterManager").getComponent("MonsterManager");
        MonsterMgr.SetMonster(this.Level);
        //reset UI
        //隨著level 提升 改變視窗大小
        var camera = cc.find("Canvas/Main Camera").getComponent(cc.Camera);
        camera.zoomRatio = camera.zoomRatio * 0.9;
        //視窗改變 UI 也要改變
        var UI = cc.find("Canvas/Main Camera/UI");
        if (UI) {
            UI.setPosition(0, 0);
            UI.scaleX = 1 / camera.zoomRatio;
            UI.scaleY = 1 / camera.zoomRatio;
        }
        else
            console.log("UI not found");
    };
    GameManager.prototype.GameOver = function () {
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], GameManager.prototype, "bgm", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "LevelLabel", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUF1UEM7UUFyUFUsU0FBRyxHQUFpQixJQUFJLENBQUM7UUFHekIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFM0IsV0FBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBNk83QixDQUFDO0lBM09HLDRCQUFNLEdBQU47UUFDSSxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDMUQsSUFBSSxZQUFZLEVBQUU7WUFDZCxJQUFJLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEQsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQy9CLFdBQVcsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1lBQ3RDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1lBQ2xDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEU7YUFBTTtZQUNILEVBQUUsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztTQUNuRTtRQUNELDZCQUE2QjtRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFB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a0JBQUM7Q0F2UEQsQUF1UEMsQ0F2UHdDLEVBQUUsQ0FBQyxTQUFTLEdBdVBwRDtrQkF2UG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgTG9hZGluZ01hbmFnZXIgZnJvbSBcIi4vTWVudS9Mb2FkaW5nTWFuYWdlclwiO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXHJcbiAgICBwdWJsaWMgYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHB1YmxpYyBMZXZlbExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtYXhocDogbnVtYmVyID0gMTA7XHJcbiAgICBwcml2YXRlIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgVm9sdW1uVmFsdWUgOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHVibGljIExldmVsOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIGxldCBwYXVzZUJ0bk5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1BhdXNlXCIpOyBcclxuICAgICAgICBpZiAocGF1c2VCdG5Ob2RlKSB7XHJcbiAgICAgICAgICAgIGxldCBQYXVzZUJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIFBhdXNlQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgUGF1c2VCdXR0b24uY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xyXG4gICAgICAgICAgICBQYXVzZUJ1dHRvbi5oYW5kbGVyID0gXCJQYXVzZUdhbWVcIjtcclxuICAgICAgICAgICAgcGF1c2VCdG5Ob2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goUGF1c2VCdXR0b24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwiUGF1c2Ug5oyJ6YiV56+A6bue5om+5LiN5Yiw77yM6KuL5qqi5p+lIENhbnZhcy9NYWluIENhbWVyYS9VSS9QYXVzZSDmmK/lkKblrZjlnKjvvIFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIGxldmVsIGxhYmVsXHJcbiAgICAgICAgdGhpcy5MZXZlbExhYmVsID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9MZXZlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIGlmICh0aGlzLkxldmVsTGFiZWwpIHRoaXMuTGV2ZWxMYWJlbC5zdHJpbmcgPSBcIkxldmVsOiBcIiArIHRoaXMuTGV2ZWw7XHJcbiAgICAgICAgZWxzZSBjYy5lcnJvcihcIkxldmVsIGxhYmVsIG5vdCBmb3VuZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvQWN0b3JzL1BsYXllclwiKTtcclxuXHJcbiAgICAgICAgLy9hc3NpZ24gYmxhbmsgc3BhY2UgZm9yIG5leHQgbGV2ZWxcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLnNwYWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuR29OZXh0TGV2ZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBzYXZlZFZvbHVtbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlZvbHVtblZhbHVlXCIpO1xyXG4gICAgICAgIGlmIChzYXZlZFZvbHVtbiE9PW51bGwpIHRoaXMuVm9sdW1uVmFsdWUgPSBOdW1iZXIoc2F2ZWRWb2x1bW4pO1xyXG4gICAgICAgIGVsc2UgdGhpcy5Wb2x1bW5WYWx1ZSA9IDAuNTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKHRoaXMuVm9sdW1uVmFsdWUpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHRoaXMuVm9sdW1uVmFsdWUpO1xyXG4gICAgICAgIHRoaXMucGxheU11c2ljKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgUGF1c2VHYW1lKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGF1c2UgcHJlZmFiIGxvYWRcIik7XHJcbiAgICAgICAgLy9QYXVzZXNldHRpbmcgaXMgYSBwcmVmYWJcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvUGF1c2VTZXR0aW5nXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgUGF1c2VTZXR0aW5nIHByZWZhYjpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgUGF1c2VOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgY29uc3QgQ2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICAgICAgQ2FudmFzLmFkZENoaWxkKFBhdXNlTm9kZSk7XHJcbiAgICAgICAgICAgIFBhdXNlTm9kZS5uYW1lID0gXCJQYXVzZVNldHRpbmdcIjtcclxuXHJcbiAgICAgICAgICAgIGxldCBjYW1lcmFOb2RlID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYVwiKTtcclxuICAgICAgICAgICAgaWYgKGNhbWVyYU5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCB3b3JsZFBvcyA9IGNhbWVyYU5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jYWxQb3MgPSBDYW52YXMuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgICAgICAgICAgUGF1c2VOb2RlLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLndhcm4oXCLmib7kuI3liLAgTWFpbiBDYW1lcmHvvIzkvb/nlKjpoJDoqK3kvY3nva4gKDAsIDApXCIpO1xyXG4gICAgICAgICAgICAgICAgUGF1c2VOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBQYXVzZU5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICAgICAgUGF1c2VOb2RlLnNjYWxlWSA9IDE7XHJcbiAgICAgICAgICAgIC8vUGF1c2UgdGhlIGdhbWXvvIzlgZzmraLpjbXnm6Tkuovku7ZcclxuICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5zZXRUaW1lU2NhbGUoMCk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgQ2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICAgICAgdGhpcy5QYXVzZUFsbEFuaW1hdGlvbihDYW52YXMpOyBcclxuICAgICAgICAgICAgdGhpcy5pbml0UGF1c2UoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGF1c2UgcHJlZmFiIGxvYWQuLi5cIik7XHJcblxyXG4gICAgfVxyXG4gICAgaW5pdFBhdXNlKCkge1xyXG4gICAgICAgIC8vUmVzdW1lIGJ1dHRvblxyXG4gICAgICAgIGxldCBSZXN1bWVCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIFJlc3VtZUJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgUmVzdW1lQnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICBSZXN1bWVCdXR0b24uaGFuZGxlciA9IFwiUmVzdW1lR2FtZVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL1Jlc3VtZVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKFJlc3VtZUJ1dHRvbik7XHJcbiAgICAgICAgLy9Wb2x1bW4gc2xpZGVyXHJcbiAgICAgICAgbGV0IFZvbHVtblNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL1ZvbHVtbi9Wb2x1bW5TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XHJcbiAgICAgICAgbGV0IHNhdmVkVm9sdW1uID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVm9sdW1uVmFsdWVcIik7XHJcbiAgICAgICAgaWYgKHNhdmVkVm9sdW1uICE9PSBudWxsKSBWb2x1bW5TbGlkZXIucHJvZ3Jlc3M9IE51bWJlcihzYXZlZFZvbHVtbik7XHJcbiAgICAgICAgZWxzZSBWb2x1bW5TbGlkZXIucHJvZ3Jlc3MgPSAwLjU7XHJcbiAgICAgICAgVm9sdW1uU2xpZGVyLm5vZGUub24oJ3NsaWRlJywgdGhpcy5vblZvbHVtbkNoYW5nZSwgdGhpcyk7XHJcbiAgICAgICAgLy9SZXN0YXJ0IGJ1dHRvblxyXG4gICAgICAgIGxldCBSZXN0YXJ0QnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBSZXN0YXJ0QnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBSZXN0YXJ0QnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICBSZXN0YXJ0QnV0dG9uLmhhbmRsZXIgPSBcIlJlc3RhcnRHYW1lXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmcvUmVzdGFydFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKFJlc3RhcnRCdXR0b24pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgbGV0IERlc2NCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIERlc2NCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIERlc2NCdXR0b24uY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xyXG4gICAgICAgIERlc2NCdXR0b24uaGFuZGxlciA9IFwic2hvd0Rlc2NcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZy9Ib3dcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChEZXNjQnV0dG9uKTtcclxuICAgICAgICBsZXQgRGVzYyA9IGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL0Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgIERlc2MuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IEV4aXREZXNjQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBFeGl0RGVzY0J1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgRXhpdERlc2NCdXR0b24uY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xyXG4gICAgICAgIEV4aXREZXNjQnV0dG9uLmhhbmRsZXIgPSBcIkhpZGVEZXNjXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmcvRGVzY3JpcHRpb24vRXhpdFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKEV4aXREZXNjQnV0dG9uKTtcclxuICAgIH1cclxuICAgIEhpZGVEZXNjKCkge1xyXG4gICAgICAgIGxldCBEZXNjID0gY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmcvRGVzY3JpcHRpb25cIik7XHJcbiAgICAgICAgRGVzYy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHNob3dEZXNjKCkge1xyXG4gICAgICAgIGxldCBEZXNjID0gY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmcvRGVzY3JpcHRpb25cIik7XHJcbiAgICAgICAgRGVzYy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgUmVzdGFydEdhbWUoKSB7Ly9SZXN0YXJ0IHRoZSBnYW1lID0+IGJhY2sgdG8gbWVudVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLnNldFRpbWVTY2FsZSgxKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGxldCBDYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgIHRoaXMuUmVzdW1lQWxsQW5pbWF0aW9uKENhbnZhcyk7ICAgIFxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxvYWRpbmdcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbG9hZGluZ01hbmFnZXIgPSBjYy5maW5kKFwiQ2FudmFzL0xvYWRpbmdNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkxvYWRpbmdNYW5hZ2VyXCIpO1xyXG4gICAgICAgICAgICBsb2FkaW5nTWFuYWdlci5zdGFydExvYWRpbmcoXCJtZW51XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vRGVzdHJveSBQYXVzZXR0aW5nIG5vZGUgaWYgaXQgZXhpc3RzXHJcbiAgICAgICAgbGV0IFBhdXNlU2V0dGluZ05vZGUgPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNldHRpbmdcIik7XHJcbiAgICAgICAgaWYgKFBhdXNlU2V0dGluZ05vZGUpIFBhdXNlU2V0dGluZ05vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIGVsc2UgY2MuZXJyb3IoXCJQYXVzZVNldHRpbmcgbm9kZSBub3QgZm91bmRcIik7XHJcbiAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgUmVzdW1lR2FtZSgpIHtcclxuICAgICAgICBsZXQgUGF1c2VTZXR0aW5nTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nXCIpO1xyXG4gICAgICAgIGlmIChQYXVzZVNldHRpbmdOb2RlKSBQYXVzZVNldHRpbmdOb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICBlbHNlIGNjLmVycm9yKFwiUGF1c2VTZXR0aW5nIG5vZGUgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgIC8vUmVzdW1lIHRoZSBnYW1lXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuc2V0VGltZVNjYWxlKDEpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgbGV0IENhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5SZXN1bWVBbGxBbmltYXRpb24oQ2FudmFzKTsgXHJcbiAgICB9XHJcbiAgICBvblZvbHVtbkNoYW5nZShzbGlkZXI6IGNjLlNsaWRlcil7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoc2xpZGVyLnByb2dyZXNzKTsgLy8gMH4xXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZShzbGlkZXIucHJvZ3Jlc3MpO1xyXG4gICAgICAgIHRoaXMuVm9sdW1uVmFsdWUgPSBzbGlkZXIucHJvZ3Jlc3M7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVm9sdW1uVmFsdWVcIiwgdGhpcy5Wb2x1bW5WYWx1ZS50b1N0cmluZygpKTtcclxuICAgIH1cclxuICAgIFBhdXNlQWxsQW5pbWF0aW9uKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgYW5pbXMgPSBub2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbSBvZiBhbmltcykge1xyXG4gICAgICAgICAgICBpZiAoYW5pbSkgYW5pbS5wYXVzZSgpO1xyXG4gICAgICAgICAgICBlbHNlICBjYy5lcnJvcihcIkFuaW1hdGlvbiBjb21wb25lbnQgbm90IGZvdW5kIG9uIG5vZGU6XCIsIG5vZGUubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHRoaXMuUGF1c2VBbGxBbmltYXRpb24oY2hpbGQpO1xyXG4gICAgfVxyXG4gICAgUmVzdW1lQWxsQW5pbWF0aW9uKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgYW5pbXMgPSBub2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbSBvZiBhbmltcykge1xyXG4gICAgICAgICAgICBpZiAoYW5pbSkgYW5pbS5yZXN1bWUoKTtcclxuICAgICAgICAgICAgZWxzZSAgY2MuZXJyb3IoXCJBbmltYXRpb24gY29tcG9uZW50IG5vdCBmb3VuZCBvbiBub2RlOlwiLCBub2RlLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB0aGlzLlJlc3VtZUFsbEFuaW1hdGlvbihjaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheU11c2ljKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmJnbSkgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtLCB0cnVlKTtcclxuICAgICAgICBlbHNlIGNjLmVycm9yKFwiQkdNIG5vdCBhc3NpZ25lZCFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2VNdXNpYygpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdW1lTXVzaWMoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lTXVzaWMoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGFydEdhbWUoKXtcclxuICAgICAgICAvL0luaXRpYWxpemUgdGhlIGdhbWUgc3RhdGVcclxuICAgICAgICB0aGlzLkxldmVsID0gMTtcclxuICAgICAgICBpZiAodGhpcy5MZXZlbExhYmVsKSB0aGlzLkxldmVsTGFiZWwuc3RyaW5nID0gXCJMZXZlbDogXCIrIHRoaXMuTGV2ZWw7XHJcbiAgICAgICAgZWxzZSBjYy5lcnJvcihcIkxldmVsIExhYmVsIG5vdCBmb3VuZFwiKTtcclxuICAgICAgICAvL3NldCBwbGF5ZXIgcG9zaXRpb25cclxuICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIikuU2V0UGxheWVyKHRoaXMuTGV2ZWwpO1xyXG4gICAgICAgIC8vc2V0IE1hcFxyXG4gICAgICAgIGxldCBHZW5NYXAgPSBjYy5maW5kKFwiR2FtZU1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiTWFwR2VuZXJhdG9yXCIpO1xyXG4gICAgICAgIEdlbk1hcC5HZW5lcmF0b3JNYXAoKTtcclxuICAgICAgICAvL3NldCBtb25zdGVyXHJcbiAgICAgICAgbGV0IE1vbnN0ZXJNZ3IgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvTW9uc3Rlck1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiTW9uc3Rlck1hbmFnZXJcIik7XHJcbiAgICAgICAgTW9uc3Rlck1nci5TZXRNb25zdGVyKHRoaXMuTGV2ZWwpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR29OZXh0TGV2ZWwoKSB7XHJcbiAgICAgICAgdGhpcy5MZXZlbCsrO1xyXG4gICAgICAgIGlmICh0aGlzLkxldmVsTGFiZWwpIHRoaXMuTGV2ZWxMYWJlbC5zdHJpbmcgPSBcIkxldmVsOiBcIiArIHRoaXMuTGV2ZWw7XHJcbiAgICAgICAgZWxzZSBjYy5lcnJvcihcIkxldmVsIGxhYmVsIG5vdCBmb3VuZFwiKTtcclxuICAgICAgICAvLyByZWdlbmF0ZSB0aGUgbWFwXHJcbiAgICAgICAgbGV0IE1hcEdlbmVyYXRvciA9IGNjLmZpbmQoXCJHYW1lTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJNYXBHZW5lcmF0b3JcIik7XHJcbiAgICAgICAgaWYgKE1hcEdlbmVyYXRvcikgTWFwR2VuZXJhdG9yLnJlZ2VuZXJhdGVNYXAodGhpcy5MZXZlbCk7XHJcbiAgICAgICAgZWxzZSBjYy5lcnJvcihcIk1hcEdlbmVyYXRvciBjb21wb25lbnQgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgIC8vcmVzZXQgcGxheWVyIHBvc2l0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyKSB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIikuU2V0UGxheWVyKHRoaXMuTGV2ZWwpO1xyXG4gICAgICAgIGVsc2UgY2MuZXJyb3IoXCJQbGF5ZXIgY29tcG9uZW50IG5vdCBmb3VuZFwiKTtcclxuICAgICAgICAvL3Jlc2V0IG1vbnN0ZXJcclxuICAgICAgICBsZXQgTW9uc3Rlck1nciA9IGNjLmZpbmQoXCJDYW52YXMvTWFwTWFuYWdlci9Nb25zdGVyTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJNb25zdGVyTWFuYWdlclwiKTtcclxuICAgICAgICBNb25zdGVyTWdyLlNldE1vbnN0ZXIodGhpcy5MZXZlbCk7XHJcbiAgICAgICAgLy9yZXNldCBVSVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8v6Zqo6JGXbGV2ZWwg5o+Q5Y2HIOaUueiuiuimlueql+Wkp+Wwj1xyXG4gICAgICAgIGxldCBjYW1lcmEgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhXCIpLmdldENvbXBvbmVudChjYy5DYW1lcmEpO1xyXG4gICAgICAgIGNhbWVyYS56b29tUmF0aW8gPSBjYW1lcmEuem9vbVJhdGlvICogMC45O1xyXG4gICAgICAgIC8v6KaW56qX5pS56K6KIFVJIOS5n+imgeaUueiuilxyXG4gICAgICAgIGxldCBVSSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUlcIik7XHJcbiAgICAgICAgaWYgKFVJKSB7XHJcbiAgICAgICAgICAgIFVJLnNldFBvc2l0aW9uKDAsMCk7XHJcbiAgICAgICAgICAgIFVJLnNjYWxlWCA9IDEvIGNhbWVyYS56b29tUmF0aW87XHJcbiAgICAgICAgICAgIFVJLnNjYWxlWSA9IDEvIGNhbWVyYS56b29tUmF0aW87XHJcbiAgICAgICAgfSBlbHNlIGNvbnNvbGUubG9nKFwiVUkgbm90IGZvdW5kXCIpO1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBHYW1lT3ZlcigpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==