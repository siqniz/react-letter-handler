import React, {Component} from 'react';

class LetterRouter extends Component{

    render()
    {
        const style = {'background-color': 'green'}
        return(
            <div style={style}>{props.letter}</div>
        )
    }
}

export default LetterRouter;