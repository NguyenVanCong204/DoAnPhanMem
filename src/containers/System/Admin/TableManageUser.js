import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import * as actions from "../../../store/actions"

class TableManageUser extends Component {

    constructor(props){
        super(props);
        this.state={
            userRedux : []
        }
    }
    componentDidMount(){
      this.props.fetchUserRedux();
    }
    componentDidUpdate(prevProps,prevState,snapshot){
      if(prevProps.listUser !== this.props.listUser){
        this.setState({
          userRedux : this.props.listUser
        })
      }
    }
    handleDeleteUser = (user)=>{
      // console.log("NVC",user)
      this.props.deleteUserRedux(user.id);
    }
    render() {
      // console.log("NVC",this.props.listUser);
      // console.log("check redux ",this.state.userRedux);
      let arrUsers=this.state.userRedux;
        return (
          <table id="TableManageUser">
            <tbody>
              <tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
              {
                arrUsers && arrUsers.length>0 ? arrUsers.map((item,index)=>{
                  return (
                    <tr key={index}>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>
                        <button
                          className="btn-edit"
                          // onClick={() => this.handleEditUser(item)}
                        >
                          <i className="fa-solid fa-pencil-alt"></i>
                        </button>
                        <button
                          className="btn-delete"
                          onClick={() => this.handleDeleteUser(item)}
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </td>
                    </tr>
                  );
                }) : ""
              }
              
            </tbody>
          </table>
        );
    }

}

const mapStateToProps = state => {
    return {
      listUser : state.admin.users
    };
};
const mapDispatchToProps = dispatch => {
    return {
      fetchUserRedux:()=>dispatch(actions.fetchAllUserStart()),
      deleteUserRedux:(id)=>dispatch(actions.deleteUser(id))

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
