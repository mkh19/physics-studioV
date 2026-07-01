import { Point } from "../../math";
import { Polygon } from "../../graphics/shapes/Polygon";
import { Line } from "../../graphics/shapes/Line";
import { PhysicsObject } from "../PhysicsObject";

/**
 * Represents an inclined plane.
 */
export class InclinedPlane extends PhysicsObject {

    private readonly _surface = new Polygon();

    private readonly _base = new Line();

    private _width = 220;

    private _height = 120;

    constructor(
        width: number = 220,
        height: number = 120
    ) {

        super();

        this.width = width;
        this.height = height;

        this.initialize();

        this.add(this._surface);
        this.add(this._base);

    }

    public get surface(): Polygon {

        return this._surface;

    }

    public get base(): Line {

        return this._base;

    }

    public get width(): number {

        return this._width;

    }

    public set width(
        value: number
    ) {

        this._width = Math.max(
            50,
            value
        );

        this.updateGeometry();

    }

    public get height(): number {

        return this._height;

    }

    public set height(
        value: number
    ) {

        this._height = Math.max(
            20,
            value
        );

        this.updateGeometry();

    }

    private initialize(): void {

        this._surface.style.fill = "#F5F5F5";

        this._surface.style.stroke = "#000000";

        this._surface.style.lineWidth = 2;

        this._base.style.stroke = "#000000";

        this._base.style.lineWidth = 2;

        this.updateGeometry();

    }

    private updateGeometry(): void {

        this._surface.setPoints([
            new Point(
                0,
                this.height
            ),
            new Point(
                this.width,
                this.height
            ),
            new Point(
                this.width,
                0
            )
        ]);

        this._base.setStart(
            0,
            this.height
        );

        this._base.setEnd(
            this.width,
            this.height
        );

    }

}