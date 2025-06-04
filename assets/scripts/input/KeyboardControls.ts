// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import Controller from "./Controller";
import { ButtonState, IInputControls } from "./IInputControls";

const { ccclass, property } = cc._decorator;

@ccclass
export default class KeyboardControls
    extends cc.Component
    implements IInputControls {

    private _hAxis: number = 0;
    public get horizontalAxis(): number { return this._hAxis }

    private _vAxis: number = 0;
    public get verticalAxis(): number { return this._vAxis }

    private _zKey: ButtonState = ButtonState.Rest;
    public get attack(): ButtonState { return this._zKey }
    public get interact(): ButtonState { return this._zKey }

    private _xKey: ButtonState = ButtonState.Rest;
    public get gethurt(): ButtonState { return this._xKey }

    private _cKey: ButtonState = ButtonState.Rest;
    public get attack2(): ButtonState { return this._cKey }

    private _vKey: ButtonState = ButtonState.Rest;
    public get attack3(): ButtonState { return this._vKey }

    // LIFE-CYCLE CALLBACKS:

    onLoad() { }

    start() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    // update (dt) {}

    onKeyDown(event: cc.Event.EventKeyboard) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this._hAxis = -1;
                break;
            case cc.macro.KEY.d:
                this._hAxis = 1;
                break;
            case cc.macro.KEY.w:
                this._vAxis = 1;
                break;
            case cc.macro.KEY.s:
                this._vAxis = -1;
                break;
            case cc.macro.KEY.z: 
                if (this._zKey === ButtonState.Rest || this._zKey === ButtonState.Released) {
                    this._zKey = ButtonState.Pressed;
                } else {
                    this._zKey = ButtonState.Held;
                }
                break;
            case cc.macro.KEY.x: 
                if (this._xKey === ButtonState.Rest || this._xKey === ButtonState.Released) {
                    this._xKey = ButtonState.Pressed;
                    
                } else {
                    this._xKey = ButtonState.Held;
                }
                break;
            case cc.macro.KEY.c: 
                if (this._cKey === ButtonState.Rest || this._cKey === ButtonState.Released) {
                    this._cKey = ButtonState.Pressed;
                } else {
                    this._cKey = ButtonState.Held;
                }
                break;
            case cc.macro.KEY.v: 
                if (this._vKey === ButtonState.Rest || this._vKey === ButtonState.Released) {
                    this._vKey = ButtonState.Pressed;
                } else {
                    this._vKey = ButtonState.Held;
                }
                break;
        }
        this._vAxis = clamp(this._vAxis);
        this._hAxis = clamp(this._hAxis);
    }

    onKeyUp(event: cc.Event.EventKeyboard) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this._hAxis += 1;
                break;
            case cc.macro.KEY.d:
                this._hAxis -= 1;
                break;
            case cc.macro.KEY.w:
                this._vAxis -= 1;
                break;
            case cc.macro.KEY.s:
                this._vAxis += 1;
                break;
            case cc.macro.KEY.z: 
                if (this._zKey === ButtonState.Pressed || this._zKey === ButtonState.Held) {
                    this._zKey = ButtonState.Released;
                } else {
                    this._zKey = ButtonState.Rest;
                }
                break;
            case cc.macro.KEY.x: 
                if (this._xKey === ButtonState.Pressed || this._xKey === ButtonState.Held) {
                    this._xKey = ButtonState.Released;
                } else {
                    this._xKey = ButtonState.Rest;
                }
                break;
            case cc.macro.KEY.c: 
                if (this._cKey === ButtonState.Pressed || this._cKey === ButtonState.Held) {
                    this._cKey = ButtonState.Released;
                } else {
                    this._cKey = ButtonState.Rest;
                }
                break;
            case cc.macro.KEY.v: 
                if (this._vKey === ButtonState.Pressed || this._vKey === ButtonState.Held) {
                    this._vKey = ButtonState.Released;
                } else {
                    this._vKey = ButtonState.Rest;
                }
                break;
        }
        this._vAxis = clamp(this._vAxis);
        this._hAxis = clamp(this._hAxis);
    }

}

function clamp(value: number, a: number = -1, b: number = 1) {
    if (value < a) return a;
    if (value > b) return b;
    return value;
}