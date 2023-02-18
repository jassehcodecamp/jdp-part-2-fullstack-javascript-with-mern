const express = require('express');


const app = express()

app.use(express.json())
app.use(express.urlencoded());

const port = 3000

const contacts = [
  {
    id: 1,
    name: 'Omar Jasseh',
    phone: 3100948,
  },
  {
    id: 2,
    name: 'Buba Conteh',
    phone: 3010451
  }
];



app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Phonebook API" })
})

// Get all Contacts
app.get('/contacts', (req, res) => {
  
  const response = {
    status: "Success",
    message: "Request successful",
    data: contacts,
  }

  res.json(response);
});

// Get a single Contact by Id
app.get('/contacts/:id', (req, res) => {
  const contactId = req.params.id;
  const contact = contacts.find(contact => contact.id == contactId);

  const response = {
    status: 'Success',
    message: 'Request successful',
    data: contact
  }

  if (!contact) {
    response.status = 'Failure';
    response.message = 'Contact not found';
    response.data = null;
    res.statusCode = 404;
  }


  res.json(response);
});

// Get update a Contact by Id
app.patch('/contacts/:id', (req, res) => {

  const response = {
    status: "Success",
    message: "Contact successfully updated",
  }

  const contactId = req.params.id;

  const contact = contacts.find((contact) => contact.id == contactId);

  if (!contact) {
    response.status = "Failure"
    response.message = "Contact not found"
    response.data = null
    res.statusCode = 404

    return res.json(response);
  }

  const name = req.body.name;
  const phone = req.body.phone;

  // validate the fields
  if (!name ||  !phone) {
      res.statusCode = 400;
      
      response.status = "Failure"
      response.message = "Bad request"
      response.data = null
      response.error = "Both the Name and Phone are required" 

      return res.json(response)
  }

  contact.name = name
  contact.phone = phone

  response.data = contact;

  res.json(response);

 
})

// Implement Post (Create a Contact)
app.post('/contacts', (req, res) => {
  const phone = req.body.phone;
  const name = req.body.name;

  if (!phone || !name) {
    res.statusCode(400);

    return res.json({
      status: 'failure',
      message: 'There was error in processing your request',
      error: 'All fields are requrire'
    })
  }
  const contact = { phone, name, id: contacts.length + 1 };
  contacts.push(contact);

  res.status(201).json({
    status: "success",
    message: "Contact successfully created",
    data: contact
  })
});

// Implement Delete (Delete a Contact by Id)
app.delete('/contacts/:id', (req, res) => {
  
  const contactIndex = contacts.findIndex(contact => contact.id == req.params.id);

  if (contactIndex == -1) {
    return res.status(404).json({
      'status': 'Failure',
      message: 'The contact was not found',
    })
  }

  contacts.splice(contactIndex, 1);

  res.status(200).json({
    status: "success",
    message: "Contact successfully deleted",
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})