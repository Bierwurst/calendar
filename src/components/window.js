import React, { Component } from 'react';
import './components.css';
import { directive } from '@babel/types';


class Window extends Component{
    constructor(props){
        super(props);
        this.state = {
            number: this.props.number,
            day: this.props.date.getDate(),
            class: "btn btn-success b-size btn-bgr-number-",
            toggle: this.props.toggle
        }
        this.handleClick = this.handleClick.bind(this);

    }
    // componentDidMount(){
        
    //     (this.state.number < this.state.day && this.state.toggle) ? this.setState({class: "btn btn-bgr-number-"+this.state.number}) : this.setState({class: "btn btn-primary b-size btn-bgr-number-"})
    // } 
    // handleClick(e) {
    //     // this.setState({
    //     //     class: "btn-bgr-number-"+this.state.number
    //     // })
    //     // console.log(this.state.number, this.state.class)
    //     console.log('hello')
    //   }



      handleClick() {
          (this.state.toggle && this.state.number <= this.state.day)  ? 
             this.setState({
                class: "btn btn-bgr-number-"+this.state.number,
                toggle: !this.state.toggle
        }) 
        :    
            this.setState({
                    class: "btn btn-success b-size btn-bgr-number-",
                    toggle: !this.state.toggle
                })

      }


    render(){
        let number = this.props.number;
        return(
            <div className="b-container">
                <button className={this.state.class} date={this.props.date} onClick={this.handleClick}>{this.state.number}</button>
                <div className="text-center link-style">
                <a  href="https://www.youtube.com/watch?v=L1O0suGglg4">Day{this.state.number} Surprise</a>
                </div>
                
            </div>
            

            // {console.log(this.state.number, this.state.day)}
            // (this.state.number < this.state.day) 
            // ? 
            // <button className={`btn btn-bgr-number-${number}`} date={this.props.date} onClick={this.handleClick}></button>
            // :
            // <button className={this.state.class} date={this.props.date} onClick={this.handleClick}>{this.state.number}</button>







        )
    }
}

export default Window