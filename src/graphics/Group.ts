import { GraphicObject } from "./GraphicObject";

export class Group extends GraphicObject {

    private readonly _objects: GraphicObject[] = [];

    public get objects(): readonly GraphicObject[] {

        return this._objects;

    }

    public add(
        object: GraphicObject
    ): void {

        this._objects.push(object);

    }

    public remove(
        object: GraphicObject
    ): void {

        const index = this._objects.indexOf(object);

        if (index >= 0) {

            this._objects.splice(index, 1);

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
            this.position.x,
            this.position.y
        );

        context.rotate(this.rotation);

        for (const object of this._objects) {

            if (!object.visible) {

                continue;

            }

            object.draw(context);

        }

        context.restore();

    }

}