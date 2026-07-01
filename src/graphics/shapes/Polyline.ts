import { Shape } from "../Shape";
import { Point } from "../../math";

export class Polyline extends Shape {

    private readonly _points: Point[] = [];

    constructor(
    points: Point[] = []
) {

    super();

    this.setPoints(points);

}
public setPoints(
    points: readonly Point[]
): void {

    this.clear();

    for (const point of points) {

        this.addPoint(point);

    }

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

    protected override buildPath(
        context: CanvasRenderingContext2D
    ): void {

        if (this.points.length === 2) {

            return;

        }

        context.moveTo(
            this.points[0].x,
            this.points[0].y
        );

        for (let i = 1; i < this.points.length; i++) {

            context.lineTo(
                this.points[i].x,
                this.points[i].y
            );

        }

    }
    public clear(): void {

    this._points.length = 0;

}

}