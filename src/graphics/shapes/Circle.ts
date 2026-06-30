import { Shape } from "../Shape";

export class Circle extends Shape {

    constructor(
        public radius: number = 40
    ) {

        super();

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