import React, { Component } from 'react';
import Window from './window';
import './components.css';


class Calender extends Component{
    constructor(props){
        super(props);
        this.state = {
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
            surprise: [
                'https://www.youtube.com/watch?v=WpIAc9by5iU',
                'https://www.youtube.com/watch?v=jRx9UbSEkL0',
                'https://www.youtube.com/watch?v=UcHcYKJYi6s',
                'https://www.youtube.com/watch?v=a4eav7dFvc8',
                "https://www.youtube.com/watch?v=r2oeQeGG4c8",
                "https://www.youtube.com/watch?v=3ldYgKFyNDE",
                "http://www.williammalone.com/articles/",
                "https://www.youtube.com/watch?v=m3UnbKgyPa0",
                "https://streamplay.to/vcx4ulu0pogs",
                "https://www.deutschlandfunkkultur.de/geschichte-der-programmiersprachen-einblick-in-die-blackbox.976.de.html?dram%3Aarticle_id=430694&fbclid=IwAR0MYXdPARN_gM4mcRWd_OIb1BZy71UVb_BrrwmfgXhijO5i_r65DPHnpPg",
                "https://reactjs.org/docs/introducing-jsx.html",
                "https://www.robinwieruch.de/react-fetching-data/",
                "http://2ality.com/2017/05/util-promisify.html",
                "https://joshondesign.com/p/books/canvasdeepdive/chapter01.html",
                "https://joshondesign.com/p/books/canvasdeepdive/chapter01.html",
                "https://javascript.info/testing-mocha",
                "https://github.com/springload/react-redux-exercise",
                "https://medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6",
                "https://medium.com/netscape/hacking-it-out-when-cors-wont-let-you-be-great-35f6206cc646",
                "https://www.youtube.com/watch?v=Po8ggywVIWA",
                "https://eloquentjavascript.net/16_game.html",
                "http://samwirch.com/blog/viewing-models-maya-webgl-threejs",
                "https://www.youtube.com/watch?v=KdN4rWJSZ9Y&list=RDEMYrBYJ1FUyvUy-NRZd9nNuA&index=2",
                "https://www.browserling.com/tools/extract-urls",
                "https://www.browserling.com/tools/extract-urls"



            
            ],
            date: new Date(),
            day: 0,
            month: 1,
            condition: false,
            link: null,
            toggle: true
            
        };

    }
     
    componentDidMount(){
        this.setState({
            date: new Date(),
            day: this.state.date.getDate(),
            month: this.state.date.getMonth()
          })

    }

    render(){
        
        const {numbers} = this.state
        return(
            
            <div className="calender-wrapper">
                <h5 className="text-center m-5 headline">Merry Christmas</h5>

                    <div className="d-flex flex-wrap justify-content-around">
                        {numbers.map((number, i) =><Window  key={i} number={number} {...this.state}/>)}

                </div>
           </div>


        )
    }
}

export default Calender