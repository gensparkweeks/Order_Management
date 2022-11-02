import React from 'react';

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                
                <div className="col-lg-12">
                    
                    <div className=" d-lg-flex flex-lg-row d-flex flex-column-reverse bg-light mt-5">
                        <div className="p-5" id="2">
                            <p className="p-green">FRUIT FRESH</p>
                            <p className="fs-4 fw-bold">Vegetable</p>
                            <p className="fs-4 fw-bold">100% Organic</p>
                            <p className="text-muted mb-4">Free Pickup and Delivery Available</p>
                            <div className="btn btn-success px-4">SHOP NOW</div>
                        </div>
                        <div id="1">
                            <img src="https://www.freepnglogos.com/uploads/vegetables-png/vegetables-about-our-philosophy-super-healthy-kids-23.png"
                                className="w-75 h-75" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Home;
