import React, { Component } from 'react'
import Body from '../Body/Body'
import Toolbar from '../Toolbar/Toolbar'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Toolbar />
                <Body />
            </div>
        )
    }
}
