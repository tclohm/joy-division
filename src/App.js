import React, { useRef, useEffect } from 'react';
import './App.css';

function App() {

  let canvasRef = useRef(null)
  let context;
  let size = window.innerWidth;
  let dpr = window.devicePixelRatio;
  let lines = [];

  function createLines() {


    let step = 30;

    for (let i = step; i <= size - step; i += step) {
      var line = [];
      for (let j = step; j <= size - step; j += step) {
        let distanceToCenter = Math.abs((400+30) / 2)
        let variance = Math.max(size / 2 - 50 - distanceToCenter, 0)
        let random = Math.random() * variance / 2 * -1
        let point = { x: j, y: i + random }
        line.push(point)
      }
      lines.push(line)
    }
  }

  function createArt() {
    let i;
    let j;
    context = canvasRef.current.getContext('2d')

    canvasRef.current.width = size;
    canvasRef.current.height = size * dpr;
    context.scale(dpr, dpr);
    context.lineWidth = 2;
    
    for (i = 5; i <= lines.length; i++) { 
      context.beginPath()
      context.moveTo(lines[5][0].x, lines[5][0].y)

      for (j = 0; j < lines[5].length - 2; j++) {
        let xc = (lines[5][j].x + lines[5][j + 1].x) / 2;
        let yc = (lines[5][j].y + lines[5][j + 1].y) / 2;
        context.quadraticCurveTo(lines[5][j].x, lines[5][j].y, xc, yc);
      }

      context.quadraticCurveTo(lines[5][j].x, lines[5][j].y, lines[5][j + 1].x, lines[5][j + 1].y);
      context.save()
      context.globalCompositionOperation = 'destination-out'
      context.restore()
      context.stroke()
    }
  }

  useEffect(() => {
    createLines()

    setTimeout(function() {
      createArt()
    }, 4000);
  }, [])

  return (
    <canvas style={{ 'margin': '0 auto' }} ref={canvasRef} />
  );
}

export default App;
