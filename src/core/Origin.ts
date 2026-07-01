import { Point } from "../math";
import { Anchor } from "./Anchor";

/**
 * Defines the reference origin of a graphic object.
 */
export class Origin {
    
    /**
     * Predefined anchor.
    */
    private _anchor = Anchor.TopLeft;
        public get anchor(): Anchor {

        return this._anchor;

    }

    public set anchor(
        value: Anchor
    ) {

        this._anchor = value;

    }
    

    /**
     * Rotation pivot.
     */
    private readonly _pivot = new Point();

    public get pivot(): Point {

        return this._pivot;

    }

    /**
     * Additional translation.
     */
    private readonly _offset = new Point();
    public get offset(): Point {

        return this._offset;

    }
    public reset(): void {

    this.anchor = Anchor.TopLeft;

    this.pivot.set(
        0,
        0
    );

    this.offset.set(
        0,
        0
    );

}
public copyFrom(
    other: Origin
): void {

    this.anchor =
        other.anchor;

    this.pivot.set(
        other.pivot.x,
        other.pivot.y
    );

    this.offset.set(
        other.offset.x,
        other.offset.y
    );

}
public clone(): Origin {

    const copy =
        new Origin();

    copy.copyFrom(
        this
    );

    return copy;

}

}