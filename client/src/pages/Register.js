import axios from "axios"
// import { request } from "http"
import React from "react"
import { useNavigate } from "react-router-dom"

export default function StudentsReg() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            phoneNumber: ""
            // comments: "", 
            // isFriendly: true,
            // employment: "",
            // favColor: ""
        }
    )

    const navigate = useNavigate()

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value   //this will worke for all type of inputs 
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        // console.log(formData)

        try {
            axios.post("http://127.0.0.1:9000/students/studentsRegistration", formData).then((req, res) => {
                // const data = req.data
                // console.log(data)
                navigate('/login')
            })
        } catch (e) {
            console.log("error " + e)
        }

        // Send the form data to the server
        // fetch('/api/data', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         // Handle the response from the server if needed
        //         console.log(data);
        //     })
        //     .catch((error) => {
        //         // Handle any errors
        //         console.error('Error:', error);
        //     });

    }

    return (
        <div>
            <h1>Stusents Registration page</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                // style={{"margin":"10px"}}
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />
                <br />
                <br />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder="Phone number"
                    onChange={handleChange}
                    name="phoneNumber"
                    value={formData.phoneNumber}
                />
                <br />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                />
                <br />
                <br />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={formData.conformPassword}
                />
                <br />
                <br />
                {/* <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
            <br />
            <br />
            <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />
            
            <fieldset>
                <legend>Current employment status</legend>
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />
            
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor" 
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select> */}
                {/* <br />
            <br /> */}
                <button>Submit</button>
            </form>
        </div>
    )
}