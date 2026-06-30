// demo/demo.ts

import { Canvas } from "../src/canvas/Canvas";
import { PhysicsStudio } from "../src/studio/PhysicsStudio";

import { Rectangle } from "../src/graphics/shapes/Rectangle";
import { Circle } from "../src/graphics/shapes/Circle";
import { TextObject } from "../src/graphics/TextObject";

const canvas = new Canvas(900, 600);

document.body.appendChild(canvas.element);

const studio = new PhysicsStudio(canvas);

const rectangle = new Rectangle(180, 80);

rectangle.position.set(80, 80);

rectangle.fill = "#4CAF50";

rectangle.stroke = "#2E7D32";

const circle = new Circle(50);

circle.position.set(420, 160);

circle.fill = "#2196F3";

const text = new TextObject("Physics Studio");

text.position.set(60, 40);

studio.document.add(text);

studio.document.add(rectangle);

studio.document.add(circle);

studio.render();