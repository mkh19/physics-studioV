import { Shape } from "../Shape";
import { Point } from "../../utils/Point";

export class Polygon extends Shape {

    private readonly _points: Point[];

    constructor(
        points: Point[]
    ) {

        super();

        this._points = points;

    }

    public get points(): readonly Point[] {

        return this._points;

    }

    protected override path(
        context: CanvasRenderingContext2D
    ): void {

        if (this.points.length === 0) {

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

        context.closePath();

    }

}