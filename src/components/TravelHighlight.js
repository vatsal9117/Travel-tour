const Travel = () => {
    return (
      <div className=" container-fluid traveling">
        <div>
          <div className=" traveling-highlight-header text-center ">
            <div className="traveling-h2">
              <h2 className="">Traveling Highlights</h2>
            </div>
  
            <h3>Your New Traveling Idea</h3>
          </div>
          <div className="video-link text-center">
            <a href="https://www.youtube.com/watch?v=HODmbzOT288&list=PLNIFTA4Bjp3stwYxIB6Aokpr9bfRQYO73">
              <img src={require("./images/play-img.png")}></img>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Travel;
  