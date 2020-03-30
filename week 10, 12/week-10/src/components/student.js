import React from 'react'
import Courses from './courses'

const Student = (props) => {
return (<div>
            <p> Student <b>{props.name}</b> with Student Number <b>{props.number}</b></p> 
            <Courses code={props.enrolled}>{props.enrolled}</Courses>
        </div>)
}

export default Student