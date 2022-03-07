import React, { useRef, useState, useCallback, useEffect } from "react";
import { Wave } from "./wave.js";
import { SurferController } from "./surfer-controlloer.js";
import { Sun } from "./sun.js";

function Canvas() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [ctx, setContext] = React.useState<CanvasRenderingContext2D | null>(
    null
  );
  const requestAnimationRef = useRef(null);

  React.useEffect(() => {
    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext("2d");

      if (renderCtx) {
        setContext(renderCtx);
      }
    }

    // Draw a rectangle
    const render = () => {
      if (ctx) {
        let x = 0;
        ctx.beginPath();
        ctx.arc(x, 150, 10, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        x += 2;

        requestAnimationFrame(render);
      }
    };

    requestAnimationFrame(render);
  }, [ctx]);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <canvas
        id="canvas"
        ref={canvasRef}
        width={500}
        height={500}
        style={{
          border: "2px solid #000",
          marginTop: 10,
        }}
      ></canvas>
    </div>
  );
}

export default Canvas;
