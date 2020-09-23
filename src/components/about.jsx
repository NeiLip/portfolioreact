import React, { Component } from 'react'


const divStyle = {
  height: '120px'
};

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>
I am a highly motivated junior developer with a willingness to learn and work hard.
I welcome challenges with curiosity and creativity, make data driven decisions,
 have excellent interpersonal skills and the ability to work productively in diverse teams.</p>
                    <p>For my entire life I have been passionate about video games, when in the last few years I started making my own games after taking related courses at IDC and George Mason University.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise and skills</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc" style={divStyle}>
                    <h3>Web Development </h3>
                    <p>JavaScript, React, HTML, CSS and a little bit of .NET </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc" style={divStyle}>
                    <h3>Data Structures & Algorithms</h3>
                    <p>Good grasp over fundamental concepts of DSA</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc" style={divStyle}>
                    <h3>Programming Languages</h3>
                    <p>Java, C#, Python, JavaScript, Kotlin, SQL</p>
                </div>
                </div>
            </div>


            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc" style={divStyle}>
                    <h3>Game Development</h3>
                    <p>Unity, Unreal Engine 4, <br/>Construct 3 </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc" style={divStyle}>
                    <h3>Platforms</h3>
                    <p>AWS EC2, AWS S3, Git, Firebase, Photon Multiplayer Engine</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc" style={divStyle}>
                    <h3>Operating Systems</h3>
                    <p>macOS, Linux, Windows</p>
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </section>
      </div>
    )
  }
}



