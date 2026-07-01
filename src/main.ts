import { PhysicsStudio } from "./core";
import { FreeBodyDiagramBuilder } from "./diagrams/FreeBodyDiagramBuilder";

const studio = new PhysicsStudio();

studio.attach(
    document.body
);

const diagram = new FreeBodyDiagramBuilder()

    .mass(5)

    .weight(50)

    .normal(50)

    .friction(15)

    .applied(20)

    .build();

diagram.transform.position.set(
    300,
    200
);

studio.document.add(
    diagram
);
studio.render();

