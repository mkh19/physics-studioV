import { Arrow } from "../../graphics/Arrow";
import { TextObject } from "../../graphics/TextObject";
import { PhysicsObject } from "../PhysicsObject";
import { ForceDirection } from "./ForceDirection";
/**
 * Represents a force vector.
 */
export class Force extends PhysicsObject {

    private readonly _arrow = new Arrow();
    private _direction = ForceDirection.Right;

    private readonly _label = new TextObject();

    private _magnitude = 0;

    private _unit = "N";

    constructor(
        magnitude: number = 0,
        label: string = "F"
    ) {

        super();

        this._magnitude = magnitude;

        this._arrow.length = 120;
        this._arrow.setColor("#D32F2F");
        this._arrow.setLineWidth(3);

        this._label.text = label;
        this._label.fontSize = 18;
        this._label.color = "#D32F2F";

        this.updateLabelPosition();
        this.updateLabel();

        this.add(this._arrow);
        this.add(this._label);

    }

    public get arrow(): Arrow {

        return this._arrow;

    }

    public get label(): TextObject {

        return this._label;

    }

    public get magnitude(): number {

        return this._magnitude;

    }

    public set magnitude(
        value: number
    ) {

        this._magnitude = value;

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

    public setColor(
        color: string
    ): void {

        this._arrow.setColor(color);

        this._label.color = color;

    }

    private updateLabel(): void {

        this._label.text =
            `F = ${this.magnitude} ${this.unit}`;

    }

    private updateLabelPosition(): void {

        this._label.transform.position.set(
            this._arrow.length + 12,
            5
        );

    }

}