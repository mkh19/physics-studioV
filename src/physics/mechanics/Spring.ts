import { Line } from "../../graphics/shapes/Line";
import { TextObject } from "../../graphics/TextObject";
import { PhysicsObject } from "../PhysicsObject";

/**
 * Represents an ideal spring.
 */
export class Spring extends PhysicsObject {

    private readonly _body = new Line();

    private readonly _label = new TextObject();

    private _length = 120;

    constructor(
        length: number = 120,
        label: string = "Spring"
    ) {

        super();

        this.length = length;

        this._label.text = label;
        this._label.fontSize = 16;

        this.updateGeometry();

        this.add(this._body);
        this.add(this._label);

    }

    public get body(): Line {

        return this._body;

    }

    public get label(): TextObject {

        return this._label;

    }

    public get length(): number {

        return this._length;

    }

    public set length(
        value: number
    ) {

        this._length = Math.max(
            20,
            value
        );

        this.updateGeometry();

    }

    private updateGeometry(): void {

        this._body.setStart(
            0,
            0
        );

        this._body.setEnd(
            this.length,
            0
        );

        this._label.transform.position.set(
            this.length / 2 - 20,
            -15
        );

    }

}