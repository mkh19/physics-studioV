import { Group } from "../core/Group";
import { Force } from "../physics/mechanics/Force";
import { Mass } from "../physics/mechanics/Mass";
import { FreeBodyLayout } from "../layout";
/**
 * Represents a free-body diagram.
 */
export class FreeBodyDiagram extends Group {

    private readonly _mass = new Mass();
    private readonly _layout =
    new FreeBodyLayout();

    private readonly _forces: Force[] = [];

    public constructor() {

        super();

        this.initialize();

    }

    public get mass(): Mass {

        return this._mass;

    }

    public get forces(): readonly Force[] {

        return this._forces;

    }

    public get forceCount(): number {

        return this._forces.length;

    }

    public addForce(
        force: Force
    ): void {

        if (this.containsForce(force)) {

            return;

        }

        this._forces.push(force);

        this.add(force);
        this.updateLayout();

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
        this.updateLayout();

    }

    public clearForces(): void {

        for (const force of this._forces) {

            this.remove(force);

        }

        this._forces.length = 0;
        this.updateLayout();

    }

    public containsForce(
        force: Force
    ): boolean {

        return this._forces.includes(force);

    }

    private initialize(): void {

        this.add(
            this._mass
        );
        
    }
    private updateLayout(): void {

    this._layout.layout(
        this._mass,
        this._forces
    );

}

}