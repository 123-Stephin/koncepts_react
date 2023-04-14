import { Link } from "react-router-dom";


function Navbar()
{
    return ( 
    <>
    `<nav className="nav">
        <Link to="/" className="home-title">Project</Link>
            <ul>
                    <CustomLink to="/home">Home Page</CustomLink>
                    <CustomLink to="/add-new">Add New</CustomLink>
            </ul>
    </nav>`
    </>
    );
}

function CustomLink({ to , children, ...props})
{
    const path = window.location.pathname

    return (
        <li className= {path === to ? "active" : ""}>
            <Link to= {to} {...props}>
                {children}
            </Link>
        </li>
    )

}


export default Navbar;