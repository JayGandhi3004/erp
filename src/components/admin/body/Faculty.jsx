import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_FACULTY_LIST_PROGRESS } from '../../../redux-saga/faculty/action/action';

const Faculty = () => {

  const dispatch = useDispatch();
  const faculty = useSelector((state) => state.facultyReducer.faculty)
  console.log(faculty);

  useEffect(() => {
    dispatch({ type: GET_FACULTY_LIST_PROGRESS })
  }, [])

  return (
    <div>
      <div className='container py-4'>
        <h2 className='text-center fs-3 mb-3 fw-bold'>FACULTY LIST</h2>
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">UserName</th>
              <th scope="col">Department</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            {
              faculty?.map((val, index) => {
                return(
                  <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val.username}</td>
                  <td>{val.department}</td>
                  <td>{val.gender}</td>
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

export default Faculty
