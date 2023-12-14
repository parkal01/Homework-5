import React, { useState, useEffect } from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  const [contactList, setContactList] = useState(contacts);

  // Use useEffect to update contactList when contacts array changes
  useEffect(() => {
    setContactList(contacts);
  }, [contacts]);

  const handleDelete = (contactId) => {
    const updatedContacts = contactList.filter((contact) => contact.id !== contactId);
    setContactList(updatedContacts);
  };

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contactList.map((contact) => (
        <Card
          key={contact.id}
          name={contact.name}
          img={contact.imgURL}
          tel={contact.phone}
          email={contact.email}
          onDelete={() => handleDelete(contact.id)}
        />
      ))}
    </div>
  );
}

export default App;
