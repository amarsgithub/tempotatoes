import React, {Component} from 'react';
import axios from 'axios';
import '../../App.css';
import BiographyCard from '../../components/CardBox/BiographyCard';

//App for profile
class Profile extends Component {

    constructor() {
        super();
        this.state = {
            user: {}
        }
    }

    componentDidMount(){
        this.getUser();

    }

    getUser = () => {
        //axios.get('/api/users/5c9d95a50436b6379cc43176')//works for the specified id

        axios.get(`/api/users/${this.props.match.params.profileId}`)
        .then(res => {
            if(res.data){
            this.setState({
                user: res.data
            })
        }
    })
        .catch(err => console.log(err))
    }

    render( ) {
        
        return (
            <div className='profile'>
                    <BiographyCard 
                               key={this.state.user.key}
                               id={this.state.user.id}
                               picture={this.state.user.picture}
                               question1={this.state.user.question1}
                               question2={this.state.user.question2}
                               question3={this.state.user.question3}
                               question4={this.state.user.question4}
                               question5={this.state.user.question5}
                    />
            </div>
        );

    }
}

export default Profile;
