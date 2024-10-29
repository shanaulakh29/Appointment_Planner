import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts,addcontact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    let duplicate=false;
    e.preventDefault();
  contacts.forEach((contact)=>{
    if(contact.name===name&&contact.phone===phone)
    {
      alert("We already have your contact in our system")
      duplicate=true;
    
    }});
    if(!duplicate)  // if the contact name is not a duplicate, add the contact to the contacts array and clear the form fields
    {
      addcontact(name,phone,email);
      setName("");
      setPhone("");
      setEmail("");
    }



    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList listarray={contacts}/>
      </section>
    </div>
  );
};
