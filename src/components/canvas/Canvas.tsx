import React, { useRef, useState, useCallback, useEffect } from "react";
import { Wave } from "./wave.js";
import { SurferController } from "./surfer-controlloer.js";
import { Sun } from "./sun.js";
import { visitLexicalEnvironment } from "typescript";
import { timeStamp } from "console";

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

    var x = 0;
    const render = () => {
      if (ctx && x < 250) {
        //ctx.clearRect(0, 0, 500, 500);
        ctx.beginPath();
        ctx.arc(x, 150, 10, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        x += 2;
        console.log("재귀함수 : ", x);

        render();
      }
    };

    var y = 0;
    var now = 0;
    var gap = 0;
    const aniRender = (timestamp: number) => {
      if (ctx && y < 250) {
        gap = timestamp - now;
        //ctx.clearRect(0, 0, 500, 500);
        ctx.beginPath();
        ctx.arc(y, 250, 10, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        y += 2;
        now = timestamp;
        console.log("timestamp gap : ", gap);
        // console.log("timestamp : ", timestamp);

        requestAnimationFrame(aniRender);
      }
    };

    //render();
    requestAnimationFrame(aniRender);
  }, [ctx]);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div id="test"></div>
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
