import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Global from './Global'
import Loading from './Loading'
import { useSearchParams } from 'react-router-dom';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState(false)

    const [searchParams, setSerachParams] = useSearchParams();
    const filter = searchParams.get("filter") ?? "";

    const {url, uploadPath} = Global;

    const handleFilter = (e)=>{
        setSerachParams({
            filter: e.target.value
        })
        console.log(filter)
    }

    const getProducts = () => {
        axios.get(url + 'product')
            .then(res => {
                setProducts(res.data)
                setStatus(true)
            })
    }

    useEffect(getProducts, [])

    if (products.length > 0){
        return (
            <div className='container'>
                <h1>Our products</h1>
                
                {/* <!-- Search form --> */}
                <div class="md-form mt-0 col-4">
                    <input className="form-control" 
                        type="text" 
                        aria-label="Search" 
                        placeholder='filter'
                        onChange={handleFilter}  
                        value={filter} 
                    />
                </div>
                {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> */}
    
                <div className="container bg-white">

                    {
                        products.map(product =>
                            <div className="row" key={product.id}>

                                <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                                    <div className="product"> <img src="https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                            <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                                            <li className="icon mx-3"><span className="far fa-heart"></span></li>
                                            <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                                        </ul>
                                    </div>
                                    <div className="tag bg-red">sale</div>
                                    <div className="title pt-4 pb-1">Winter Sweater</div>
                                    <div className="d-flex align-content-center justify-content-center"> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> </div>
                                    <div className="price">$ 60.0</div>
                                </div>

                                <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                                    <div className="product"> <img src="https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                            <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                                            <li className="icon mx-3"><span className="far fa-heart"></span></li>
                                            <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                                        </ul>
                                    </div>
                                    <div className="tag bg-black">out of stock</div>
                                    <div className="title pt-4 pb-1">Denim Dresses</div>
                                    <div className="d-flex align-content-center justify-content-center"> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> </div>
                                    <div className="price">$ 55.0</div>
                                </div>

                                <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                                    <div className="product"> <img src="https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                            <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                                            <li className="icon mx-3"><span className="far fa-heart"></span></li>
                                            <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                                        </ul>
                                    </div>
                                    <div className="tag bg-green">new</div>
                                    <div className="title pt-4 pb-1"> Empire Waist Dresses</div>
                                    <div className="d-flex align-content-center justify-content-center"> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> </div>
                                    <div className="price">$ 70.0</div>
                                </div>

                                <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                                    <div className="product"> <img src="https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                            <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                                            <li className="icon mx-3"><span className="far fa-heart"></span></li>
                                            <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                                        </ul>
                                    </div>
                                    <div className="title pt-4 pb-1">Pinafore Dresses</div>
                                    <div className="d-flex align-content-center justify-content-center"> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> </div>
                                    <div className="price">$ 60.0</div>
                                </div>
                            </div>

                        )
                    }
                
                </div>
    
            </div>
        );

    }else if(!status){
        return(
            <div>
                <Loading />
            </div>
        )
    }else{
        return(
            <>
                <div className='altura'></div>
                    <h3 className='text-center'>There is no product to show...</h3>
                <div className='altura'></div>
            </>
            
        )
    }
    
}

export default ProductList;
