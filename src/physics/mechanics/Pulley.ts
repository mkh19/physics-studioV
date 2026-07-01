import { Circle } from "../../graphics/shapes/Circle";
import { Line } from "../../graphics/shapes/Line";
import { PhysicsObject } from "../PhysicsObject";

/**
 * Represents a simple pulley.
 */
export class Pulley extends PhysicsObject {

    private readonly _wheel = new Circle();

    private readonly _axle = new Circle();

    private readonly _support = new Line();

    private _radius = 40;

    constructor(
        radius: number = 40
    ) {

        super();

        this.radius = radius;

        this.initialize();

        this.add(this._wheel);
        this.add(this._axle);
        this.add(this._support);

    }

    public get wheel(): Circle {

        return this._wheel;

    }

    public get axle(): Circle {

        return this._axle;

    }

    public get support(): Line {

        return this._support;

    }

    public get radius(): number {

        return this._radius;

    }

    public set radius(
        value: number
    ) {

        this._radius = Math.max(
            10,
            value
        );

        this.updateGeometry();

    }

    private initialize(): void {

        this._wheel.style.fill = "#FFFFFF";
        this._wheel.style.stroke = "#000000";
        this._wheel.style.lineWidth = 2;

        this._axle.radius = 4;
        this._axle.style.fill = "#000000";
        this._axle.style.stroke = "#000000";

        this._support.style.stroke = "#000000";
        this._support.style.lineWidth = 2;

        this.updateGeometry();

    }

    private updateGeometry(): void {

        this._wheel.radius = this.radius;

        this._support.setStart(
            0,
            -this.radius - 25
        );

        this._support.setEnd(
            0,
            -this.radius
        );

    }

}