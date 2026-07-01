import { GraphicObject } from "./GraphicObject";
import { Layer } from "./Layer";

/**
 * Root object of a Physics Studio document.
 */
export class Document {

    private readonly _layers: Layer[] = [];

    private readonly _defaultLayer = new Layer("Default");

    private static readonly DEFAULT_WIDTH = 800;

    private static readonly DEFAULT_HEIGHT = 600;
    private _width =
    Document.DEFAULT_WIDTH;

    private _height =
    Document.DEFAULT_HEIGHT;
    private _title = "Untitled";
    private static readonly DEFAULT_BACKGROUND = "#FFFFFF";
    private _background =
    Document.DEFAULT_BACKGROUND;

    constructor() {

        this._layers.push(
            this._defaultLayer
        );

    }

    public get title(): string {

        return this._title;

    }

    public set title(
        value: string
    ) {

        this._title = value;

    }
    public get layers(): readonly Layer[] {

        return this._layers;

    }

    public get defaultLayer(): Layer {

        return this._defaultLayer;

    }

    public get layerCount(): number {

        return this._layers.length;

    }

    public get width(): number {

        return this._width;

    }

    public set width(
        value: number
    ) {

        this._width = Math.max(
            1,
            value
        );

    }

    public get height(): number {

        return this._height;

    }

    public set height(
        value: number
    ) {

        this._height = Math.max(
            1,
            value
        );

    }

    public get background(): string {

        return this._background;

    }

    public set background(
        value: string
    ) {

        this._background = value;

    }

    /**
     * Adds an object to the default layer.
     */
    public add(
        object: GraphicObject
    ): void {

        this._defaultLayer.add(
            object
        );

    }

    /**
     * Removes an object from the default layer.
     */
    public remove(
        object: GraphicObject
    ): void {

        this._defaultLayer.remove(
            object
        );

    }

    /**
     * Clears the default layer.
     */
    public clear(): void {

        this._defaultLayer.clear();

    }

    public addLayer(
        layer: Layer
    ): void {

        if (
            this._layers.includes(layer)
        ) {

            return;

        }

        this._layers.push(layer);

    }

    public indexOfLayer(
        layer: Layer
    ): number {

        return this._layers.indexOf(
            layer
        );

    }

    public removeLayer(
        layer: Layer
    ): void {

        if (layer === this._defaultLayer) {

            return;

        }
        
        const index =
        this._layers.indexOf(layer);

        if (index !== -1) {
            
            this._layers.splice(
                index,
                1
            );

        }
        
    }
    
    public containsLayer(
        layer: Layer
    ): boolean {

        return this._layers.includes(layer);
        
    }
    // public moveLayer(from: number,to: number): void
    public findLayer(
    name: string
): Layer | undefined {

    return this._layers.find(
        layer => layer.name === name
    );

}
    
}