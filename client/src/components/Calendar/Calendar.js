import React, { Component } from 'react';

class Calendar extends Component {
    render() {
        return (
            <div className=".calendarStyle">
                <iframe src="https://calendar.google.com/calendar/embed?src=seanbiava%40gmail.com&ctz=America%2FNew_York"></iframe>
            </div>
        )
    }
}

export default Calendar;