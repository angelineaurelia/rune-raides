// assets/scripts/SuccessPopup.ts
declare const cc: any;
const { ccclass, property } = cc._decorator;

@ccclass('SuccessPopup')
export default class SuccessPopup extends cc.Component {
  @property(cc.Label) messageLabel: cc.Label = null;
  @property(cc.Node) background: cc.Node = null;
  @property(cc.AudioClip) openSound: cc.AudioClip = null;
  // Called by Menu code when OK is clicked
  public onOk: (() => void) | null = null;

  onLoad() {
    if (this.openSound) {
        cc.audioEngine.playEffect(this.openSound, false);
    } else {
        cc.error("SuccessPopup.openSound is not assigned!");
    }
    const okBtn = cc.find("OKButton", this.node).getComponent(cc.Button);
    okBtn.node.on('click', () => {
      if (this.onOk) this.onOk();
      this.node.destroy();
    });
  }
}
