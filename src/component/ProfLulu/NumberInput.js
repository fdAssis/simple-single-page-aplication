import React from 'react';

export default class NumberInput extends React.Component{

  constructor(props){
    super(props);
    this.state={
      num:0
    };
  }

  componentDidMount() {
    if(this.props.value){
      this.setState({num:this.props.value});
    }
  }

  increase=()=>{
    if(this.props.max && (this.state.num>=this.props.max)){
      return;
    }
    this.setState((state) => {return {num: state.num + 1}});
    this.props.onChange(this.state.num+1);
  }

  decrease=()=>{
    if(this.state.num<=1){
      return;
    }
    this.setState((state) => {return {num: state.num - 1}});
    this.props.onChange(this.state.num-1);
  }


  render(){
    return (
      <div>
        <button name='decrease' type='reset' onClick={this.decrease}>-</button>
        {this.state.num}
        <button name='increase' type='reset' onClick={this.increase}>+</button>
      </div>
    );
  }
}
