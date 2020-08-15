import React, { useRef, useEffect } from 'react';
import './App.css';

function App() {

  let canvasRef = useRef(null)
  let context;
  let size = window.innerWidth;
  let dpr = window.devicePixelRatio;
  let lines = [];

  function createLines() {

    
  }

  function createArt() {
  }

  useEffect(() => {
    context = canvasRef.current.getContext('2d')

    canvasRef.current.width = size;
    canvasRef.current.height = size * dpr;
    context.scale(dpr, dpr);
    context.lineWidth = 2;
    
    context.beginPath()
    context.moveTo(10, 100)
    context.quadraticCurveTo(100, 100, 150, 50)
    context.quadraticCurveTo(200, 110, 300, 100)

    context.moveTo(10, 150)
    context.quadraticCurveTo(100, 200, 150, 100)
    context.quadraticCurveTo(200, 210, 300, 150)

    context.save()
    context.globalCompositionOperation = 'destination-out'
    context.restore()
    context.stroke()
     
  }, [])

  return (
    <canvas style={{ 'margin': '0 auto' }} ref={canvasRef} />
  );
}

export default App;
