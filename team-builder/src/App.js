import React, { useState } from 'react';
import './App.css';
import MemberForm from './MemberForm'


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
    leader: "",
    name: "",
    email: "",
    course: "",
  })

  // Updater to change member //

  const updateMember = (inputName, inputValue) => {

  }

  // Adding a Submit Form // 

  const submitForm = () => {
    const newMember = {
      leader: teamFormValues.leader.trim(),
      name: teamFormValues.name.trim(),
      email: teamFormValues.email.trim(),
      course: teamFormValues.course
    }
    if (!newMember.name || !newMember.email || !newMember.role) return
  }



  return (
    <div className="container">
      <header><h1> Members App</h1></header>

      <MemberForm
        values={teamFormValues}
        update={updateMember}
        submit={submitForm}
      />

      {members.map(member => {
        return member.name

      })

      }
    </div>
  );

}

export default App;
