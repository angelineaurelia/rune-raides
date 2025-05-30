const { ccclass, property } = cc._decorator;


@ccclass
export default class GameManager extends cc.Component {
    @property({ type: cc.AudioClip })
    public bgm: cc.AudioClip = null;

    private maxhp: number = 10;


    start() {
        cc.director.getCollisionManager().enabled = true;
        this.playMusic();
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

