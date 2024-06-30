import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { uForm } from '../../Services/StudentActions/StudentActions'

function EditForm() {

    const {student} = useSelector(state=>state.studreducer)
    const [singlestd ,setSingalStd] = useState(student)
    const [isSubmit , setIsSubmit] =  useState(false)
    const navigat = useNavigate()
    const dispatch = useDispatch()

    const handleChange=(e)=>{
        const {name , value} = e.target
        setSingalStd({...singlestd , [name]:value})
    }
    const handleUpadte =()=>{
        dispatch(uForm(singlestd))
        setIsSubmit(true)
    }

    const handleCancal = ()=>{
        navigat('/DisplayData')
    }

    useEffect(()=>{
        if(isSubmit){
            navigat('/DisplayData')
        }
    })

    return (
        <>
            <form className="form" onSubmit={handleUpadte}>
                <h2 className="text-white border-bottom">
                    Registration Form
                </h2>
                <label className="lb">Name:</label>
                <input placeholder='Enter your Name' name="name" id="nome" value={singlestd.name} onChange={handleChange} type="text" className="infos" />

                <label className="lb">E-mail:</label>
                <input placeholder='Enter Your Email' name="email" id="email" value={singlestd.email} onChange={handleChange} type="email" className="infos" />

                <label className="lb">MObile no:</label>
                <input placeholder='Enter Your 10 digit Mobile number ' name="phone" id="email" value={singlestd.phone} onChange={handleChange} type="tel" className="infos" />

                <label  className="lb">Date:</label>
                <input name="date" id="data" value={singlestd.date} onChange={handleChange} type="date" className="infos" />

                <label className="lb">Address:</label>
                <textarea placeholder='fill full address' name="address" id="data" value={singlestd.address} onChange={handleChange} type="text" className="infos" />

                <div className='d-flex justify-content-center gap-5 mt-5'>
                    <button id="send" type="submit"> Upadate</button>
                    <button id="limpar" type="reset" onClick={handleCancal}>Cancal </button>
                </div>
            </form>
        </>
    )
}

export default EditForm
