import { FreeBodyLayout } from "../layout/FreeBodyLayout";
import { FreeBodyDiagram } from "./FreeBodyDiagram";

import { AppliedForce } from "../physics/mechanics/AppliedForce";
import { FrictionForce } from "../physics/mechanics/FrictionForce";
import { NormalForce } from "../physics/mechanics/NormalForce";
import { Weight } from "../physics/mechanics/Weight";

/**
 * Builder for free-body diagrams.
 */
export class FreeBodyDiagramBuilder {

    private readonly _diagram = new FreeBodyDiagram();

    private readonly _layout = new FreeBodyLayout();

    public mass(
        value: number,
        unit: string = "kg"
    ): this {

        this._diagram.mass.value = value;
        this._diagram.mass.unit = unit;

        return this;

    }

    public weight(
        magnitude: number
    ): this {

        this._diagram.addForce(
            new Weight(magnitude)
        );

        return this;

    }

    public normal(
        magnitude: number
    ): this {

        this._diagram.addForce(
            new NormalForce(magnitude)
        );

        return this;

    }

    public friction(
        magnitude: number
    ): this {

        this._diagram.addForce(
            new FrictionForce(magnitude)
        );

        return this;

    }

    public applied(
        magnitude: number
    ): this {

        this._diagram.addForce(
            new AppliedForce(magnitude)
        );

        return this;

    }

    public build(): FreeBodyDiagram {

        this._layout.apply(
            this._diagram
        );

        return this._diagram;

    }

}