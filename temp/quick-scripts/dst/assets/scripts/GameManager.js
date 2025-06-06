
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
        cc.log("Is Firebase initialized?", window._firebaseInited);
        /*const firebaseConfig = {
            apiKey: "AIzaSyDFW4-emWdI1ghgZWWGp1wqoWvAvTwAqrQ",
            authDomain: "rune-raids.firebaseapp.com",
            projectId: "rune-raids",
            storageBucket: "rune-raids.firebasestorage.app",
            messagingSenderId: "530514360843",
            appId: "1:530514360843:web:1cdda9d72bb4b52932250e",
            measurementId: "G-B1C5FG1YSN"
        };*/
        if (!window._firebaseInited) {
            firebase.initializeApp(firebaseConfig);
            window._firebaseInited = true;
            cc.log("✅ Firebase initialized in GameManager.ts");
        }
        else {
            cc.log("ℹ️ Firebase already initialized");
        }
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
                cc.warn("找不到 Main Camera, 使用預設位置 (0, 0)");
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
        //let PauseSettingNode = cc.find("Canvas/Pausetting");
        //if (PauseSettingNode) PauseSettingNode.destroy();
        //else cc.error("PauseSetting node not found");
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
        var _a, _b, _c, _d;
        this.Level++;
        this.saveProgress(this.Level);
        if (this.LevelLabel) {
            this.LevelLabel.string = "Level: " + this.Level;
        }
        else {
            cc.error("Level label not found");
        }
        // regenerate the map
        var mapGen = (_a = cc.find("GameManager")) === null || _a === void 0 ? void 0 : _a.getComponent("MapGenerator");
        if (mapGen) {
            mapGen.regenerateMap(this.Level);
        }
        else {
            cc.error("MapGenerator component not found");
        }
        // reset player position
        var playerComp = (_b = this.player) === null || _b === void 0 ? void 0 : _b.getComponent("Player");
        if (playerComp) {
            playerComp.SetPlayer(this.Level);
        }
        else {
            cc.error("Player component not found");
        }
        // reset monster
        var monsterMgr = (_c = cc.find("Canvas/MapManager/MonsterManager")) === null || _c === void 0 ? void 0 : _c.getComponent("MonsterManager");
        if (monsterMgr) {
            monsterMgr.SetMonster(this.Level);
        }
        // adjust camera zoom and UI scaling
        var camera = (_d = cc.find("Canvas/Main Camera")) === null || _d === void 0 ? void 0 : _d.getComponent(cc.Camera);
        if (camera) {
            camera.zoomRatio *= 0.99;
            var UI = cc.find("Canvas/Main Camera/UI");
            if (UI) {
                UI.setPosition(0, 0);
                UI.scaleX = 1 / camera.zoomRatio;
                UI.scaleY = 1 / camera.zoomRatio;
            }
            else {
                cc.log("UI not found");
            }
        }
    };
    GameManager.prototype.EndGame = function () {
        var _this = this;
        cc.resources.load("prefabs/GameOver", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load GameOver prefab:", err);
                return;
            }
            var GameOverNode = cc.instantiate(prefab);
            var Canvas = cc.find("Canvas");
            Canvas.addChild(GameOverNode, 1, 'GameOver');
            //視窗正中間
            var cameraNode = cc.find("Canvas/Main Camera");
            if (cameraNode) {
                var worldPos = cameraNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
                var localPos = Canvas.convertToNodeSpaceAR(worldPos);
                GameOverNode.setPosition(localPos);
            }
            else {
                cc.warn("找不到 Main Camera, 使用預設位置 (0, 0)");
                GameOverNode.setPosition(0, 0);
            }
            var RestartButton = new cc.Component.EventHandler();
            RestartButton.target = _this.node;
            RestartButton.component = "GameManager";
            RestartButton.handler = "RestartGame";
            cc.find("Canvas/GameOver/Restart").getComponent(cc.Button).clickEvents.push(RestartButton);
            var end = cc.find("Canvas/GameOver/player").getComponent(cc.Animation);
            //game over animation
            _this.scheduleOnce(function () {
                end.play("gameover");
            });
        });
    };
    GameManager.prototype.saveProgress = function (level) {
        cc.log("Saving progress for level:", level);
        if (!window._firebaseInited) {
            cc.warn("Firebase not initialized.");
            return;
        }
        var user = firebase.auth().currentUser;
        if (!user) {
            cc.warn("User not logged in.");
            return;
        }
        var userRef = firebase.database().ref("leaderboard/" + user.uid);
        userRef.once("value").then(function (snapshot) {
            var existing = snapshot.val();
            var previousLevel = (existing === null || existing === void 0 ? void 0 : existing.highestLevel) || 0;
            if (level > previousLevel) {
                userRef.set({
                    username: user.displayName || "Unknown",
                    highestLevel: level,
                    lastUpdate: firebase.database.ServerValue.TIMESTAMP
                }).then(function () {
                    cc.log("\u2705 Updated Realtime DB for " + (user.displayName || "Unknown") + ": Level " + level);
                }).catch(function (err) {
                    cc.error("❌ Failed to write to Realtime DB:", err);
                });
            }
            else {
                cc.log("No update needed — previous level is higher or equal.");
            }
        }).catch(function (err) {
            cc.error("❌ Failed to read from Realtime DB:", err);
        });
    };
    GameManager.prototype.loadLeaderboard = function () {
        var dbRef = firebase.database().ref("leaderboard");
        dbRef.once("value")
            .then(function (snapshot) {
            var data = snapshot.val();
            if (!data) {
                cc.log("Leaderboard is empty.");
                return;
            }
            var sorted = Object.values(data)
                .sort(function (a, b) { return b.highestLevel - a.highestLevel; })
                .slice(0, 10);
            sorted.forEach(function (entry, index) {
                cc.log("#" + (index + 1) + " " + entry.username + ": Level " + entry.highestLevel);
            });
        })
            .catch(function (err) {
            cc.error("❌ Failed to load leaderboard from Realtime DB:", err);
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFXNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFzWEM7UUFwWFUsU0FBRyxHQUFpQixJQUFJLENBQUM7UUFHekIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFM0IsV0FBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBNFc3QixDQUFDO0lBMVdHLDRCQUFNLEdBQU47UUFDSSxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDMUQsSUFBSSxZQUFZLEVBQUU7WUFDZCxJQUFJLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEQsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQy9CLFdBQVcsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1lBQ3RDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1lBQ2xDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEU7YUFBTTtZQUNILEVBQUUsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztTQUNuRTtRQUNELDZCQUE2QjtRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFB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IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBMb2FkaW5nTWFuYWdlciBmcm9tIFwiLi9NZW51L0xvYWRpbmdNYW5hZ2VyXCI7XHJcbmRlY2xhcmUgY29uc3QgZmlyZWJhc2U6IGFueTtcclxuLy9mb3IgRmlyZWJhc2UgaW5pdGlhbGl6YXRpb25cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICAgICAgX2ZpcmViYXNlSW5pdGVkPzogYm9vbGVhbjtcclxuICAgIH1cclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXHJcbiAgICBwdWJsaWMgYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHB1YmxpYyBMZXZlbExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtYXhocDogbnVtYmVyID0gMTA7XHJcbiAgICBwcml2YXRlIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgVm9sdW1uVmFsdWUgOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHVibGljIExldmVsOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIGxldCBwYXVzZUJ0bk5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1BhdXNlXCIpOyBcclxuICAgICAgICBpZiAocGF1c2VCdG5Ob2RlKSB7XHJcbiAgICAgICAgICAgIGxldCBQYXVzZUJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIFBhdXNlQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgUGF1c2VCdXR0b24uY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xyXG4gICAgICAgICAgICBQYXVzZUJ1dHRvbi5oYW5kbGVyID0gXCJQYXVzZUdhbWVcIjtcclxuICAgICAgICAgICAgcGF1c2VCdG5Ob2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goUGF1c2VCdXR0b24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwiUGF1c2Ug5oyJ6YiV56+A6bue5om+5LiN5Yiw77yM6KuL5qqi5p+lIENhbnZhcy9NYWluIENhbWVyYS9VSS9QYXVzZSDmmK/lkKblrZjlnKjvvIFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIGxldmVsIGxhYmVsXHJcbiAgICAgICAgdGhpcy5MZXZlbExhYmVsID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9MZXZlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIGlmICh0aGlzLkxldmVsTGFiZWwpIHRoaXMuTGV2ZWxMYWJlbC5zdHJpbmcgPSBcIkxldmVsOiBcIiArIHRoaXMuTGV2ZWw7XHJcbiAgICAgICAgZWxzZSBjYy5lcnJvcihcIkxldmVsIGxhYmVsIG5vdCBmb3VuZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvQWN0b3JzL1BsYXllclwiKTtcclxuXHJcbiAgICAgICAgLy9hc3NpZ24gYmxhbmsgc3BhY2UgZm9yIG5leHQgbGV2ZWxcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5sb2coXCJJcyBGaXJlYmFzZSBpbml0aWFsaXplZD9cIiwgd2luZG93Ll9maXJlYmFzZUluaXRlZCk7XHJcblxyXG4gICAgICAgIC8qY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICAgICAgICAgIGFwaUtleTogXCJBSXphU3lERlc0LWVtV2RJMWdoZ1pXV0dwMXdxb1d2QXZUd0FxclFcIixcclxuICAgICAgICAgICAgYXV0aERvbWFpbjogXCJydW5lLXJhaWRzLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IFwicnVuZS1yYWlkc1wiLFxyXG4gICAgICAgICAgICBzdG9yYWdlQnVja2V0OiBcInJ1bmUtcmFpZHMuZmlyZWJhc2VzdG9yYWdlLmFwcFwiLFxyXG4gICAgICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI1MzA1MTQzNjA4NDNcIixcclxuICAgICAgICAgICAgYXBwSWQ6IFwiMTo1MzA1MTQzNjA4NDM6d2ViOjFjZGRhOWQ3MmJiNGI1MjkzMjI1MGVcIixcclxuICAgICAgICAgICAgbWVhc3VyZW1lbnRJZDogXCJHLUIxQzVGRzFZU05cIlxyXG4gICAgICAgIH07Ki9cclxuXHJcbiAgICAgICAgaWYgKCF3aW5kb3cuX2ZpcmViYXNlSW5pdGVkKSB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gICAgICAgICAgICB3aW5kb3cuX2ZpcmViYXNlSW5pdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MubG9nKFwi4pyFIEZpcmViYXNlIGluaXRpYWxpemVkIGluIEdhbWVNYW5hZ2VyLnRzXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuKEue+4jyBGaXJlYmFzZSBhbHJlYWR5IGluaXRpYWxpemVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuc3BhY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5Hb05leHRMZXZlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHNhdmVkVm9sdW1uID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVm9sdW1uVmFsdWVcIik7XHJcbiAgICAgICAgaWYgKHNhdmVkVm9sdW1uIT09bnVsbCkgdGhpcy5Wb2x1bW5WYWx1ZSA9IE51bWJlcihzYXZlZFZvbHVtbik7XHJcbiAgICAgICAgZWxzZSB0aGlzLlZvbHVtblZhbHVlID0gMC41O1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodGhpcy5Wb2x1bW5WYWx1ZSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodGhpcy5Wb2x1bW5WYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5wbGF5TXVzaWMoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBQYXVzZUdhbWUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQYXVzZSBwcmVmYWIgbG9hZFwiKTtcclxuICAgICAgICAvL1BhdXNlc2V0dGluZyBpcyBhIHByZWZhYlxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFicy9QYXVzZVNldHRpbmdcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBQYXVzZVNldHRpbmcgcHJlZmFiOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBQYXVzZU5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICBjb25zdCBDYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgICAgICBDYW52YXMuYWRkQ2hpbGQoUGF1c2VOb2RlKTtcclxuICAgICAgICAgICAgUGF1c2VOb2RlLm5hbWUgPSBcIlBhdXNlU2V0dGluZ1wiO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhbWVyYU5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhXCIpO1xyXG4gICAgICAgICAgICBpZiAoY2FtZXJhTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdvcmxkUG9zID0gY2FtZXJhTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKTtcclxuICAgICAgICAgICAgICAgIGxldCBsb2NhbFBvcyA9IENhbnZhcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgICAgICAgICBQYXVzZU5vZGUuc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2Mud2FybihcIuaJvuS4jeWIsCBNYWluIENhbWVyYSwg5L2/55So6aCQ6Kit5L2N572uICgwLCAwKVwiKTtcclxuICAgICAgICAgICAgICAgIFBhdXNlTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgUGF1c2VOb2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgIFBhdXNlTm9kZS5zY2FsZVkgPSAxO1xyXG4gICAgICAgICAgICAvL1BhdXNlIHRoZSBnYW1l77yM5YGc5q2i6Y2155uk5LqL5Lu2XHJcbiAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuc2V0VGltZVNjYWxlKDApO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IENhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcbiAgICAgICAgICAgIHRoaXMuUGF1c2VBbGxBbmltYXRpb24oQ2FudmFzKTsgXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFBhdXNlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBhdXNlIHByZWZhYiBsb2FkLi4uXCIpO1xyXG5cclxuICAgIH1cclxuICAgIGluaXRQYXVzZSgpIHtcclxuICAgICAgICAvL1Jlc3VtZSBidXR0b25cclxuICAgICAgICBsZXQgUmVzdW1lQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBSZXN1bWVCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIFJlc3VtZUJ1dHRvbi5jb21wb25lbnQgPSBcIkdhbWVNYW5hZ2VyXCI7XHJcbiAgICAgICAgUmVzdW1lQnV0dG9uLmhhbmRsZXIgPSBcIlJlc3VtZUdhbWVcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZy9SZXN1bWVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChSZXN1bWVCdXR0b24pO1xyXG4gICAgICAgIC8vVm9sdW1uIHNsaWRlclxyXG4gICAgICAgIGxldCBWb2x1bW5TbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZy9Wb2x1bW4vVm9sdW1uU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xyXG4gICAgICAgIGxldCBzYXZlZFZvbHVtbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlZvbHVtblZhbHVlXCIpO1xyXG4gICAgICAgIGlmIChzYXZlZFZvbHVtbiAhPT0gbnVsbCkgVm9sdW1uU2xpZGVyLnByb2dyZXNzPSBOdW1iZXIoc2F2ZWRWb2x1bW4pO1xyXG4gICAgICAgIGVsc2UgVm9sdW1uU2xpZGVyLnByb2dyZXNzID0gMC41O1xyXG4gICAgICAgIFZvbHVtblNsaWRlci5ub2RlLm9uKCdzbGlkZScsIHRoaXMub25Wb2x1bW5DaGFuZ2UsIHRoaXMpO1xyXG4gICAgICAgIC8vUmVzdGFydCBidXR0b25cclxuICAgICAgICBsZXQgUmVzdGFydEJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgUmVzdGFydEJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgUmVzdGFydEJ1dHRvbi5jb21wb25lbnQgPSBcIkdhbWVNYW5hZ2VyXCI7XHJcbiAgICAgICAgUmVzdGFydEJ1dHRvbi5oYW5kbGVyID0gXCJSZXN0YXJ0R2FtZVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL1Jlc3RhcnRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChSZXN0YXJ0QnV0dG9uKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGxldCBEZXNjQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBEZXNjQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBEZXNjQnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICBEZXNjQnV0dG9uLmhhbmRsZXIgPSBcInNob3dEZXNjXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmcvSG93XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goRGVzY0J1dHRvbik7XHJcbiAgICAgICAgbGV0IERlc2MgPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZy9EZXNjcmlwdGlvblwiKTtcclxuICAgICAgICBEZXNjLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBFeGl0RGVzY0J1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgRXhpdERlc2NCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIEV4aXREZXNjQnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICBFeGl0RGVzY0J1dHRvbi5oYW5kbGVyID0gXCJIaWRlRGVzY1wiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL0Rlc2NyaXB0aW9uL0V4aXRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChFeGl0RGVzY0J1dHRvbik7XHJcbiAgICB9XHJcbiAgICBIaWRlRGVzYygpIHtcclxuICAgICAgICBsZXQgRGVzYyA9IGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL0Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgIERlc2MuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzaG93RGVzYygpIHtcclxuICAgICAgICBsZXQgRGVzYyA9IGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL0Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgIERlc2MuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFJlc3RhcnRHYW1lKCkgey8vUmVzdGFydCB0aGUgZ2FtZSA9PiBiYWNrIHRvIG1lbnVcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5zZXRUaW1lU2NhbGUoMSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBsZXQgQ2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLlJlc3VtZUFsbEFuaW1hdGlvbihDYW52YXMpOyAgICBcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMb2FkaW5nXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxvYWRpbmdNYW5hZ2VyID0gY2MuZmluZChcIkNhbnZhcy9Mb2FkaW5nTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJMb2FkaW5nTWFuYWdlclwiKTtcclxuICAgICAgICAgICAgbG9hZGluZ01hbmFnZXIuc3RhcnRMb2FkaW5nKFwibWVudVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL0Rlc3Ryb3kgUGF1c2V0dGluZyBub2RlIGlmIGl0IGV4aXN0c1xyXG4gICAgICAgIC8vbGV0IFBhdXNlU2V0dGluZ05vZGUgPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNldHRpbmdcIik7XHJcbiAgICAgICAgLy9pZiAoUGF1c2VTZXR0aW5nTm9kZSkgUGF1c2VTZXR0aW5nTm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy9lbHNlIGNjLmVycm9yKFwiUGF1c2VTZXR0aW5nIG5vZGUgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgICBcclxuICAgIH1cclxuICAgIFJlc3VtZUdhbWUoKSB7XHJcbiAgICAgICAgbGV0IFBhdXNlU2V0dGluZ05vZGUgPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZ1wiKTtcclxuICAgICAgICBpZiAoUGF1c2VTZXR0aW5nTm9kZSkgUGF1c2VTZXR0aW5nTm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgZWxzZSBjYy5lcnJvcihcIlBhdXNlU2V0dGluZyBub2RlIG5vdCBmb3VuZFwiKTtcclxuICAgICAgICAvL1Jlc3VtZSB0aGUgZ2FtZVxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLnNldFRpbWVTY2FsZSgxKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGxldCBDYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgIHRoaXMuUmVzdW1lQWxsQW5pbWF0aW9uKENhbnZhcyk7IFxyXG4gICAgfVxyXG4gICAgb25Wb2x1bW5DaGFuZ2Uoc2xpZGVyOiBjYy5TbGlkZXIpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHNsaWRlci5wcm9ncmVzcyk7IC8vIDB+MVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoc2xpZGVyLnByb2dyZXNzKTtcclxuICAgICAgICB0aGlzLlZvbHVtblZhbHVlID0gc2xpZGVyLnByb2dyZXNzO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlZvbHVtblZhbHVlXCIsIHRoaXMuVm9sdW1uVmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgICBQYXVzZUFsbEFuaW1hdGlvbihub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IGFuaW1zID0gbm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGZvciAobGV0IGFuaW0gb2YgYW5pbXMpIHtcclxuICAgICAgICAgICAgaWYgKGFuaW0pIGFuaW0ucGF1c2UoKTtcclxuICAgICAgICAgICAgZWxzZSAgY2MuZXJyb3IoXCJBbmltYXRpb24gY29tcG9uZW50IG5vdCBmb3VuZCBvbiBub2RlOlwiLCBub2RlLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB0aGlzLlBhdXNlQWxsQW5pbWF0aW9uKGNoaWxkKTtcclxuICAgIH1cclxuICAgIFJlc3VtZUFsbEFuaW1hdGlvbihub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IGFuaW1zID0gbm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGZvciAobGV0IGFuaW0gb2YgYW5pbXMpIHtcclxuICAgICAgICAgICAgaWYgKGFuaW0pIGFuaW0ucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIGVsc2UgIGNjLmVycm9yKFwiQW5pbWF0aW9uIGNvbXBvbmVudCBub3QgZm91bmQgb24gbm9kZTpcIiwgbm9kZS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikgdGhpcy5SZXN1bWVBbGxBbmltYXRpb24oY2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlNdXNpYygpIHtcclxuICAgICAgICBpZiAodGhpcy5iZ20pIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcbiAgICAgICAgZWxzZSBjYy5lcnJvcihcIkJHTSBub3QgYXNzaWduZWQhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlTXVzaWMoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VtZU11c2ljKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZU11c2ljKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhcnRHYW1lKCl7XHJcbiAgICAgICAgLy9Jbml0aWFsaXplIHRoZSBnYW1lIHN0YXRlXHJcbiAgICAgICAgdGhpcy5MZXZlbCA9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuTGV2ZWxMYWJlbCkgdGhpcy5MZXZlbExhYmVsLnN0cmluZyA9IFwiTGV2ZWw6IFwiKyB0aGlzLkxldmVsO1xyXG4gICAgICAgIGVsc2UgY2MuZXJyb3IoXCJMZXZlbCBMYWJlbCBub3QgZm91bmRcIik7XHJcbiAgICAgICAgLy9zZXQgcGxheWVyIHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFwiUGxheWVyXCIpLlNldFBsYXllcih0aGlzLkxldmVsKTtcclxuICAgICAgICAvL3NldCBNYXBcclxuICAgICAgICBsZXQgR2VuTWFwID0gY2MuZmluZChcIkdhbWVNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIk1hcEdlbmVyYXRvclwiKTtcclxuICAgICAgICBHZW5NYXAuR2VuZXJhdG9yTWFwKCk7XHJcbiAgICAgICAgLy9zZXQgbW9uc3RlclxyXG4gICAgICAgIGxldCBNb25zdGVyTWdyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIk1vbnN0ZXJNYW5hZ2VyXCIpO1xyXG4gICAgICAgIE1vbnN0ZXJNZ3IuU2V0TW9uc3Rlcih0aGlzLkxldmVsKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdvTmV4dExldmVsKCkge1xyXG4gICAgICAgIHRoaXMuTGV2ZWwrKztcclxuICAgICAgICB0aGlzLnNhdmVQcm9ncmVzcyh0aGlzLkxldmVsKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuTGV2ZWxMYWJlbCkge1xyXG4gICAgICAgICAgICB0aGlzLkxldmVsTGFiZWwuc3RyaW5nID0gXCJMZXZlbDogXCIgKyB0aGlzLkxldmVsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwiTGV2ZWwgbGFiZWwgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVnZW5lcmF0ZSB0aGUgbWFwXHJcbiAgICAgICAgY29uc3QgbWFwR2VuID0gY2MuZmluZChcIkdhbWVNYW5hZ2VyXCIpPy5nZXRDb21wb25lbnQoXCJNYXBHZW5lcmF0b3JcIik7XHJcbiAgICAgICAgaWYgKG1hcEdlbikge1xyXG4gICAgICAgICAgICBtYXBHZW4ucmVnZW5lcmF0ZU1hcCh0aGlzLkxldmVsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIk1hcEdlbmVyYXRvciBjb21wb25lbnQgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVzZXQgcGxheWVyIHBvc2l0aW9uXHJcbiAgICAgICAgY29uc3QgcGxheWVyQ29tcCA9IHRoaXMucGxheWVyPy5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIik7XHJcbiAgICAgICAgaWYgKHBsYXllckNvbXApIHtcclxuICAgICAgICAgICAgcGxheWVyQ29tcC5TZXRQbGF5ZXIodGhpcy5MZXZlbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJQbGF5ZXIgY29tcG9uZW50IG5vdCBmb3VuZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IG1vbnN0ZXJcclxuICAgICAgICBjb25zdCBtb25zdGVyTWdyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2VyXCIpPy5nZXRDb21wb25lbnQoXCJNb25zdGVyTWFuYWdlclwiKTtcclxuICAgICAgICBpZiAobW9uc3Rlck1ncikge1xyXG4gICAgICAgICAgICBtb25zdGVyTWdyLlNldE1vbnN0ZXIodGhpcy5MZXZlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhZGp1c3QgY2FtZXJhIHpvb20gYW5kIFVJIHNjYWxpbmdcclxuICAgICAgICBjb25zdCBjYW1lcmEgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhXCIpPy5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKTtcclxuICAgICAgICBpZiAoY2FtZXJhKSB7XHJcbiAgICAgICAgICAgIGNhbWVyYS56b29tUmF0aW8gKj0gMC45OTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IFVJID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKTtcclxuICAgICAgICAgICAgaWYgKFVJKSB7XHJcbiAgICAgICAgICAgICAgICBVSS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICAgICAgICAgIFVJLnNjYWxlWCA9IDEgLyBjYW1lcmEuem9vbVJhdGlvO1xyXG4gICAgICAgICAgICAgICAgVUkuc2NhbGVZID0gMSAvIGNhbWVyYS56b29tUmF0aW87XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJVSSBub3QgZm91bmRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgRW5kR2FtZSgpIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvR2FtZU92ZXJcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBHYW1lT3ZlciBwcmVmYWI6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgR2FtZU92ZXJOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgY29uc3QgQ2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICAgICAgQ2FudmFzLmFkZENoaWxkKEdhbWVPdmVyTm9kZSwxLCdHYW1lT3ZlcicpO1xyXG4gICAgICAgICAgICAvL+imlueql+ato+S4remWk1xyXG4gICAgICAgICAgICBsZXQgY2FtZXJhTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmFcIik7XHJcbiAgICAgICAgICAgIGlmIChjYW1lcmFOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd29ybGRQb3MgPSBjYW1lcmFOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvY2FsUG9zID0gQ2FudmFzLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICAgICAgICAgIEdhbWVPdmVyTm9kZS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwi5om+5LiN5YiwIE1haW4gQ2FtZXJhLCDkvb/nlKjpoJDoqK3kvY3nva4gKDAsIDApXCIpO1xyXG4gICAgICAgICAgICAgICAgR2FtZU92ZXJOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBSZXN0YXJ0QnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBSZXN0YXJ0QnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBSZXN0YXJ0QnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICBSZXN0YXJ0QnV0dG9uLmhhbmRsZXIgPSBcIlJlc3RhcnRHYW1lXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9HYW1lT3Zlci9SZXN0YXJ0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goUmVzdGFydEJ1dHRvbik7XHJcblxyXG4gICAgICAgIGxldCBlbmQgPSBjYy5maW5kKFwiQ2FudmFzL0dhbWVPdmVyL3BsYXllclwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAvL2dhbWUgb3ZlciBhbmltYXRpb25cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+eyBcclxuICAgICAgICAgICAgZW5kLnBsYXkoXCJnYW1lb3ZlclwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2F2ZVByb2dyZXNzKGxldmVsOiBudW1iZXIpIHtcclxuICAgICAgICBjYy5sb2coXCJTYXZpbmcgcHJvZ3Jlc3MgZm9yIGxldmVsOlwiLCBsZXZlbCk7XHJcblxyXG4gICAgICAgIGlmICghd2luZG93Ll9maXJlYmFzZUluaXRlZCkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiRmlyZWJhc2Ugbm90IGluaXRpYWxpemVkLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlcjtcclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIlVzZXIgbm90IGxvZ2dlZCBpbi5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJSZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcImxlYWRlcmJvYXJkL1wiICsgdXNlci51aWQpO1xyXG5cclxuICAgICAgICB1c2VyUmVmLm9uY2UoXCJ2YWx1ZVwiKS50aGVuKChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzTGV2ZWwgPSBleGlzdGluZz8uaGlnaGVzdExldmVsIHx8IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAobGV2ZWwgPiBwcmV2aW91c0xldmVsKSB7XHJcbiAgICAgICAgICAgIHVzZXJSZWYuc2V0KHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLmRpc3BsYXlOYW1lIHx8IFwiVW5rbm93blwiLFxyXG4gICAgICAgICAgICAgICAgaGlnaGVzdExldmVsOiBsZXZlbCxcclxuICAgICAgICAgICAgICAgIGxhc3RVcGRhdGU6IGZpcmViYXNlLmRhdGFiYXNlLlNlcnZlclZhbHVlLlRJTUVTVEFNUFxyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhg4pyFIFVwZGF0ZWQgUmVhbHRpbWUgREIgZm9yICR7dXNlci5kaXNwbGF5TmFtZSB8fCBcIlVua25vd25cIn06IExldmVsICR7bGV2ZWx9YCk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCLinYwgRmFpbGVkIHRvIHdyaXRlIHRvIFJlYWx0aW1lIERCOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiTm8gdXBkYXRlIG5lZWRlZCDigJQgcHJldmlvdXMgbGV2ZWwgaXMgaGlnaGVyIG9yIGVxdWFsLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIuKdjCBGYWlsZWQgdG8gcmVhZCBmcm9tIFJlYWx0aW1lIERCOlwiLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkTGVhZGVyYm9hcmQoKSB7XHJcbiAgICAgICAgY29uc3QgZGJSZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcImxlYWRlcmJvYXJkXCIpO1xyXG4gICAgICAgIGRiUmVmLm9uY2UoXCJ2YWx1ZVwiKVxyXG4gICAgICAgICAgICAudGhlbigoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiTGVhZGVyYm9hcmQgaXMgZW1wdHkuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzb3J0ZWQgPSBPYmplY3QudmFsdWVzKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IGIuaGlnaGVzdExldmVsIC0gYS5oaWdoZXN0TGV2ZWwpXHJcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgMTApO1xyXG5cclxuICAgICAgICAgICAgc29ydGVkLmZvckVhY2goKGVudHJ5OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhgIyR7aW5kZXggKyAxfSAke2VudHJ5LnVzZXJuYW1lfTogTGV2ZWwgJHtlbnRyeS5oaWdoZXN0TGV2ZWx9YCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwi4p2MIEZhaWxlZCB0byBsb2FkIGxlYWRlcmJvYXJkIGZyb20gUmVhbHRpbWUgREI6XCIsIGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19