import { Shape } from "../Shape";

/**
 * Represents a circle.
 */
export class Circle extends Shape {

    private _radius = 40;

    constructor(
        radius: number = 40
    ) {

        super();

        this.radius = radius;

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

    public get diameter(): number {

        return this.radius * 2;

    }

    protected override path(
        context: CanvasRenderingContext2D
    ): void {

        context.arc(
            0,
            0,
            this.radius,
            0,
            Math.PI * 2
        );

    }

}