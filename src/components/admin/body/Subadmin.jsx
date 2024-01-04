import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_SUBMIN_PROGRESS, POST_SUBMIN_PROGRESS } from '../../../redux-saga/subadmin/action/action'

const Subadmin = () => {

  const dispatch = useDispatch()
  const [add, setadd] = useState({})
  const subadmin = useSelector((state) => state.subadminReducer.subadmin)

  const changedata = (e) => {
    setadd({ ...add, [e.target.name]: e.target.value })
    // console.log(e);
  }

  const submit = () => {
    console.log(add);
    dispatch({ type: POST_SUBMIN_PROGRESS, payload: add })
  }

  const deletedata = (id) => {
    console.log(id);
    dispatch({ type: DELETE_SUBMIN_PROGRESS, payload: id })
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
                  <label className="form-label fw-bold">Name : </label>
                  <input type='text' onChange={changedata} name='subadmin_name' className="form-control mt-2" placeholder="Subadmin Name" required />

                  <label className="form-label mt-3 fw-bold">User Name : </label>
                  <input type='text' onChange={changedata} name='username' className="form-control mt-2" placeholder="username" required />

                  <label className="form-label mt-3 fw-bold">Password : </label>
                  <input type='password' onChange={changedata} name='password' className="form-control mt-2" placeholder="*****" required />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={submit}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <div className='container py-4'>
          <h2 className='text-center fs-3 mb-3 fw-bold'>SUBADMIN LIST</h2>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">SUBADMIN NAME</th>
                <th scope="col">USER NAME</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {
                subadmin.map((val, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{val.subadmin_name}</td>
                      <td>{val.username}</td>
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

    </div>
  )
}

export default Subadmin
