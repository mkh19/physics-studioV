import { Rectangle } from "../../graphics/shapes/Rectangle";
import { TextObject } from "../../graphics/TextObject";
import { PhysicsObject } from "../PhysicsObject";

/**
 * Represents a physical mass.
 */
export class Mass extends PhysicsObject {

    private readonly _body = new Rectangle();

    private readonly _label = new TextObject();

    private _value = 1;

    private _unit = "kg";

    constructor(
        value: number = 1,
        unit: string = "kg"
    ) {

        super();

        this._value = value;
        this._unit = unit;

        this.initialize();

    }

    public get value(): number {

        return this._value;

    }

    public set value(
        value: number
    ) {

        this._value = value;

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

    public get body(): Rectangle {

        return this._body;

    }

    public get label(): TextObject {

        return this._label;

    }

    private initialize(): void {

        this._body.width = 120;

        this._body.height = 60;

        this._label.fontSize = 18;

        this.centerLabel();

        this.updateLabel();

        this.add(this._body);

        this.add(this._label);

    }

    private updateLabel(): void {

        this._label.text =
            `${this.value} ${this.unit}`;

    }

    private centerLabel(): void {

        this._label.transform.position.set(
            30,
            35
        );

    }

}