import React, { useEffect } from 'react'
import { GET_STUDENT_LIST_PROGRESS } from '../../../redux-saga/student/action/action';
import { useDispatch, useSelector } from 'react-redux';

const Student = () => {

  const dispatch = useDispatch();
  const student = useSelector((state) => state.studentReducer.student)
  console.log(student);

  useEffect(() => {
    dispatch({ type: GET_STUDENT_LIST_PROGRESS })
  }, [])

  return (
    <div>
      <div className='container py-4'>
        <h2 className='text-center fs-3 mb-3 fw-bold'>STUDENT LIST</h2>
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">GR_ID</th>
              <th scope="col">StudentName</th>
              <th scope="col">Course</th>
            </tr>
          </thead>
          <tbody>
            {
              student.map((val, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{val.gr_id}</td>
                    <td>{val.student_name}</td>
                    <td>{val.course}</td>
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

export default Student
