import React from 'react';
import axios from 'axios';
import DeleteStudent from './DeleteStudent';
import AddStudent from './AddStudent';

class StudentList extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            const users = []
            res.data.map(user => users.push(<li>{user.name}<DeleteStudent id={user.id}/></li>))
            console.log(res.data)
            this.setState({
                users: users
            })
        })
    }

    reloadData() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            const users = []
            res.data.map(user => users.push(<li>{user.name}<DeleteStudent id={user.id}/></li>))
            console.log(res.data)
            this.setState({
                users: users
            })
        })
    }

    render() {
        return (
            <div>
                <AddStudent reloadData={() => this.reloadData()}/>
                <ul>
                    {this.state.users}
                </ul>
            </div>
        );
    }
}
 
export default StudentList;