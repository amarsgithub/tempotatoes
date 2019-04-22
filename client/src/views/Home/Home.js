import React, {Component} from 'react';
import axios from 'axios';
import CardBox from '../../components/CardBox/CardBox.js';
import SearchBox from '../../components/SearchBox/SearchBox.js';
import NewsBox from '../../components/NewsBox/NewsBox';
import {userAccounts} from '../../BackendTempData/userAccounts';
import {newsStories} from "../../BackendTempData/newsStoreis";
import '../../App.css';

//App for homepage
class Home extends Component {

    constructor() {
        super();
        this.state = {
            userAccounts: userAccounts,
            users: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        this.getUsers();
    }

    getUsers = () => {
        axios.get('/api/users')
        .then(res => {
            if(res.data){
            this.setState({
                users: res.data
            })
        }
    })
        .catch(err => console.log(err))
    }

    //sets the state of searchfield on event
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }


    render( ) {
        // filters the ProfileCards shown by what the user inputs into the searchfield
        const filteredUsers = this.state.users.filter(users => {
            return users.fullName.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        //displays the header, searchbar, and cardlist
        return (
            <div>
                <SearchBox searchChange={this.onSearchChange}/>

                <div className='cardNews'>
                    <CardBox userAccounts={filteredUsers} />
                </div>


            </div>
        );

    }
}

export default Home;
