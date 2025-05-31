const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {
    @property({ type: cc.AudioClip })
    public bgm: cc.AudioClip = null;

    private maxhp: number = 10;
    public VolumnValue : number = null;
    public Level: number = 1;

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
        
        let savedVolumn = cc.sys.localStorage.getItem("VolumnValue");
        if (savedVolumn!==null) this.VolumnValue = Number(savedVolumn);
        else this.VolumnValue = 0.5;
        cc.audioEngine.setEffectsVolume(this.VolumnValue);
        cc.audioEngine.setMusicVolume(this.VolumnValue);
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
}

