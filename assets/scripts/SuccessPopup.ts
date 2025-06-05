// assets/scripts/SuccessPopup.ts
declare const cc: any;
const { ccclass, property } = cc._decorator;

@ccclass('SuccessPopup')
export default class SuccessPopup extends cc.Component {
  @property(cc.Label) messageLabel: cc.Label = null;

  // Called by Menu code when OK is clicked
  public onOk: (() => void) | null = null;

  onLoad() {
    const okBtn = cc.find("DialogBox/OKButton", this.node).getComponent(cc.Button);
    okBtn.node.on('click', () => {
      if (this.onOk) this.onOk();
      this.node.destroy();
    });
  }
}
