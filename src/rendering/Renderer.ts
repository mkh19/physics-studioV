import { Document } from "../core/Document";
import { GraphicObject } from "../core/GraphicObject";

/**
 * Base class for all renderers.
 */
export abstract class Renderer {

    /**
     * Renders an entire document.
     */
    public abstract render(
        document: Document
    ): void;

    /**
     * Renders a single graphic object.
     */
    protected abstract renderObject(
        object: GraphicObject
    ): void;

}