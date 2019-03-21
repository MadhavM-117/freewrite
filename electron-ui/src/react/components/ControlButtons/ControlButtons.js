import * as React from 'react';

import './ControlButtons.css';


const fs = window.require('fs')



class ControlButtons extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Screenshot</button>
            </div>
        )
    }

    onButtonClick() {
        console.log("button clicked")
    }

}

export default ControlButtons;