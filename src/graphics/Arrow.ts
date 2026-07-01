import { Group } from "../core";
import { GeometryDefaults } from "../defaults";
import { Line } from "./shapes/Line";

/**
 * Represents a reusable arrow.
 */
export class Arrow extends Group {

    private static readonly DEFAULT_LENGTH =
        GeometryDefaults.ARROW_LENGTH;

    private static readonly DEFAULT_HEAD_LENGTH =
        GeometryDefaults.ARROW_HEAD_LENGTH;

    private static readonly DEFAULT_HEAD_WIDTH =
        GeometryDefaults.ARROW_HEAD_WIDTH;

    private readonly _shaft = new Line();

    private readonly _headLeft = new Line();

    private readonly _headRight = new Line();

    private _length =
        Arrow.DEFAULT_LENGTH;

    private _headLength =
        Arrow.DEFAULT_HEAD_LENGTH;

    private _headWidth =
        Arrow.DEFAULT_HEAD_WIDTH;

    public constructor(
        length: number = Arrow.DEFAULT_LENGTH
    ) {

        super();

        this.initialize();

        this.length = length;

    }

    public get length(): number {

        return this._length;

    }

    public set length(
        value: number
    ) {

        this._length = Math.max(
            0,
            value
        );

        this.updateLayout();

    }

    public get headLength(): number {

        return this._headLength;

    }

    public set headLength(
        value: number
    ) {

        this._headLength = Math.max(
            0,
            value
        );

        this.updateLayout();

    }

    public get headWidth(): number {

        return this._headWidth;

    }

    public set headWidth(
        value: number
    ) {

        this._headWidth = Math.max(
            0,
            value
        );

        this.updateLayout();

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

    private initialize(): void {

        this.add(
            this._shaft
        );

        this.add(
            this._headLeft
        );

        this.add(
            this._headRight
        );

        this.updateLayout();

    }

    private updateLayout(): void {

        this._shaft.start.set(
            0,
            0
        );

        this._shaft.end.set(
            this._length,
            0
        );

        this._headLeft.start.set(
            this._length,
            0
        );

        this._headLeft.end.set(
            this._length - this._headLength,
            -this._headWidth
        );

        this._headRight.start.set(
            this._length,
            0
        );

        this._headRight.end.set(
            this._length - this._headLength,
            this._headWidth
        );

    }

}