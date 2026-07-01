import { Group } from "../core/Group";
import { Force } from "../physics/mechanics/Force";
import { Mass } from "../physics/mechanics/Mass";

/**
 * Represents a free-body diagram.
 */
export class FreeBodyDiagram extends Group {

    private readonly _mass = new Mass();

    private readonly _forces: Force[] = [];

    constructor() {

        super();

        this.add(this._mass);

    }

    public get mass(): Mass {

        return this._mass;

    }

    public get forces(): readonly Force[] {

        return this._forces;

    }

    public addForce(
        force: Force
    ): void {

        if (this._forces.includes(force)) {

            return;

        }

        this._forces.push(force);

        this.add(force);

    }

    public removeForce(
        force: Force
    ): void {

        const index = this._forces.indexOf(force);

        if (index === -1) {

            return;

        }

        this._forces.splice(
            index,
            1
        );

        this.remove(force);

    }

    public clearForces(): void {

        for (const force of this._forces) {

            this.remove(force);

        }

        this._forces.length = 0;

    }

}