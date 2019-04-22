import React, { Component } from 'react';
import Calendar from '../../components/Calendar/Calendar.js';
import './Events.css';


class Events extends Component {
    render() {
        return (
            <div>
                <div className= 'inline'>
                    <div className= 'instructions'>
                        <h1>Instructions</h1>
                        <ol>
                            <li><p>Navigate to the event you are looking for</p></li>
                            <li><p>Click on the event</p></li>
                            <li><p>Choose "Copy this event to my calendar"</p></li>
                        </ol>
                        <ul>
                            <li><p>You can also change the view between "day" "week" and "month" in the upper right hand 
                                corner of the calendar</p></li>
                        </ul>
                        
                    </div>
                    <div className="calendarStyles">
                        <Calendar />
                    </div>
                </div>
            </div>
        )
    }
}

export default Events;
