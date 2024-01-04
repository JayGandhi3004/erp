import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className="navbar shadow p-2 bg-body-tertiary" style={{zIndex:999}}>
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex">
                        <button className="btn btn-outline-success" type="button">Sign Out</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Header
