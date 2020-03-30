import React from 'react';

const Student = ({match}) => {
    const { studentName, studentNo } = match.params
    return (
        <div>
            <p>Student</p>
            <p>Student Name: {studentName}</p>
            <p>Student Number: {studentNo}</p>
        </div>
    );
}
 
export default Student;