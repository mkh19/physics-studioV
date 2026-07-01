/**
 * Stores the current mouse state.
 */
export class MouseState {

    private _x = 0;

    private _y = 0;

    private _leftButton = false;

    public get x(): number {

        return this._x;

    }

    public get y(): number {

        return this._y;

    }

    public get leftButton(): boolean {

        return this._leftButton;

    }

    public move(
        x: number,
        y: number
    ): void {

        this._x = x;

        this._y = y;

    }

    public pressLeft(): void {

        this._leftButton = true;

    }

    public releaseLeft(): void {

        this._leftButton = false;

    }

}