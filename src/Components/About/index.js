import React, { Component } from 'react';

import { connect } from 'react-redux';

import './About.css';

class About extends Component {
    constructor(props) {    
        super(props);

        this.state = {
            firsLoad: true,
        };

        this.handlerAnim = this.handlerAnim.bind(this);
    }

    handlerAnim() {
        let elmBot = document.getElementById('skils-anim').getBoundingClientRect().bottom;
        let winH = document.documentElement.clientHeight;

        if (elmBot < winH + 10) {
            setTimeout(function() {
                const elem = document.getElementById("skils-anim");
            elem.classList.add("anim"); 
            },0);
        }
    }

    componentDidMount() {
        if (this.state.firsLoad) {
            let elmBot = document.getElementById('skils-anim').getBoundingClientRect().bottom;
            let winH = document.documentElement.clientHeight;

            if (elmBot < winH + 10 && winH > 700) {
                setTimeout(function() {
                    const elem = document.getElementById("skils-anim");
                elem.classList.add("anim"); 
                },100);
            }
            window.addEventListener('scroll',this.handlerAnim);
            this.setState({firsLoad: false});
        }    
    }

    componentWillUnmount() {
        console.log(this.state.firsLoad);
        if (!this.state.firsLoad) {
            window.removeEventListener('scroll',this.handlerAnim);
        }   
    }

  render() {
    return (
     
      <div className="about">

        <div className="about_wrap">
            <h2 className="about-head">About me</h2>

            <div className="personal-info">
                <h2 className="personal-info-head">Personal info</h2>

                <ul className="personal-info-list">
                    <li className="personal-info-item">
                        <div className="question">Name</div>
                        <div className="answer">Vadim</div>
                    </li>
                    <li className="personal-info-item">
                        <div className="question">Age</div>
                        <div className="answer">25</div>
                    </li>
                    <li className="personal-info-item">
                        <div className="question">Location</div>
                        <div className="answer">Kharkiv</div>
                    </li>
                    <li className="personal-info-item">
                        <div className="question">Email</div>
                        <div className="answer"><a href="mailto:vemalovaniy@gmail.com" className="answer-link">vemalovaniy@gmail.com</a></div>
                    </li>
                    <li className="personal-info-item">
                        <div className="question">GitHub</div>
                        <div className="answer"><a href="https://github.com/vme-dev/" className="answer-link">github.com/vme-dev</a></div>
                    </li>
                </ul>
            </div>

            <div className="about-text">
                <h2 className="about-text-head">Something about me</h2>

                <p className="about-text-txt">Меня зовут Вадим и я тот, кто умеет делать сайты с нуля. Я владею HTML и CSS, умею писать скрипты на JS. Я люблю изучать все новое и использовать в своих проектах. В качестве фреймворка использую React. В планах ознакомиться с Angular и Vue.JS. Для создания полноценных веб-приложений на бэкенде использую NodeJS и MongoDB. </p>
            </div>

            <div className="skils" id="skils-anim">
                <ul className="skils-list">
                    <li className="skils-item">
                        <div className="skils-name">HTML</div>
                        <div className="skil-progres html">
                            <div className="skil-progres-value">60</div>
                        </div>
                    </li>
                    <li className="skils-item">
                        <div className="skils-name">CSS</div>
                        <div className="skil-progres css">
                            <div className="skil-progres-value">60</div>
                        </div>
                    </li>
                    <li className="skils-item">
                        <div className="skils-name">JavaScript</div>
                        <div className="skil-progres js">
                            <div className="skil-progres-value">60</div>
                        </div>
                    </li>
                    <li className="skils-item">
                        <div className="skils-name">React</div>
                        <div className="skil-progres react">
                            <div className="skil-progres-value">60</div>
                        </div>
                    </li>
                    <li className="skils-item">
                        <div className="skils-name">Redux</div>
                        <div className="skil-progres redux">
                            <div className="skil-progres-value">60</div>
                        </div>
                    </li>
                    <li className="skils-item">
                        <div className="skils-name">Node JS</div>
                        <div className="skil-progres node">
                            <div className="skil-progres-value">60</div>
                        </div>
                    </li>
                    <li className="skils-item">
                        <div className="skils-name">MongoDB</div>
                        <div className="skil-progres mongo">
                            <div className="skil-progres-value">60</div>
                        </div>
                    </li>

                </ul>
            </div>
        </div> 
      </div>
    );
  }
}

export default connect(
  (store) => {return {
 
  }},
  (dispatch) => {return {
  
  }}
  
  )(About);