import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    // const [resData, setResData] = useState(null)

    function handleClick(e) {
        const { name, value } = e.target
        setLoginData(prev => {
            return {
                ...prev,
                [name]: [value]
            }
        })
        // console.log(name)
        // console.log(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // console.log(loginData)

        // if(loginData.email === "mattedaramesh27@gmail.com" || loginData.password === 'mnbv'){
        //   console.log('login successfull....')
        // }else{
        //   console.log('Login details not matched')
        // }


        // try {
        //     await axios.post('http://127.0.0.1:9000/students/studentsLogin', loginData).then(res => setData(res.data))
        //         // console.log(response.data) //res.data
        //         // const d = res.data
        //         // console.log(d)
        //         // setData(() => res.data)
        //         // console.log(d)
        //         // check object data in array of objects
        //         // data.forEach(d => {
        //         //     if (d.email == loginData.email && d.password == loginData.password) {
        //         //         console.log('lonin successfull....!')
        //         //         // setLoginSuccess([prev => !prev])
        //         //         navigate('/studentProfile')
        //         //     } else {
        //         //         console.log("details not matched....!")
        //         //     }
        //         // })
        //         console.log(data)
        //         // navigate('/studentProfile')
        //     })
        // } catch (e) {
        //     console.log('error ' + e)
        // }

        // try {
        //   await axios.get('http://127.0.0.1:9000/students').then(res => {
        //     const d = res.data
        //     console.log(d)

        //   }
        // } catch (e) {
        //   console.log('error' + e)
        // }

        // try {
        //     const response = await axios.post('http://127.0.0.1:9000/students/studentsLogin', loginData)
        //     if(!response.data){
        //         // console.log("details not matched")
        //         alert("details not matched")
        //     }else{
        //         // setResData(response.data)
        //         // console.log(response.data)
        //         const {email , password } = response.data
        //         // console.log(email,password)
        //         navigate("/studentProfile", {state:{email,password}})
        //         // console.log(resData)
        //     }

        // }catch(e){
        //     console.log("error occured is : "+e)
        // }

        try {
            const response = await axios.post('http://127.0.0.1:9000/students/studentsLogin', loginData);
            // console.log(response)
            if (response.status === 200) {
                // localStorage.setItem('student', response.data.student);
                const std = response.data.student
                // console.log(stud)
                //   history.push('/home');
                // const std = localStorage.getItem('student')
                // const std = response.data.student
                // console.log(std)
                navigate('/dash', { state: { std } }) // send propertie to profile page
            }
        } catch (error) {
            alert("details not matching")
            // navigate('/studentsError')
            console.error(error);
        }
    }



    return (
        <div >
            <h1>Students Login here!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter Student mail ID'
                    onChange={handleClick}
                    name='email'
                    value={loginData.email}
                />
                <br />
                <br />
                <input
                    type='text'
                    placeholder='Enter Student Password'
                    onChange={handleClick}
                    name='password'
                    value={loginData.password}
                />
                <br />
                <br />
                <button>Login</button>
                <br />
                <br />
                <p>Dont have Account <span><Link to={`/register`}>Click here!</Link></span> for Registration</p>
            </form>
        </div>
    )

}

export default Login