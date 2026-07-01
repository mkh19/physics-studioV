import { Rectangle } from "../../graphics/shapes/Rectangle";
import { TextObject } from "../../graphics/TextObject";
import { PhysicsObject } from "../PhysicsObject";
import { GeometryDefaults } from "../../defaults";

/**
 * Represents a physical mass.
 */
export class Mass extends PhysicsObject {

   

    private static readonly LABEL_OFFSET_X = 30;

    private static readonly LABEL_OFFSET_Y = 35;

    private readonly _body = new Rectangle();

    private readonly _label = new TextObject();

    private _value = 1;

    private _unit = "kg";

    public constructor(
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

        this.add(
            this._body
        );

        this.add(
            this._label
        );

        this._body.width =
            GeometryDefaults.MASS_WIDTH;

        this._body.height =
            GeometryDefaults.MASS_HEIGHT;

        this._label.fontSize = 18;

        this.centerLabel();

        this.updateLabel();

    }

    private updateLabel(): void {

        this._label.text =
            `${this.value} ${this.unit}`;

    }

    private centerLabel(): void {

        this._label.transform.position.set(
            Mass.LABEL_OFFSET_X,
            Mass.LABEL_OFFSET_Y
        );

    }

}