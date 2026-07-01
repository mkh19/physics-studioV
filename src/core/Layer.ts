import { Group } from "./Group";

/**
 * Represents a document layer.
 */
export class Layer extends Group {
    private _visible = true;
    private _name = "";
    private _opacity = 1;

    private _locked = false;

    public constructor(
        name: string = ""
    ) {

        super();

        this._name = name;

    }

    public get name(): string {

        return this._name;

    }
    public get visible(): boolean {

    return this._visible;

}
public get opacity(): number {

    return this._opacity;

}

public set opacity(
    value: number
) {

    this._opacity = Math.min(
        1,
        Math.max(0, value)
    );

}
public get objectCount(): number {

    return this.objects.length;

}
public isEmpty(): boolean {

    return this.objectCount === 0;

}

public set visible(
    value: boolean
) {

    this._visible = value;

}

    public set name(
        value: string
    ) {

        this._name = value;

    }

    public get locked(): boolean {

        return this._locked;

    }

    public set locked(
        value: boolean
    ) {

        this._locked = value;

    }
    public unlock(): void {

    this.locked = false;

}

public lock(): void {

    this.locked = true;

}
}