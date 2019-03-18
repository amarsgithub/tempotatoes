import React, {Component} from 'react';
import CardBox from './views/CardBox/CardBox.js';
import HeaderBox from './views/HeaderBox/HeaderBox.js';
import SearchBox from './views/SearchBox/SearchBox.js';
import NewsBox from './views/NewsBox/NewsBox';
import {userAccounts} from '../BackendTempData/userAccounts';
import {pageTabs} from '../BackendTempData/pageTabs';
import {newsStories} from "../BackendTempData/newsStoreis";
import '../stylesheets/App.css';


//App for homepage
class App extends Component {
    constructor() {
        super();
        this.state = {
            userAccounts: userAccounts,
            searchfield: ''
        }
    }

    //sets the state of searchfield on event
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }


    render() {
        // filters the ProfileCards shown by what the user inputs into the searchfield
        const filteredUsers = this.state.userAccounts.filter(userAccounts => {
            return userAccounts.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        //displays the header, searchbar, and cardlist
        return (
            <div>
                <HeaderBox pageTabs={pageTabs}/>
                <hr></hr>
                <SearchBox searchChange={this.onSearchChange}/>

                <div className='cardNews'>
                    <CardBox userAccounts={filteredUsers}/>
                    <NewsBox newsStories={newsStories}/>
                </div>


            </div>
        );

    }
}

export default App;