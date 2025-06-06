// assets/scripts/SuccessPopup.ts
declare const cc: any;
const { ccclass, property } = cc._decorator;

@ccclass('GameOver')
export default class GameOver extends cc.Component {
  public onOk: (() => void) | null = null;

  onLoad() {
    const restartBtn = cc.find("Restart", this.node).getComponent(cc.Button);
    restartBtn.node.on('click', () => {
      if (this.onOk) this.onOk();
      this.node.destroy();
    });
    
  }
}