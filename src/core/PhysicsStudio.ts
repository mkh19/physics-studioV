import { Canvas } from "../canvas";
import { CanvasRenderer } from "../rendering/CanvasRenderer";
import { SelectionManager } from "../selection";
import { HitTester } from "../selection";
import { Document } from "./Document";

export class PhysicsStudio {

    private readonly _canvas = new Canvas();

    private readonly _document = new Document();

    private readonly _renderer: CanvasRenderer;

    private readonly _selection =
        new SelectionManager();

    private readonly _hitTester =
        new HitTester();

    public constructor() {

        this._renderer = new CanvasRenderer(
            this._canvas.context
        );

        this.initialize();

    }

    public get canvas(): Canvas {

        return this._canvas;

    }

    public get document(): Document {

        return this._document;

    }

    public get selection(): SelectionManager {

        return this._selection;

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

    private initialize(): void {

    }

}