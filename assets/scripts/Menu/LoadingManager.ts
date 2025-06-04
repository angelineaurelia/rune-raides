// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadingManager extends cc.Component {
    @property(cc.ProgressBar)
    progressBar: cc.ProgressBar = null;

    @property(cc.Label)
    percentLabel: cc.Label = null;

    startLoading(targetScene: string) {
    this.progressBar.progress = 0;
    this.percentLabel.string = "0%";

    cc.director.preloadScene(
        targetScene,
        (completedCount, totalCount, item) => {
            let progress = completedCount / totalCount;
            // 預設最多到 0.9，預留補滿動畫
            if (progress > 0.9) progress = 0.9;
            this.progressBar.progress = progress;
            this.percentLabel.string = Math.floor(progress * 100) + "%";
        },
        () => {
            // 預加載完成時，tween 補滿到 100%
            cc.tween(this.progressBar)
                .to(0.3, { progress: 1 })
                .call(() => {
                    this.percentLabel.string = "100%";
                    cc.director.loadScene(targetScene);
                })
                .start();
        });
    }


}

