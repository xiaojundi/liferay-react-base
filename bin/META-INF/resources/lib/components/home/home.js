import React from 'react'
import {actionCreate} from '../../redux/redux'
import { connect } from 'react-redux'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.handleDispach = this.handleDispach.bind(this)
    }
    componentDidMount(){
       console.log(this.props.homenav.redirectTo)
    }
    handleDispach(){
        this.props.actionCreate("test")
    }
    render(){
        return(
            <div onClick={this.handleDispach}>this is home page</div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        homenav : state.homenav
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        actionCreate: (value) =>{
            dispatch(actionCreate(value))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Home)