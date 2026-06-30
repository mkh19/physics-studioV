import { Point } from "../math";

/**
 * Base class for every object inside the document.
 */
export abstract class GraphicObject {

    private readonly _id = crypto.randomUUID();

    private readonly _position = new Point();

    private _rotation = 0;

    private _visible = true;

    public get id(): string {

        return this._id;

    }

    public get position(): Point {

        return this._position;

    }

    public get rotation(): number {

        return this._rotation;

    }

    public set rotation(
        value: number
    ) {

        this._rotation = value;

    }

    public get visible(): boolean {

        return this._visible;

    }

    public set visible(
        value: boolean
    ) {

        this._visible = value;

    }

    public move(
        dx: number,
        dy: number
    ): void {

        this.position.move(
            dx,
            dy
        );

    }

    /**
     * Draw the object.
     */
    public abstract draw(
        context: CanvasRenderingContext2D
    ): void;

}