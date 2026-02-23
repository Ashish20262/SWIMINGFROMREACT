import { NavLink } from "react-router-dom"

const Header = () => {
    return (

        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
                    <div className="container">

                        <NavLink className="navbar-brand fw-bold fs-4 d-flex align-items-center" to="/">
                            🏊‍♂️ SwimZone
                        </NavLink>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/"> Home
                                    </NavLink>
                                </li>

                                {/* <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li> */}
                                 <li className="nav-item">
                                    <NavLink className="nav-link" to="/swimming-form">Swimming Form</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className=" btn btn-danger text-white ms-lg-3 px-3" to="/Reagistation">Reagistation </NavLink>
                                </li>
                                 <li className="nav-item">
                                    <NavLink className=" btn btn-primary text-white ms-lg-3 px-3" to="/login">Login </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header