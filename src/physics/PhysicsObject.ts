import { Group } from "../core/Group";

/**
 * Base class for all physics objects.
 *
 * A physics object is a composition of reusable graphic objects.
 */
export abstract class PhysicsObject extends Group {

    private _name = "";

    public get name(): string {

        return this._name;

    }

    public set name(
        value: string
    ) {

        this._name = value;

    }

}