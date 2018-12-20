import * as React from 'react';

import './DrawingCanvas.css';

class DrawingCanvas extends React.Component {
    ctx = null;
    clickX = [];
    clickY = [];
    drawing = false;
    constructor(props) {
        super(props);
        this.draw = this.draw.bind(this);
        this.endStroke = this.endStroke.bind(this);
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
    }

    componentDidMount() {
        const canvasRef = this.refs.canvasRef;
        this.ctx = canvasRef.getContext('2d');
        console.log(this.ctx);
        this.ctx.strokeStyle = "#df4b26";
        this.ctx.lineJoin = "round";
        this.ctx.lineWidth = 5;
    }

    render() {
        return (
            <div className="container">
                <canvas className="canvas" ref="canvasRef" 
                    onClick={this.canvasClicked} 
                    onMouseDown={this.mouseDown} 
                    onMouseMove={this.mouseMove}
                    onMouseUp={this.endStroke}
                    onMouseLeave={this.endStroke}
                    >
                    Hello World!
                </canvas>
            </div>
        );
    }

   mouseDown(e) {
    const {pageX, pageY} = e;
          
    // console.log(pageX, pageY);
   }

   draw(x,y) {
    if (this.ctx) {
        if(!this.drawing) {
            this.drawing = true;
            this.ctx.beginPath();
            this.ctx.moveTo(x - 1, y);
            console.log('started stroke');
        }

        this.ctx.lineTo(x, y);
        console.log('drawing', x, y);
    }
   }

   endStroke(e) {
    if(this.ctx && this.drawing) {
        console.log('ended stroke');
        this.drawing = false;
        this.ctx.closePath();
        this.ctx.stroke();
        // TODO: currently, drawing only ends when the stroke is complete. 
        // Figure out how to draw as the mouse moves. 
        // 1. Is it possible to draw points/circles instead of line/strokes?
        // 2. There is a scaling issue with the drawing. Coordinates don't correspond to actual coordinates drawn in Canvas. 
        
    }
   }

   mouseMove(e) {
       const {buttons} = e;
       if (buttons === 1) {
           this.draw(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset);
       }
   }
}

export default DrawingCanvas;