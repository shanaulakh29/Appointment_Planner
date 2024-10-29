import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({contacts, appointments, addappointment}) => {
  
  /*
  Define state variables for 
  appointment info
  */
const [name,setName]=useState("");
const [contact,setContact]=useState("");
const [date,setDate]=useState("");
const [time,setTime]=useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addappointment(name,contact,date,time);
    setName("");
    setContact("");
    setDate("");
    setTime("");
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm name={name} setTitle={setName} contact={contact} setContact={setContact}
        date={date} setDate={setDate} time={time} setTime={setTime} handleSubmit={handleSubmit} contacts={contacts}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList listarray={appointments} />
      </section>
    </div>
  );
};