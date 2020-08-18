import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const initialMembers = [{
  // Text Inputs //
  leader: "Winnie",
  name: "Hung",
  email: "Hung@gmail.com",
  // DropDown Menu //
  course: "FrontEnd", /* aka things like frontend, backend, ios*/
}
]

function App() {
  // States to hold Values //

  const [members, setMembers] = useState(initialMembers)
  const [teamFormValues, setTeamFormValues] = useState({
    leader:"",
    name:"",
    email:"",
    course:"",
  })

  // Updater to change member //

  const updateMember = (inputName, inputValue) => {

  }

  // Adding a Submit Form // 
  
  const submitForm = () => {

  }



  return (
      <div className="container">
        <header><h1> Members App</h1></header>
        {members.map(member => {
          return member.name
        })

        }
      {/* <Form
      values = {teamValues}
      update = {updateMember}
      submit = {submitForm}
      /> */}
      </div>
  );

}

export default App;
