// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    public VolumnValue: number = 0.5;

    onLoad(){
        let OptionButton = new cc.Component.EventHandler();
        OptionButton.target = this.node;
        OptionButton.component = "MenuMgr";
        OptionButton.handler = "ShowSetting";
        cc.find("Canvas/background/OptionButton").getComponent(cc.Button).clickEvents.push(OptionButton);

        //Load VolumnValue from localStorage
        
    }

    ShowSetting() {
        //Setting is a prefab
        cc.resources.load("prefabs/Setting", cc.Prefab, (err, prefab) => {
            if (err) {
                cc.error("Failed to load Setting prefab: ", err);
                return;
            }
            const settingNode = cc.instantiate(prefab);
            settingNode.setPosition(0, 0);
            settingNode.scaleX = 2   ;
            settingNode.scaleY = 2; 
            cc.find("Canvas").addChild(settingNode);
            settingNode.name = "Setting";
    
            this.initSettingButton();
        })
        
    }
    initSettingButton(){
        //ExitSettingButton is a biutton in Setting prefab
        let ExitSettingButton = new cc.Component.EventHandler();
        ExitSettingButton.target = this.node;
        ExitSettingButton.component = "MenuMgr";
        ExitSettingButton.handler = "ExitSetting";
        cc.find("Canvas/Setting/ExitSetting").getComponent(cc.Button).clickEvents.push(ExitSettingButton);
        //Sign up
        let SignUpButton = new cc.Component.EventHandler();
        SignUpButton.target = this.node;
        SignUpButton.component = "MenuMgr";
        SignUpButton.handler = "SignUp";
        cc.find("Canvas/Setting/SignUp").getComponent(cc.Button).clickEvents.push(SignUpButton);
        //Login
        let LoginButton = new cc.Component.EventHandler();
        LoginButton.target = this.node;
        LoginButton.component = "MenuMgr";
        LoginButton.handler = "Login";
        cc.find("Canvas/Setting/Login").getComponent(cc.Button).clickEvents.push(LoginButton);
        //Volumnslider?
        let Volumnslider = cc.find("Canvas/Setting/Volumn/VolumnSlider").getComponent(cc.Slider);
        let savedVolumn = cc.sys.localStorage.getItem("VolumnValue");
        if (savedVolumn !== null) Volumnslider.progress = Number(savedVolumn);
        else Volumnslider.progress = 0.5;
        Volumnslider.node.on('slide', this.onVolumnChange, this);
    }
    ExitSetting() {
        let settingNode = cc.find("Canvas/Setting");
        if(settingNode) {
            settingNode.destroy();
        }
    }
    onVolumnChange(slider: cc.Slider){

        cc.audioEngine.setMusicVolume(slider.progress); // 0~1
        cc.audioEngine.setEffectsVolume(slider.progress);
        this.VolumnValue = slider.progress;
        cc.sys.localStorage.setItem("VolumnValue", this.VolumnValue.toString());
    }

    SignUp(){
        cc.resources.load("prefabs/SignupLogin", cc.Prefab, (err, prefab ) => {
            if (err) {
                cc.error ("Failed to load SignupLogin ", err);
                return;
            }
            const SignupLoginNode = cc.instantiate(prefab);
            SignupLoginNode.setPosition(0, 0);
            SignupLoginNode.scaleX = 0.5;
            SignupLoginNode.scaleY = 0.5;
            SignupLoginNode.zIndex = 1000;
            cc.find("Canvas/Setting").addChild(SignupLoginNode);
            SignupLoginNode.name = "SignupLogin";
           this.initSignupLogin();
        })
    }
    Login() {
        //SignupLogin is a prefab
        cc.resources.load("prefabs/SignupLogin", cc.Prefab, (err, prefab ) => {
            if (err) {
                cc.error ("Failed to load SignupLOgin ", err);
                return;
            }
            const SignupLoginNode = cc.instantiate(prefab);
            SignupLoginNode.setPosition(0, 0);
            SignupLoginNode.scaleX = 0.5;
            SignupLoginNode.scaleY = 0.5;
            SignupLoginNode.zIndex = 1000;
            cc.find("Canvas/Setting").addChild(SignupLoginNode);
            SignupLoginNode.name = "SignupLogin";
            this.initSignupLogin();
        })
    }
    initSignupLogin() {
        let ExitSignupLoginButton = new cc.Component.EventHandler();
        ExitSignupLoginButton.target = this.node;
        ExitSignupLoginButton.component = "MenuMgr";
        ExitSignupLoginButton.handler = "ExitSignupLogin";
        cc.find("Canvas/Setting/SignupLogin/Exit").getComponent(cc.Button).clickEvents.push(ExitSignupLoginButton);
        
        //save
        let SaveSignupLoginButton = new cc.Component.EventHandler();
        SaveSignupLoginButton.target = this.node;
        SaveSignupLoginButton.component = "MenuMgr";
        SaveSignupLoginButton.handler = "ExitSignupLogin";
        cc.find("Canvas/Setting/SignupLogin/Save").getComponent(cc.Button).clickEvents.push(SaveSignupLoginButton);
     
    }
    ExitSignupLogin() {
        let T_Node = cc.find("Canvas/Setting/SignupLogin");
        if(T_Node) {
            T_Node.destroy();
        }
    }
    
}
