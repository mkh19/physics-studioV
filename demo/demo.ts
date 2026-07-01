import {
    CanvasRenderer
} from "../src/rendering/CanvasRenderer";

import {
    Document
} from "../src/core";

import {
    FreeBodyDiagram
} from "../src/diagrams";

import {
    Force,
    ForceDirection
} from "../src/physics/mechanics";

const canvas = document.querySelector(
    "canvas"
) as HTMLCanvasElement;

const context = canvas.getContext(
    "2d"
)!;

const renderer = new CanvasRenderer(
    context
);

const physicsDocument = new Document();

physicsDocument.width = canvas.width;

physicsDocument.height = canvas.height;


const diagram = new FreeBodyDiagram();

diagram.transform.position.set(
    350,
    220
);

const up = new Force(
    50,
    "N"
);

up.direction =
    ForceDirection.Up;

const down = new Force(
    50,
    "N"
);

down.direction =
    ForceDirection.Down;

const left = new Force(
    15,
    "N"
);

left.direction =
    ForceDirection.Left;

const right = new Force(
    20,
    "N"
);

right.direction =
    ForceDirection.Right;

diagram.addForce(
    up
);

diagram.addForce(
    down
);

diagram.addForce(
    left
);

diagram.addForce(
    right
);

physicsDocument.add(
    diagram
);

renderer.render(
    physicsDocument
);