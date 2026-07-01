import { Shape } from "../Shape";

/**
 * Represents an ellipse.
 */
export class Ellipse extends Shape {

    private _radiusX = 60;

    private _radiusY = 40;

    constructor(
        radiusX: number = 60,
        radiusY: number = 40
    ) {

        super();

        this.radiusX = radiusX;
        this.radiusY = radiusY;

    }

    public get radiusX(): number {

        return this._radiusX;

    }

    public set radiusX(
        value: number
    ) {

        this._radiusX = Math.max(
            0,
            value
        );

    }

    public get radiusY(): number {

        return this._radiusY;

    }

    public set radiusY(
        value: number
    ) {

        this._radiusY = Math.max(
            0,
            value
        );

    }

    public setRadii(
        radiusX: number,
        radiusY: number
    ): void {

        this.radiusX = radiusX;
        this.radiusY = radiusY;

    }

    protected override buildPath(
        context: CanvasRenderingContext2D
    ): void {

        context.ellipse(
            0,
            0,
            this.radiusX,
            this.radiusY,
            0,
            0,
            Math.PI * 2
        );

    }

}