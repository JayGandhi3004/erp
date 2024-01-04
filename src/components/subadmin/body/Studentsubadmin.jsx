import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_STUDENT_PROGRESS, POST_STUDENT_PROGRESS } from '../../../redux-saga/student/action/action';

const Studentsubadmin = () => {

  const dispatch = useDispatch()
  const student = useSelector((state) => state.studentReducer.student)
  const [studentdata, setstudentdata] = useState({
    student_name: "",
    course: "",
    enrollment_number: JSON.stringify(Math.floor(Math.random() * 1000000000000)),
    gr_id: JSON.stringify(Math.floor(Math.random() * 10000)),
    password: "",
  })

  const changedata = (e) => {
    setstudentdata({ ...studentdata, [e.target.name]: e.target.value })
  }

  const submit = () => {
    dispatch({ type: POST_STUDENT_PROGRESS, payload: studentdata })
    console.log(studentdata);
  }

  const deletedata = (id) => {
    console.log(id);
    dispatch({ type: DELETE_STUDENT_PROGRESS, payload: id })
  }

  return (
    <div>
      <div>
        {/* Button trigger modal */}
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="m-4 btn btn-outline-success px-4">ADD</button>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Add</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className='p-2'>
                  <label className="form-label fw-bold">Student Name : </label>
                  <input type='text' onChange={changedata} name='student_name' className="form-control mt-2" placeholder="student_name" required />

                  <label className="form-label mt-3 fw-bold">Course: </label>
                  <input type='text' onChange={changedata} name='course' className="form-control mt-2" placeholder="course" required />

                  <label className="form-label mt-3 fw-bold">Password : </label>
                  <input type='password' onChange={changedata} name='password' className="form-control mt-2" placeholder="*****" required />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal" onClick={submit}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container py-4'>
        <h2 className='text-center fs-3 mb-3 fw-bold'>STUDENT LIST</h2>
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">GR_ID</th>
              <th scope="col">ENROLLMENT NO</th>
              <th scope="col">STUDENT NAME</th>
              <th scope="col">COURSE</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              student?.map((val, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{val.gr_id}</td>
                    <td>{val.enrollment_number}</td>
                    <td>{val.student_name}</td>
                    <td>{val.course}</td>
                    <td>
                      <button type="button" onClick={() => deletedata(val._id)} className="btn btn-outline-danger me-2">DELETE</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Studentsubadmin
