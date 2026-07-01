import { Point } from "../../math";
import { Shape } from "../Shape";

/**
 * Represents a polygon.
 */
export class Polygon extends Shape {

    private readonly _points: Point[] = [];

    constructor(
        points: Point[] = []
    ) {

        super();

        this.setPoints(points);

    }

    public get points(): readonly Point[] {

        return this._points;

    }

    public addPoint(
        point: Point
    ): void {

        this._points.push(
            point.clone()
        );

    }

    public setPoints(
        points: readonly Point[]
    ): void {

        this.clear();

        for (const point of points) {

            this.addPoint(point);

        }

    }

    public clear(): void {

        this._points.length = 0;

    }

    protected override path(
        context: CanvasRenderingContext2D
    ): void {

        if (this._points.length < 2) {

            return;

        }

        context.moveTo(
            this._points[0].x,
            this._points[0].y
        );

        for (let i = 1; i < this._points.length; i++) {

            context.lineTo(
                this._points[i].x,
                this._points[i].y
            );

        }

        context.closePath();

    }

}