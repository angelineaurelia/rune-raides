const { ccclass, property } = cc._decorator;


@ccclass
export default class GameManager extends cc.Component {
    @property({ type: cc.AudioClip })
    public bgm: cc.AudioClip = null;

    private maxhp: number = 10;


    onLoad(){
        let pauseBtnNode = cc.find("Canvas/Main Camera/Pause"); 
        if (pauseBtnNode) {
            let PauseButton = new cc.Component.EventHandler();
            PauseButton.target = this.node;
            PauseButton.component = "GameManager";
            PauseButton.handler = "PauseGame";
            pauseBtnNode.getComponent(cc.Button).clickEvents.push(PauseButton);
        } else {
            cc.error("Pause 按鈕節點找不到，請檢查 Canvas/Main Camera/Pause 是否存在！");
        }
    }
    start() {
        cc.director.getCollisionManager().enabled = true;
        this.playMusic();
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
                cc.warn("找不到 Main Camera，使用預設位置 (0, 0)");
                PauseNode.setPosition(0, 0);
            }

            PauseNode.scaleX = 1;
            PauseNode.scaleY = 1;
            //Pause the game
            cc.director.getScheduler().setTimeScale(0);
            cc.director.getPhysicsManager().enabled = false;
            let Canvas = cc.find("Canvas");
            this.PauseAllAnimation(Canvas); 
            this.initPause();
        })
        console.log("Pause prefab load...");

    }
    initPause() {
        let ResumeButton = new cc.Component.EventHandler();
        ResumeButton.target = this.node;
        ResumeButton.component = "GameManager";
        ResumeButton.handler = "ResumeGame";
        cc.find("Canvas/PauseSetting/Resume").getComponent(cc.Button).clickEvents.push(ResumeButton);
    }
    

    ResumeGame() {
        let PauseSettingNode = cc.find("Canvas/PauseSetting");
        if (PauseSettingNode) PauseSettingNode.destroy();
        else cc.error("PauseSetting node not found");
        //Resume the game
        cc.director.getScheduler().setTimeScale(1);
        cc.director.getPhysicsManager().enabled = true;
        let Canvas = cc.find("Canvas");
        this.ResumeAllAnimation(Canvas); 
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
}

