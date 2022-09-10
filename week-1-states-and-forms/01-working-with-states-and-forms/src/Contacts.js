import React, { useState } from 'react'

const Contacts = () => {

  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Omar Jasseh",
      phone: 3100948,
    },
    {
      id: 2,
      name: "Buba Conteh",
      phone: 3010451
    },
   
  ]);

  const [contactId, setContactId] = useState(null);

  const [contactName, setContactName] = useState(""); 

  const [contactPhone, setContactPhone] = useState(""); 

  const [contactAction, setContactAction] = useState("create");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // console.log(e);

    // validating required fields
    if (contactName === "" || contactPhone === "") {
      alert("All fields are required");
      return;
    }

    if (contactAction === 'create') {

    
      const contact = {
        id: Math.floor(Math.random() * 1000) + 3,
        name: contactName,
        phone: contactPhone,
      }

      // let newContacts = [...contacts, contact];
      setContacts([...contacts, contact])
    } else if (contactAction === "edit") {
      
      let contactToUpdateIndex = contacts.findIndex(contact => contact.id === contactId)


      let newContacts = [...contacts];

      newContacts[contactToUpdateIndex] = {
        id: contactId,
        name: contactName,
        phone: contactPhone
      }

      // console.log('coming here', newContacts);
      setContacts(newContacts);
    }
  };

  const handleEditContact = (contact) => {
    // alert('edit contact ' + contact.name)
    setContactAction("edit");
    setContactId(contact.id);
    setContactName(contact.name);
    setContactPhone(contact.phone);
  }

  return (
    <div>
      <h1>Contacts</h1>

      <div>
        <form action="" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder='name' 
            value={contactName} 
            onChange={(e) => setContactName(e.target.value)} 
          />

          <input 
            type="text" 
            placeholder='phone' 
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
          />

          <button>Save Contact</button>
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => 
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>
                <button  onClick={() => handleEditContact(contact)}>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          )}
          

        </tbody>
      </table>
    </div>
  )
}

export default Contacts