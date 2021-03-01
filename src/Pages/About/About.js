import React, { Component } from 'react'

export default class About extends Component {

    render() {
        return (
            <div>
                <div className="section mt-0">
                    <h1 className="title title--h1 title__separate about_page_heading">About Me</h1>
                    <div className="pt-2 pt-sm-3">
                        <p>
                            I have always try to been an achiever, be it academics or professional life or sports or any
                            other field in my life. I believe in success through hard work &amp; dedication. My motto in life is
                            to ‘If you want something, work hard &amp; you will achieve it;
                            there are no shot cuts’. I enjoy life to the fullest &amp; love humour. I am a progressive thinker &amp;
                            respect each person’s space &amp; values.
                        </p>
                        <table className="resume_table">
                            <thead>
                                <tr>
                                    <th colSpan="3">Personal Details:</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Date of Birth</td>
                                    <td>:</td>
                                    <td>February 12, 1995</td>
                                </tr>
                                <tr>
                                    <td>Height</td>
                                    <td>:</td>
                                    <td>5'5"</td>
                                </tr>
                                <tr>
                                    <td>Blood Group</td>
                                    <td>:</td>
                                    <td>O+</td>
                                </tr>
                                <tr>
                                    <td>Nationality</td>
                                    <td>:</td>
                                    <td>Bangladeshi</td>
                                </tr>
                                <tr>
                                    <td>Education</td>
                                    <td>:</td>
                                    <td>BSC in Computer Science and Engineering (CSE) form (BIST)</td>
                                </tr>
                                <tr>
                                    <td>Profession</td>
                                    <td>:</td>
                                    <td>Senior programmer and project Manager of HSBLCO Solution at Dhaka</td>
                                </tr>
                                <tr>
                                    <td>Hobbies</td>
                                    <td>:</td>
                                    <td>Learning, Travelling</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className="resume_table mt-3">
                            <thead>
                                <tr>
                                    <th colSpan="3">Family Background:</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Father</td>
                                    <td>:</td>
                                    <td>Md.Shahid Ullah</td>
                                </tr>
                                <tr>
                                    <td>Father's Profession</td>
                                    <td>:</td>
                                    <td>Teacher</td>
                                </tr>
                                <tr>
                                    <td>Mother</td>
                                    <td>:</td>
                                    <td>Rahima Khatun</td>
                                </tr>
                                <tr>
                                    <td>Mother's Profession</td>
                                    <td>:</td>
                                    <td>House Maker</td>
                                </tr>
                                <tr>
                                    <td>Brothers</td>
                                    <td>:</td>
                                    <td>3 brothers (younger two brothers are student (class 8 &amp; another in Fazil 3rd year))</td>
                                </tr>
                                <tr>
                                    <td>Sisters</td>
                                    <td>:</td>
                                    <td>2 sisters (elder sister married and younger sister student (HSC 1st year))</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}
