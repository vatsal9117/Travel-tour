const Travel = () => {
    return (
      <div className="travel-wraper">
        <div className="container">
      <div className=" continer travel-heading text-center">
        <h3>Traveling Highlights</h3>
      </div>
      <div className="travel-content text-center">
          <h3>
          Your New Traveling Idea
          </h3>
      </div>
      <div className="video-link text-center">
            <a href="https://www.youtube.com/watch?v=HODmbzOT288&list=PLNIFTA4Bjp3stwYxIB6Aokpr9bfRQYO73">
              <img src={require("./images/play-img.png")} alt="travel-highlight"></img>
            </a>
          </div>
          </div>
      </div>
    );
  };
  
  export default Travel;
  