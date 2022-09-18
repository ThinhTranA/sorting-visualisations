import React, { Component } from 'react'
import './Body.css'

const PRIMARY_COLOR = 'turquoise';
const NUMBER_OF_ARRAY_BARS = 200;

export default class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(this.randomIntFromInterval(5, 730));
        }
        this.setState({ array });
        console.log(array)
    }
    // From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }



    render() {
        const { array } = this.state;
        console.log("Renderee")
        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className='array-bar'
                        key={idx}
                        style={{
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`
                        }}
                    >

                    </div>
                ))}
                <button>Generate New Array</button>
            </div>
        )
    }
}
