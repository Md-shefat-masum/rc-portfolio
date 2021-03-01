import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Aside from '../Includes/Aside'
import Nav from '../Includes/Nav'
import About from './About/About'
import Contact from './Contact/Contact'
import Gallery from './Gallery/Gallery'
import Resume from './Resume/Resume'

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <main className="main">
                    <Nav></Nav>
                    <div className="wrapper wrapper--shadow-azure">
                        <Aside></Aside>
                        <div className="content" data-simplebar>
                            <Switch>
                                <Route path="/" exact={true} component={About}></Route>
                                <Route path="/resume" exact={true} component={Resume}></Route>
                                <Route path="/gallery" exact={true} component={Gallery}></Route>
                                <Route path="/contact" exact={true} component={Contact}></Route>
                            </Switch>
                        </div>
                    </div>
                </main>

            </div>
        )
    }
}
