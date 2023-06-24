import { Children } from "react";
import { useNavigate } from "react-router-dom";

function Base({name, description, children}){
    function changeNav(){
        let nav = document.querySelector(".buttons");
        console.log(nav.className);
        if(nav.className=="buttons"){
            nav.className+=" buttons1";
        }
        else{
            nav.className="buttons";
        }
    }
    


    let navigate = useNavigate();
    return (
        <div className="base-div">
            <div className="nav">
                <div className="left">
                <h3>Students Data</h3>
                <div className="menu-bar">
                <div className="buttons">
                    <button onClick={()=>navigate("/")}>Dashboard</button>
                    <button onClick={()=>navigate("/users")}>Users</button>
                    <button onClick={()=>navigate("/add-user")}>Add User</button>
                </div>
                
                </div>
                </div>
                <i class="fa-solid fa-bars bars" onClick={changeNav}></i>
            </div>
            <div className="base-content">
                <div className="base-heading">
                <h3>{name}</h3>
                <p>{description}</p>
                </div>
                <div className="child">
                    {children}
                </div>
            </div>
            {/* <div className="footer">
                <p>All Right Reserved</p>
            </div> */}
        </div>
    )
}
export default Base;