import { useState } from "react";
import Base from "./base";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

export const userValidation= yup.object({
    name:yup.string().required("Enter Name"),
    age:yup.string().required("Enter Age"),
    gender:yup.string().required("Enter Gender"),
    city:yup.string().required("Enter City"),
    Qualification:yup.string().required("Enter Qualification"),
    company:yup.string().required("Enter Company"),
    collegeName:yup.string().required("Enter College"),
    favColor:yup.string().required("Enter Color")
})
function AddUser({user, setUser}){

    let {values, handleChange, handleSubmit, handleBlur, errors, touched} = useFormik({
        initialValues:{
            name:"",
            age:"",
            city:"",
            gender:"",
            Qualification:"",
            collegeName:"",
            favColor:"",
            company:""
        },
        validationSchema:userValidation,
        onSubmit:(obj)=>{
            console.log(obj)
            addToTable(obj);
        }
    })
    


    // let [name, setName] = useState("");
    // let [age, setAge] = useState([]);
    // let [gender, setGender] = useState("");
    // let [qual, setQual] = useState("");
    // let [college, setCollege] = useState("");
    // let [company, setCompany] = useState("");
    // let [city, setCity] = useState("");
    // let [color, setColor] = useState("");
    let navigate = useNavigate();

     async function addToTable(obj){
        // let obj = {
        //     name,
        //     age,
        //     gender,
        //     city,
        //     Qualification:qual,
        //     company,
        //     collegeName:college,
        //     favColor:color
        // }
        let data = await fetch("https://6427aa39161067a83bfedd4f.mockapi.io/users",{
            method:"POST",
            body:JSON.stringify(obj),
            headers:{
                "content-type":"application/json"
            }
        })
        let addedData = await data.json();
        console.log(addedData)
        setUser([...user, addedData]);
        navigate("/users")

    }
    return (
        <Base
        name={"Add User"}
        description={"You can add new employee details below"}>
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
                    <button className="create-btn" type="submit">Create User</button>
                </div>
                </form>
            </div>
        </div>
        </Base>
    )
}
export default AddUser;