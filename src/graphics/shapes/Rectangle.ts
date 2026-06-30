import { Shape } from "../Shape";

export class Rectangle extends Shape {

    private readonly _width: number;

    private readonly _height: number;

    constructor(
        width: number = 120,
        height: number = 60
    ) {

        super();

        this._width = width;
        this._height = height;

    }

    /**
     * Rectangle width.
     */
    public get width(): number {

        return this._width;

    }

    /**
     * Rectangle height.
     */
    public get height(): number {

        return this._height;

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