import React from "react";

export const ContactForm = ({name,setName,phone,setPhone,email,setEmail,handleSubmit}) => {
  function handlenamechange({target}) {
    setName(target.value);
  }
  function handlephonechange({target}) {
setPhone(target.value);
  }
  function handleemailchange({target}) {
    setEmail(target.value);
  }

  return (
    <>
  <form onSubmit={handleSubmit}>
  <input type="text" name="name" value={name||""} required placeholder="Contact Name" onChange={handlenamechange}/>
  <input type="text" name="phone" value={phone||""} required pattern="^[2-9]\d{2}-\d{3}-\d{4}$" placeholder="Contact Phone(###-###-####)" onChange={handlephonechange}/>
  <input type="text" name="email" value={email||""}  placeholder="Contact Email" onChange={handleemailchange} pattern="^.+@[^\.].*\.[a-z]{2,}$"/>
  <input type="submit" />
  </form>
    </>
  );
};

