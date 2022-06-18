import "./App.css";
import { useState } from "react";
import contactsData from "./contacts.json";
import ContactList from "./components/ContactList";

function App() {
  const newData = [];
  // const DisplayFiveContacts=() =>{
  
  for (let i = 0; i < 5; i++) {
    newData.push(contactsData[i]);
  }
  // }
  const [data, setData] = useState(newData);

  const deleteContact = (id) => {
    setData(data.filter((anyData) => anyData.id !== id));
  };
  
  const displayContacts = () => {
    return data.map((anycontact) => {
      return <ContactList key={anycontact.id} {...anycontact}
      deleteContact = {deleteContact}
       />;
    });
  };
  
  const randomContact = () => {
    const dataCopy = [...data];
    let randomContact = Math.floor(contactsData.length * Math.random());
    let generatedContact;
    for (let i = 0; i < newData.length; i++) {
      while (randomContact === newData[i].id) {
        randomContact = Math.floor(contactsData.length * Math.random());
      }
    }
    generatedContact = contactsData[randomContact];
    dataCopy.push(generatedContact);
   
    setData(dataCopy);
  };

  const sortedByName = () => {
    const datacopy = [...data];
    setData(datacopy.sort((data1, data2) => data1.name - data2.name));
  };
  const sortedByPopularity = () => {
    const datacopy = [...data];
    setData(
      datacopy.sort((data1, data2) => data2.popularity - data1.popularity)
      );
    };
    
  
   


    return (
      <div>
      <button onClick={() => randomContact()}>Add a random contact </button>
      <button onClick={() => sortedByName()}>Sort by name </button>
      <button onClick={() => sortedByPopularity()}>Sort by popularity </button>
      <h1>List of contacts</h1>
      <div className="contact-list">{displayContacts()}</div>
    </div>
  );
}

export default App;
