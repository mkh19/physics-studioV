import { Shape } from "../Shape";

/**
 * Represents a circular arc.
 */
export class Arc extends Shape {

    private _radius = 40;

    private _startAngle = 0;

    private _endAngle = Math.PI;

    constructor(
        radius: number = 40,
        startAngle: number = 0,
        endAngle: number = Math.PI
    ) {

        super();

        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;

    }

    public get radius(): number {

        return this._radius;

    }

    public set radius(
        value: number
    ) {

        this._radius = Math.max(
            0,
            value
        );

    }

    public get startAngle(): number {

        return this._startAngle;

    }

    public set startAngle(
        value: number
    ) {

        this._startAngle = value;

    }

    public get endAngle(): number {

        return this._endAngle;

    }

    public set endAngle(
        value: number
    ) {

        this._endAngle = value;

    }

    public setAngles(
        startAngle: number,
        endAngle: number
    ): void {

        this.startAngle = startAngle;
        this.endAngle = endAngle;

    }

    protected override buildPath(
        context: CanvasRenderingContext2D
    ): void {

        context.arc(
            0,
            0,
            this.radius,
            this.startAngle,
            this.endAngle
        );

    }

}