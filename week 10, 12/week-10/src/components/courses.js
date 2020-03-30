import React from 'react';

const Courses = (props) => {
    const elements = []
    for (var i = 0; i < props.code; i++) {
        elements.push(<p>Enrolled in Course Number <b>{i}</b></p>)
    }
    return elements
}
 
export default Courses;