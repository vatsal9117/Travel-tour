const Destination = () => {
    return (  
        <div className="container-fluid destination">
            <div className="popular-destination text-center">
                <h2>Popular Destination</h2>
            </div>
            <div className="popular-destination text-center">
                <a href="#"><p>View All Destinations<i class="ms-2 bi bi-arrow-right"></i></p></a>
            </div>
            <div className="destination-cards container">
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm- 12 destination-card-1">
                        <div class="ui-card">
                            <img src={require("./images/Destination1.jpg")} className="img-fluid"></img>
                            <button className="destination-button">3 Hours</button>
                            <div class="description">
                                <h3>Western Europe</h3>
                                
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separate.</p>
                                <a href="#">View All Tours</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3  col-md-3 col-sm-12 destination-card-2">
                    <div class="ui-card">
                            <img src={require("./images/Destination2.jpg")} className="img-fluid" height={200}></img>
                            <button className="destination-button">2 Hours</button>
                            <div class="description">
                                <h3>Scandinavia</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separate.</p>
                                <a href="#">View All Tours</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm- 12 destination-card-3 mt-3">
                        <div class="card rounded-0 border-0">
                            <img src={require("./images/Destination5.jpg")}className="img-fluid"></img>
                            <button className="destination-button">5 Hours</button>
                            <div class="description">
                                <h3>Western Europe</h3>
                                
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separate.</p>
                                <a href="#">View All Tours</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-4 col-sm-12 destination-card-4 mt-3">
                    <div class="card rounded-0 border-0">
                            <img src={require("./images/Destination3.jpg")} className="img-fluid"></img>
                            <button className="destination-button">4 Hours</button>
                            <div class="description">
                                <h3>Scandinavia</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separate.</p>
                                <a href="#">View All Tours</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-4  col-md-4 col-sm-12 destination-card-5 mt-3">
                    <div class="card rounded-0 border-0">
                            <img src={require("./images/Destination4.jpg")}></img>
                            <button className="destination-button">2 Hours</button>
                            <div class="description">
                                <h3>Scandinavia</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separate.</p>
                                <a href="#">View All Tours</a>
                            </div>
                        </div>
                        
                    </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default Destination;