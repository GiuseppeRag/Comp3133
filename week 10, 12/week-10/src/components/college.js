import React from 'react';

class College extends React.Component {
    render(props) { 
    return <p>College <b>{this.props.name}</b> with address <b>{this.props.location}</b></p>;
    }
}
 
export default College;