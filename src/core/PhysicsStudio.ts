import { Canvas } from "../canvas";
import { CanvasRenderer } from "../rendering/CanvasRenderer";
import { Document } from "./Document";

export class PhysicsStudio {

    private readonly _canvas = new Canvas();

    private readonly _document = new Document();

    private readonly _renderer: CanvasRenderer;

    constructor() {

        this._renderer = new CanvasRenderer(
            this._canvas.context
        );

    }

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

        this._renderer.render(
            this.document
        );

    }

}