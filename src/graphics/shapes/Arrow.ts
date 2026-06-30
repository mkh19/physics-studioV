import { Line } from "./Line";

export class Arrow extends Line {

    public headSize = 12;

    public override draw(
        context: CanvasRenderingContext2D
    ): void {

        super.draw(context);

        context.save();

        context.translate(
            this.position.x,
            this.position.y
        );

        context.rotate(this.rotation);

        const angle = Math.atan2(
            this.end.y,
            this.end.x
        );

        context.translate(
            this.end.x,
            this.end.y
        );

        context.rotate(angle);

        context.beginPath();

        context.moveTo(0, 0);
        context.lineTo(-this.headSize, this.headSize / 2);
        context.lineTo(-this.headSize, -this.headSize / 2);

        context.closePath();

        context.fillStyle = this.strokeColor;
        context.fill();

        context.restore();

    }

}