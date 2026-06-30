import { Group } from "../../graphics";
import { Mass } from "./Mass";
import { Force } from "./Force";

export class FreeBodyDiagram extends Group {

    private readonly _bodies: Mass[] = [];

    private readonly _forces: Force[] = [];

    /**
     * Adds a body to the diagram.
     */
    public addBody(
        body: Mass
    ): void {

        this._bodies.push(body);

        this.add(body);

    }

    /**
     * Removes a body from the diagram.
     */
    public removeBody(
        body: Mass
    ): void {

        const index = this._bodies.indexOf(body);

        if (index >= 0) {

            this._bodies.splice(index, 1);

        }

        this.remove(body);

    }

    /**
     * Adds a force to the diagram.
     */
    public addForce(
        force: Force
    ): void {

        this._forces.push(force);

        this.add(force);

    }

    /**
     * Removes a force from the diagram.
     */
    public removeForce(
        force: Force
    ): void {

        const index = this._forces.indexOf(force);

        if (index >= 0) {

            this._forces.splice(index, 1);

        }

        this.remove(force);

    }

    /**
     * Removes all bodies and forces.
     */
    public clearDiagram(): void {

        for (const body of this._bodies) {

            this.remove(body);

        }

        for (const force of this._forces) {

            this.remove(force);

        }

        this._bodies.length = 0;

        this._forces.length = 0;

    }

    /**
     * All bodies.
     */
    public get bodies(): readonly Mass[] {

        return this._bodies;

    }

    /**
     * All forces.
     */
    public get forces(): readonly Force[] {

        return this._forces;

    }

}