import {
    CanvasRenderer
} from "./rendering/CanvasRenderer";

import {
    Document
} from "./core";

import {
    FreeBodyDiagram
} from "./diagrams";

import {
    Force,
    ForceDirection
} from "./physics/mechanics";

const canvas = document.createElement("canvas");

canvas.width = 1000;
canvas.height = 700;

document.body.appendChild(canvas);

const context = canvas.getContext("2d")!;

const renderer = new CanvasRenderer(context);

const physicsDocument = new Document();

physicsDocument.width = canvas.width;
physicsDocument.height = canvas.height;

const diagram = new FreeBodyDiagram();

diagram.transform.position.set(300, 200);

const weight = new Force(50, "N");
weight.direction = ForceDirection.Down;

const normal = new Force(50, "N");
normal.direction = ForceDirection.Up;

const friction = new Force(15, "N");
friction.direction = ForceDirection.Left;

const applied = new Force(20, "N");
applied.direction = ForceDirection.Right;

diagram.addForce(normal);
diagram.addForce(weight);
diagram.addForce(friction);
diagram.addForce(applied);

physicsDocument.add(diagram);

renderer.render(physicsDocument);