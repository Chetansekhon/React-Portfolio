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
  </div>
  <footer className="card-footer">
    <p className="card-footer-item">
      <span>
        <a href="https://github.com/Chetansekhon"><i className="fab fa-github iconSize"></i></a>
      </span>
    </p>
    <p className="card-footer-item">
      <span>
      <a href="https://www.linkedin.com/in/chetan-sekhon-a996571b8/"><i className="fab fa-linkedin-in iconSize"></i></a>
      </span>
    </p>
    <p className="card-footer-item">
      <span>
      <i className="fas fa-at iconSize"></i> Chetansekhon@gmail.com
      </span>
    </p>
    <p className="card-footer-item">
      <span>
      <i class="fas fa-phone-alt iconSize"></i>  (425)319-1721
      </span> 
    </p>
    <p className="card-footer-item">
      <span>
      <a href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:2ef2c6c2-577f-4db3-94ad-0928b7ca8f04"><i className="fas fa-file-pdf iconSize"></i></a>
      </span>
    </p>
  </footer>
</div>
        </div>
        
    )
}





export default Home;
