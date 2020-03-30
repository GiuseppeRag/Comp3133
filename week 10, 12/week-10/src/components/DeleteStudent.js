import React from 'react';
import axios from 'axios';

class DeleteStudent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
    }

    render(props) { 
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <button type="submit">Delete</button>
            </form>
        </div>);
    }
}
 
export default DeleteStudent;