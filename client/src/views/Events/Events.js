import React, { Component } from 'react';
import Calendar from '../../components/Calendar/Calendar.js';
import './Events.css';


class Events extends Component {
    render() {
        return (
            <div>
                <div>
                    <Calendar />
                </div>
            </div>
        )
    }
}

export default Events;
