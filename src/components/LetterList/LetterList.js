import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Letter from './Letter/Letter';

import classes from './LetterList.css';

class LetterList extends Component {

    state = {
        letters: []
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
        console.log
    }

    onInputChange = (event) => {
        const _this = this;
        let letterarr = event.target.value.split('');
        _this.setState({ letters: letterarr });
        console.log(this.state.letters);
    }

    render() {

        let letters = <div>There is no imput</div>;
        if (this.state.letters) {
            letters = this.state.letters.map((_letter) => {
                return (
                    <Link  key={new Date().Now} to={'/' + _letter}>
                        <div className={classes.LetterList}>
                            <Letter letter={_letter} />
                        </div>
                    </Link>
                )
            })
        }

        return (
            <div>
                <div>
                    <label>Type some input: </label> <input type='textarea' wrap="hard" onChange={this.onInputChange} />
                </div>
                <div>
                    {letters}
                </div>
                <div>
                    <Route path="/Letter" component={Letter} />
                </div>
            </div>


        )
    }
}

export default LetterList;