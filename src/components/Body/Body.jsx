import React, { Component } from 'react'
import { getMergeSortAnimations } from '../../algorithms/mergeSort';
import './Body.css'

const ANNIMATION_SPEED_MS = 10;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';
const NUMBER_OF_ARRAY_BARS = 15;

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

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(this.randomIntFromInterval(5, 730))
        }
        this.setState({ array })
    }

    mergeSort() {
        const annimations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < annimations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = annimations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANNIMATION_SPEED_MS)
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = annimations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    arrayBars[barOneIdx].textContent = newHeight;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANNIMATION_SPEED_MS);
            }
        }
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
                        {value}
                    </div>
                ))}
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()} >Merge Sort</button>
                <button>Quick Sort</button>
                <button>Heap Sort</button>
                <button>Bubble Sort</button>
            </div>
        )
    }
}
