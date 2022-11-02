import { Link } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa'

const Header = () => {
    return (
        <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid pe-lg-2 p-0">
                        <a className="navbar-brand fw-bold fs-3" href="#">ORDERS</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link pe-3 me-4 fw-bold active" aria-current="page" href="/">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pe-3 me-4 fw-bold" href="/orderadd/1">ORDERs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pe-3 me-4 fw-bold" href="/productlist">PRODUCTs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pe-3 me-4 fw-bold" href="/productpick">SELECT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pe-3 me-4 fw-bold" href="/ordercheckout">CHECKOUT</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav icons ms-auto mb-2 mb-lg-0">
                                
                                <li className=" nav-item pe-3">
                                    <a href="" className="fas fa-shopping-bag">
                                        <FaShoppingCart style={{color: 'black', fontSize: '20px'}}/>
                                        <span className="num rounded-circle">3</span>
                                    </a>
                                </li>
                                <li className=" nav-item">
                                    <span className="">items:</span>
                                    <span className="fw-bold">$150.00</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
    );
}

export default Header;
