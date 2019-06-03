import React, {Component} from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
    render(){
        const {count, dispatch}=this.props
        return(
            <div>
                <p>{count}</p>
                <button onClick={()=>dispatch({type:"ADD"})}>
                    plus
                </button>
                <button onClick={()=>dispatch({type:"REMOVE" })}>
                    moins
                </button>
                <button onClick={()=>dispatch({type:"ADDTEN"})}>
                    plus 10
                </button>
                <button onClick={()=>dispatch({type:"REMOVETEN"})}>
                    moins 10
                </button>
                <button onClick={()=>dispatch({type:"RESET"})}>
                    reset
                </button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    count : state
})
const CountContainer = connect(mapStateToProps) (Counter)
export default CountContainer;