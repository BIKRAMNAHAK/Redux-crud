import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import './displaydata.css'
import { useNavigate } from 'react-router'
import { fdelete, fedit } from '../../Services/StudentActions/StudentActions'
import Lodding from '../Lodding/Lodding'

function DisplayData() {
    const { allStudents , lodding } = useSelector(state => state.studreducer)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlnavigate = () => {
        navigate('/')
    }

    const handleEdit = (id) => {
        dispatch(fedit(id))
        navigate('/edit')
    }

    const handleDelete =(id)=>{
        const isSubmit = window.confirm("Are you sure you want to delete this student?");
        if(isSubmit){
            dispatch(fdelete(id))
        }
       else{
        navigate('/DisplayData')
       }
    }

    return (
        <>
        {
            lodding 
            ? 
            <Lodding /> 
            :
            <Container fluid>
            <Row>

                <div className='border border-worning bg-info '>

                    <div className="d-flex  align-items-center mb-2 ">
                        <div className="col-7">
                            <div className='text-end'>
                                <h1 className="text-white">Student Details</h1>
                            </div>
                        </div>

                        <div className="col-5">
                            <div className='d-flex justify-content-end'>
                                <button type="button" className="button" onClick={handlnavigate}>
                                    <span className="button__text">Add Item</span>
                                    <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <table className="table table-success table-striped">
                    <thead>
                        <tr className='bg-worning'>
                            <th className="col border border-dark text-center">ID</th>
                            <th className="col border border-dark text-center">Name</th>
                            <th className="col border border-dark text-center">Email</th>
                            <th className="col border border-dark text-center">Phone</th>
                            <th className="col border border-dark text-center">Date</th>
                            <th className="col border border-dark text-center">Address</th>
                            <th className="col border border-dark text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allStudents.map((stud) => {
                                return (
                                    <tr>
                                        <td className="col border border-dark text-center">{stud.id}</td>
                                        <td className="col border border-dark text-center">{stud.name}</td>
                                        <td className="col border border-dark text-center">{stud.email}</td>
                                        <td className="col border border-dark text-center">{stud.phone}</td>
                                        <td className="col border border-dark text-center">{stud.date}</td>
                                        <td className="col border border-dark text-center">{stud.address}</td>
                                        <td className="col border border-dark text-center d-flex gap-4 justify-content-end">
                                            <button class="edit-button" onClick={() => handleEdit(stud.id)}>
                                                <svg class="edit-svgIcon" viewBox="0 0 512 512">
                                                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                                </svg>
                                            </button>

                                            <button class="delete-button"  onClick={() => handleDelete(stud.id)} >
                                                <svg class="delete-svgIcon" viewBox="0 0 448 512">
                                                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                                                </svg>
                                            </button>

                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </Row>
        </Container>

        }
           
        </>
    )
}

export default DisplayData
