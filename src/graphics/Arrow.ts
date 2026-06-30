import { Point } from "../math";
import { Group } from "./Group";
import { Line } from "./shapes/Line";

export class Arrow extends Group {

    private readonly _length: number;

    private readonly shaft: Line;

    private readonly headLeft: Line;

    private readonly headRight: Line;

    constructor(
        length: number = 120
    ) {

        super();

        this._length = length;

        this.shaft = new Line(
            new Point(0, 0),
            new Point(this.length, 0)
        );

        this.headLeft = new Line(
            new Point(this.length, 0),
            new Point(this.length - 12, -8)
        );

        this.headRight = new Line(
            new Point(this.length, 0),
            new Point(this.length - 12, 8)
        );

        this.add(this.shaft);
        this.add(this.headLeft);
        this.add(this.headRight);

    }

    /**
     * Arrow length.
     */
    public get length(): number {

        return this._length;

    }

    /**
     * Changes the color of the arrow.
     */
    public setColor(
        color: string
    ): void {

        this.shaft.stroke = color;
        this.headLeft.stroke = color;
        this.headRight.stroke = color;

    }

    /**
     * Changes the line width.
     */
    public setLineWidth(
        width: number
    ): void {

        this.shaft.lineWidth = width;
        this.headLeft.lineWidth = width;
        this.headRight.lineWidth = width;

    }

}