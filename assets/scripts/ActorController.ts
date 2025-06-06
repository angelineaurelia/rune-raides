// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html


import Controller from "./input/Controller";
import { IInputControls, ButtonState } from "./input/IInputControls";
import  Player    from "./player";

const { ccclass, property } = cc._decorator;
enum PlayerState{
    Idle,
    Walk,
    Attack,
    Attack2,
    Attack3,
    Hurt,
    Die ,
    Combo_1
}

enum FacingDirection {
    Right,
    Left,
    Up,
    Down
}

function sign(x: number) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
}

/**
 * A component that implements movement and actions for each actor.
 * Toggle "Use Player Input" to read from player input.
 */
@ccclass
export default class ActorController extends Controller {
    @property({ type: cc.Enum(FacingDirection) })
    initialFacingDirection = FacingDirection.Right;

    @property(cc.Node)
    player: cc.Node = null;
    

    private _animation: cc.Animation = null;
    private _animState: cc.AnimationState = null;
    private _rigidbody: cc.RigidBody = null;

    @property(cc.String)
    idleAnimationName: string = "";

    @property(cc.String)
    moveAnimationName: string = "";

    private _idleAnimState: cc.AnimationState = null;
    private _moveAnimState: cc.AnimationState = null;
    @property(cc.String)
    walkRightAnimation: string = "player_walk_right";
    @property(cc.String)
    walkLeftAnimation: string = "player_walk_left";
    @property(cc.String)
    walkUpAnimation: string = "player_walk_up";
    @property(cc.String)
    walkDownAnimation: string = "player_walk_down";

    @property(cc.String)
    idleAnimation: string = "player_standby"; 

    @property(cc.String)
    attack_right: string = "attack_right-1";
    @property(cc.String)
    attack_left: string = "attack_left-1";
    @property(cc.String)
    attack_up: string = "attack_up-1";
    @property(cc.String)
    attack_down: string = "attack_down-1";

    @property(cc.String)
    attack_right_2: string = "attack_right-2";
    @property(cc.String)
    attack_left_2: string = "attack_left-2";
    @property(cc.String)
    attack_up_2: string = "attack_up-2";
    @property(cc.String)
    attack_down_2: string = "attack_down-2";

    @property(cc.String)
    attack_right_3: string = "attack_right-3";
    @property(cc.String)
    attack_left_3: string = "attack_left-3";
    @property(cc.String)
    attack_up_3: string = "attack_up-3";
    @property(cc.String)
    attack_down_3: string = "attack_down-3";

    @property(cc.String)
    death_right: string = "death_right";
    @property(cc.String)
    death_left: string = "death_left";
    @property(cc.String)
    death_up: string = "death_up";
    @property(cc.String)
    death_down: string = "death_down";

    @property(cc.String)
    hurt_right: string = "hurt_right";
    @property(cc.String)
    hurt_left: string = "hurt_left";
    @property(cc.String)
    hurt_up: string = "hurt_up";
    @property(cc.String)
    hurt_down: string = "hurt_down";

    @property(cc.String)
    combo_right_1: string = "combo-1_right";
    @property(cc.String)
    combo_left_1: string = "combo-1_left";
    @property(cc.String)
    combo_up_1: string = "combo-1_up";
    @property(cc.String)
    combo_down_1: string = "combo-1_down";

    @property(cc.Float)
    moveSpeed = 60; 

    public moveAxisX = 0;
    public moveAxisY = 0;

    private _playerState: PlayerState = PlayerState.Idle;
    private _facing: FacingDirection = FacingDirection.Down; // 預設朝下
    private _lastAnim: string = "";

    private combostep: number = 0;
    private combotimer: number = 0;

    @property(cc.Float)
    comboInterval: number = 1;

    public get moveAxis2D() {
        return new cc.Vec2(this.moveAxisX, this.moveAxisY);
    }

    onLoad() {
        this._animation = this.node.getComponent(cc.Animation);
        if (!this._animation) console.warn(`ActorController: Component cc.Animation missing on node ${this.node.name}`);

        this._rigidbody = this.node.getComponent(cc.RigidBody);
        if (!this._rigidbody) console.warn(`ActorController: Component cc.RigidBody missing on node ${this.node.name}`);
    }

    start() {
        super.start && super.start();
        if (this._animation) {
            this._idleAnimState = this._animation.getAnimationState(this.idleAnimationName);
            this._moveAnimState = this._animation.getAnimationState(this.moveAnimationName);
            this._animState = this._animation.play(this.idleAnimationName);
            this._animation.on('finished', this.onAnimFinished, this);
        }
    }
    update(dt) {
        if (this._playerState === PlayerState.Die) return;
        if (this.combostep > 0){
            this.combotimer += dt;
            if (this.combotimer >= this.comboInterval) {
                this.combostep = 0;
            }
        }

        if (this.inputSource ) {
                if(this.incombo()) return;
                this.moveAxisX = this.inputSource.horizontalAxis;
                this.moveAxisY = this.inputSource.verticalAxis;
    
                let velocity = this.moveAxis2D.mul(this.moveSpeed);
                if (this._rigidbody) {
                    this._rigidbody.linearVelocity = velocity;
                }

                let is_playing= (this._animation.getAnimationState(this._lastAnim) && this._animation.getAnimationState(this._lastAnim).isPlaying)

                // 狀態機：移動 or 靜止
                if (this.moveAxisX !== 0 || this.moveAxisY !== 0) {
                    this._playerState = PlayerState.Walk;
                    // 根據輸入更新朝向
                    if (Math.abs(this.moveAxisX) > Math.abs(this.moveAxisY)) {
                        this._facing = this.moveAxisX > 0 ? FacingDirection.Right : FacingDirection.Left;
                    } else {
                        this._facing = this.moveAxisY > 0 ? FacingDirection.Up : FacingDirection.Down;
                    }
                } else if (!is_playing){
                    this._playerState = PlayerState.Idle;
                } else if(this.iswalking()){
                    this._playerState = PlayerState.Idle;
                }
    
                // 這裡可以根據按鍵觸發攻擊等狀態
                if(!is_playing || !this.incombo()){
                    if (this.inputSource.attack===ButtonState.Pressed) { 
                        this._playerState = PlayerState.Attack; 
                        this.player.getComponent("Player").playattack1sound();
                    }else if(this.inputSource.attack2===ButtonState.Pressed){
                        this._playerState = PlayerState.Attack2;
                        this.player.getComponent("Player").playattack2sound();
                    }else if(this.inputSource.attack3===ButtonState.Pressed){
                        this._playerState = PlayerState.Attack3;
                        this.player.getComponent("Player").playattack3sound();
                    } else if (this.inputSource.gethurt===ButtonState.Pressed) { 
                        this._playerState = PlayerState.Hurt; 
                        this.player.getComponent("Player").takeDamage(5);
                        this.inputSource._xKey = ButtonState.Held;
                    }
                    this.incombo();
                }
                // 狀態+方向決定動畫
                let animName = this.getAnimName(this._playerState, this._facing);
                //如果是combo 狀態 播放動畫直到 combo 結束
                if (this._animation && animName && animName !== this._lastAnim && !this.stopupdate()) {
                    console.log(this._lastAnim,animName);
                    this._animState = this._animation.play(animName);
                    this._lastAnim = animName;
                }
                console.log(this._playerState,this._lastAnim  ,this.combostep, this.combotimer);

            }    
        }
    
        getAnimName(state: PlayerState, facing: FacingDirection): string {
            switch (state) {
                case PlayerState.Combo_1:
                    switch (facing) {
                        case FacingDirection.Right: return this.combo_right_1;
                        case FacingDirection.Left:  return this.combo_left_1;
                        case FacingDirection.Up:    return this.combo_up_1;
                        case FacingDirection.Down:  return this.combo_down_1;
                    }
                    break;
                case PlayerState.Walk:
                    switch (facing) {
                        case FacingDirection.Right: return this.walkRightAnimation;
                        case FacingDirection.Left:  return this.walkLeftAnimation;
                        case FacingDirection.Up:    return this.walkUpAnimation;
                        case FacingDirection.Down:  return this.walkDownAnimation;
                    }
                    break;
                case PlayerState.Idle:
                    return this.idleAnimation;
                case PlayerState.Attack:
                    switch (facing) {
                        case FacingDirection.Right: return this.attack_right;
                        case FacingDirection.Left:  return this.attack_left;
                        case FacingDirection.Up:    return this.attack_up;
                        case FacingDirection.Down:  return this.attack_down;
                        
                    }
                    break;
                case PlayerState.Attack2:
                    switch (facing) {
                        case FacingDirection.Right: return this.attack_right_2;
                        case FacingDirection.Left:  return this.attack_left_2;
                        case FacingDirection.Up:    return this.attack_up_2;
                        case FacingDirection.Down:  return this.attack_down_2;
                        
                    }
                    break;
                case PlayerState.Attack3:
                    switch (facing) {
                        case FacingDirection.Right: return this.attack_right_3;
                        case FacingDirection.Left:  return this.attack_left_3;
                        case FacingDirection.Up:    return this.attack_up_3;
                        case FacingDirection.Down:  return this.attack_down_3;
                        
                    }
                    break;
                case PlayerState.Hurt:
                    switch (facing) {
                        case FacingDirection.Right: return this.hurt_right;
                        case FacingDirection.Left:  return this.hurt_left;
                        case FacingDirection.Up:    return this.hurt_up;
                        case FacingDirection.Down:  return this.hurt_down;
                    }
                    break;
                case PlayerState.Die:
                    switch (facing) {
                        case FacingDirection.Right: return this.death_right;
                        case FacingDirection.Left:  return this.death_left;
                        case FacingDirection.Up:    return this.death_up;
                        case FacingDirection.Down:  return this.death_down;
                    }
                    break;
            }
            return "";
        }
    private onAnimFinished(){
        console.log("finish");
        if (this._playerState === PlayerState.Attack ||
            this._playerState === PlayerState.Attack2 ||
            this._playerState === PlayerState.Attack3 ||
            this._playerState === PlayerState.Hurt ||
            this._playerState === PlayerState.Combo_1 
        ) {
            this._playerState = PlayerState.Idle;
            this._lastAnim = "";
        }
    }
    stopupdate() {
        const animNames = [
            this.combo_up_1,
            this.combo_down_1,
            this.combo_left_1,
            this.combo_right_1
        ];

        for (const name of animNames) {
            const state = this._animation.getAnimationState(name);
            if (state && state.isPlaying) return true;
        }
        return false;
    }
    incombo(){
        if (this._playerState === PlayerState.Combo_1) return true;
        if (this._playerState ===PlayerState.Attack ) {
            this.combostep = 1;
            this.combotimer = 0;
            return false;
        }else if (this._playerState === PlayerState.Attack2 && this.combostep === 1 && this.combotimer < this.comboInterval){
            this.combostep = 2;
            this.combotimer = 0;
            return false;
        } else if(this._playerState === PlayerState.Attack3 && this.combostep === 2 && this.combotimer < this.comboInterval){
            this.combostep = 3;
            this.combotimer = 0;
            this._playerState = PlayerState.Combo_1;
            return true;
        }
        return false;
    }
    iswalking(){
        const animNames = [
            this.walkDownAnimation,this.walkLeftAnimation,this.walkRightAnimation,this.walkUpAnimation
        ];
        for (const name of animNames) {
            const state = this._animation.getAnimationState(name);
            if (state && state.isPlaying) return true;
        }
        return false;
    }

    public godie(){
        this._playerState = PlayerState.Die;
        this.scheduleOnce(()=>{
            let Mgr = cc.find("GameManager").getComponent("GameManager");
            Mgr.EndGame();
        }, 1);
    }
        
}
    

