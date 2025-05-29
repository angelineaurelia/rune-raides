const { ccclass, property } = cc._decorator;


@ccclass
export default class GameManager extends cc.Component {
    @property({ type: cc.AudioClip })
    public bgm: cc.AudioClip = null;

    @property(cc.Node)
    private lifebar: cc.Node = null;

    private maxhp: number = 10;


    start() {
        cc.director.getCollisionManager().enabled = true;
        this.playMusic();
    }

    updatelife(num: number, hp: number){
        console.log(num, hp);
        this.lifebar.width = hp*30;
        if(hp<=3) this.lifebar.color = cc.Color.RED;
        else if(hp<=5) this.lifebar.color = cc.Color.ORANGE;
        else this.lifebar.color = cc.Color.GREEN;
    }

    playMusic() {
        if (this.bgm) {
            cc.audioEngine.playMusic(this.bgm, true);
        } else {
            cc.error("BGM not assigned!");
        }
    }

    pauseMusic() {
        cc.audioEngine.pauseMusic();
    }

    resumeMusic() {
        cc.audioEngine.resumeMusic();
    }
}

