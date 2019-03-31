import React, { Component } from 'react';

class Events extends Component {
    render() {
        return (
            <div className=".calendarStyle">
            <iframe src="https://calendar.google.com/calendar/embed?src=seanbiava%40gmail.com&ctz=America%2FNew_York" 
                          style={{
                          align: 'center',
                          border: '0', 
                          width:"1800", 
                          height: "1800", 
                          frameborder: "0", 
                          scrolling: "no"
                          }}
            ></iframe>
        </div>
        )
    }
}

export default Events;