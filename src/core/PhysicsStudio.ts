import { Canvas } from "../canvas";
import { Document } from "./Document";

export class PhysicsStudio {

    private readonly _canvas = new Canvas();

    private readonly _document = new Document();

    public get canvas(): Canvas {

        return this._canvas;

    }

    public get document(): Document {

        return this._document;

    }

    public attach(
        element: HTMLElement
    ): void {

        element.appendChild(
            this.canvas.element
        );

    }

    public render(): void {

        this.canvas.clear();

        this.document.draw(
            this.canvas.context
        );

    }

}