import React, { useEffect, useState } from 'react'
import './CreateForm.css'
import { useDispatch } from 'react-redux'
import { cForm } from '../../Services/StudentActions/StudentActions';
import { useNavigate } from 'react-router';

function CreateForm() {
    const navigate = useNavigate() 
    const dispatch = useDispatch();

    const [isSubmit , setIsSubmit] = useState(false)
    const [students, setStudents] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        address: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setStudents({ ...students, [name]: value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(cForm(students));
        setIsSubmit(true)

        setStudents({
            name: '',
            email: '',
            phone: '',
            date: '',
            address: ''
        })
    }

    const handlclareform = () =>{
        setStudents({
            name: '',
            email: '',
            phone: '',
            date: '',
            address: ''
        })
    }

    useEffect(()=>{
        if(isSubmit){
            navigate('/DisplayData')
        }
    },[isSubmit])

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="text-white border-bottom">
                    Registration Form
                </h2>
                <label className="lb">Name:</label>
                <input placeholder='Enter your Name' name="name" id="nome" value={students.name} onChange={handleChange} type="text" className="infos" required/>

                <label className="lb">E-mail:</label>
                <input placeholder='Enter Your Email' name="email" id="email" value={students.email} onChange={handleChange} type="email" className="infos" required/>

                <label className="lb">MObile no:</label>
                <input placeholder='Enter Your 10 digit Mobile number ' name="phone" id="email" value={students.phone} onChange={handleChange} type="tel" className="infos" required/>

                <label  className="lb">Date:</label>
                <input name="date" id="data" value={students.date} onChange={handleChange} type="date" className="infos" />

                <label className="lb">Address:</label>
                <textarea placeholder='fill full address' name="address" id="data" value={students.address} onChange={handleChange} type="text" className="infos" />

                <div className='d-flex justify-content-center gap-5 mt-5'>
                    <button id="send" type="submit"> Submit</button>
                    <button id="limpar" type="reset" onClick={handlclareform}>Clear </button>
                </div>
            </form>
        </>
    )
}

export default CreateForm
