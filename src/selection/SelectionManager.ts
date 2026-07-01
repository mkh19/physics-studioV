import { GraphicObject } from "../core";

/**
 * Manages the current selection.
 */
export class SelectionManager {

    private _selected: GraphicObject | null = null;

    public get selected(): GraphicObject | null {

        return this._selected;

    }

    public get hasSelection(): boolean {

        return this._selected !== null;

    }

    public select(
        object: GraphicObject
    ): void {

        if (this._selected === object) {

            return;

        }

        this.clear();

        this._selected = object;

        object.select();

    }

    public clear(): void {

        if (!this._selected) {

            return;

        }

        this._selected.deselect();

        this._selected = null;

    }

    public isSelected(
        object: GraphicObject
    ): boolean {

        return this._selected === object;

    }

}