import { Point } from "../math/Point";
import { Scale } from "../math/Scale";

/**
 * Stores the local transform
 * of a graphic object.
 */
export class Transform {

    private readonly _position = new Point();

    private readonly _scale = new Scale();

    private _rotation = 0;

    public get position(): Point {

        return this._position;

    }

    public get scale(): Scale {

        return this._scale;

    }

    public get rotation(): number {

        return this._rotation;

    }

    public set rotation(
        value: number
    ) {

        this._rotation = value;

    }

    public reset(): void {

        this.position.set(
            0,
            0
        );

        this.scale.reset();

        this.rotation = 0;

    }

    public translate(
    dx: number,
    dy: number
): void {

    this.position.move(
        dx,
        dy
    );

}
public rotate(
    angle: number
): void {

    this.rotation += angle;

}
public setScale(
    x: number,
    y: number = x
): void {

    this.scale.set(
        x,
        y
    );

}

public copyFrom(
    other: Transform
): void {

    this.position.set(
        other.position.x,
        other.position.y
    );

    this.scale.set(
        other.scale.x,
        other.scale.y
    );

    this.rotation =
        other.rotation;

}
 public clone(): Transform {

    const copy =
        new Transform();

    copy.copyFrom(
        this
    );

    return copy;

}
}