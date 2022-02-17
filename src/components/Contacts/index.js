import {useEffect, useState} from 'react'
import List from "./List"
import Form from './Form'
import "./styles.css"

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mithat",
      phone_number:"123123"
    },{
      fullname: "Ecem",
      phone_number:"456456"
    },{
      fullname: "Nuriye",
      phone_number:"789789"
    }
  ]);

  useEffect(()=>{
    console.log(contacts);
  },[contacts])
  return (
    <div id='container'>
      <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts