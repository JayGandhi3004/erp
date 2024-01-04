import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/common/Sidebar';
import { admin, faculty, subadmin } from './components/common/data/Sidebardata';
import Subadmin from './components/admin/body/Subadmin';
import Faculty from './components/admin/body/Faculty';
import Student from './components/admin/body/Student';
import Header from './components/common/Header';
import Facultysubadmin from './components/subadmin/body/Facultysubadmin';
import Studentsubadmin from './components/subadmin/body/Studentsubadmin';
import Studentfaculty from './components/faculty/body/Studentfaculty';

function App() {

  let role = "admin"
  if (role === "admin") {
    return (
      <>
        <Header />
        <div className='row'>
          <div className='col-2'>
            <Sidebar data={admin} />
          </div>
          <div className='col-10'>
            <Routes>
              <Route path='/subadmin' element={<Subadmin />} />
              <Route path='/faculty' element={<Faculty />} />
              <Route path='/student' element={<Student />} />
            </Routes>
          </div>
        </div>
      </>
    )
  } else if (role === "subadmin") {
    return (
      <>
        <Header />
        <div className='row'>
          <div className='col-2'>
            <Sidebar data={subadmin} />
          </div>
          <div className='col-10'>
            <Routes>
              <Route path='/faculty' element={<Facultysubadmin />} />
              <Route path='/student' element={<Studentsubadmin />} />
            </Routes>
          </div>
        </div>
      </>
    )
  } else if (role === "faculty") {
    return (
      <>
        <Header />
        <div className='row'>
          <div className='col-2'>
            <Sidebar data={faculty} />
          </div>
          <div className='col-10'>
            <Routes>
              <Route path='/student' element={<Studentfaculty />} />
            </Routes>
          </div>
        </div>
      </>
    )
  }
}

export default App;
