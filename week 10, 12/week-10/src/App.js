import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/student';
import College from './components/college'
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import DeleteStudent from './components/DeleteStudent';

function App() {

    {/*
    <React.Fragment>
      <Student name="Rick Rude" number="11111" enrolled="1"/>
      <Student name="Shawn Michaels" number="22222" enrolled="2"/>
      <Student name="Bret Hart" number="33333" enrolled="3"/>
      <College name="George Brown" location="Casa Loma"/>
    </React.Fragment>*/}

  return (
    <div>
      <StudentList />
    </div>
  );
}

export default App;
