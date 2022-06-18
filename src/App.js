import './App.css';
import { useState } from 'react';
import contactsData from './contacts.json'
import ContactList from './components/ContactList';


function App() {
  
  const newData = []
  // const DisplayFiveContacts=() =>{
   console.log(newData)
    for(let i=0; i<5; i++){
      newData.push(contactsData[i])
    }
  // }
  const [ data, setData] = useState(newData)
 
  // console.log(contactsData)
  const displayContacts = () =>{

    return(
      newData.map((anycontact)=>{
        return(
          <ContactList key={anycontact.id} {...anycontact}  />
        )
      })
    )
  }

  const randomContact = ()=>{
    const dataCopy = [...data]
    let randomContact = Math.floor(contactsData.length *Math.random());
    for(let i=0; i<newData.length; i++){
      
     while(randomContact ===newData[i].id ){
        randomContact = Math.floor(contactsData.length *Math.random());
       }
     
     const generatedContact =contactsData[randomContact]
      
     dataCopy.push(generatedContact);
   }
   console.log(dataCopy)
   setData(dataCopy)
    
  }
  
    

    
   
     
    

  return (
    <div >
     <button onClick={() => randomContact()}>Add a random contact </button>
     <h1>List of contacts</h1>
     <div className='contact-list'>
     {
      displayContacts()
     }
      
     </div>
    </div>
  );
}

export default App;
