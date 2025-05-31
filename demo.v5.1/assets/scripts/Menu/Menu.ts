// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Menu extends cc.Component {
    @property(cc.Button)
    ExitButton: cc.Button = null;

    @property(cc.AudioClip)
    Menubgm: cc.AudioClip = null;

    public VolumnValue: number = 0.5;

    onLoad(){
        let savedVolumn = cc.sys.localStorage.getItem("VolumnValue");
        if (savedVolumn !== null) this.VolumnValue = Number(savedVolumn);
        else this.VolumnValue = 0.5;
        this.playbgm();
        cc.audioEngine.setMusicVolume(this.VolumnValue);
        cc.audioEngine.setEffectsVolume(this.VolumnValue);
        cc.sys.localStorage.setItem("VolumnValue", this.VolumnValue.toString());

        let exitHandler = new cc.Component.EventHandler();
        exitHandler.target = this.node;
        exitHandler.component = "Menu";
        exitHandler.handler = "ExitButtonEvent";
        this.ExitButton.clickEvents.push(exitHandler);
    }

    start(){
        let StartButton = new cc.Component.EventHandler();
        StartButton.target = this.node;
        StartButton.component = "Menu";
        StartButton.handler = "LoadGame";
        cc.find("Canvas/background/StartButton").getComponent(cc.Button).clickEvents.push(StartButton);

        let MapButton = new cc.Component.EventHandler();
        MapButton.target = this.node;
        MapButton.component = "Menu";
        MapButton.handler = "LoadMap";
        cc.find("Canvas/background/MapButton").getComponent(cc.Button).clickEvents.push(MapButton);
    }
    LoadGame(){
        cc.director.loadScene("Loading", () => {
            let loadingManager = cc.find("Canvas/LoadingManager").getComponent("LoadingManager");
            loadingManager.startLoading("demo");
        });
    }

    LoadMap(){
        cc.director.loadScene("Loading", () => {
            let loadingManager = cc.find("Canvas/LoadingManager").getComponent("LoadingManager");
            loadingManager.startLoading("demo_test");
        });
    }
    ExitButtonEvent(){
        cc.game.end();
    }
    playbgm(){
        if (this.Menubgm) {
            cc.audioEngine.playMusic(this.Menubgm, true);
        } else {
            cc.error("BGM not assigned!");
        }
    }
}
