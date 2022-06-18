
//rcf o shorcut function
export default function ContactList({id,pictureUrl, name, popularity, wonOscar, wonEmmy, deleteContact}) {
   
    
    return (
    <div className="container">
    <img className="profile-img" src={pictureUrl} alt="profile " />
    <h3>Name: {name} </h3>
    <p> Popularity: {popularity}</p>
    {wonOscar && <p >Oscars awarded</p>}
    {wonEmmy && <p >Emmy awarded</p>}
    {/* <button onClick={()=>deleteContact(id)}>Delete</button> */}
    <button onClick={() => deleteContact(id)}>Delete</button>
    </div>
  )
}
