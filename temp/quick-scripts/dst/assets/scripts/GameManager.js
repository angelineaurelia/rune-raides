
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
        _this._hasShownGameOver = false;
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
        }

        if (!window._firebaseInited) {
            firebase.initializeApp(firebaseConfig);
            window._firebaseInited = true;
            cc.log("✅ Firebase initialized in GameManager.ts");
        } else {
            cc.log("ℹ️ Firebase already initialized");
        };*/
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
        if (this._hasShownGameOver)
            return;
        this._hasShownGameOver = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBVzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBeVhDO1FBdlhVLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBR3pCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLHVCQUFpQixHQUFHLEtBQUssQ0FBQzs7SUE4V3RDLENBQUM7SUE1V0csNEJBQU0sR0FBTjtRQUNJLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUMxRCxJQUFJLFlBQVksRUFBRTtZQUNkLElBQUksV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsRCxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDL0IsV0FBVyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7WUFDdEMsV0FBVyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7WUFDbEMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN0RTthQUFNO1lBQ0gsRUFBRSxDQUFDLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1NBQ25FO1FBQ0QsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyw2QkFB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LENBQUMsSUFBSSxFQUFFO2dCQUNQLEVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDaEMsT0FBTzthQUNWO1lBRUQsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7aUJBQzdCLElBQUksQ0FBQyxVQUFDLENBQU0sRUFBRSxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQS9CLENBQStCLENBQUM7aUJBQ3pELEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQVUsRUFBRSxLQUFhO2dCQUNyQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQUksS0FBSyxHQUFHLENBQUMsVUFBSSxLQUFLLENBQUMsUUFBUSxnQkFBVyxLQUFLLENBQUMsWUFBYyxDQUFDLENBQUM7WUFDM0UsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxHQUFRO1lBQ2hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0RBQWdELEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBdFhEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs0Q0FDRDtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNnQjtJQUxsQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBeVgvQjtJQUFELGtCQUFDO0NBelhELEFBeVhDLENBelh3QyxFQUFFLENBQUMsU0FBUyxHQXlYcEQ7a0JBelhvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCBMb2FkaW5nTWFuYWdlciBmcm9tIFwiLi9NZW51L0xvYWRpbmdNYW5hZ2VyXCI7XG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlOiBhbnk7XG4vL2ZvciBGaXJlYmFzZSBpbml0aWFsaXphdGlvblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBXaW5kb3cge1xuICAgICAgICBfZmlyZWJhc2VJbml0ZWQ/OiBib29sZWFuO1xuICAgIH1cbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBwdWJsaWMgYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHB1YmxpYyBMZXZlbExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIG1heGhwOiBudW1iZXIgPSAxMDtcbiAgICBwcml2YXRlIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgcHVibGljIFZvbHVtblZhbHVlIDogbnVtYmVyID0gbnVsbDtcbiAgICBwdWJsaWMgTGV2ZWw6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBfaGFzU2hvd25HYW1lT3ZlciA9IGZhbHNlO1xuXG4gICAgb25Mb2FkKCl7XG4gICAgICAgIGxldCBwYXVzZUJ0bk5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1BhdXNlXCIpOyBcbiAgICAgICAgaWYgKHBhdXNlQnRuTm9kZSkge1xuICAgICAgICAgICAgbGV0IFBhdXNlQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgICAgIFBhdXNlQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgICAgIFBhdXNlQnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcbiAgICAgICAgICAgIFBhdXNlQnV0dG9uLmhhbmRsZXIgPSBcIlBhdXNlR2FtZVwiO1xuICAgICAgICAgICAgcGF1c2VCdG5Ob2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goUGF1c2VCdXR0b24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJQYXVzZSDmjInpiJXnr4Dpu57mib7kuI3liLDvvIzoq4vmqqLmn6UgQ2FudmFzL01haW4gQ2FtZXJhL1VJL1BhdXNlIOaYr+WQpuWtmOWcqO+8gVwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBsZXZlbCBsYWJlbFxuICAgICAgICB0aGlzLkxldmVsTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL0xldmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGlmICh0aGlzLkxldmVsTGFiZWwpIHRoaXMuTGV2ZWxMYWJlbC5zdHJpbmcgPSBcIkxldmVsOiBcIiArIHRoaXMuTGV2ZWw7XG4gICAgICAgIGVsc2UgY2MuZXJyb3IoXCJMZXZlbCBsYWJlbCBub3QgZm91bmRcIik7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvQWN0b3JzL1BsYXllclwiKTtcblxuICAgICAgICAvL2Fzc2lnbiBibGFuayBzcGFjZSBmb3IgbmV4dCBsZXZlbFxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2MubG9nKFwiSXMgRmlyZWJhc2UgaW5pdGlhbGl6ZWQ/XCIsIHdpbmRvdy5fZmlyZWJhc2VJbml0ZWQpO1xuXG4gICAgICAgIC8qY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgICAgICAgICBhcGlLZXk6IFwiQUl6YVN5REZXNC1lbVdkSTFnaGdaV1dHcDF3cW9XdkF2VHdBcXJRXCIsXG4gICAgICAgICAgICBhdXRoRG9tYWluOiBcInJ1bmUtcmFpZHMuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IFwicnVuZS1yYWlkc1wiLFxuICAgICAgICAgICAgc3RvcmFnZUJ1Y2tldDogXCJydW5lLXJhaWRzLmZpcmViYXNlc3RvcmFnZS5hcHBcIixcbiAgICAgICAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjUzMDUxNDM2MDg0M1wiLFxuICAgICAgICAgICAgYXBwSWQ6IFwiMTo1MzA1MTQzNjA4NDM6d2ViOjFjZGRhOWQ3MmJiNGI1MjkzMjI1MGVcIixcbiAgICAgICAgICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1CMUM1RkcxWVNOXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghd2luZG93Ll9maXJlYmFzZUluaXRlZCkge1xuICAgICAgICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gICAgICAgICAgICB3aW5kb3cuX2ZpcmViYXNlSW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLmxvZyhcIuKchSBGaXJlYmFzZSBpbml0aWFsaXplZCBpbiBHYW1lTWFuYWdlci50c1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIuKEue+4jyBGaXJlYmFzZSBhbHJlYWR5IGluaXRpYWxpemVkXCIpO1xuICAgICAgICB9OyovXG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgIH1cblxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLnNwYWNlKSB7XG4gICAgICAgICAgICB0aGlzLkdvTmV4dExldmVsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgbGV0IHNhdmVkVm9sdW1uID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVm9sdW1uVmFsdWVcIik7XG4gICAgICAgIGlmIChzYXZlZFZvbHVtbiE9PW51bGwpIHRoaXMuVm9sdW1uVmFsdWUgPSBOdW1iZXIoc2F2ZWRWb2x1bW4pO1xuICAgICAgICBlbHNlIHRoaXMuVm9sdW1uVmFsdWUgPSAwLjU7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodGhpcy5Wb2x1bW5WYWx1ZSk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHRoaXMuVm9sdW1uVmFsdWUpO1xuICAgICAgICB0aGlzLnBsYXlNdXNpYygpO1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuXG4gICAgfVxuXG4gICAgUGF1c2VHYW1lKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBhdXNlIHByZWZhYiBsb2FkXCIpO1xuICAgICAgICAvL1BhdXNlc2V0dGluZyBpcyBhIHByZWZhYlxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvUGF1c2VTZXR0aW5nXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBQYXVzZVNldHRpbmcgcHJlZmFiOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgUGF1c2VOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIGNvbnN0IENhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4gICAgICAgICAgICBDYW52YXMuYWRkQ2hpbGQoUGF1c2VOb2RlKTtcbiAgICAgICAgICAgIFBhdXNlTm9kZS5uYW1lID0gXCJQYXVzZVNldHRpbmdcIjtcblxuICAgICAgICAgICAgbGV0IGNhbWVyYU5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhXCIpO1xuICAgICAgICAgICAgaWYgKGNhbWVyYU5vZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgd29ybGRQb3MgPSBjYW1lcmFOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xuICAgICAgICAgICAgICAgIGxldCBsb2NhbFBvcyA9IENhbnZhcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4gICAgICAgICAgICAgICAgUGF1c2VOb2RlLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2Mud2FybihcIuaJvuS4jeWIsCBNYWluIENhbWVyYSwg5L2/55So6aCQ6Kit5L2N572uICgwLCAwKVwiKTtcbiAgICAgICAgICAgICAgICBQYXVzZU5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFBhdXNlTm9kZS5zY2FsZVggPSAxO1xuICAgICAgICAgICAgUGF1c2VOb2RlLnNjYWxlWSA9IDE7XG4gICAgICAgICAgICAvL1BhdXNlIHRoZSBnYW1l77yM5YGc5q2i6Y2155uk5LqL5Lu2XG4gICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5zZXRUaW1lU2NhbGUoMCk7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBDYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgdGhpcy5QYXVzZUFsbEFuaW1hdGlvbihDYW52YXMpOyBcbiAgICAgICAgICAgIHRoaXMuaW5pdFBhdXNlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGF1c2UgcHJlZmFiIGxvYWQuLi5cIik7XG5cbiAgICB9XG4gICAgaW5pdFBhdXNlKCkge1xuICAgICAgICAvL1Jlc3VtZSBidXR0b25cbiAgICAgICAgbGV0IFJlc3VtZUJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIFJlc3VtZUJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIFJlc3VtZUJ1dHRvbi5jb21wb25lbnQgPSBcIkdhbWVNYW5hZ2VyXCI7XG4gICAgICAgIFJlc3VtZUJ1dHRvbi5oYW5kbGVyID0gXCJSZXN1bWVHYW1lXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL1Jlc3VtZVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKFJlc3VtZUJ1dHRvbik7XG4gICAgICAgIC8vVm9sdW1uIHNsaWRlclxuICAgICAgICBsZXQgVm9sdW1uU2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmcvVm9sdW1uL1ZvbHVtblNsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgbGV0IHNhdmVkVm9sdW1uID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVm9sdW1uVmFsdWVcIik7XG4gICAgICAgIGlmIChzYXZlZFZvbHVtbiAhPT0gbnVsbCkgVm9sdW1uU2xpZGVyLnByb2dyZXNzPSBOdW1iZXIoc2F2ZWRWb2x1bW4pO1xuICAgICAgICBlbHNlIFZvbHVtblNsaWRlci5wcm9ncmVzcyA9IDAuNTtcbiAgICAgICAgVm9sdW1uU2xpZGVyLm5vZGUub24oJ3NsaWRlJywgdGhpcy5vblZvbHVtbkNoYW5nZSwgdGhpcyk7XG4gICAgICAgIC8vUmVzdGFydCBidXR0b25cbiAgICAgICAgbGV0IFJlc3RhcnRCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBSZXN0YXJ0QnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgUmVzdGFydEJ1dHRvbi5jb21wb25lbnQgPSBcIkdhbWVNYW5hZ2VyXCI7XG4gICAgICAgIFJlc3RhcnRCdXR0b24uaGFuZGxlciA9IFwiUmVzdGFydEdhbWVcIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmcvUmVzdGFydFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKFJlc3RhcnRCdXR0b24pO1xuICAgICAgICAvL1xuICAgICAgICBsZXQgRGVzY0J1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIERlc2NCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBEZXNjQnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcbiAgICAgICAgRGVzY0J1dHRvbi5oYW5kbGVyID0gXCJzaG93RGVzY1wiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZy9Ib3dcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChEZXNjQnV0dG9uKTtcbiAgICAgICAgbGV0IERlc2MgPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZy9EZXNjcmlwdGlvblwiKTtcbiAgICAgICAgRGVzYy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IEV4aXREZXNjQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgRXhpdERlc2NCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBFeGl0RGVzY0J1dHRvbi5jb21wb25lbnQgPSBcIkdhbWVNYW5hZ2VyXCI7XG4gICAgICAgIEV4aXREZXNjQnV0dG9uLmhhbmRsZXIgPSBcIkhpZGVEZXNjXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL0Rlc2NyaXB0aW9uL0V4aXRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChFeGl0RGVzY0J1dHRvbik7XG4gICAgfVxuICAgIEhpZGVEZXNjKCkge1xuICAgICAgICBsZXQgRGVzYyA9IGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL0Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICBEZXNjLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBzaG93RGVzYygpIHtcbiAgICAgICAgbGV0IERlc2MgPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZy9EZXNjcmlwdGlvblwiKTtcbiAgICAgICAgRGVzYy5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBSZXN0YXJ0R2FtZSgpIHsvL1Jlc3RhcnQgdGhlIGdhbWUgPT4gYmFjayB0byBtZW51XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLnNldFRpbWVTY2FsZSgxKTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgbGV0IENhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4gICAgICAgIHRoaXMuUmVzdW1lQWxsQW5pbWF0aW9uKENhbnZhcyk7ICAgIFxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMb2FkaW5nXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBsb2FkaW5nTWFuYWdlciA9IGNjLmZpbmQoXCJDYW52YXMvTG9hZGluZ01hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiTG9hZGluZ01hbmFnZXJcIik7XG4gICAgICAgICAgICBsb2FkaW5nTWFuYWdlci5zdGFydExvYWRpbmcoXCJtZW51XCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy9EZXN0cm95IFBhdXNldHRpbmcgbm9kZSBpZiBpdCBleGlzdHNcbiAgICAgICAgLy9sZXQgUGF1c2VTZXR0aW5nTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvUGF1c2V0dGluZ1wiKTtcbiAgICAgICAgLy9pZiAoUGF1c2VTZXR0aW5nTm9kZSkgUGF1c2VTZXR0aW5nTm9kZS5kZXN0cm95KCk7XG4gICAgICAgIC8vZWxzZSBjYy5lcnJvcihcIlBhdXNlU2V0dGluZyBub2RlIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgIFxuICAgIH1cbiAgICBSZXN1bWVHYW1lKCkge1xuICAgICAgICBsZXQgUGF1c2VTZXR0aW5nTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nXCIpO1xuICAgICAgICBpZiAoUGF1c2VTZXR0aW5nTm9kZSkgUGF1c2VTZXR0aW5nTm9kZS5kZXN0cm95KCk7XG4gICAgICAgIGVsc2UgY2MuZXJyb3IoXCJQYXVzZVNldHRpbmcgbm9kZSBub3QgZm91bmRcIik7XG4gICAgICAgIC8vUmVzdW1lIHRoZSBnYW1lXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5zZXRUaW1lU2NhbGUoMSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGxldCBDYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xuICAgICAgICB0aGlzLlJlc3VtZUFsbEFuaW1hdGlvbihDYW52YXMpOyBcbiAgICB9XG4gICAgb25Wb2x1bW5DaGFuZ2Uoc2xpZGVyOiBjYy5TbGlkZXIpe1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZShzbGlkZXIucHJvZ3Jlc3MpOyAvLyAwfjFcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZShzbGlkZXIucHJvZ3Jlc3MpO1xuICAgICAgICB0aGlzLlZvbHVtblZhbHVlID0gc2xpZGVyLnByb2dyZXNzO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJWb2x1bW5WYWx1ZVwiLCB0aGlzLlZvbHVtblZhbHVlLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBQYXVzZUFsbEFuaW1hdGlvbihub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBhbmltcyA9IG5vZGUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgZm9yIChsZXQgYW5pbSBvZiBhbmltcykge1xuICAgICAgICAgICAgaWYgKGFuaW0pIGFuaW0ucGF1c2UoKTtcbiAgICAgICAgICAgIGVsc2UgIGNjLmVycm9yKFwiQW5pbWF0aW9uIGNvbXBvbmVudCBub3QgZm91bmQgb24gbm9kZTpcIiwgbm9kZS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikgdGhpcy5QYXVzZUFsbEFuaW1hdGlvbihjaGlsZCk7XG4gICAgfVxuICAgIFJlc3VtZUFsbEFuaW1hdGlvbihub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBhbmltcyA9IG5vZGUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgZm9yIChsZXQgYW5pbSBvZiBhbmltcykge1xuICAgICAgICAgICAgaWYgKGFuaW0pIGFuaW0ucmVzdW1lKCk7XG4gICAgICAgICAgICBlbHNlICBjYy5lcnJvcihcIkFuaW1hdGlvbiBjb21wb25lbnQgbm90IGZvdW5kIG9uIG5vZGU6XCIsIG5vZGUubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHRoaXMuUmVzdW1lQWxsQW5pbWF0aW9uKGNoaWxkKTtcbiAgICB9XG5cbiAgICBwbGF5TXVzaWMoKSB7XG4gICAgICAgIGlmICh0aGlzLmJnbSkgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtLCB0cnVlKTtcbiAgICAgICAgZWxzZSBjYy5lcnJvcihcIkJHTSBub3QgYXNzaWduZWQhXCIpO1xuICAgIH1cblxuICAgIHBhdXNlTXVzaWMoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcbiAgICB9XG5cbiAgICByZXN1bWVNdXNpYygpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lTXVzaWMoKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXJ0R2FtZSgpe1xuICAgICAgICAvL0luaXRpYWxpemUgdGhlIGdhbWUgc3RhdGVcbiAgICAgICAgdGhpcy5MZXZlbCA9IDE7XG4gICAgICAgIGlmICh0aGlzLkxldmVsTGFiZWwpIHRoaXMuTGV2ZWxMYWJlbC5zdHJpbmcgPSBcIkxldmVsOiBcIisgdGhpcy5MZXZlbDtcbiAgICAgICAgZWxzZSBjYy5lcnJvcihcIkxldmVsIExhYmVsIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgLy9zZXQgcGxheWVyIHBvc2l0aW9uXG4gICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudChcIlBsYXllclwiKS5TZXRQbGF5ZXIodGhpcy5MZXZlbCk7XG4gICAgICAgIC8vc2V0IE1hcFxuICAgICAgICBsZXQgR2VuTWFwID0gY2MuZmluZChcIkdhbWVNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIk1hcEdlbmVyYXRvclwiKTtcbiAgICAgICAgR2VuTWFwLkdlbmVyYXRvck1hcCgpO1xuICAgICAgICAvL3NldCBtb25zdGVyXG4gICAgICAgIGxldCBNb25zdGVyTWdyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIk1vbnN0ZXJNYW5hZ2VyXCIpO1xuICAgICAgICBNb25zdGVyTWdyLlNldE1vbnN0ZXIodGhpcy5MZXZlbCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgR29OZXh0TGV2ZWwoKSB7XG4gICAgICAgIHRoaXMuTGV2ZWwrKztcbiAgICAgICAgdGhpcy5zYXZlUHJvZ3Jlc3ModGhpcy5MZXZlbCk7XG5cbiAgICAgICAgaWYgKHRoaXMuTGV2ZWxMYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5MZXZlbExhYmVsLnN0cmluZyA9IFwiTGV2ZWw6IFwiICsgdGhpcy5MZXZlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiTGV2ZWwgbGFiZWwgbm90IGZvdW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVnZW5lcmF0ZSB0aGUgbWFwXG4gICAgICAgIGNvbnN0IG1hcEdlbiA9IGNjLmZpbmQoXCJHYW1lTWFuYWdlclwiKT8uZ2V0Q29tcG9uZW50KFwiTWFwR2VuZXJhdG9yXCIpO1xuICAgICAgICBpZiAobWFwR2VuKSB7XG4gICAgICAgICAgICBtYXBHZW4ucmVnZW5lcmF0ZU1hcCh0aGlzLkxldmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiTWFwR2VuZXJhdG9yIGNvbXBvbmVudCBub3QgZm91bmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXNldCBwbGF5ZXIgcG9zaXRpb25cbiAgICAgICAgY29uc3QgcGxheWVyQ29tcCA9IHRoaXMucGxheWVyPy5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIik7XG4gICAgICAgIGlmIChwbGF5ZXJDb21wKSB7XG4gICAgICAgICAgICBwbGF5ZXJDb21wLlNldFBsYXllcih0aGlzLkxldmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiUGxheWVyIGNvbXBvbmVudCBub3QgZm91bmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXNldCBtb25zdGVyXG4gICAgICAgIGNvbnN0IG1vbnN0ZXJNZ3IgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvTW9uc3Rlck1hbmFnZXJcIik/LmdldENvbXBvbmVudChcIk1vbnN0ZXJNYW5hZ2VyXCIpO1xuICAgICAgICBpZiAobW9uc3Rlck1ncikge1xuICAgICAgICAgICAgbW9uc3Rlck1nci5TZXRNb25zdGVyKHRoaXMuTGV2ZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRqdXN0IGNhbWVyYSB6b29tIGFuZCBVSSBzY2FsaW5nXG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmFcIik/LmdldENvbXBvbmVudChjYy5DYW1lcmEpO1xuICAgICAgICBpZiAoY2FtZXJhKSB7XG4gICAgICAgICAgICBjYW1lcmEuem9vbVJhdGlvICo9IDAuOTk7XG5cbiAgICAgICAgICAgIGNvbnN0IFVJID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKTtcbiAgICAgICAgICAgIGlmIChVSSkge1xuICAgICAgICAgICAgICAgIFVJLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICAgICAgICAgIFVJLnNjYWxlWCA9IDEgLyBjYW1lcmEuem9vbVJhdGlvO1xuICAgICAgICAgICAgICAgIFVJLnNjYWxlWSA9IDEgLyBjYW1lcmEuem9vbVJhdGlvO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJVSSBub3QgZm91bmRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIEVuZEdhbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9oYXNTaG93bkdhbWVPdmVyKSByZXR1cm47XG4gICAgICAgIHRoaXMuX2hhc1Nob3duR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvR2FtZU92ZXJcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIEdhbWVPdmVyIHByZWZhYjpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBHYW1lT3Zlck5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgY29uc3QgQ2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgICAgIENhbnZhcy5hZGRDaGlsZChHYW1lT3Zlck5vZGUsMSwnR2FtZU92ZXInKTtcbiAgICAgICAgICAgIC8v6KaW56qX5q2j5Lit6ZaTXG4gICAgICAgICAgICBsZXQgY2FtZXJhTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmFcIik7XG4gICAgICAgICAgICBpZiAoY2FtZXJhTm9kZSkge1xuICAgICAgICAgICAgICAgIGxldCB3b3JsZFBvcyA9IGNhbWVyYU5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyk7XG4gICAgICAgICAgICAgICAgbGV0IGxvY2FsUG9zID0gQ2FudmFzLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcbiAgICAgICAgICAgICAgICBHYW1lT3Zlck5vZGUuc2V0UG9zaXRpb24obG9jYWxQb3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwi5om+5LiN5YiwIE1haW4gQ2FtZXJhLCDkvb/nlKjpoJDoqK3kvY3nva4gKDAsIDApXCIpO1xuICAgICAgICAgICAgICAgIEdhbWVPdmVyTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBSZXN0YXJ0QnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgUmVzdGFydEJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIFJlc3RhcnRCdXR0b24uY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xuICAgICAgICBSZXN0YXJ0QnV0dG9uLmhhbmRsZXIgPSBcIlJlc3RhcnRHYW1lXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvR2FtZU92ZXIvUmVzdGFydFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKFJlc3RhcnRCdXR0b24pO1xuXG4gICAgICAgIGxldCBlbmQgPSBjYy5maW5kKFwiQ2FudmFzL0dhbWVPdmVyL3BsYXllclwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgLy9nYW1lIG92ZXIgYW5pbWF0aW9uXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57IFxuICAgICAgICAgICAgZW5kLnBsYXkoXCJnYW1lb3ZlclwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG4gICAgcHJpdmF0ZSBzYXZlUHJvZ3Jlc3MobGV2ZWw6IG51bWJlcikge1xuICAgICAgICBjYy5sb2coXCJTYXZpbmcgcHJvZ3Jlc3MgZm9yIGxldmVsOlwiLCBsZXZlbCk7XG5cbiAgICAgICAgaWYgKCF3aW5kb3cuX2ZpcmViYXNlSW5pdGVkKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiRmlyZWJhc2Ugbm90IGluaXRpYWxpemVkLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXI7XG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgY2Mud2FybihcIlVzZXIgbm90IGxvZ2dlZCBpbi5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2VyUmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoXCJsZWFkZXJib2FyZC9cIiArIHVzZXIudWlkKTtcblxuICAgICAgICB1c2VyUmVmLm9uY2UoXCJ2YWx1ZVwiKS50aGVuKChzbmFwc2hvdDogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IHNuYXBzaG90LnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNMZXZlbCA9IGV4aXN0aW5nPy5oaWdoZXN0TGV2ZWwgfHwgMDtcblxuICAgICAgICAgICAgaWYgKGxldmVsID4gcHJldmlvdXNMZXZlbCkge1xuICAgICAgICAgICAgdXNlclJlZi5zZXQoe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLmRpc3BsYXlOYW1lIHx8IFwiVW5rbm93blwiLFxuICAgICAgICAgICAgICAgIGhpZ2hlc3RMZXZlbDogbGV2ZWwsXG4gICAgICAgICAgICAgICAgbGFzdFVwZGF0ZTogZmlyZWJhc2UuZGF0YWJhc2UuU2VydmVyVmFsdWUuVElNRVNUQU1QXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5sb2coYOKchSBVcGRhdGVkIFJlYWx0aW1lIERCIGZvciAke3VzZXIuZGlzcGxheU5hbWUgfHwgXCJVbmtub3duXCJ9OiBMZXZlbCAke2xldmVsfWApO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCLinYwgRmFpbGVkIHRvIHdyaXRlIHRvIFJlYWx0aW1lIERCOlwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MubG9nKFwiTm8gdXBkYXRlIG5lZWRlZCDigJQgcHJldmlvdXMgbGV2ZWwgaXMgaGlnaGVyIG9yIGVxdWFsLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIuKdjCBGYWlsZWQgdG8gcmVhZCBmcm9tIFJlYWx0aW1lIERCOlwiLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZExlYWRlcmJvYXJkKCkge1xuICAgICAgICBjb25zdCBkYlJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKFwibGVhZGVyYm9hcmRcIik7XG4gICAgICAgIGRiUmVmLm9uY2UoXCJ2YWx1ZVwiKVxuICAgICAgICAgICAgLnRoZW4oKHNuYXBzaG90OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBzbmFwc2hvdC52YWwoKTtcbiAgICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcIkxlYWRlcmJvYXJkIGlzIGVtcHR5LlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNvcnRlZCA9IE9iamVjdC52YWx1ZXMoZGF0YSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IGIuaGlnaGVzdExldmVsIC0gYS5oaWdoZXN0TGV2ZWwpXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIDEwKTtcblxuICAgICAgICAgICAgc29ydGVkLmZvckVhY2goKGVudHJ5OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5sb2coYCMke2luZGV4ICsgMX0gJHtlbnRyeS51c2VybmFtZX06IExldmVsICR7ZW50cnkuaGlnaGVzdExldmVsfWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCLinYwgRmFpbGVkIHRvIGxvYWQgbGVhZGVyYm9hcmQgZnJvbSBSZWFsdGltZSBEQjpcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn0iXX0=