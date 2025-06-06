
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
        var firebaseConfig = {
            apiKey: "AIzaSyDFW4-emWdI1ghgZWWGp1wqoWvAvTwAqrQ",
            authDomain: "rune-raids.firebaseapp.com",
            projectId: "rune-raids",
            storageBucket: "rune-raids.firebasestorage.app",
            messagingSenderId: "530514360843",
            appId: "1:530514360843:web:1cdda9d72bb4b52932250e",
            measurementId: "G-B1C5FG1YSN"
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFXNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFzVkM7UUFwVlUsU0FBRyxHQUFpQixJQUFJLENBQUM7UUFHekIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFM0IsV0FBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBNFU3QixDQUFDO0lBMVVHLDRCQUFNLEdBQU47UUFDSSxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDMUQsSUFBSSxZQUFZLEVBQUU7WUFDZCxJQUFJLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEQsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQy9CLFdBQVcsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1lBQ3RDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1lBQ2xDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEU7YUFBTTtZQUNILEVBQUUsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztTQUNuRTtRQUNELDZCQUE2QjtRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFB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QUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1AsRUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUNoQyxPQUFPO2FBQ1Y7WUFFRCxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztpQkFDN0IsSUFBSSxDQUFDLFVBQUMsQ0FBTSxFQUFFLENBQU0sSUFBSyxPQUFBLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBL0IsQ0FBK0IsQ0FBQztpQkFDekQsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUVsQixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBVSxFQUFFLEtBQWE7Z0JBQ3JDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBSSxLQUFLLEdBQUcsQ0FBQyxVQUFJLEtBQUssQ0FBQyxRQUFRLGdCQUFXLEtBQUssQ0FBQyxZQUFjLENBQUMsQ0FBQztZQUMzRSxDQUFDLENBQUMsQ0FBQztRQUNILENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEdBQVE7WUFDaEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxnREFBZ0QsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFuVkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDOzRDQUNEO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ2dCO0lBTGxCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FzVi9CO0lBQUQsa0JBQUM7Q0F0VkQsQUFzVkMsQ0F0VndDLEVBQUUsQ0FBQyxTQUFTLEdBc1ZwRDtrQkF0Vm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgTG9hZGluZ01hbmFnZXIgZnJvbSBcIi4vTWVudS9Mb2FkaW5nTWFuYWdlclwiO1xyXG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlOiBhbnk7XHJcbi8vZm9yIEZpcmViYXNlIGluaXRpYWxpemF0aW9uXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgICAgIF9maXJlYmFzZUluaXRlZD86IGJvb2xlYW47XHJcbiAgICB9XHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxyXG4gICAgcHVibGljIGJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwdWJsaWMgTGV2ZWxMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbWF4aHA6IG51bWJlciA9IDEwO1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHVibGljIFZvbHVtblZhbHVlIDogbnVtYmVyID0gbnVsbDtcclxuICAgIHB1YmxpYyBMZXZlbDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICBsZXQgcGF1c2VCdG5Ob2RlID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9QYXVzZVwiKTsgXHJcbiAgICAgICAgaWYgKHBhdXNlQnRuTm9kZSkge1xyXG4gICAgICAgICAgICBsZXQgUGF1c2VCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgICAgICBQYXVzZUJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIFBhdXNlQnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICAgICAgUGF1c2VCdXR0b24uaGFuZGxlciA9IFwiUGF1c2VHYW1lXCI7XHJcbiAgICAgICAgICAgIHBhdXNlQnRuTm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKFBhdXNlQnV0dG9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIlBhdXNlIOaMiemIleevgOm7nuaJvuS4jeWIsO+8jOiri+aqouafpSBDYW52YXMvTWFpbiBDYW1lcmEvVUkvUGF1c2Ug5piv5ZCm5a2Y5Zyo77yBXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBsZXZlbCBsYWJlbFxyXG4gICAgICAgIHRoaXMuTGV2ZWxMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvTGV2ZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBpZiAodGhpcy5MZXZlbExhYmVsKSB0aGlzLkxldmVsTGFiZWwuc3RyaW5nID0gXCJMZXZlbDogXCIgKyB0aGlzLkxldmVsO1xyXG4gICAgICAgIGVsc2UgY2MuZXJyb3IoXCJMZXZlbCBsYWJlbCBub3QgZm91bmRcIik7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL0FjdG9ycy9QbGF5ZXJcIik7XHJcblxyXG4gICAgICAgIC8vYXNzaWduIGJsYW5rIHNwYWNlIGZvciBuZXh0IGxldmVsXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2MubG9nKFwiSXMgRmlyZWJhc2UgaW5pdGlhbGl6ZWQ/XCIsIHdpbmRvdy5fZmlyZWJhc2VJbml0ZWQpO1xyXG5cclxuICAgICAgICBjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgYXBpS2V5OiBcIkFJemFTeURGVzQtZW1XZEkxZ2hnWldXR3Axd3FvV3ZBdlR3QXFyUVwiLFxyXG4gICAgICAgICAgICBhdXRoRG9tYWluOiBcInJ1bmUtcmFpZHMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICAgICAgICAgIHByb2plY3RJZDogXCJydW5lLXJhaWRzXCIsXHJcbiAgICAgICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwicnVuZS1yYWlkcy5maXJlYmFzZXN0b3JhZ2UuYXBwXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjUzMDUxNDM2MDg0M1wiLFxyXG4gICAgICAgICAgICBhcHBJZDogXCIxOjUzMDUxNDM2MDg0Mzp3ZWI6MWNkZGE5ZDcyYmI0YjUyOTMyMjUwZVwiLFxyXG4gICAgICAgICAgICBtZWFzdXJlbWVudElkOiBcIkctQjFDNUZHMVlTTlwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCF3aW5kb3cuX2ZpcmViYXNlSW5pdGVkKSB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gICAgICAgICAgICB3aW5kb3cuX2ZpcmViYXNlSW5pdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MubG9nKFwi4pyFIEZpcmViYXNlIGluaXRpYWxpemVkIGluIEdhbWVNYW5hZ2VyLnRzXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuKEue+4jyBGaXJlYmFzZSBhbHJlYWR5IGluaXRpYWxpemVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuc3BhY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5Hb05leHRMZXZlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHNhdmVkVm9sdW1uID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVm9sdW1uVmFsdWVcIik7XHJcbiAgICAgICAgaWYgKHNhdmVkVm9sdW1uIT09bnVsbCkgdGhpcy5Wb2x1bW5WYWx1ZSA9IE51bWJlcihzYXZlZFZvbHVtbik7XHJcbiAgICAgICAgZWxzZSB0aGlzLlZvbHVtblZhbHVlID0gMC41O1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodGhpcy5Wb2x1bW5WYWx1ZSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodGhpcy5Wb2x1bW5WYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5wbGF5TXVzaWMoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBQYXVzZUdhbWUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQYXVzZSBwcmVmYWIgbG9hZFwiKTtcclxuICAgICAgICAvL1BhdXNlc2V0dGluZyBpcyBhIHByZWZhYlxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFicy9QYXVzZVNldHRpbmdcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBQYXVzZVNldHRpbmcgcHJlZmFiOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBQYXVzZU5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICBjb25zdCBDYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgICAgICBDYW52YXMuYWRkQ2hpbGQoUGF1c2VOb2RlKTtcclxuICAgICAgICAgICAgUGF1c2VOb2RlLm5hbWUgPSBcIlBhdXNlU2V0dGluZ1wiO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhbWVyYU5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhXCIpO1xyXG4gICAgICAgICAgICBpZiAoY2FtZXJhTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdvcmxkUG9zID0gY2FtZXJhTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKTtcclxuICAgICAgICAgICAgICAgIGxldCBsb2NhbFBvcyA9IENhbnZhcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgICAgICAgICBQYXVzZU5vZGUuc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2Mud2FybihcIuaJvuS4jeWIsCBNYWluIENhbWVyYSwg5L2/55So6aCQ6Kit5L2N572uICgwLCAwKVwiKTtcclxuICAgICAgICAgICAgICAgIFBhdXNlTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgUGF1c2VOb2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgIFBhdXNlTm9kZS5zY2FsZVkgPSAxO1xyXG4gICAgICAgICAgICAvL1BhdXNlIHRoZSBnYW1l77yM5YGc5q2i6Y2155uk5LqL5Lu2XHJcbiAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuc2V0VGltZVNjYWxlKDApO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IENhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcbiAgICAgICAgICAgIHRoaXMuUGF1c2VBbGxBbmltYXRpb24oQ2FudmFzKTsgXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFBhdXNlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBhdXNlIHByZWZhYiBsb2FkLi4uXCIpO1xyXG5cclxuICAgIH1cclxuICAgIGluaXRQYXVzZSgpIHtcclxuICAgICAgICAvL1Jlc3VtZSBidXR0b25cclxuICAgICAgICBsZXQgUmVzdW1lQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBSZXN1bWVCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIFJlc3VtZUJ1dHRvbi5jb21wb25lbnQgPSBcIkdhbWVNYW5hZ2VyXCI7XHJcbiAgICAgICAgUmVzdW1lQnV0dG9uLmhhbmRsZXIgPSBcIlJlc3VtZUdhbWVcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZy9SZXN1bWVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChSZXN1bWVCdXR0b24pO1xyXG4gICAgICAgIC8vVm9sdW1uIHNsaWRlclxyXG4gICAgICAgIGxldCBWb2x1bW5TbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZy9Wb2x1bW4vVm9sdW1uU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xyXG4gICAgICAgIGxldCBzYXZlZFZvbHVtbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlZvbHVtblZhbHVlXCIpO1xyXG4gICAgICAgIGlmIChzYXZlZFZvbHVtbiAhPT0gbnVsbCkgVm9sdW1uU2xpZGVyLnByb2dyZXNzPSBOdW1iZXIoc2F2ZWRWb2x1bW4pO1xyXG4gICAgICAgIGVsc2UgVm9sdW1uU2xpZGVyLnByb2dyZXNzID0gMC41O1xyXG4gICAgICAgIFZvbHVtblNsaWRlci5ub2RlLm9uKCdzbGlkZScsIHRoaXMub25Wb2x1bW5DaGFuZ2UsIHRoaXMpO1xyXG4gICAgICAgIC8vUmVzdGFydCBidXR0b25cclxuICAgICAgICBsZXQgUmVzdGFydEJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgUmVzdGFydEJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgUmVzdGFydEJ1dHRvbi5jb21wb25lbnQgPSBcIkdhbWVNYW5hZ2VyXCI7XHJcbiAgICAgICAgUmVzdGFydEJ1dHRvbi5oYW5kbGVyID0gXCJSZXN0YXJ0R2FtZVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL1Jlc3RhcnRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChSZXN0YXJ0QnV0dG9uKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGxldCBEZXNjQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBEZXNjQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBEZXNjQnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICBEZXNjQnV0dG9uLmhhbmRsZXIgPSBcInNob3dEZXNjXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmcvSG93XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goRGVzY0J1dHRvbik7XHJcbiAgICAgICAgbGV0IERlc2MgPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZy9EZXNjcmlwdGlvblwiKTtcclxuICAgICAgICBEZXNjLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBFeGl0RGVzY0J1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgRXhpdERlc2NCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIEV4aXREZXNjQnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICBFeGl0RGVzY0J1dHRvbi5oYW5kbGVyID0gXCJIaWRlRGVzY1wiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL0Rlc2NyaXB0aW9uL0V4aXRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChFeGl0RGVzY0J1dHRvbik7XHJcbiAgICB9XHJcbiAgICBIaWRlRGVzYygpIHtcclxuICAgICAgICBsZXQgRGVzYyA9IGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL0Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgIERlc2MuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzaG93RGVzYygpIHtcclxuICAgICAgICBsZXQgRGVzYyA9IGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL0Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgIERlc2MuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFJlc3RhcnRHYW1lKCkgey8vUmVzdGFydCB0aGUgZ2FtZSA9PiBiYWNrIHRvIG1lbnVcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5zZXRUaW1lU2NhbGUoMSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBsZXQgQ2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLlJlc3VtZUFsbEFuaW1hdGlvbihDYW52YXMpOyAgICBcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMb2FkaW5nXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxvYWRpbmdNYW5hZ2VyID0gY2MuZmluZChcIkNhbnZhcy9Mb2FkaW5nTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJMb2FkaW5nTWFuYWdlclwiKTtcclxuICAgICAgICAgICAgbG9hZGluZ01hbmFnZXIuc3RhcnRMb2FkaW5nKFwibWVudVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL0Rlc3Ryb3kgUGF1c2V0dGluZyBub2RlIGlmIGl0IGV4aXN0c1xyXG4gICAgICAgIGxldCBQYXVzZVNldHRpbmdOb2RlID0gY2MuZmluZChcIkNhbnZhcy9QYXVzZXR0aW5nXCIpO1xyXG4gICAgICAgIGlmIChQYXVzZVNldHRpbmdOb2RlKSBQYXVzZVNldHRpbmdOb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICBlbHNlIGNjLmVycm9yKFwiUGF1c2VTZXR0aW5nIG5vZGUgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgICBcclxuICAgIH1cclxuICAgIFJlc3VtZUdhbWUoKSB7XHJcbiAgICAgICAgbGV0IFBhdXNlU2V0dGluZ05vZGUgPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZ1wiKTtcclxuICAgICAgICBpZiAoUGF1c2VTZXR0aW5nTm9kZSkgUGF1c2VTZXR0aW5nTm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgZWxzZSBjYy5lcnJvcihcIlBhdXNlU2V0dGluZyBub2RlIG5vdCBmb3VuZFwiKTtcclxuICAgICAgICAvL1Jlc3VtZSB0aGUgZ2FtZVxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLnNldFRpbWVTY2FsZSgxKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGxldCBDYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgIHRoaXMuUmVzdW1lQWxsQW5pbWF0aW9uKENhbnZhcyk7IFxyXG4gICAgfVxyXG4gICAgb25Wb2x1bW5DaGFuZ2Uoc2xpZGVyOiBjYy5TbGlkZXIpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHNsaWRlci5wcm9ncmVzcyk7IC8vIDB+MVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoc2xpZGVyLnByb2dyZXNzKTtcclxuICAgICAgICB0aGlzLlZvbHVtblZhbHVlID0gc2xpZGVyLnByb2dyZXNzO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlZvbHVtblZhbHVlXCIsIHRoaXMuVm9sdW1uVmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgICBQYXVzZUFsbEFuaW1hdGlvbihub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IGFuaW1zID0gbm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGZvciAobGV0IGFuaW0gb2YgYW5pbXMpIHtcclxuICAgICAgICAgICAgaWYgKGFuaW0pIGFuaW0ucGF1c2UoKTtcclxuICAgICAgICAgICAgZWxzZSAgY2MuZXJyb3IoXCJBbmltYXRpb24gY29tcG9uZW50IG5vdCBmb3VuZCBvbiBub2RlOlwiLCBub2RlLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB0aGlzLlBhdXNlQWxsQW5pbWF0aW9uKGNoaWxkKTtcclxuICAgIH1cclxuICAgIFJlc3VtZUFsbEFuaW1hdGlvbihub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IGFuaW1zID0gbm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGZvciAobGV0IGFuaW0gb2YgYW5pbXMpIHtcclxuICAgICAgICAgICAgaWYgKGFuaW0pIGFuaW0ucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIGVsc2UgIGNjLmVycm9yKFwiQW5pbWF0aW9uIGNvbXBvbmVudCBub3QgZm91bmQgb24gbm9kZTpcIiwgbm9kZS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikgdGhpcy5SZXN1bWVBbGxBbmltYXRpb24oY2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlNdXNpYygpIHtcclxuICAgICAgICBpZiAodGhpcy5iZ20pIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcbiAgICAgICAgZWxzZSBjYy5lcnJvcihcIkJHTSBub3QgYXNzaWduZWQhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlTXVzaWMoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VtZU11c2ljKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZU11c2ljKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhcnRHYW1lKCl7XHJcbiAgICAgICAgLy9Jbml0aWFsaXplIHRoZSBnYW1lIHN0YXRlXHJcbiAgICAgICAgdGhpcy5MZXZlbCA9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuTGV2ZWxMYWJlbCkgdGhpcy5MZXZlbExhYmVsLnN0cmluZyA9IFwiTGV2ZWw6IFwiKyB0aGlzLkxldmVsO1xyXG4gICAgICAgIGVsc2UgY2MuZXJyb3IoXCJMZXZlbCBMYWJlbCBub3QgZm91bmRcIik7XHJcbiAgICAgICAgLy9zZXQgcGxheWVyIHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFwiUGxheWVyXCIpLlNldFBsYXllcih0aGlzLkxldmVsKTtcclxuICAgICAgICAvL3NldCBNYXBcclxuICAgICAgICBsZXQgR2VuTWFwID0gY2MuZmluZChcIkdhbWVNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIk1hcEdlbmVyYXRvclwiKTtcclxuICAgICAgICBHZW5NYXAuR2VuZXJhdG9yTWFwKCk7XHJcbiAgICAgICAgLy9zZXQgbW9uc3RlclxyXG4gICAgICAgIGxldCBNb25zdGVyTWdyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIk1vbnN0ZXJNYW5hZ2VyXCIpO1xyXG4gICAgICAgIE1vbnN0ZXJNZ3IuU2V0TW9uc3Rlcih0aGlzLkxldmVsKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdvTmV4dExldmVsKCkge1xyXG4gICAgICAgIHRoaXMuTGV2ZWwrKztcclxuICAgICAgICB0aGlzLnNhdmVQcm9ncmVzcyh0aGlzLkxldmVsKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuTGV2ZWxMYWJlbCkge1xyXG4gICAgICAgICAgICB0aGlzLkxldmVsTGFiZWwuc3RyaW5nID0gXCJMZXZlbDogXCIgKyB0aGlzLkxldmVsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwiTGV2ZWwgbGFiZWwgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVnZW5lcmF0ZSB0aGUgbWFwXHJcbiAgICAgICAgY29uc3QgbWFwR2VuID0gY2MuZmluZChcIkdhbWVNYW5hZ2VyXCIpPy5nZXRDb21wb25lbnQoXCJNYXBHZW5lcmF0b3JcIik7XHJcbiAgICAgICAgaWYgKG1hcEdlbikge1xyXG4gICAgICAgICAgICBtYXBHZW4ucmVnZW5lcmF0ZU1hcCh0aGlzLkxldmVsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIk1hcEdlbmVyYXRvciBjb21wb25lbnQgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVzZXQgcGxheWVyIHBvc2l0aW9uXHJcbiAgICAgICAgY29uc3QgcGxheWVyQ29tcCA9IHRoaXMucGxheWVyPy5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIik7XHJcbiAgICAgICAgaWYgKHBsYXllckNvbXApIHtcclxuICAgICAgICAgICAgcGxheWVyQ29tcC5TZXRQbGF5ZXIodGhpcy5MZXZlbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJQbGF5ZXIgY29tcG9uZW50IG5vdCBmb3VuZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IG1vbnN0ZXJcclxuICAgICAgICBjb25zdCBtb25zdGVyTWdyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2VyXCIpPy5nZXRDb21wb25lbnQoXCJNb25zdGVyTWFuYWdlclwiKTtcclxuICAgICAgICBpZiAobW9uc3Rlck1ncikge1xyXG4gICAgICAgICAgICBtb25zdGVyTWdyLlNldE1vbnN0ZXIodGhpcy5MZXZlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhZGp1c3QgY2FtZXJhIHpvb20gYW5kIFVJIHNjYWxpbmdcclxuICAgICAgICBjb25zdCBjYW1lcmEgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhXCIpPy5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKTtcclxuICAgICAgICBpZiAoY2FtZXJhKSB7XHJcbiAgICAgICAgICAgIGNhbWVyYS56b29tUmF0aW8gKj0gMC45OTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IFVJID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKTtcclxuICAgICAgICAgICAgaWYgKFVJKSB7XHJcbiAgICAgICAgICAgICAgICBVSS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICAgICAgICAgIFVJLnNjYWxlWCA9IDEgLyBjYW1lcmEuem9vbVJhdGlvO1xyXG4gICAgICAgICAgICAgICAgVUkuc2NhbGVZID0gMSAvIGNhbWVyYS56b29tUmF0aW87XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJVSSBub3QgZm91bmRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlUHJvZ3Jlc3MobGV2ZWw6IG51bWJlcikge1xyXG4gICAgICAgIGNjLmxvZyhcIlNhdmluZyBwcm9ncmVzcyBmb3IgbGV2ZWw6XCIsIGxldmVsKTtcclxuXHJcbiAgICAgICAgaWYgKCF3aW5kb3cuX2ZpcmViYXNlSW5pdGVkKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJGaXJlYmFzZSBub3QgaW5pdGlhbGl6ZWQuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1c2VyID0gZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyO1xyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiVXNlciBub3QgbG9nZ2VkIGluLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXNlclJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKFwibGVhZGVyYm9hcmQvXCIgKyB1c2VyLnVpZCk7XHJcblxyXG4gICAgICAgIHVzZXJSZWYub25jZShcInZhbHVlXCIpLnRoZW4oKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBzbmFwc2hvdC52YWwoKTtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNMZXZlbCA9IGV4aXN0aW5nPy5oaWdoZXN0TGV2ZWwgfHwgMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChsZXZlbCA+IHByZXZpb3VzTGV2ZWwpIHtcclxuICAgICAgICAgICAgdXNlclJlZi5zZXQoe1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIuZGlzcGxheU5hbWUgfHwgXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgICAgICBoaWdoZXN0TGV2ZWw6IGxldmVsLFxyXG4gICAgICAgICAgICAgICAgbGFzdFVwZGF0ZTogZmlyZWJhc2UuZGF0YWJhc2UuU2VydmVyVmFsdWUuVElNRVNUQU1QXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKGDinIUgVXBkYXRlZCBSZWFsdGltZSBEQiBmb3IgJHt1c2VyLmRpc3BsYXlOYW1lIHx8IFwiVW5rbm93blwifTogTGV2ZWwgJHtsZXZlbH1gKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIuKdjCBGYWlsZWQgdG8gd3JpdGUgdG8gUmVhbHRpbWUgREI6XCIsIGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJObyB1cGRhdGUgbmVlZGVkIOKAlCBwcmV2aW91cyBsZXZlbCBpcyBoaWdoZXIgb3IgZXF1YWwuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwi4p2MIEZhaWxlZCB0byByZWFkIGZyb20gUmVhbHRpbWUgREI6XCIsIGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRMZWFkZXJib2FyZCgpIHtcclxuICAgICAgICBjb25zdCBkYlJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKFwibGVhZGVyYm9hcmRcIik7XHJcbiAgICAgICAgZGJSZWYub25jZShcInZhbHVlXCIpXHJcbiAgICAgICAgICAgIC50aGVuKChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBzbmFwc2hvdC52YWwoKTtcclxuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJMZWFkZXJib2FyZCBpcyBlbXB0eS5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNvcnRlZCA9IE9iamVjdC52YWx1ZXMoZGF0YSlcclxuICAgICAgICAgICAgICAgIC5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4gYi5oaWdoZXN0TGV2ZWwgLSBhLmhpZ2hlc3RMZXZlbClcclxuICAgICAgICAgICAgICAgIC5zbGljZSgwLCAxMCk7XHJcblxyXG4gICAgICAgICAgICBzb3J0ZWQuZm9yRWFjaCgoZW50cnk6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKGAjJHtpbmRleCArIDF9ICR7ZW50cnkudXNlcm5hbWV9OiBMZXZlbCAke2VudHJ5LmhpZ2hlc3RMZXZlbH1gKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCLinYwgRmFpbGVkIHRvIGxvYWQgbGVhZGVyYm9hcmQgZnJvbSBSZWFsdGltZSBEQjpcIiwgZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=