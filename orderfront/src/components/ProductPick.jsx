import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FaStar} from 'react-icons/fa'
import Global from './Global'
import Loading from './Loading'
import empty from '../statics/images/empty.png'
import { useSearchParams } from 'react-router-dom';

const ProductPick = () => {

    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState(false)

    const {url, uploadPath} = Global;

    const [searchParams, setSerachParams] = useSearchParams();
    const filter = searchParams.get("filter") ?? "";

    const handleFilter = (e)=>{
        setSerachParams({
            filter: e.target.value
        })
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

        var productsFiltered = 
            products.filter(product =>{
                if (!filter) {
                    return true;
                }else{
                    return product.product.toLowerCase().includes(filter.toLowerCase());
                }
            })

        return (
            <div className='container'>
                <h1>Our products</h1>
                {/* <!-- Search form --> */}
                <div className="md-form mt-0 col-4">
                    <input className="form-control" 
                        type="text"   
                        placeholder='filter'
                        onChange={handleFilter}  
                        value={filter} 
                    />
                </div>
                
                <section className='productpick'>
                    <div className="container py-5">
    
                    {
                        productsFiltered.map(product =>

                            <div className="row justify-content-center mb-3" key={product.id}>
                                <div className="col-md-12 col-xl-10">
                                    <div className="card shadow-0 border rounded-3">
                                        <div className="card-body">
        
                                            <div className="row">
                                                <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                                    <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                                    
                                                    {
                                                        product.upload !== null ?
                                                            <img src={uploadPath + product.upload}
                                                            className="w-100" alt={product.upload}/>
                                                        :
                                                            <img src={empty}
                                                            className="w-100" alt='Empty'/>
                                                    }
                                                    
                                                    <a href="#!">
                                                        <div className="hover-overlay">
                                                            <div className="mask" ></div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
        
                                            <div className="col-md-6 col-lg-6 col-xl-6">
                                                <h5>{product.product}</h5>
                                                <div className="d-flex flex-row">
                                                    <div className="text-danger mb-1 me-2">
                                                        <FaStar style={{color: '#DC4C64', fontSize: '20px'}}/>
                                                        <FaStar style={{color: '#DC4C64', fontSize: '20px'}}/>
                                                        <FaStar style={{color: '#DC4C64', fontSize: '20px'}}/>
                                                        <FaStar style={{color: '#DC4C64', fontSize: '20px'}}/>
                                                    </div>
                                                    <span>{product.available}</span>
                                                </div>
                                                <div className="mt-1 mb-0 text-muted small text-start">
                                                    <span>Best products</span>
                                                    <span className="text-primary"> • </span>
                                                    <span>Best prices</span>
                                                </div>
                                                <div className="mb-2 text-muted small text-start">
                                                    <span>Unique delivery</span>
                                                    <span className="text-primary"> • </span>
                                                    <span>Best quality</span>
                                                </div>
                                                <p className="text-truncate mb-4 mb-md-0">
                                                    {product.product}
                                                </p>
                                            </div>
                                            
                                            <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                                <div className="d-flex flex-row align-items-center mb-1">
                                                    <h4 className="mb-1 me-1">${product.price}</h4>
                                                    <span className="text-danger"><s>${product.price + 8}</s></span>
                                                </div>
                                                <h6 className="text-success">Free shipping</h6>
                                                <div className="d-flex flex-column mt-4">
                                                    <button className="btn btn-primary btn-sm" type="button">Details</button>
                                                    <button className="btn btn-outline-primary btn-sm mt-2" type="button">
                                                        Add to wishlist
                                                    </button>
                                                </div>
                                            </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
    
                    </div>
                </section>
    
                
    
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

export default ProductPick;
