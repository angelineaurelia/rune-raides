import { ButtonState } from "../../input/IInputControls";
import Agent from "../Agent";
import { AI } from "./AgentStrategy";

/**
 * An AI strategy that describes a "wandering" behaviour.
 */
export class Wanderer extends AI.Strategy {
    /** The agent will move for this long before stopping to wait. */
    private _moveDuration = 1.0;
    /** The agent will wait for this long before starting to move again. */
    private _waitDuration = 0.5;
    /** The actual wait duration will be randomized by this factor, 
     *  such that the actual wait duration is a random number between
     *  waitDuration x (1 - waitRandomFactor) and 
     *  waitDuration x (1 + waitRandomFactor).
    */
    private _waitRandomFactor = 0.1;

    constructor(moveDuration: number, waitDuration: number, waitRandomFactor: number) {
        super();
        //*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*\\
        // TODO (2.1): Complete the constructor.
        // [SPECIFICATIONS]
        // - Initialize the four private variables above properly.
        //*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*\\
        //#region [YOUR IMPLEMENTATION HERE]
        this._moveDuration = moveDuration;
        this._waitDuration = waitDuration;
        this._waitRandomFactor = waitRandomFactor;
        //#endregion
    }

    /** The time point after which the agent should wait. */
    private _nextWaitTime = 0;
    /** The time point after which the agent should move again. */
    private _nextMoveTime = 0;
    /** The velocity (vector with magnitude) at which the agent should move. */
    private _wanderVelocity = cc.Vec2.ZERO;
    /** The agent's output to IInput. */
    private _moveAxis2D = cc.Vec2.ZERO;

    //*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*\\
    // TODO (2.2): Map moveAxis2D to horizontal and vertical axes.
    // [SPECIFICATIONS]
    // - moveAxis2D.x should be mapped to the horizontal axis.
    // - moveAxis2D.y should be mapped to the vertical axis.
    // - You can leave the remaining unimplemented.
    //*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*\\
    public get horizontalAxis(): number {
        //#region [YOUR IMPLEMENTATION HERE]
        return this._moveAxis2D.x;
        //#endregion
    }
    public get verticalAxis(): number {
        //#region [YOUR IMPLEMENTATION HERE]
        return this._moveAxis2D.y;
        //#endregion
    }
    public get attack(): ButtonState {
        throw new Error("Method not implemented.");
    }
    public get interact(): ButtonState {
        throw new Error("Method not implemented.");
    }

    public start() {
        this._nextMoveTime = cc.director.getTotalTime() / 1000.0;
        this._nextWaitTime = this._nextMoveTime - this._waitDuration;
    }
    public update(dt: number) {
        /** The current time in the game in seconds. */
        let currentTime = cc.director.getTotalTime() / 1000.0;

        //*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*\\
        // TODO (2.3): Implement the behaviour of a wandering agent.
        // [SPECIFICATIONS]
        // 1. The agent should recompute its wandering direction when the
        //    current time (curTime) reaches the next move time (this.nextMoveTime)
        //     - When this happens, recompute the next move time and the next wait 
        //       time.
        //     - Compute the wandering direction as a random 2D vector using the
        //       provided function "randomPointOnCircle".
        // 2. The agent's movement axes (this.moveAxis2D)
        //    should be equal to the wander velocity (this.wanderVelocity) before
        //    the next wait time (this.nextWaitTime). 
        //    OTHERWISE it should be equal to cc.Vec2.ZERO.
        //*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*\\

        //#region [YOUR IMPLEMENTATION HERE]
        if (currentTime >= this._nextMoveTime) {
            this._nextWaitTime = currentTime + this._moveDuration;
            this._nextMoveTime = this._nextWaitTime + this._waitDuration * (1.0 * this._waitRandomFactor * (Math.random() - 2.0 * 1.0));

            this._wanderVelocity = randomPointOnUnitCircle()
        }

        this ._moveAxis2D = (currentTime < this._nextWaitTime) ? this._wanderVelocity : cc.Vec2.ZERO;
        //#endregion
    }

}

function randomPointOnUnitCircle() {
    let angle = Math.random() * Math.PI * 2;
    return new cc.Vec2(Math.cos(angle), Math.sin(angle));
}