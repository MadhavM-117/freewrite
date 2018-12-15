import * as React from 'react';
import './DrawingCanvas.css';

class DrawingCanvas extends React.Component {

    componentDidMount() {
        const canvasRef = this.refs.canvasRef;
        const ctx = canvasRef.getContext('2d');
        console.log(ctx);
    }

    render() {
        return (
            <div className="container">
                <canvas className="canvas" ref="canvasRef" onClick={this.canvasClicked}>
                    Hello World!
                </canvas>
            </div>
        );
    }

    canvasClicked(event) {
        console.log("Event clicked", event);
    }
}

export default DrawingCanvas;