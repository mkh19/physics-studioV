import { GraphicObject } from "./GraphicObject";

export class ImageObject extends GraphicObject {

    private readonly image = new Image();

    constructor(
        src: string
    ) {

        super();

        this.image.src = src;

    }

    protected override onDraw(
        context: CanvasRenderingContext2D
    ): void {

        context.drawImage(
            this.image,
            0,
            0
        );

    }

}