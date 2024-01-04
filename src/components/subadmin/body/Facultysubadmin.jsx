import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_FACULTY_PROGRESS, POST_FACULTY_PROGRESS, UPDATE_FACULTY_PROGRESS } from '../../../redux-saga/faculty/action/action'

const Facultysubadmin = () => {
  const dispatch = useDispatch()
  const faculty = useSelector((state) => state.facultyReducer.faculty)
  const [add, setadd] = useState({})
  const [edit, setedit] = useState({})

  const changedata = (e) => {
    setadd({ ...add, [e.target.name]: e.target.value })
    // console.log(e);
  }

  const submit = () => {
    dispatch({ type: POST_FACULTY_PROGRESS, payload: add });
    setadd({
      faculty_name: "",
      department: "",
      username: "",
      password: "",
      gender: ""
    })
  }

  const deletedata = (id) => {
    console.log(id);
    dispatch({ type: DELETE_FACULTY_PROGRESS, payload: id })

  }

  const editdata = (value) => {
    setedit(value)
  }

  const update = (e) => {
    setedit({ ...edit, [e.target.name]: e.target.value })
  }


  const updatedata = () => {
    console.log(edit);
    dispatch({ type: UPDATE_FACULTY_PROGRESS, payload: edit })

  }

  // console.log(faculty);

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
                  <label className="form-label fw-bold">Name : </label>
                  <input type='text' onChange={changedata} name='faculty_name' className="form-control mt-2" placeholder="name" required />

                  <label className="form-label mt-3 fw-bold">User Name : </label>
                  <input type='text' onChange={changedata} name='username' className="form-control mt-2" placeholder="username" required />

                  <label className="form-label mt-3 fw-bold">Department : </label>
                  <input type='text' onChange={changedata} name='department' className="form-control mt-2" placeholder="Department" required />

                  <label className="form-label mt-3 fw-bold">Password : </label>
                  <input type='password' onChange={changedata} name='password' className="form-control mt-2" placeholder="*****" required />

                  <div>
                    <label className="form-label mt-3 fw-bold">Gender : </label>
                    <div className="form-check">
                      <input className="form-check-input mt-2" onChange={changedata} name="gender" value="male" id="flexRadioDefault1" type="radio" />
                      <label className="form-check-label">
                        Male
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input mt-2" onChange={changedata} type="radio" name="gender" value="female" id="flexRadioDefault2" />
                      <label className="form-check-label" >
                        Female
                      </label>
                    </div>
                  </div>
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
        <h2 className='text-center fs-3 mb-3 fw-bold'>FACULTY LIST</h2>
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">UserName</th>
              <th scope="col">Department</th>
              <th scope="col">Gender</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              faculty?.map((val, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{val.username}</td>
                    <td>{val.department}</td>
                    <td>{val.gender}</td>
                    <td>
                      <button type="button" onClick={() => deletedata(val._id)} className="btn btn-outline-danger me-2">DELETE</button>
                      <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btn btn-outline-success" onClick={() => editdata(val)}>UPDATE</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

      {/* ====================update data================== */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Update user</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='p-2'>
                <label className="form-label fw-bold">Name : </label>
                <input type='text' value={edit.faculty_name} onChange={update} name='faculty_name' className="form-control mt-2" placeholder="name" required />

                <label className="form-label mt-3 fw-bold">User Name : </label>
                <input type='text' value={edit.username} onChange={update} name='username' className="form-control mt-2" placeholder="username" required />

                <label className="form-label mt-3 fw-bold">Department : </label>
                <input type='text' value={edit.department} onChange={update} name='department' className="form-control mt-2" placeholder="Department" required />

                <label className="form-label mt-3 fw-bold">Password : </label>
                <input type='password' value={edit.password} onChange={update} name='password' className="form-control mt-2" placeholder="*****" required />

                <div>
                  <label className="form-label mt-3 fw-bold">Gender : </label>
                  <div className="form-check">
                    <input className="form-check-input mt-2" onChange={update} name="gender" value="male" id="flexRadioDefault1" type="radio" />
                    <label className="form-check-label">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input mt-2" onChange={update} type="radio" name="gender" value="female" id="flexRadioDefault2" />
                    <label className="form-check-label" >
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={updatedata} data-bs-dismiss="modal" type="button" className="btn btn-outline-success">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facultysubadmin
