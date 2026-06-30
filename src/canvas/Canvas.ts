/**
 * Represents the drawing surface.
 */
export class Canvas {

    private readonly _element: HTMLCanvasElement;

    private readonly _context: CanvasRenderingContext2D;

    constructor(
        width: number = 900,
        height: number = 600
    ) {

        this._element = document.createElement("canvas");

        this._element.width = width;
        this._element.height = height;

        const context = this._element.getContext("2d");

        if (!context) {

            throw new Error(
                "Unable to create 2D context."
            );

        }

        this._context = context;

    }

    public get element(): HTMLCanvasElement {

        return this._element;

    }

    public get context(): CanvasRenderingContext2D {

        return this._context;

    }

    public get width(): number {

        return this._element.width;

    }

    public get height(): number {

        return this._element.height;

    }

    public resize(
        width: number,
        height: number
    ): void {

        this._element.width = width;
        this._element.height = height;

    }

    public clear(): void {

        this._context.clearRect(
            0,
            0,
            this.width,
            this.height
        );

    }

}