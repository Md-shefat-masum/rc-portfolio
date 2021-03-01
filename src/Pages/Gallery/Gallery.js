import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                <div className="row">
                    <div className="col-md-4">
                        <div className="img">
                            <Link to="/assets/img/1.jpg" target="_blank"><img src="/assets/img/1.jpg" alt="md-shefat"/></Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img">
                            <Link to="/assets/img/2.jpg" target="_blank"><img src="/assets/img/2.jpg" alt="md-shefat"/></Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img">
                            <Link to="/assets/img/3.jpg" target="_blank"><img src="/assets/img/3.jpg" alt="md-shefat"/></Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img">
                            <Link to="/assets/img/4.jpg" target="_blank"><img src="/assets/img/4.jpg" alt="md-shefat"/></Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img">
                            <Link to="/assets/img/5.jpg" target="_blank"><img src="/assets/img/5.jpg" alt="md-shefat"/></Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img">
                            <Link to="/assets/img/7.jpg" target="_blank"><img src="/assets/img/7.jpg" alt="md-shefat"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
