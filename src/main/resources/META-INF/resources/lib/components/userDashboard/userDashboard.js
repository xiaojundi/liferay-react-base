import React from 'react'

class UserDashboard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userData:{},
            isAuth: false
        }
    }
    componentDidMount(){
        Liferay.Service(
        '/aw_users.userinfo/get-user-info',
            (obj)=> {
                this.setState({userData:obj.data})
                if(obj.status.code==="00"){
                    this.setState({isAuth:true})
                }
            }
        )
        console.log(this.state.userData)
    }
    render(){
        return (
        this.state.isAuth?(
        <div className="row col-md-12">
            <div className="col-md-6">
                <table className="table table-hover">
                <tbody>
                <tr>
                    <td>
                        <img src="/o/react-npm-portlet/imgs/user.jpg" alt="image"/>
                    </td>
                </tr>
               
                {
                   Object.keys(this.state.userData).map((key)=>{
                       if(this.state.userData[key]!=""){
                        return <tr key={key}><td>{key} : {this.state.userData[key]}</td></tr>   
                       }
                   })
                }
                </tbody>
                </table>
            </div>
            <div className="col-md-6">
                <img className="bitcoin-img" src="/o/react-npm-portlet/imgs/bitcoin.png" alt="image"/>
            </div>
        </div>):<div>please login</div>
        )
    }
}

export default UserDashboard