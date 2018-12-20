import * as React from 'react';

import './DrawingCanvas.css';

class DrawingCanvas extends React.Component {
    ctx = null;
    offsetX = null;
    offsetY = null;
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
        const boundingBox = canvasRef.getBoundingClientRect();
        canvasRef.height = canvasRef.clientHeight;
        canvasRef.width = canvasRef.clientWidth;
        this.offsetX = boundingBox.left;
        this.offsetY = boundingBox.top;
        this.ctx = canvasRef.getContext('2d');
        console.log(this.ctx);
        this.ctx.strokeStyle = "#df4b26";
        this.ctx.lineJoin = "round";
        this.ctx.lineWidth = 5;
        this.ctx.scale(1.00, 1.00);
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
        this.ctx.stroke();
        console.log('drawing', x, y);
    }
   }

   endStroke(e) {
    if(this.ctx && this.drawing) {
        console.log('ended stroke');
        this.drawing = false;
        this.ctx.closePath();
    }
   }

   mouseMove(e) {
       const {buttons} = e;
       if (buttons === 1) {
           this.draw(e.clientX - this.offsetX, e.clientY - this.offsetY);
       }
   }
}

export default DrawingCanvas;