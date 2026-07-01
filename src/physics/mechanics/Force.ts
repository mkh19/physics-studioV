import { Arrow } from "../../graphics/Arrow";
import { TextObject } from "../../graphics/TextObject";
import { PhysicsObject } from "../PhysicsObject";
import { ForceDirection } from "./ForceDirection";

/**
 * Represents a physical force.
 */
export class Force extends PhysicsObject {

    private static readonly DEFAULT_MAGNITUDE = 10;

    private static readonly DEFAULT_UNIT = "N";

    private static readonly DEFAULT_FONT_SIZE = 18;

   

    private readonly _arrow = new Arrow();

    private readonly _label = new TextObject();

    private _magnitude =
        Force.DEFAULT_MAGNITUDE;

    private _unit =
        Force.DEFAULT_UNIT;

    private _direction =
        ForceDirection.Right;

    public constructor(
        magnitude: number = Force.DEFAULT_MAGNITUDE,
        unit: string = Force.DEFAULT_UNIT
    ) {

        super();

        this._magnitude = magnitude;

        this._unit = unit;

        this.initialize();

    }

    public get magnitude(): number {

        return this._magnitude;

    }

    public set magnitude(
        value: number
    ) {

        this._magnitude = Math.max(
            0,
            value
        );

        this.updateLabel();

    }

    public get unit(): string {

        return this._unit;

    }

    public set unit(
        value: string
    ) {

        this._unit = value;

        this.updateLabel();

    }

    public get direction(): ForceDirection {

        return this._direction;

    }

    public set direction(
        value: ForceDirection
    ) {

        this._direction = value;

    }

    public get arrow(): Arrow {

        return this._arrow;

    }

    public get label(): TextObject {

        return this._label;

    }

    private initialize(): void {

        this.add(
            this._arrow
        );

        this.add(
            this._label
        );

        this._label.fontSize =
            Force.DEFAULT_FONT_SIZE;

        this.updateLabel();

      

    }

    private updateLabel(): void {

        this._label.text =
            `${this.magnitude} ${this.unit}`;

    }

    

}