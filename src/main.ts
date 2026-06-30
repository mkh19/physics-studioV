import { PhysicsStudio } from "./core";

import {
    FreeBodyDiagram,
    Mass,
    Weight,
    NormalForce,
    FrictionForce,
    Force
} from "./objects";

const studio = new PhysicsStudio();

studio.attach(document.body);

//------------------------------------------

const diagram = new FreeBodyDiagram();

//------------------------------------------

const mass = new Mass(5);

mass.position.set(
    300,
    200
);

diagram.addBody(mass);

//------------------------------------------

const weight = new Weight();

weight.position.set(
    345,
    260
);

weight.rotation = Math.PI / 2;

diagram.addForce(weight);

//------------------------------------------

const normal = new NormalForce();

normal.position.set(
    345,
    200
);

normal.rotation = -Math.PI / 2;

diagram.addForce(normal);

//------------------------------------------

const friction = new FrictionForce();

friction.position.set(
    300,
    230
);

friction.rotation = Math.PI;

diagram.addForce(friction);

//------------------------------------------

const applied = new Force("F");

applied.position.set(
    390,
    230
);

diagram.addForce(applied);

//------------------------------------------

studio.document.add(diagram);

studio.render();