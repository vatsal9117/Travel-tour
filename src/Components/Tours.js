const Tours = () => {
    return ( 
        <div className="container popular-tour-wraper">
            <div className="popular-tour-heading text-center">
                <h3>Popular Tours</h3>
            </div>
            <div className="popular-tour-content text-center">
               <a href="#"><p>View All Popular Tours<i class="ms-2 bi bi-arrow-right"></i></p></a>
            </div>
            <div className="row popular-tour-cards">
                <div className="col-lg-4 col-md-12 col-sm-12 mt-5">
                    <div class="p-card">
                        <div className="card-upper">
                            <img src={require("./images/popular-tour1.jpg")}></img>
                        </div>
                        <div className="card-body">
                            <div className="bestseller">
                                <label disabled>Best seller</label>
                            </div>
                            <div className="card-content">
                               <div className="row">
                                   <div className="col-1">
                                        <i class="bi bi-lightning-fill"></i>
                                   </div>
                                   <div className="col-11">
                                     <h4>Enquiry Form Only - Paris - 6 Days</h4>
                                   </div>
                               </div>
                            </div>
                            <div className="card-service">
                                <div className="row">
                                    <div className="col-lg-8 col-md-9 col-sm-9">
                                        <p><i class="bi bi-clock-history me-2"></i>7 Days</p> 
                                        <span class="bi bi-star checked me-1"></span>
                                        <span class="bi bi-star checked me-1"></span>
                                        <span class="bi bi-star checked me-1"></span>
                                        <span class="bi bi-star me-1"></span>
                                        <span class="bi bi-star me-1"><span className="review">(1 review)</span></span>
                                    </div>
                                    <div className="col-lg-4 col-md-3 col-sm-3">
                                        <p><strike>$4,300</strike><br></br><big>$3,500</big></p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12  mt-5">
                <div class="p-card">
                        <div className="card-upper">
                            <img src={require("./images/popular-tour2.jpg")}></img>
                        </div>
                        <div className="card-body">
                            <div className="bestseller">
                                <label disabled>Best seller</label>
                            </div>
                            <div className="card-content">
                               <div className="row">
                                   <div className="col-1">
                                        <i class="bi bi-lightning-fill"></i>
                                   </div>
                                   <div className="col-11">
                                     <h4>Enquiry Form Only - Paris - 6 Days</h4>
                                   </div>
                               </div>
                            </div>
                            <div className="card-service">
                                <div className="row">
                                    <div className="col-lg-8 col-md-9 col-sm-9">
                                        <p><i class="bi bi-clock-history me-2"></i>5 Days</p> 
                                        <span class="bi bi-star checked me-1"></span>
                                        <span class="bi bi-star checked me-1"></span>
                                        <span class="bi bi-star checked me-1"></span>
                                        <span class="bi bi-star me-1"></span>
                                        <span class="bi bi-star me-1"><span className="review">(2 review)</span></span>
                                    </div>
                                    <div className="col-lg-4 col-md-3 col-sm-3">
                                        <p><strike>$3,700</strike><br></br><big>$2,000</big></p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mt-5">
                <div class="p-card">
                        <div className="card-upper">
                            <img src={require("./images/popular-tour2.jpg")}></img>
                        </div>
                        <div className="card-body third">
                            <div className="bestseller">
                                <label disabled>Best  seller</label>
                            </div>
                            <div className="card-content">
                               <div className="row">
                                   <div className="col-1">
                                        <i class="bi bi-lightning-fill"></i>
                                   </div>
                                   <div className="col-11">
                                     <h4>Enquiry Form Only - Paris - 6 Days</h4>
                                   </div>
                               </div>
                            </div>
                            <div className="card-service">
                                <div className="row">
                                    <div className="col-lg-8 col-md-9 col-sm-9">
                                        <p><i class="bi bi-clock-history me-2"></i>7 Days</p> 
                                        <span class="bi bi-star checked me-1"></span>
                                        <span class="bi bi-star checked me-1"></span>
                                        <span class="bi bi-star checked me-1"></span>
                                        <span class="bi bi-star me-1"></span>
                                        <span class="bi bi-star me-1"><span className="review">(1 review)</span></span>
                                    </div>
                                    <div className="col-lg-4 col-md-3 col-sm-3">
                                        <p><strike>$4,300</strike><br></br><big>$3,500</big></p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <div className="container discount text-center mt-5">
            <div className="row discount-row">
                <div className="col-lg-6 col-md-6 col-sm-12 text-center discount-content">
                    <h3 className="mt-5">Enjoy Summer Deals</h3>
                    <h2 className="mt-2">Up to 40% Discount!</h2>
                    <button className="mt-3">Learn More</button><br></br>
                    <img src={require("./images/discount.png")} className="mt-3"></img>
                    <br></br><small><sub>*Terms applied</sub></small>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 discount-img">
                    
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Tours;