import React, { Component } from 'react';
import axios from 'axios';


class Input extends Component {

  state = {
    action: ""
  }

  addUser = () => {
    const user = {action: this.state.action}

    if(user.action && user.action.length > 0){
      axios.post('/api/users', user)
        .then(res => {
          if(res.data){
            this.props.getUsers();
            this.setState({action: ""})
          }
        })
        .catch(err => console.log(err))
    }else {
      console.log('input field required')
    }
  }

  handleChange = (e) => {
    this.setState({
        action: e.target.value
    })
  }

  render() {
    let { action } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={action} />
        <button onClick={this.addUser}>add user</button>
      </div>
    )
  }
}

export default Input