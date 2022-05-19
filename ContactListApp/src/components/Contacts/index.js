import {useState,useEffect} from 'react'
import List  from "./List"
import Form  from "./Form"
import "./styles.css"



function Contacts() {
    const [contacts,setContacts] = useState([
      {
        fullname: "Emir",
        phone_number: 123123
      },
      {
        fullname: "Sema",
        phone_number: 141414
      },
      {
        fullname: "Ayşe",
        phone_number: 161616
      }

    ]);

    useEffect(()=>{
        console.log(contacts);

    }, [contacts])


  return (
    <div id='container'>
      <h1>Contacts</h1>

        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts