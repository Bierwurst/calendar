import React, { Component } from 'react';
import './components.css';



class Window extends Component{
    constructor(props){
        super(props);
        this.state = {
            number: this.props.number,
            day: this.props.date.getDate(),
            month: this.props.date.getMonth()+1,
            class: "btn btn-success b-size btn-bgr-number-",
            toggle: this.props.toggle,
            classToday: ""
        }
        this.handleClick = this.handleClick.bind(this);

    }



      handleClick() {

        //!! IMPORTANT: this is the condition to make sure, only the content of the day and the days before is visible/available, so nobody can see the christmas pictures before its time
        //this.state.toggle && this.state.number <= this.state.day && this.state.month ===12 
        
        //for development I changed it to this.state.toggle
        
        (this.state.toggle)  ? 
             this.setState({
                class: "btn btn-bgr-number-"+this.state.number,
                toggle: !this.state.toggle,
                classToday: "dontShow"
        }) 
        :    
            this.setState({
                    class: "btn btn-success b-size btn-bgr-number-",
                    toggle: !this.state.toggle,
                    classToday: ""
                })

      }


    render(){
        let number = this.props.number;
        return(
            <div className="window-wrapper">

                    {(this.state.number === this.state.day) 
                    ? 
                    <div className="b-container">
                        <button className={this.state.class} date={this.props.date} onClick={this.handleClick}><p className={this.state.classToday}>today</p></button>
                        <div className="text-center link-style">
                        <a  href={this.props.surprise[number-1]} target="_blank" rel="noopener noreferrer">Day {this.state.number} Surprise</a>
                        </div>
                    </div>
                    :
                    (this.state.number < this.state.day)
                    ?
                    <div className="b-container">
                        <button className={this.state.class} date={this.props.date} onClick={this.handleClick}><p className={this.state.classToday}>{this.state.number}</p></button>
                        <div className="text-center link-style">
                        <a  href={this.props.surprise[number-1]} target="_blank" rel="noopener noreferrer">Day{this.state.number} Surprise</a>
                        </div>
                    </div>
                    :
                    <div className="b-container">
                    <button className={this.state.class} date={this.props.date} onClick={this.handleClick}><p className={this.state.classToday}>{this.state.number}</p></button>
                    <div className="text-center link-style">
                    <div>Day {this.state.number} Surprise</div>
                    </div>
                </div>}
            </div>
        )
    }
}

export default Window