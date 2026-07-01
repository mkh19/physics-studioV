import { FreeBodyDiagram } from "../diagrams/FreeBodyDiagram";
import { ForceDirection } from "../physics/mechanics/ForceDirection";
import { Force } from "../physics/mechanics/Force";

/**
 * Arranges the objects inside a free-body diagram.
 */
export class FreeBodyLayout {

    /**
     * Distance between the body and force origin.
     */
    private readonly offset = 60;

    public apply(
        diagram: FreeBodyDiagram
    ): void {

        const body = diagram.mass;

        const centerX =
            body.body.width / 2;

        const centerY =
            body.body.height / 2;

        body.transform.position.set(
            0,
            0
        );

        for (const force of diagram.forces) {

            this.layoutForce(
                force,
                centerX,
                centerY
            );

        }

    }

    private layoutForce(
        force: Force,
        x: number,
        y: number
    ): void {

        switch (force.direction) {

            case ForceDirection.Right:

                force.transform.position.set(
                    x,
                    y
                );

                force.transform.rotation = 0;

                break;

            case ForceDirection.Left:

                force.transform.position.set(
                    x,
                    y
                );

                force.transform.rotation = Math.PI;

                break;

            case ForceDirection.Up:

                force.transform.position.set(
                    x,
                    y
                );

                force.transform.rotation = -Math.PI / 2;

                break;

            case ForceDirection.Down:

                force.transform.position.set(
                    x,
                    y
                );

                force.transform.rotation = Math.PI / 2;

                break;

            case ForceDirection.Custom:

                break;

        }

    }

}