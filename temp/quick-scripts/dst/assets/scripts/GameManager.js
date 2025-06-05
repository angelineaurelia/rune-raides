
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBVzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBc1ZDO1FBcFZVLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBR3pCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQTRVN0IsQ0FBQztJQTFVRyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzFELElBQUksWUFBWSxFQUFFO1lBQ2QsSUFBSSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2xELFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMvQixXQUFXLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztZQUN0QyxXQUFXLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztZQUNsQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3RFO2FBQU07WUFDSCxFQUFFLENBQUMsS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7U0FDbkU7UUFDRCw2QkFBNkI7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUs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QztZQUM1QixJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNQLEVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDaEMsT0FBTzthQUNWO1lBRUQsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7aUJBQzdCLElBQUksQ0FBQyxVQUFDLENBQU0sRUFBRSxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQS9CLENBQStCLENBQUM7aUJBQ3pELEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQVUsRUFBRSxLQUFhO2dCQUNyQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQUksS0FBSyxHQUFHLENBQUMsVUFBSSxLQUFLLENBQUMsUUFBUSxnQkFBVyxLQUFLLENBQUMsWUFBYyxDQUFDLENBQUM7WUFDM0UsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxHQUFRO1lBQ2hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0RBQWdELEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBblZEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs0Q0FDRDtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNnQjtJQUxsQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBc1YvQjtJQUFELGtCQUFDO0NBdFZELEFBc1ZDLENBdFZ3QyxFQUFFLENBQUMsU0FBUyxHQXNWcEQ7a0JBdFZvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCBMb2FkaW5nTWFuYWdlciBmcm9tIFwiLi9NZW51L0xvYWRpbmdNYW5hZ2VyXCI7XG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlOiBhbnk7XG4vL2ZvciBGaXJlYmFzZSBpbml0aWFsaXphdGlvblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBXaW5kb3cge1xuICAgICAgICBfZmlyZWJhc2VJbml0ZWQ/OiBib29sZWFuO1xuICAgIH1cbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBwdWJsaWMgYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHB1YmxpYyBMZXZlbExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIG1heGhwOiBudW1iZXIgPSAxMDtcbiAgICBwcml2YXRlIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgcHVibGljIFZvbHVtblZhbHVlIDogbnVtYmVyID0gbnVsbDtcbiAgICBwdWJsaWMgTGV2ZWw6IG51bWJlciA9IDE7XG5cbiAgICBvbkxvYWQoKXtcbiAgICAgICAgbGV0IHBhdXNlQnRuTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUGF1c2VcIik7IFxuICAgICAgICBpZiAocGF1c2VCdG5Ob2RlKSB7XG4gICAgICAgICAgICBsZXQgUGF1c2VCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICAgICAgUGF1c2VCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgUGF1c2VCdXR0b24uY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xuICAgICAgICAgICAgUGF1c2VCdXR0b24uaGFuZGxlciA9IFwiUGF1c2VHYW1lXCI7XG4gICAgICAgICAgICBwYXVzZUJ0bk5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChQYXVzZUJ1dHRvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIlBhdXNlIOaMiemIleevgOm7nuaJvuS4jeWIsO+8jOiri+aqouafpSBDYW52YXMvTWFpbiBDYW1lcmEvVUkvUGF1c2Ug5piv5ZCm5a2Y5Zyo77yBXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIGxldmVsIGxhYmVsXG4gICAgICAgIHRoaXMuTGV2ZWxMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvTGV2ZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgaWYgKHRoaXMuTGV2ZWxMYWJlbCkgdGhpcy5MZXZlbExhYmVsLnN0cmluZyA9IFwiTGV2ZWw6IFwiICsgdGhpcy5MZXZlbDtcbiAgICAgICAgZWxzZSBjYy5lcnJvcihcIkxldmVsIGxhYmVsIG5vdCBmb3VuZFwiKTtcblxuICAgICAgICB0aGlzLnBsYXllciA9IGNjLmZpbmQoXCJDYW52YXMvTWFwTWFuYWdlci9BY3RvcnMvUGxheWVyXCIpO1xuXG4gICAgICAgIC8vYXNzaWduIGJsYW5rIHNwYWNlIGZvciBuZXh0IGxldmVsXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBjYy5sb2coXCJJcyBGaXJlYmFzZSBpbml0aWFsaXplZD9cIiwgd2luZG93Ll9maXJlYmFzZUluaXRlZCk7XG5cbiAgICAgICAgY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgICAgICAgICBhcGlLZXk6IFwiQUl6YVN5REZXNC1lbVdkSTFnaGdaV1dHcDF3cW9XdkF2VHdBcXJRXCIsXG4gICAgICAgICAgICBhdXRoRG9tYWluOiBcInJ1bmUtcmFpZHMuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IFwicnVuZS1yYWlkc1wiLFxuICAgICAgICAgICAgc3RvcmFnZUJ1Y2tldDogXCJydW5lLXJhaWRzLmZpcmViYXNlc3RvcmFnZS5hcHBcIixcbiAgICAgICAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjUzMDUxNDM2MDg0M1wiLFxuICAgICAgICAgICAgYXBwSWQ6IFwiMTo1MzA1MTQzNjA4NDM6d2ViOjFjZGRhOWQ3MmJiNGI1MjkzMjI1MGVcIixcbiAgICAgICAgICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1CMUM1RkcxWVNOXCJcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIXdpbmRvdy5fZmlyZWJhc2VJbml0ZWQpIHtcbiAgICAgICAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuICAgICAgICAgICAgd2luZG93Ll9maXJlYmFzZUluaXRlZCA9IHRydWU7XG4gICAgICAgICAgICBjYy5sb2coXCLinIUgRmlyZWJhc2UgaW5pdGlhbGl6ZWQgaW4gR2FtZU1hbmFnZXIudHNcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5sb2coXCLihLnvuI8gRmlyZWJhc2UgYWxyZWFkeSBpbml0aWFsaXplZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5zcGFjZSkge1xuICAgICAgICAgICAgdGhpcy5Hb05leHRMZXZlbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIGxldCBzYXZlZFZvbHVtbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlZvbHVtblZhbHVlXCIpO1xuICAgICAgICBpZiAoc2F2ZWRWb2x1bW4hPT1udWxsKSB0aGlzLlZvbHVtblZhbHVlID0gTnVtYmVyKHNhdmVkVm9sdW1uKTtcbiAgICAgICAgZWxzZSB0aGlzLlZvbHVtblZhbHVlID0gMC41O1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKHRoaXMuVm9sdW1uVmFsdWUpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh0aGlzLlZvbHVtblZhbHVlKTtcbiAgICAgICAgdGhpcy5wbGF5TXVzaWMoKTtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcblxuICAgIH1cblxuICAgIFBhdXNlR2FtZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQYXVzZSBwcmVmYWIgbG9hZFwiKTtcbiAgICAgICAgLy9QYXVzZXNldHRpbmcgaXMgYSBwcmVmYWJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWJzL1BhdXNlU2V0dGluZ1wiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgUGF1c2VTZXR0aW5nIHByZWZhYjpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IFBhdXNlTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICBjb25zdCBDYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgQ2FudmFzLmFkZENoaWxkKFBhdXNlTm9kZSk7XG4gICAgICAgICAgICBQYXVzZU5vZGUubmFtZSA9IFwiUGF1c2VTZXR0aW5nXCI7XG5cbiAgICAgICAgICAgIGxldCBjYW1lcmFOb2RlID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYVwiKTtcbiAgICAgICAgICAgIGlmIChjYW1lcmFOb2RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHdvcmxkUG9zID0gY2FtZXJhTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKTtcbiAgICAgICAgICAgICAgICBsZXQgbG9jYWxQb3MgPSBDYW52YXMuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xuICAgICAgICAgICAgICAgIFBhdXNlTm9kZS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oXCLmib7kuI3liLAgTWFpbiBDYW1lcmEsIOS9v+eUqOmgkOioreS9jee9riAoMCwgMClcIik7XG4gICAgICAgICAgICAgICAgUGF1c2VOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBQYXVzZU5vZGUuc2NhbGVYID0gMTtcbiAgICAgICAgICAgIFBhdXNlTm9kZS5zY2FsZVkgPSAxO1xuICAgICAgICAgICAgLy9QYXVzZSB0aGUgZ2FtZe+8jOWBnOatoumNteebpOS6i+S7tlxuICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuc2V0VGltZVNjYWxlKDApO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgQ2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgICAgIHRoaXMuUGF1c2VBbGxBbmltYXRpb24oQ2FudmFzKTsgXG4gICAgICAgICAgICB0aGlzLmluaXRQYXVzZSgpO1xuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhcIlBhdXNlIHByZWZhYiBsb2FkLi4uXCIpO1xuXG4gICAgfVxuICAgIGluaXRQYXVzZSgpIHtcbiAgICAgICAgLy9SZXN1bWUgYnV0dG9uXG4gICAgICAgIGxldCBSZXN1bWVCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBSZXN1bWVCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBSZXN1bWVCdXR0b24uY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xuICAgICAgICBSZXN1bWVCdXR0b24uaGFuZGxlciA9IFwiUmVzdW1lR2FtZVwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZy9SZXN1bWVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChSZXN1bWVCdXR0b24pO1xuICAgICAgICAvL1ZvbHVtbiBzbGlkZXJcbiAgICAgICAgbGV0IFZvbHVtblNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL1ZvbHVtbi9Wb2x1bW5TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIGxldCBzYXZlZFZvbHVtbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlZvbHVtblZhbHVlXCIpO1xuICAgICAgICBpZiAoc2F2ZWRWb2x1bW4gIT09IG51bGwpIFZvbHVtblNsaWRlci5wcm9ncmVzcz0gTnVtYmVyKHNhdmVkVm9sdW1uKTtcbiAgICAgICAgZWxzZSBWb2x1bW5TbGlkZXIucHJvZ3Jlc3MgPSAwLjU7XG4gICAgICAgIFZvbHVtblNsaWRlci5ub2RlLm9uKCdzbGlkZScsIHRoaXMub25Wb2x1bW5DaGFuZ2UsIHRoaXMpO1xuICAgICAgICAvL1Jlc3RhcnQgYnV0dG9uXG4gICAgICAgIGxldCBSZXN0YXJ0QnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgUmVzdGFydEJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIFJlc3RhcnRCdXR0b24uY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xuICAgICAgICBSZXN0YXJ0QnV0dG9uLmhhbmRsZXIgPSBcIlJlc3RhcnRHYW1lXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL1Jlc3RhcnRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChSZXN0YXJ0QnV0dG9uKTtcbiAgICAgICAgLy9cbiAgICAgICAgbGV0IERlc2NCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBEZXNjQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgRGVzY0J1dHRvbi5jb21wb25lbnQgPSBcIkdhbWVNYW5hZ2VyXCI7XG4gICAgICAgIERlc2NCdXR0b24uaGFuZGxlciA9IFwic2hvd0Rlc2NcIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmcvSG93XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goRGVzY0J1dHRvbik7XG4gICAgICAgIGxldCBEZXNjID0gY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmcvRGVzY3JpcHRpb25cIik7XG4gICAgICAgIERlc2MuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGxldCBFeGl0RGVzY0J1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIEV4aXREZXNjQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgRXhpdERlc2NCdXR0b24uY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xuICAgICAgICBFeGl0RGVzY0J1dHRvbi5oYW5kbGVyID0gXCJIaWRlRGVzY1wiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZy9EZXNjcmlwdGlvbi9FeGl0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goRXhpdERlc2NCdXR0b24pO1xuICAgIH1cbiAgICBIaWRlRGVzYygpIHtcbiAgICAgICAgbGV0IERlc2MgPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZy9EZXNjcmlwdGlvblwiKTtcbiAgICAgICAgRGVzYy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgc2hvd0Rlc2MoKSB7XG4gICAgICAgIGxldCBEZXNjID0gY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmcvRGVzY3JpcHRpb25cIik7XG4gICAgICAgIERlc2MuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgUmVzdGFydEdhbWUoKSB7Ly9SZXN0YXJ0IHRoZSBnYW1lID0+IGJhY2sgdG8gbWVudVxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5zZXRUaW1lU2NhbGUoMSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGxldCBDYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xuICAgICAgICB0aGlzLlJlc3VtZUFsbEFuaW1hdGlvbihDYW52YXMpOyAgICBcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9hZGluZ1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbG9hZGluZ01hbmFnZXIgPSBjYy5maW5kKFwiQ2FudmFzL0xvYWRpbmdNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkxvYWRpbmdNYW5hZ2VyXCIpO1xuICAgICAgICAgICAgbG9hZGluZ01hbmFnZXIuc3RhcnRMb2FkaW5nKFwibWVudVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vRGVzdHJveSBQYXVzZXR0aW5nIG5vZGUgaWYgaXQgZXhpc3RzXG4gICAgICAgIGxldCBQYXVzZVNldHRpbmdOb2RlID0gY2MuZmluZChcIkNhbnZhcy9QYXVzZXR0aW5nXCIpO1xuICAgICAgICBpZiAoUGF1c2VTZXR0aW5nTm9kZSkgUGF1c2VTZXR0aW5nTm9kZS5kZXN0cm95KCk7XG4gICAgICAgIGVsc2UgY2MuZXJyb3IoXCJQYXVzZVNldHRpbmcgbm9kZSBub3QgZm91bmRcIik7XG4gICAgICAgICBcbiAgICB9XG4gICAgUmVzdW1lR2FtZSgpIHtcbiAgICAgICAgbGV0IFBhdXNlU2V0dGluZ05vZGUgPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZ1wiKTtcbiAgICAgICAgaWYgKFBhdXNlU2V0dGluZ05vZGUpIFBhdXNlU2V0dGluZ05vZGUuZGVzdHJveSgpO1xuICAgICAgICBlbHNlIGNjLmVycm9yKFwiUGF1c2VTZXR0aW5nIG5vZGUgbm90IGZvdW5kXCIpO1xuICAgICAgICAvL1Jlc3VtZSB0aGUgZ2FtZVxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuc2V0VGltZVNjYWxlKDEpO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBsZXQgQ2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5SZXN1bWVBbGxBbmltYXRpb24oQ2FudmFzKTsgXG4gICAgfVxuICAgIG9uVm9sdW1uQ2hhbmdlKHNsaWRlcjogY2MuU2xpZGVyKXtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoc2xpZGVyLnByb2dyZXNzKTsgLy8gMH4xXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoc2xpZGVyLnByb2dyZXNzKTtcbiAgICAgICAgdGhpcy5Wb2x1bW5WYWx1ZSA9IHNsaWRlci5wcm9ncmVzcztcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVm9sdW1uVmFsdWVcIiwgdGhpcy5Wb2x1bW5WYWx1ZS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgUGF1c2VBbGxBbmltYXRpb24obm9kZTogY2MuTm9kZSkge1xuICAgICAgICBsZXQgYW5pbXMgPSBub2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLkFuaW1hdGlvbik7XG4gICAgICAgIGZvciAobGV0IGFuaW0gb2YgYW5pbXMpIHtcbiAgICAgICAgICAgIGlmIChhbmltKSBhbmltLnBhdXNlKCk7XG4gICAgICAgICAgICBlbHNlICBjYy5lcnJvcihcIkFuaW1hdGlvbiBjb21wb25lbnQgbm90IGZvdW5kIG9uIG5vZGU6XCIsIG5vZGUubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHRoaXMuUGF1c2VBbGxBbmltYXRpb24oY2hpbGQpO1xuICAgIH1cbiAgICBSZXN1bWVBbGxBbmltYXRpb24obm9kZTogY2MuTm9kZSkge1xuICAgICAgICBsZXQgYW5pbXMgPSBub2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLkFuaW1hdGlvbik7XG4gICAgICAgIGZvciAobGV0IGFuaW0gb2YgYW5pbXMpIHtcbiAgICAgICAgICAgIGlmIChhbmltKSBhbmltLnJlc3VtZSgpO1xuICAgICAgICAgICAgZWxzZSAgY2MuZXJyb3IoXCJBbmltYXRpb24gY29tcG9uZW50IG5vdCBmb3VuZCBvbiBub2RlOlwiLCBub2RlLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB0aGlzLlJlc3VtZUFsbEFuaW1hdGlvbihjaGlsZCk7XG4gICAgfVxuXG4gICAgcGxheU11c2ljKCkge1xuICAgICAgICBpZiAodGhpcy5iZ20pIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XG4gICAgICAgIGVsc2UgY2MuZXJyb3IoXCJCR00gbm90IGFzc2lnbmVkIVwiKTtcbiAgICB9XG5cbiAgICBwYXVzZU11c2ljKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XG4gICAgfVxuXG4gICAgcmVzdW1lTXVzaWMoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZU11c2ljKCk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGFydEdhbWUoKXtcbiAgICAgICAgLy9Jbml0aWFsaXplIHRoZSBnYW1lIHN0YXRlXG4gICAgICAgIHRoaXMuTGV2ZWwgPSAxO1xuICAgICAgICBpZiAodGhpcy5MZXZlbExhYmVsKSB0aGlzLkxldmVsTGFiZWwuc3RyaW5nID0gXCJMZXZlbDogXCIrIHRoaXMuTGV2ZWw7XG4gICAgICAgIGVsc2UgY2MuZXJyb3IoXCJMZXZlbCBMYWJlbCBub3QgZm91bmRcIik7XG4gICAgICAgIC8vc2V0IHBsYXllciBwb3NpdGlvblxuICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIikuU2V0UGxheWVyKHRoaXMuTGV2ZWwpO1xuICAgICAgICAvL3NldCBNYXBcbiAgICAgICAgbGV0IEdlbk1hcCA9IGNjLmZpbmQoXCJHYW1lTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJNYXBHZW5lcmF0b3JcIik7XG4gICAgICAgIEdlbk1hcC5HZW5lcmF0b3JNYXAoKTtcbiAgICAgICAgLy9zZXQgbW9uc3RlclxuICAgICAgICBsZXQgTW9uc3Rlck1nciA9IGNjLmZpbmQoXCJDYW52YXMvTWFwTWFuYWdlci9Nb25zdGVyTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJNb25zdGVyTWFuYWdlclwiKTtcbiAgICAgICAgTW9uc3Rlck1nci5TZXRNb25zdGVyKHRoaXMuTGV2ZWwpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIEdvTmV4dExldmVsKCkge1xuICAgICAgICB0aGlzLkxldmVsKys7XG4gICAgICAgIHRoaXMuc2F2ZVByb2dyZXNzKHRoaXMuTGV2ZWwpO1xuXG4gICAgICAgIGlmICh0aGlzLkxldmVsTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuTGV2ZWxMYWJlbC5zdHJpbmcgPSBcIkxldmVsOiBcIiArIHRoaXMuTGV2ZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIkxldmVsIGxhYmVsIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlZ2VuZXJhdGUgdGhlIG1hcFxuICAgICAgICBjb25zdCBtYXBHZW4gPSBjYy5maW5kKFwiR2FtZU1hbmFnZXJcIik/LmdldENvbXBvbmVudChcIk1hcEdlbmVyYXRvclwiKTtcbiAgICAgICAgaWYgKG1hcEdlbikge1xuICAgICAgICAgICAgbWFwR2VuLnJlZ2VuZXJhdGVNYXAodGhpcy5MZXZlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIk1hcEdlbmVyYXRvciBjb21wb25lbnQgbm90IGZvdW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzZXQgcGxheWVyIHBvc2l0aW9uXG4gICAgICAgIGNvbnN0IHBsYXllckNvbXAgPSB0aGlzLnBsYXllcj8uZ2V0Q29tcG9uZW50KFwiUGxheWVyXCIpO1xuICAgICAgICBpZiAocGxheWVyQ29tcCkge1xuICAgICAgICAgICAgcGxheWVyQ29tcC5TZXRQbGF5ZXIodGhpcy5MZXZlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIlBsYXllciBjb21wb25lbnQgbm90IGZvdW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzZXQgbW9uc3RlclxuICAgICAgICBjb25zdCBtb25zdGVyTWdyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2VyXCIpPy5nZXRDb21wb25lbnQoXCJNb25zdGVyTWFuYWdlclwiKTtcbiAgICAgICAgaWYgKG1vbnN0ZXJNZ3IpIHtcbiAgICAgICAgICAgIG1vbnN0ZXJNZ3IuU2V0TW9uc3Rlcih0aGlzLkxldmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkanVzdCBjYW1lcmEgem9vbSBhbmQgVUkgc2NhbGluZ1xuICAgICAgICBjb25zdCBjYW1lcmEgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhXCIpPy5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKTtcbiAgICAgICAgaWYgKGNhbWVyYSkge1xuICAgICAgICAgICAgY2FtZXJhLnpvb21SYXRpbyAqPSAwLjk5O1xuXG4gICAgICAgICAgICBjb25zdCBVSSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUlcIik7XG4gICAgICAgICAgICBpZiAoVUkpIHtcbiAgICAgICAgICAgICAgICBVSS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgICAgICAgICBVSS5zY2FsZVggPSAxIC8gY2FtZXJhLnpvb21SYXRpbztcbiAgICAgICAgICAgICAgICBVSS5zY2FsZVkgPSAxIC8gY2FtZXJhLnpvb21SYXRpbztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwiVUkgbm90IGZvdW5kXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzYXZlUHJvZ3Jlc3MobGV2ZWw6IG51bWJlcikge1xuICAgICAgICBjYy5sb2coXCJTYXZpbmcgcHJvZ3Jlc3MgZm9yIGxldmVsOlwiLCBsZXZlbCk7XG5cbiAgICAgICAgaWYgKCF3aW5kb3cuX2ZpcmViYXNlSW5pdGVkKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiRmlyZWJhc2Ugbm90IGluaXRpYWxpemVkLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXI7XG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgY2Mud2FybihcIlVzZXIgbm90IGxvZ2dlZCBpbi5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2VyUmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoXCJsZWFkZXJib2FyZC9cIiArIHVzZXIudWlkKTtcblxuICAgICAgICB1c2VyUmVmLm9uY2UoXCJ2YWx1ZVwiKS50aGVuKChzbmFwc2hvdDogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IHNuYXBzaG90LnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNMZXZlbCA9IGV4aXN0aW5nPy5oaWdoZXN0TGV2ZWwgfHwgMDtcblxuICAgICAgICAgICAgaWYgKGxldmVsID4gcHJldmlvdXNMZXZlbCkge1xuICAgICAgICAgICAgdXNlclJlZi5zZXQoe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLmRpc3BsYXlOYW1lIHx8IFwiVW5rbm93blwiLFxuICAgICAgICAgICAgICAgIGhpZ2hlc3RMZXZlbDogbGV2ZWwsXG4gICAgICAgICAgICAgICAgbGFzdFVwZGF0ZTogZmlyZWJhc2UuZGF0YWJhc2UuU2VydmVyVmFsdWUuVElNRVNUQU1QXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5sb2coYOKchSBVcGRhdGVkIFJlYWx0aW1lIERCIGZvciAke3VzZXIuZGlzcGxheU5hbWUgfHwgXCJVbmtub3duXCJ9OiBMZXZlbCAke2xldmVsfWApO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCLinYwgRmFpbGVkIHRvIHdyaXRlIHRvIFJlYWx0aW1lIERCOlwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MubG9nKFwiTm8gdXBkYXRlIG5lZWRlZCDigJQgcHJldmlvdXMgbGV2ZWwgaXMgaGlnaGVyIG9yIGVxdWFsLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIuKdjCBGYWlsZWQgdG8gcmVhZCBmcm9tIFJlYWx0aW1lIERCOlwiLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZExlYWRlcmJvYXJkKCkge1xuICAgICAgICBjb25zdCBkYlJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKFwibGVhZGVyYm9hcmRcIik7XG4gICAgICAgIGRiUmVmLm9uY2UoXCJ2YWx1ZVwiKVxuICAgICAgICAgICAgLnRoZW4oKHNuYXBzaG90OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBzbmFwc2hvdC52YWwoKTtcbiAgICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcIkxlYWRlcmJvYXJkIGlzIGVtcHR5LlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNvcnRlZCA9IE9iamVjdC52YWx1ZXMoZGF0YSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IGIuaGlnaGVzdExldmVsIC0gYS5oaWdoZXN0TGV2ZWwpXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIDEwKTtcblxuICAgICAgICAgICAgc29ydGVkLmZvckVhY2goKGVudHJ5OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5sb2coYCMke2luZGV4ICsgMX0gJHtlbnRyeS51c2VybmFtZX06IExldmVsICR7ZW50cnkuaGlnaGVzdExldmVsfWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCLinYwgRmFpbGVkIHRvIGxvYWQgbGVhZGVyYm9hcmQgZnJvbSBSZWFsdGltZSBEQjpcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn0iXX0=