import React, { Component } from 'react';
import CardList from './CardList.js';
import HeaderBar from './HeaderBar.js';
import SearchBar from './SearchBar.js';
import {userAccounts} from './userAccounts';
import {pageTabs} from './pageTabs';

//App for homepage
class App extends Component{
    constructor() {
        super();
        this.state = {
            userAccounts: userAccounts,
            searchfield: ''
        }
    }

    //sets the state of searchfield on event
    onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    }


    render() {
        // filters the ProfileCards shown by what the user inputs into the searchfield
        const filteredUsers = this.state.userAccounts.filter(userAccount =>{
            return userAccount.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        //displays the header, searchbar, and cardlist
        return (
            <div className='tc'>
                <HeaderBar pageTabs = { pageTabs }/>
                <SearchBar searchChange={this.onSearchChange}/>
                <CardList userAccounts = { filteredUsers }/>
            </div>
        );
    }
}

export default App;