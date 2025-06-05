const { ccclass, property } = cc._decorator;
import LoadingManager from "./Menu/LoadingManager";
declare const firebase: any;

@ccclass
export default class GameManager extends cc.Component {
    @property({ type: cc.AudioClip })
    public bgm: cc.AudioClip = null;

    @property(cc.Label)
    public LevelLabel: cc.Label = null;

    private maxhp: number = 10;
    private player: cc.Node = null;
    public VolumnValue : number = null;
    public Level: number = 1;

    onLoad(){
        let pauseBtnNode = cc.find("Canvas/Main Camera/UI/Pause"); 
        if (pauseBtnNode) {
            let PauseButton = new cc.Component.EventHandler();
            PauseButton.target = this.node;
            PauseButton.component = "GameManager";
            PauseButton.handler = "PauseGame";
            pauseBtnNode.getComponent(cc.Button).clickEvents.push(PauseButton);
        } else {
            cc.error("Pause 按鈕節點找不到，請檢查 Canvas/Main Camera/UI/Pause 是否存在！");
        }
        // Initialize the level label
        this.LevelLabel = cc.find("Canvas/Main Camera/UI/Level").getComponent(cc.Label);
        if (this.LevelLabel) this.LevelLabel.string = "Level: " + this.Level;
        else cc.error("Level label not found");

        this.player = cc.find("Canvas/MapManager/Actors/Player");

        //assign blank space for next level
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);



    }
    onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onKeyDown(event: cc.Event.EventKeyboard) {
        if (event.keyCode === cc.macro.KEY.space) {
            this.GoNextLevel();
        }
    }

    start() {
        cc.director.getCollisionManager().enabled = true;
        
        let savedVolumn = cc.sys.localStorage.getItem("VolumnValue");
        if (savedVolumn!==null) this.VolumnValue = Number(savedVolumn);
        else this.VolumnValue = 0.5;
        cc.audioEngine.setEffectsVolume(this.VolumnValue);
        cc.audioEngine.setMusicVolume(this.VolumnValue);
        this.playMusic();
        this.startGame();

    }

    PauseGame() {
        console.log("Pause prefab load");
        //Pausesetting is a prefab
        cc.resources.load("prefabs/PauseSetting", cc.Prefab, (err, prefab) => {
            if (err) {
                cc.error("Failed to load PauseSetting prefab:", err);
                return;
            }
            
            const PauseNode = cc.instantiate(prefab);
            const Canvas = cc.find("Canvas");
            Canvas.addChild(PauseNode);
            PauseNode.name = "PauseSetting";

            let cameraNode = cc.find("Canvas/Main Camera");
            if (cameraNode) {
                let worldPos = cameraNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
                let localPos = Canvas.convertToNodeSpaceAR(worldPos);
                PauseNode.setPosition(localPos);
            } else {
                cc.warn("找不到 Main Camera, 使用預設位置 (0, 0)");
                PauseNode.setPosition(0, 0);
            }

            PauseNode.scaleX = 1;
            PauseNode.scaleY = 1;
            //Pause the game，停止鍵盤事件
            cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
            cc.director.getScheduler().setTimeScale(0);
            cc.director.getPhysicsManager().enabled = false;
            let Canvas = cc.find("Canvas");
            this.PauseAllAnimation(Canvas); 
            this.initPause();
        })
        console.log("Pause prefab load...");

    }
    initPause() {
        //Resume button
        let ResumeButton = new cc.Component.EventHandler();
        ResumeButton.target = this.node;
        ResumeButton.component = "GameManager";
        ResumeButton.handler = "ResumeGame";
        cc.find("Canvas/PauseSetting/Resume").getComponent(cc.Button).clickEvents.push(ResumeButton);
        //Volumn slider
        let VolumnSlider = cc.find("Canvas/PauseSetting/Volumn/VolumnSlider").getComponent(cc.Slider);
        let savedVolumn = cc.sys.localStorage.getItem("VolumnValue");
        if (savedVolumn !== null) VolumnSlider.progress= Number(savedVolumn);
        else VolumnSlider.progress = 0.5;
        VolumnSlider.node.on('slide', this.onVolumnChange, this);
        //Restart button
        let RestartButton = new cc.Component.EventHandler();
        RestartButton.target = this.node;
        RestartButton.component = "GameManager";
        RestartButton.handler = "RestartGame";
        cc.find("Canvas/PauseSetting/Restart").getComponent(cc.Button).clickEvents.push(RestartButton);
        //
        let DescButton = new cc.Component.EventHandler();
        DescButton.target = this.node;
        DescButton.component = "GameManager";
        DescButton.handler = "showDesc";
        cc.find("Canvas/PauseSetting/How").getComponent(cc.Button).clickEvents.push(DescButton);
        let Desc = cc.find("Canvas/PauseSetting/Description");
        Desc.active = false;
        let ExitDescButton = new cc.Component.EventHandler();
        ExitDescButton.target = this.node;
        ExitDescButton.component = "GameManager";
        ExitDescButton.handler = "HideDesc";
        cc.find("Canvas/PauseSetting/Description/Exit").getComponent(cc.Button).clickEvents.push(ExitDescButton);
    }
    HideDesc() {
        let Desc = cc.find("Canvas/PauseSetting/Description");
        Desc.active = false;
    }
    showDesc() {
        let Desc = cc.find("Canvas/PauseSetting/Description");
        Desc.active = true;
    }
    RestartGame() {//Restart the game => back to menu
        cc.director.getScheduler().setTimeScale(1);
        cc.director.getPhysicsManager().enabled = true;
        let Canvas = cc.find("Canvas");
        this.ResumeAllAnimation(Canvas);    
        cc.director.loadScene("Loading", () => {
            let loadingManager = cc.find("Canvas/LoadingManager").getComponent("LoadingManager");
            loadingManager.startLoading("menu");
        });
        //Destroy Pausetting node if it exists
        let PauseSettingNode = cc.find("Canvas/Pausetting");
        if (PauseSettingNode) PauseSettingNode.destroy();
        else cc.error("PauseSetting node not found");
         
    }
    ResumeGame() {
        let PauseSettingNode = cc.find("Canvas/PauseSetting");
        if (PauseSettingNode) PauseSettingNode.destroy();
        else cc.error("PauseSetting node not found");
        //Resume the game
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.director.getScheduler().setTimeScale(1);
        cc.director.getPhysicsManager().enabled = true;
        let Canvas = cc.find("Canvas");
        this.ResumeAllAnimation(Canvas); 
    }
    onVolumnChange(slider: cc.Slider){
        cc.audioEngine.setMusicVolume(slider.progress); // 0~1
        cc.audioEngine.setEffectsVolume(slider.progress);
        this.VolumnValue = slider.progress;
        cc.sys.localStorage.setItem("VolumnValue", this.VolumnValue.toString());
    }
    PauseAllAnimation(node: cc.Node) {
        let anims = node.getComponentsInChildren(cc.Animation);
        for (let anim of anims) {
            if (anim) anim.pause();
            else  cc.error("Animation component not found on node:", node.name);
        }
        let children = node.children;
        for (let child of children) this.PauseAllAnimation(child);
    }
    ResumeAllAnimation(node: cc.Node) {
        let anims = node.getComponentsInChildren(cc.Animation);
        for (let anim of anims) {
            if (anim) anim.resume();
            else  cc.error("Animation component not found on node:", node.name);
        }
        let children = node.children;
        for (let child of children) this.ResumeAllAnimation(child);
    }

    playMusic() {
        if (this.bgm) cc.audioEngine.playMusic(this.bgm, true);
        else cc.error("BGM not assigned!");
    }

    pauseMusic() {
        cc.audioEngine.pauseMusic();
    }

    resumeMusic() {
        cc.audioEngine.resumeMusic();
    }
    public startGame(){
        //Initialize the game state
        this.Level = 1;
        if (this.LevelLabel) this.LevelLabel.string = "Level: "+ this.Level;
        else cc.error("Level Label not found");
        //set player position
        this.player.getComponent("Player").SetPlayer(this.Level);
        //set Map
        let GenMap = cc.find("GameManager").getComponent("MapGenerator");
        GenMap.GeneratorMap();
        //set monster
        let MonsterMgr = cc.find("Canvas/MapManager/MonsterManager").getComponent("MonsterManager");
        MonsterMgr.SetMonster(this.Level);

    }

    public GoNextLevel() {
        this.Level++;
        this.saveProgress(this.Level);

        if (this.LevelLabel) {
            this.LevelLabel.string = "Level: " + this.Level;
        } else {
            cc.error("Level label not found");
        }

        // regenerate the map
        const mapGen = cc.find("GameManager")?.getComponent("MapGenerator");
        if (mapGen) {
            mapGen.regenerateMap(this.Level);
        } else {
            cc.error("MapGenerator component not found");
        }

        // reset player position
        const playerComp = this.player?.getComponent("Player");
        if (playerComp) {
            playerComp.SetPlayer(this.Level);
        } else {
            cc.error("Player component not found");
        }

        // reset monster
        const monsterMgr = cc.find("Canvas/MapManager/MonsterManager")?.getComponent("MonsterManager");
        if (monsterMgr) {
            monsterMgr.SetMonster(this.Level);
        }

        // adjust camera zoom and UI scaling
        const camera = cc.find("Canvas/Main Camera")?.getComponent(cc.Camera);
        if (camera) {
            camera.zoomRatio *= 0.99;

            const UI = cc.find("Canvas/Main Camera/UI");
            if (UI) {
                UI.setPosition(0, 0);
                UI.scaleX = 1 / camera.zoomRatio;
                UI.scaleY = 1 / camera.zoomRatio;
            } else {
                cc.log("UI not found");
            }
        }
    }

    private saveProgress(level: number) {
        cc.log("Saving progress for level:", level);
        if (!window._firebaseInited) {
            cc.warn("Firebase not initialized.");
            return;
        }

        const user = firebase.auth().currentUser;
        if (!user) {
            cc.warn("User not logged in.");
            return;
        }

        const db = firebase.firestore();
        const userRef = db.collection("leaderboard").doc(user.uid);

        userRef.get().then(doc => {
            const prev = doc.exists ? doc.data().highestLevel : 0;
            if (level > prev) {
                userRef.set({
                    username: user.displayName || "Unknown",
                    highestLevel: level
                });
                cc.log(`Updated leaderboard for ${user.displayName || "Unknown"}: Level ${level}`);
            }
        }).catch(err => {
            cc.error("Failed to save progress:", err);
        });
    }

    public loadLeaderboard() {
        if (!window._firebaseInited) {
            cc.warn("Firebase not initialized.");
            return;
        }

        const db = firebase.firestore();
        db.collection("leaderboard")
            .orderBy("highestLevel", "desc")
            .limit(10)
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    const data = doc.data();
                    cc.log(`${data.username}: Level ${data.highestLevel}`);
                    // You can update UI here
                });
            }).catch(err => {
                cc.error("Failed to load leaderboard:", err);
            });
    }
}