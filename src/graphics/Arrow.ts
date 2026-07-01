// import { Point } from "../math";
import { Group } from "../core";
import { Line } from "./shapes/Line";

/**
 * Represents a reusable arrow.
 */
export class Arrow extends Group {

    private readonly _shaft: Line;

    private readonly _headLeft: Line;

    private readonly _headRight: Line;

    private _length: number;

    constructor(
        length: number = 120
    ) {

        super();

        this._length = length;

        this._shaft = new Line();

        this._headLeft = new Line();

        this._headRight = new Line();

        this.add(this._shaft);
        this.add(this._headLeft);
        this.add(this._headRight);

        this.updateGeometry();

    }

    public get length(): number {

        return this._length;

    }

    public set length(
        value: number
    ) {

        this._length = value;

        this.updateGeometry();

    }

    public get shaft(): Line {

        return this._shaft;

    }

    public get headLeft(): Line {

        return this._headLeft;

    }

    public get headRight(): Line {

        return this._headRight;

    }

    public setColor(
        color: string
    ): void {

        this._shaft.style.stroke = color;

        this._headLeft.style.stroke = color;

        this._headRight.style.stroke = color;

    }

    public setLineWidth(
        width: number
    ): void {

        this._shaft.style.lineWidth = width;

        this._headLeft.style.lineWidth = width;

        this._headRight.style.lineWidth = width;

    }

    private updateGeometry(): void {

        this._shaft.start.set(
            0,
            0
        );

        this._shaft.end.set(
            this.length,
            0
        );

        this._headLeft.start.set(
            this.length,
            0
        );

        this._headLeft.end.set(
            this.length - 12,
            -8
        );

        this._headRight.start.set(
            this.length,
            0
        );

        this._headRight.end.set(
            this.length - 12,
            8
        );

    }

}