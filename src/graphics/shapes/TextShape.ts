import { GraphicObject } from "../GraphicObject";

export class TextShape extends GraphicObject {

    constructor(
        public content = ""
    ) {
        super();
    }

    public font = "18px Arial";

    public color = "#000000";

    public draw(
        context: CanvasRenderingContext2D
    ): void {

        context.save();

        context.translate(
            this.position.x,
            this.position.y
        );

        context.rotate(this.rotation);

        context.font = this.font;
        context.fillStyle = this.color;

        context.fillText(
            this.content,
            0,
            0
        );

        context.restore();

    }

}