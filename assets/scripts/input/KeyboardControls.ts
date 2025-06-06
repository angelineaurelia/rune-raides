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

    private _kKey: ButtonState = ButtonState.Rest;
    public get attack(): ButtonState { return this._kKey }
    public get interact(): ButtonState { return this._kKey }

    private _xKey: ButtonState = ButtonState.Rest;
    public get gethurt(): ButtonState { return this._xKey }

    private _jKey: ButtonState = ButtonState.Rest;
    public get attack2(): ButtonState { return this._jKey }

    private _lKey: ButtonState = ButtonState.Rest;
    public get attack3(): ButtonState { return this._lKey }

    // LIFE-CYCLE CALLBACKS:

    onLoad() { }

    start() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    closeInput() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    openInput() {
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
            case cc.macro.KEY.j: 
                if (this._kKey === ButtonState.Rest || this._kKey === ButtonState.Released) {
                    this._kKey = ButtonState.Pressed;
                } else {
                    this._kKey = ButtonState.Held;
                }
                break;
            case cc.macro.KEY.x: 
                if (this._xKey === ButtonState.Rest || this._xKey === ButtonState.Released) {
                    this._xKey = ButtonState.Pressed;
                    
                } else {
                    this._xKey = ButtonState.Held;
                }
                break;
            case cc.macro.KEY.k: 
                if (this._jKey === ButtonState.Rest || this._jKey === ButtonState.Released) {
                    this._jKey = ButtonState.Pressed;
                } else {
                    this._jKey = ButtonState.Held;
                }
                break;
            case cc.macro.KEY.l:
                if (this._lKey === ButtonState.Rest || this._lKey === ButtonState.Released) {
                    this._lKey = ButtonState.Pressed;
                } else {
                    this._lKey = ButtonState.Held;
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
            case cc.macro.KEY.j: 
                if (this._kKey === ButtonState.Pressed || this._kKey === ButtonState.Held) {
                    this._kKey = ButtonState.Released;
                } else {
                    this._kKey = ButtonState.Rest;
                }
                break;
            case cc.macro.KEY.x: 
                if (this._xKey === ButtonState.Pressed || this._xKey === ButtonState.Held) {
                    this._xKey = ButtonState.Released;
                } else {
                    this._xKey = ButtonState.Rest;
                }
                break;
            case cc.macro.KEY.k: 
                if (this._jKey === ButtonState.Pressed || this._jKey === ButtonState.Held) {
                    this._jKey = ButtonState.Released;
                } else {
                    this._jKey = ButtonState.Rest;
                }
                break;
            case cc.macro.KEY.l: 
                if (this._lKey === ButtonState.Pressed || this._lKey === ButtonState.Held) {
                    this._lKey = ButtonState.Released;
                } else {
                    this._lKey = ButtonState.Rest;
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