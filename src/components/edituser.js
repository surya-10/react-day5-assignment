import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Base from "./base";
import { useFormik } from "formik";
import { userValidation } from "./adduser";

function EditUser({user, setUser}){
    let {id} = useParams();
    // let [name, setName] = useState("");
    // let [age, setAge] = useState("");
    // let [gender, setGender] = useState("");
    // let [qual, setQual] = useState("");
    // let [college, setCollege] = useState("");
    // let [company, setCompany] = useState("");
    // let [city, setCity] = useState("");
    // let [color, setColor] = useState("");
    let navigate = useNavigate();

    let editData = user.find((val)=>val.id===id);
    console.log(editData);

    let {values, handleChange, handleSubmit, handleBlur, errors, touched} = useFormik({
        initialValues:{
            name:editData.name,
            age:editData.age,
            city:editData.city,
            gender:editData.gender,
            Qualification:editData.Qualification,
            collegeName:editData.collegeName,
            favColor:editData.favColor,
            company:editData.company
        },
        validationSchema:userValidation,
        onSubmit:(obj)=>{
            editToTable(obj);
        }
    })
            
        


    

    async function editToTable(obj){
        let ind = user.findIndex((val)=>val.id===id);
        
        let data = await fetch(`https://6427aa39161067a83bfedd4f.mockapi.io/users/${id}`,{
            method:"PUT",
            body:JSON.stringify(obj),
            headers:{
                "content-type":"application/json"
            }
        })
        let edited = await data.json();
        user[ind] = edited;
        setUser([...user]);
        navigate("/users")

    }
    return (
        <Base
        name={"Edit User"}
        description={"You can edit user details if changes needed"}>
        <div className="add-user-div">
        <div className="add-user">
                <form onSubmit={handleSubmit}>
                <h3>Fill below details to add new user</h3>

                <div className="inputs">
                    <input type="text" placeholder="Enter Name"  
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="name"
                    />
                    {touched.name && errors.name ? <div style={{color:"crimson", fontSize:"12px"}}>
                        {errors.name}
                        </div> :""}
                    <input type="text" placeholder="Enter Age" 
                    value={values.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="age"
                    />
                    {touched.age && errors.age ? <div style={{color:"crimson", fontSize:"12px"}}>
                        {errors.age}
                        </div> :""}
                    <input type="text" placeholder="Enter Gender" 
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="gender"
                    />
                    {touched.gender && errors.gender ? <div style={{color:"crimson", fontSize:"12px"}}>
                        {errors.gender}
                        </div> :""}
                    <input type="text" placeholder="Enter Qualification" 
                    value={values.Qualification}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="Qualification"
                    />
                    {touched.Qualification && errors.Qualification ? <div style={{color:"crimson", fontSize:"12px"}}>
                        {errors.Qualification}
                        </div> :""}
                    <input type="text" placeholder="Enter College" 
                    value={values.collegeName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="collegeName"
                    />
                    {touched.collegeName && errors.collegeName ? <div style={{color:"crimson", fontSize:"12px"}}>
                        {errors.collegeName}
                        </div> :""}
                    <input type="text" placeholder="Enter Company" 
                    value={values.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="company"
                    />
                    {touched.company && errors.company ? <div style={{color:"crimson", fontSize:"12px"}}>
                        {errors.company}
                        </div> :""}
                    <input type="text" placeholder="Enter City" 
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="city"
                    />
                    {touched.city && errors.city ? <div style={{color:"crimson", fontSize:"12px"}}>
                        {errors.city}
                        </div> :""}
                    <input type="text" placeholder="Enter Favouite color" 
                    value={values.favColor}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="favColor"
                    />
                    {touched.favColor && errors.favColor ? <div style={{color:"crimson", fontSize:"12px"}}>
                        {errors.favColor}
                        </div> :""}
                    <button className="update-btn" type="submit">Update User</button>
                </div>
                </form>
            </div>
        </div>
        </Base>
    )
}
export default EditUser;