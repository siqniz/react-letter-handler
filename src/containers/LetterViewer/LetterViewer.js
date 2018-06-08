import React, { Component } from 'react';

import LetterList from '../../components/LetterList/LetterList';

import classes from './LetterViewer.css'

class LetterViewer extends Component {

    render() {
        return (
            <div className={classes.LetterViewer}>
                <LetterList />
                
            </div>
        )
    }
}

export default LetterViewer;