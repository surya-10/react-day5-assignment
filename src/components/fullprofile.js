import { useNavigate, useParams } from "react-router-dom";

function Profile({user, setUser}){
    let navigate = useNavigate();
    let {id} = useParams();
    let fullProfile= user.find((val)=>val.id===id);
    console.log(fullProfile);


    function goToHome(){
        navigate("/users");
    }
    return (
        <div className="profile">
            <div className="student-profile" key={fullProfile.id}>
                <p><i className="fa-sharp fa-solid fa-arrow-left arrow" onClick={goToHome}></i></p>
                
                <div className="details">
                    <h3>Name: {fullProfile.name}</h3>
                    <p>Age: {fullProfile.age}</p>
                    <p>Gender: {fullProfile.gender}</p>
                    <p>Education: {fullProfile.Qualification}</p>
                    <p>College: {fullProfile.collegeName}</p>
                    <p>City: {fullProfile.city}</p>
                    <p>Company: {fullProfile.company}</p>
                    <p>Favouite color: {fullProfile.favColor}</p>
                </div>
            </div>

        </div>
    )
}
export default Profile;