import React from "react";
import Background from "../../images/forest.jpg"

function Home(){
    return(
        <div style={{ backgroundImage: `url(${Background})`}} className="home">
            <div className="card">
  <div className="card-content">
    <p className="title">
      My name is Chetan Sekhon, and I am a Full Stack Developer from Seattle, WA. Please take some time to explore my portfolio and feel free to reach out through Linkedin or my email.
    </p>
    <p className="subtitle">
      Jeff Atwood
    </p>
  </div>
  <footer className="card-footer">
    <p className="card-footer-item">
      <span>
        View on <a href="https://github.com/Chetansekhon">Github</a>
      </span>
    </p>
    <p className="card-footer-item">
      <span>
        View on <a href="https://www.linkedin.com/in/chetan-sekhon-a996571b8/">Linkedin</a>
      </span>
    </p>
  </footer>
</div>
        </div>
        
    )
}





export default Home;
