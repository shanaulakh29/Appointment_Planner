import React,{useMemo} from "react";
import { ContactPicker } from "/Users/shan/Desktop/appointment-planner-starting-v18/src/components/contactPicker/ContactPicker.js";
const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({contacts,name,setTitle,contact,setContact,date,setDate,time,setTime,handleSubmit}) => {
  
  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);
  return (
    <>
    <form onSubmit={handleSubmit}>
    <input type="text" name="name" value={name} placeholder="Appointment Title" required onChange={(e) => setTitle(e.target.value)} />
    <ContactPicker contacts={contacts} required handleChange={(e)=>setContact(e.target.value)}/>
    <input type="date" min={getTodayString()} name="date" required value={date} onChange={(e) => setDate(e.target.value)}/>
    <input type="time" name="time" value={time} required onChange={(e) => setTime(e.target.value)}/>
    <input type="submit"/>
    </form>
    </>
  );
};
