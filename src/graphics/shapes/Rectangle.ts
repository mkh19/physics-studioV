import { Shape } from "../Shape";

/**
 * Represents a rectangle.
 */
export class Rectangle extends Shape {

    private _width = 120;

    private _height = 60;

    constructor(
        width: number = 120,
        height: number = 60
    ) {

        super();

        this.width = width;
        this.height = height;

    }

    public get width(): number {

        return this._width;

    }

    public set width(
        value: number
    ) {

        this._width = Math.max(
            0,
            value
        );

    }

    public get height(): number {

        return this._height;

    }

    public set height(
        value: number
    ) {

        this._height = Math.max(
            0,
            value
        );

    }

    public setSize(
        width: number,
        height: number
    ): void {

        this.width = width;
        this.height = height;

    }

    protected override path(
        context: CanvasRenderingContext2D
    ): void {

        context.rect(
            0,
            0,
            this.width,
            this.height
        );

    }

}