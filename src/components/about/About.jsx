import  './about.scss'
import meee from '../../img/meee.png'
import reactp from '../../img/reactp.png'
import flask from '../../img/flask.png'
import flaskd from '../../img/flaskd.png'
import html from '../../img/html.png'
import css from '../../img/css.png'
import js from '../../img/js.png'
import py from '../../img/py.png'
import dit from '../../img/dit.png'
import geu from '../../img/geu.png'
import amz from '../../img/amz.png'
import cont from '../../img/cont.png'
import { ThemeContext } from '../../context'
import { useContext } from 'react'

const About = () => {
    const theme =useContext(ThemeContext)
    const darkMode =theme.state.darkMode
    return (
        <div className="a">
            <div className="a-left">
                <div style={{backgroundColor: darkMode && 'rgb(160, 0, 0)'}} className="a-card bg"></div>
                <div className="a-card">
                    <img src={meee} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className='a-title' >About me</h1>
                <p className='a-desc'>I am an enthusiastic learner and a developer with focus on Python and JavaScript. I taught myself to code from Youtube. I like Python because it's wide support for libraries does not limit you to a single use case and has many applications in various industries. My interest in Front-End Development comes from my interest in photo and video editing. Other than that I like to travel, play guitar , and read about the mysteries of the Universe. </p>
                <h2 className='a-sub'>Toolbox :</h2>
                <div className="a-skill" >  
                    <figure className='a-fig'>
                        <img src={py} alt="" />
                        <figcaption>Python</figcaption>
                    </figure>
                    <figure className='a-fig'>
                        <img src = {darkMode ? flaskd : flask}    alt="" />
                        <figcaption>Flask</figcaption>
                    </figure>
                    <figure className='a-fig'>
                        <img src={html} alt="" />
                        <figcaption>HTML</figcaption>
                    </figure>
                    <figure className='a-fig'>
                        <img src={css} alt="" />
                        <figcaption>CSS</figcaption>
                    </figure>
                    <figure className='a-fig'>
                        <img src={js} alt="" />
                        <figcaption>JavaScript</figcaption>
                    </figure>
                    <figure className='a-fig'>
                        <img src={reactp} alt="" />
                        <figcaption>React</figcaption>
                    </figure>
                </div>
                <div className="a-edu">
                    <h2>Education :</h2>
                    <div className="a-edu-wrap">
                        
                        <div className="a-edu-deg">
                            <img src={dit} alt="" />
                            <p>B.Tech Civil Engineering</p>
                            <p>Dit University</p>
                        </div>
                        <div className="a-edu-deg">
                            <img src={geu} alt="" />
                            <p>MBA in Marketing and Business Analytics</p>
                            <p>Graphic Era University</p>
                        </div>
                    </div>
                </div>
                <div className="a-work-wrapper">

                    <h2>Work Experience :</h2>
                    <div className="a-workex">
                        <div className="a-comp">
                            <img src={amz} alt="" />
                            <p>Amazon - ML Data Associate</p>
                        </div>
                        <div className="a-comp">
                            <img src={cont} alt="" />
                            <p>Hind Terminals - Management Trainee</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default About;