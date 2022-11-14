import React, { Component } from 'react';
class About extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {  }
    render() { 
        return ( 
            <>
                <div id="about">
                <div className="container">
                    <div className="idPointer">#Biz haqimizda</div>
                    <div className="row">
                    <img className="left" src="img/about-img.jpg" alt="about img" />
                    <div className="right">
                        <h3>Web saytning maqsadi</h3>
                        <p>
                        Bubble <a href="##">sort algorithm</a> sit amet consectetur,
                        adipisicing elit. Dignissimos commodi quasi alias incidunt,
                        sapiente tempore. Omnis aspernatur delectus amet voluptates
                        sapiente ex error, architecto totam voluptas neque. Libero,
                        sapiente molestias omnis et cupiditate suscipit dolor
                        necessitatibus fugiat repudiandae maxime delectus mollitia impedit
                        veniam. Error eos cumque facere repellat doloribus, exercitationem
                        provident eligendi culpa! Laudantium asperiores voluptatibus
                        necessitatibus delectus ipsum. Maiores..
                        </p>
                    </div>
                    </div>
                </div>
                </div> 
                <footer>
                    <span>
                        Powerid by 
                        <a target="_blank" href="https://github.com/qobulovasror/" rel="noreferrer">
                            Qobulov Asror
                        </a>
                    </span>
                </footer>
            </>
         );
    }
}
 
export default About;