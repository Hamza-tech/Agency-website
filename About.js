import React, { Component } from 'react'
import Header from "../common/Header";
import image from '../assets/img/about.jpg';
import Timeline from '../common/Timeline';
import Team from '../common/Team';


export default class About extends Component {
    render() {
        return (
            <div>
                <Header
               title="Abot Us"
               subtitle="it's really a great story"
               showButton={false}
               image={image}
               />
               <Timeline/>
               <Team/>
            </div>
           
        )
    }
}
