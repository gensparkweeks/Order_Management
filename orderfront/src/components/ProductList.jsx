import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Global from './Global'
import Loading from './Loading'

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState(false)

    const {url, uploadPath} = Global;

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
                    <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                </div>
                {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> */}
    
                <div class="container bg-white">

                    {
                        products.map(product =>
                            <div class="row" key={product.id}>

                                <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                                    <div class="product"> <img src="https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                        <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                                            <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
                                            <li class="icon mx-3"><span class="far fa-heart"></span></li>
                                            <li class="icon"><span class="fas fa-shopping-bag"></span></li>
                                        </ul>
                                    </div>
                                    <div class="tag bg-red">sale</div>
                                    <div class="title pt-4 pb-1">Winter Sweater</div>
                                    <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
                                    <div class="price">$ 60.0</div>
                                </div>

                                <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                                    <div class="product"> <img src="https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                        <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                                            <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
                                            <li class="icon mx-3"><span class="far fa-heart"></span></li>
                                            <li class="icon"><span class="fas fa-shopping-bag"></span></li>
                                        </ul>
                                    </div>
                                    <div class="tag bg-black">out of stock</div>
                                    <div class="title pt-4 pb-1">Denim Dresses</div>
                                    <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
                                    <div class="price">$ 55.0</div>
                                </div>

                                <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                                    <div class="product"> <img src="https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                        <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                                            <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
                                            <li class="icon mx-3"><span class="far fa-heart"></span></li>
                                            <li class="icon"><span class="fas fa-shopping-bag"></span></li>
                                        </ul>
                                    </div>
                                    <div class="tag bg-green">new</div>
                                    <div class="title pt-4 pb-1"> Empire Waist Dresses</div>
                                    <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
                                    <div class="price">$ 70.0</div>
                                </div>

                                <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                                    <div class="product"> <img src="https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                        <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                                            <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
                                            <li class="icon mx-3"><span class="far fa-heart"></span></li>
                                            <li class="icon"><span class="fas fa-shopping-bag"></span></li>
                                        </ul>
                                    </div>
                                    <div class="title pt-4 pb-1">Pinafore Dresses</div>
                                    <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
                                    <div class="price">$ 60.0</div>
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
