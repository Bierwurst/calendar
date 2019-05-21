import React, { Component } from 'react';
import Window from './window';
import './components.css';


class Calender extends Component{
    constructor(props){
        super(props);
        this.state = {
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
            date: new Date(),
            day: 0,
            condition: false,
            link: null,
            toggle: true
            
        };

    }
     
 
    // handleClick(e) {
    //     this.setState({
    //         date: new Date(),
    //         day: this.state.date.getDate(),
    //         condition:true 
    //         // link:window.open(`https://res.cloudinary.com/woelkchen/image/upload/v1555077415/testerimages/${Number(e.target.innerHTML)}.png`, 'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0')
    //     })
    //         // console.log('this is:', Number(e.target.innerHTML), this.state.day);

    //         // CONDITION !!! ONLY OPEN A NEW WINDOW WHEN THE DAY AND THE DATE MATCH  
    //         // YOU HAVE TO CHANGE THE STATE.LINK TO: --> link:window.open(`https://res.cloudinary.com/woelkchen/image/upload/v1555077415/testerimages/${this.state.day}.png`, 'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0')

    //         // Number(e.target.innerHTML) === this.state.day ?  this.setState({condition:true, link:window.open(`https://res.cloudinary.com/woelkchen/image/upload/v1555077415/testerimages/${this.state.day}.png`, 'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0')}) : this.setState({condition:false, link:null});
    //   }
    
    componentDidMount(){
        this.setState({
            date: new Date(),
            day: this.state.date.getDate()
          })

    }

    render(){
        
        const {numbers, date, link} = this.state
        return(
            
            <div className="calendar-wrapper">
            {/* {console.log(this.state.date, 'day number is', this.state.date.getDate())}
            {console.log(this.state)} */}
                <h5 className="text-center">Hello from Calender</h5>

                    <div className="d-flex flex-wrap justify-content-around">
                        {numbers.map((number, i) =><Window  key={i} number={number} {...this.state}/>)}

                </div>
           </div>


        )
    }
}

export default Calender