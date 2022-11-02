import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="http://localhost:3000/"><strong>ORDER</strong> - Management</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">

                    <div>
                        <Link to='/orderadd/1'>Orders</Link>
                    </div>
                    <span> -- </span>
                    <div>
                        <Link to='/productlist'>Products</Link>
                    </div>
                    <span> -- </span>
                    <div>
                        <Link to='/productpick'>Select</Link>
                    </div>

                    <ul className="navbar-nav me-auto">
                        
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Search" />
                        <button className="btn btn-primary" type="button">Search</button>
                    </form>
                </div>
            </div>
            </nav>
    );
}

export default Header;
