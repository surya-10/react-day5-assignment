import { useNavigate } from "react-router-dom";
import AddUser from "./adduser";
import Base from "./base";

function Home({user, setUser}){

    let navigate = useNavigate();

    async function deleteData(id){
        console.log(id)
        let data = await fetch(`https://6427aa39161067a83bfedd4f.mockapi.io/users/${id}`, {
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            }
        })
        let deleted = await data.json();
        console.log(deleted)
        let newUser = user.filter((val)=>val.id!==id);
        setUser(newUser);
    }

    function sendToEdit(id){
        navigate(`/edit-user/${id}`)
    }
    
    return (
        <div className="home-div">
            
            <Base
            name={"Hello, Good Day!"}
            description={"You can see all employee datas"}>
                {/* <AddUser/> */}
                <div className="users-div">
                    {user.map((val, ind)=>(
                        <div className="user" key={ind}>
                            <h3 className="name"><span>Name: </span>{val.name}</h3>
                            <p className="age"><span>Age: </span>{val.age}</p>
                            <p className="gender"><span>Gender: </span>{val.gender}</p>
                            <p className="qual"><span>Qualification: </span>{val.Qualification}</p>
                            <p className="college"><span>College: </span>{val.collegeName}</p>
                            <p className="comp"><span>Company: </span>{val.company}</p>
                            <p className="city"><span>City: </span>{val.city}</p>
                            <p className="fav"><span>Fav Color: </span>{val.favColor}</p>
                            <div className="user-btn">
                                <button className="edit" onClick={()=>sendToEdit(val.id)}>Edit</button>
                                <button className="delete" onClick={()=>deleteData(val.id)}>Delete</button>
                                </div>
                        </div>
                    ))}
                </div>
                </Base>
        </div>
    )
}
export default Home;


// let data = [
//     {
//      "name": "Pavi",
//      "age": 22,
//      "gender": "Female",
//      "city": "Salem",
//      "Qualification": "BSC-Maths",
//      "company": "New Innovations",
//      "collegeName": "AVS",
//      "favColor": "Pink",
//      "id": "1"
//     },
//     {
//      "name": "Arthy",
//      "age": 23,
//      "gender": "Female",
//      "city": "Coimbatore",
//      "Qualification": "BSC Nursing",
//      "company": "Government",
//      "collegeName": "Govt Nuring College",
//      "favColor": "Black",
//      "id": "2"
//     },
//    {
//     "name": "Surya",
//      "age": 23,
//      "gender": "Male",
//      "city": "Trichy",
//      "Qualification": "BE",
//      "company": "Infosys",
//      "collegeName": "Sona COllege of Technology",
//      "favColor": "Black",
//      "id": "3"
//    },
//    {
//     "name": "Ajith",
//      "age": 43,
//      "gender": "Male",
//      "city": "Chennai",
//      "Qualification": "B Tech",
//      "company": "CTS",
//      "collegeName": "Hindustan",
//      "favColor": "Red",
//      "id": "4"
//    },
//    {
//     "name": "Vijay",
//      "age": 30,
//      "gender": "Male",
//      "city": "Tanjore",
//      "Qualification": "BSC Agriculture",
//      "company": "KNS Traders",
//      "collegeName": "Prist University",
//      "favColor": "Blue",
//      "id": "5"
//    }
//    ]