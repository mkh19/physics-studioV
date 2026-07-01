import { Transform } from "./Transform";
import { Anchor } from "./Anchor";
import { Origin } from "./Origin";
import { Bounds } from "../geometry";
/**
 * Base class for every drawable object
 * contained in a Physics Studio document.
 */
export abstract class GraphicObject {

    
    
    private _selected = false;
    private readonly _id = crypto.randomUUID();
    private readonly _transform = new Transform();
    private readonly _origin = new Origin();
    private _visible = true;
    
    

    /**
    * Returns the local bounds of the object.
    *
    * Returns null if the object cannot provide bounds.
    */
    
    public getBounds(): Bounds | null {

        return null;

    }
    public get id(): string {

        return this._id;

    }

    // public get bounds(): Bounds {

    //     return this._bounds;

    // }

    public get origin(): Origin {

    return this._origin;

}

    public get transform(): Transform {

        return this._transform;

    }
    

    public get visible(): boolean {

        return this._visible;

    }

    public set visible(
        value: boolean
    ) {

        this._visible = value;

    }

    public get selected(): boolean {

    return this._selected;

}

public set selected(
    value: boolean
) {

    this._selected = value;

}

    
    public move(
        dx: number,
        dy: number
    ): void {

        this.transform.position.move(
            dx,
            dy
        );

    }
    public moveTo(
    x: number,
    y: number
): void {

    this.transform.position.set(
        x,
        y
    );

}

    public hide(): void {

    this.visible = false;

}

public show(): void {

    this.visible = true;

}
public toggleVisibility(): void {

    this.visible = !this.visible;

}



public select(): void {

    this.selected = true;

}

public deselect(): void {

    this.selected = false;

}

public toggleSelection(): void {

    this.selected = !this.selected;

}

/**
 * Returns whether the given local point
 * is inside this object.
 */
public contains(
    x: number,
    y: number
): boolean {

    const bounds =
        this.getBounds();

    if (!bounds) {

        return false;

    }

    return bounds.contains(
        x,
        y
    );

}

    public abstract draw(
        context: CanvasRenderingContext2D
    ): void;










    

}
