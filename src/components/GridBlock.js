import React, {Component} from 'react';

import { connect } from 'react-redux';

class GridBlock extends Component {

  constructor(props){
    super(props);

    this.state = {
      visited: false,
    }
  }

  componentWillReceiveProps(nextProps){

    if (parseInt(this.props.xSpot) === nextProps.x &&
        parseInt(this.props.ySpot) === nextProps.y ){
          this.setState({
            visited: true,
          })
      }
  }

  render(){

    let gridBlock = {
     width: "100px",
     height: "100px",
     backgroundColor: "black",
     borderStyle: "solid",
    }

    let visited = {
      width: "100px",
      height: "100px",
      backgroundColor: "red",
      borderStyle: "solid",
    }


    if (parseInt(this.props.xSpot) === this.props.x &&
        parseInt(this.props.ySpot) === this.props.y ){
          gridBlock = {
                  width: "100px",
                  height: "100px",
                  backgroundColor: "green",
                  borderStyle: "solid",
                }

      return(
          <div style={gridBlock}>
          </div>
      )

    } else if( this.state.visited === true){
      return(
        <div style={visited}>

        </div>
      )
    } else {
      return(
        <div style={gridBlock}>
        </div>
      )
    }
  }
}

  function state2props(state) {

      return {
          gas: state.gas,
          x: state.x,
          y: state.y,
      };
  }

  function dispatch2props(dispatch) {
      return {
      };
  }


export default connect(state2props, dispatch2props)(GridBlock);