import { Document } from "../src/core/Document";
import { Layer } from "../src/core/Layer";
import { CanvasRenderer } from "../src/rendering/CanvasRenderer";
import { FreeBodyDiagramBuilder } from "../src/diagrams/FreeBodyDiagramBuilder";

const canvas = document.querySelector(
    "canvas"
) as HTMLCanvasElement;

const context = canvas.getContext(
    "2d"
);

if (!context) {

    throw new Error(
        "Canvas 2D context is not available."
    );

}

const renderer = new CanvasRenderer(
    context
);

const document2D = new Document();

document2D.width = canvas.width;

document2D.height = canvas.height;

const layer = new Layer(
    "Main"
);

document2D.addLayer(
    layer
);

const diagram = new FreeBodyDiagramBuilder()

    .mass(5)

    .weight(50)

    .normal(50)

    .friction(15)

    .applied(20)

    .build();

diagram.transform.position.set(
    250,
    180
);

layer.add(
    diagram
);

renderer.render(
    document2D
);