import { ForceDirection } from "../physics/mechanics/ForceDirection";
import { Force } from "../physics/mechanics/Force";
import { Mass } from "../physics/mechanics/Mass";
import { GeometryDefaults } from "../defaults";
/**
 * Arranges the elements of a free-body diagram.
 */
export class FreeBodyLayout {

    

    private static readonly LABEL_TOP_OFFSET_X = 30;

    private static readonly LABEL_TOP_OFFSET_Y = -20;

    private static readonly LABEL_BOTTOM_OFFSET_X = 30;

    private static readonly LABEL_BOTTOM_OFFSET_Y = 20;

    private static readonly LABEL_LEFT_OFFSET_X = -60;

    private static readonly LABEL_LEFT_OFFSET_Y = -10;

    private static readonly LABEL_RIGHT_OFFSET_X = 30;

    private static readonly LABEL_RIGHT_OFFSET_Y = -20;

    public layout(
        mass: Mass,
        forces: readonly Force[]
    ): void {

        for (const force of forces) {

            this.layoutForce(
                mass,
                force
            );

        }

    }

    private layoutForce(
        mass: Mass,
        force: Force
    ): void {

        const width = mass.body.width;

        const height = mass.body.height;

        switch (force.direction) {

            case ForceDirection.Up:

                force.transform.position.set(
                    width / 2,
                    -GeometryDefaults.DIAGRAM_GAP
                );

                force.transform.rotation =
                    -Math.PI / 2;

                break;

            case ForceDirection.Down:

                force.transform.position.set(
                    width / 2,
                    height + GeometryDefaults.DIAGRAM_GAP
                );

                force.transform.rotation =
                    Math.PI / 2;

                break;

            case ForceDirection.Left:

                force.transform.position.set(
                    -GeometryDefaults.DIAGRAM_GAP,
                    height / 2
                );

                force.transform.rotation =
                    Math.PI;

                break;

            case ForceDirection.Right:

                force.transform.position.set(
                    width + GeometryDefaults.DIAGRAM_GAP,
                    height / 2
                );

                force.transform.rotation =
                    0;

                break;

        }

        this.layoutLabel(force);

    }

    private layoutLabel(
        force: Force
    ): void {

        switch (force.direction) {

            case ForceDirection.Up:

                force.label.transform.position.set(
                    FreeBodyLayout.LABEL_TOP_OFFSET_X,
                    FreeBodyLayout.LABEL_TOP_OFFSET_Y
                );

                break;

            case ForceDirection.Down:

                force.label.transform.position.set(
                    FreeBodyLayout.LABEL_BOTTOM_OFFSET_X,
                    FreeBodyLayout.LABEL_BOTTOM_OFFSET_Y
                );

                break;

            case ForceDirection.Left:

                force.label.transform.position.set(
                    FreeBodyLayout.LABEL_LEFT_OFFSET_X,
                    FreeBodyLayout.LABEL_LEFT_OFFSET_Y
                );

                break;

            case ForceDirection.Right:

                force.label.transform.position.set(
                    FreeBodyLayout.LABEL_RIGHT_OFFSET_X,
                    FreeBodyLayout.LABEL_RIGHT_OFFSET_Y
                );

                break;

        }

    }

}