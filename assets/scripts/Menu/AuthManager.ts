// assets/scripts/AuthManager.ts
declare const firebase: any;
const { ccclass, property } = cc._decorator;

@ccclass('AuthManager')
export default class AuthManager extends cc.Component {
  // These get wired automatically by find() in onLoad()
  usernameEB: cc.EditBox = null;
  emailEB: cc.EditBox = null;
  pwdEB: cc.EditBox = null;
  saveBtn: cc.Button = null;
  exitBtn: cc.Button = null;

  private auth: any = null;

  onLoad() {

    this.usernameEB = cc.find("UserName", this.node).getComponent(cc.EditBox);
    this.emailEB    = cc.find("Email", this.node).getComponent(cc.EditBox);
    this.pwdEB      = cc.find("Password", this.node).getComponent(cc.EditBox);

    this.saveBtn = cc.find("Save", this.node).getComponent(cc.Button);
    this.exitBtn = cc.find("Exit", this.node).getComponent(cc.Button);
    this.saveBtn.node.on('click', this.onSaveClicked, this);
    this.exitBtn.node.on('click', () => this.node.destroy(), this);

    // 3) Initialize Firebase Auth
    if (!window._firebaseInited) {
      cc.error("Firebase not initialized! Make sure FirebaseInit is in your scene.");
    }
    this.auth = firebase.auth();
  }

  private onSaveClicked() {
    let isSigningUp = cc.find("Canvas/MenuMgr").getComponent("MenuMgr").isSigningUp;
    if (isSigningUp) this.signup();
    else this.login();
    const username = this.usernameEB.string.trim();
    const email    = this.emailEB.string.trim();
    const password = this.pwdEB.string;

    if (!email || !password || !username) {
      cc.warn("All fields must be filled.");
      return;
    }

    // 4) Create user and set displayName
   
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCred: any) => {
        return userCred.user.updateProfile({ displayName: username });
      })
      .then(() => {
        cc.log(text + " succeeded:", username);
        this.showPopup(text + " Successful");
      })
      .catch((err: any) => {
        cc.error(text + " error:", err.code, err.message);
      });
  }

  private signup(){
    const username = this.usernameEB.string.trim();
    const email    = this.emailEB.string.trim();
    const password = this.pwdEB.string;

    if (!email || !password || !username) {
      cc.warn("All fields must be filled.");
      return;
    }

    // 4) Create user and set displayName
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCred: any) => {
        return userCred.user.updateProfile({ displayName: username });
      })
      .then(() => {
        cc.log("Signup succeeded:", username);
        this.showPopup("Signup Successful");
      })
      .catch((err: any) => {
        cc.error("Signup error:", err.code, err.message);
        this.showPopup("\nSignup Failed: " + err.message);
      });
  }
  private login(){
    const username = this.usernameEB.string.trim();
    const email    = this.emailEB.string.trim();
    const password = this.pwdEB.string;

    if (!email || !password || !username) {
      cc.warn("All fields must be filled.");
      return;
    }
    this.auth.signInWithEmailAndPassword(email, password).then((userCred: any) => {
      cc.log("Login succeeded:", username);
      this.showPopup("\nLogin Successful");
    })
    .catch((err: any) => {
      cc.error("Login error:", err.code, err.message);
      this.showPopup("\nLogin Failed: " + err.message);
    });
  }

  private showPopup(msg: string) {
    // Load and instantiate SuccessPopup
    cc.resources.load("prefabs/SuccessPopup", cc.Prefab, (err, prefab: cc.Prefab) => {
      if (err) {
        cc.error("Failed to load SuccessPopup:", err);
        return;
      }
      const popupNode = cc.instantiate(prefab);
      popupNode.setPosition(0, 0);
      popupNode.zIndex = 2000;
      cc.find("Canvas").addChild(popupNode);

      const popupComp = popupNode.getComponent("SuccessPopup") as any;
      popupComp.messageLabel.string = msg;

      // When user clicks OK → destroy signup UI
      popupComp.onOk = () => {
        this.node.destroy();
      };
    });
  }
}