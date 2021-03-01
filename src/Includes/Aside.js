import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Aside extends Component {

    render() {
        return (
            <div>
                <aside className="sidebar" data-simplebar>
                    <div>
                        <div className="avatar-wrap">
                            <div className="avatar avatar--180" viewBox="0 0 188 188">
                                <div className="avatar__box">
                                    <Link to="/assets/img/pp.jpg" target="_blank">
                                        <img src="./assets/img/pp.jpg" width="100%" alt="md-shefat" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="title sidebar__user-name"><span className="weight--500">Md.</span> Shefat Ullah</h3>
                            <h3 className="title sidebar__user-name"> Masum</h3>
                            <div className="badge badge--gray">Software Engineer</div>
                                
                            <div className="social">
                                <Link className="social__link" to="https://www.facebook.com/masum.shefat.5" target="_blank"><i className="font-icon icon-facebook"></i></Link>
                                <Link className="social__link" to="https://twitter.com/shefat_masum" target="_blank"><i className="font-icon icon-twitter"></i></Link>
                                <Link className="social__link" to="https://www.linkedin.com/in/md-shefat-439a0813b/" target="_blank"><i className="font-icon icon-linkedin2"></i></Link>
                            </div>
                        </div>

                        <ul className="contact-block">
                            <li className="contact-block__item" data-toggle="tooltip" data-placement="top" title="Birthday">
                                <i className="font-icon icon-calendar2"></i>February 12, 1995
                            </li>
                            <li className="contact-block__item" data-toggle="tooltip" data-placement="top" title="Address">
                                <i className="font-icon icon-map-pin"></i>Dhaka, Bangladesh
                            </li>
                            <li className="contact-block__item" data-toggle="tooltip" data-placement="top" title="E-mail">
                                <a href="mailto:mshefat924@mail.com"><i className="font-icon icon-mail"></i>mshefat924@mail.com</a>
                            </li>
                            <li className="contact-block__item" data-toggle="tooltip" data-placement="top" title="Phone">
                                <i className="font-icon icon-smartphone"></i>+880-1646376015
                            </li>
                            <li className="contact-block__item" data-toggle="tooltip" data-placement="top" title="Skype">
                                <a href="skype:masum shefat"><i className="font-icon icon-skype"></i>masum shefat</a>
                            </li>
                        </ul>
                    </div>				
                    {/* <a className="btn" href="#"><i className="font-icon icon-download"></i> Download CV</a> */}
                </aside>
            </div>
        )
    }
}
