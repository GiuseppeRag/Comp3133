import React from 'react';
import axios from 'axios';

class AddStudent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            reloadData: this.props.reloadData
        }
    }

    handleChange = event => {
        this.setState({
            name: event.name
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/users', {name: this.state.name}).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
        this.state.reloadData()
    }

    render() { 
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Person Name:
                    <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>);
    }
}
 
export default AddStudent;