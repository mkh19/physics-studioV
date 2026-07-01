import { GraphicObject } from "./GraphicObject";
import { Bounds } from "../geometry";
/**
 * Represents a collection of graphic objects.
 */
export class Group extends GraphicObject {

    private readonly _objects: GraphicObject[] = [];

    public get objects(): readonly GraphicObject[] {

        return this._objects;

    }

    public add(
        object: GraphicObject
    ): void {

        if (this.contains(object)) {

            return;

        }

        this._objects.push(object);

    }

    public remove(
        object: GraphicObject
    ): void {

        const index = this._objects.indexOf(object);

        if (index !== -1) {

            this._objects.splice(
                index,
                1
            );

        }

    }

    public clear(): void {

        this._objects.length = 0;

    }

    public contains(
        object: GraphicObject
    ): boolean {

        return this._objects.includes(object);

    }

    public override draw(
        context: CanvasRenderingContext2D
    ): void {

        context.save();

        context.translate(
            this.transform.position.x,
            this.transform.position.y
        );

        context.rotate(
            this.transform.rotation
        );

        context.scale(
            this.transform.scale.x,
            this.transform.scale.y
        );

        for (const object of this._objects) {

            if (!object.visible) {

                continue;

            }

            object.draw(
                context
            );

        }

        context.restore();

    }


    public override getBounds(): Bounds | null {

    if (this._objects.length === 0) {

        return null;

    }

    let bounds: Bounds | null = null;

    for (const object of this._objects) {

        const childBounds =
            object.getBounds();

        if (!childBounds) {

            continue;

        }

        if (!bounds) {

            bounds =
                childBounds.clone();

            continue;

        }

        bounds = this.union(
            bounds,
            childBounds
        );

    }

    return bounds;

}
private union(
    first: Bounds,
    second: Bounds
): Bounds {

    const left =
        Math.min(
            first.left,
            second.left
        );

    const top =
        Math.min(
            first.top,
            second.top
        );

    const right =
        Math.max(
            first.right,
            second.right
        );

    const bottom =
        Math.max(
            first.bottom,
            second.bottom
        );

    return new Bounds(

        left,

        top,

        right - left,

        bottom - top

    );

}

}