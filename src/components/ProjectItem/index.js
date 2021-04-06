import React from "react";

function ProjectItem({ title, children, url, deployedUrl, imageUrl }){
    return(
        <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <a href={deployedUrl} ><img src={imageUrl} alt="Project Image" ></img></a>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">{title}</p>
      </div>
    </div>

    <div className="content">
      {children}
      <br/>
     <a href={url} target="_blank"> 
         View Project on Github
     </a>
    </div>
  </div>
</div>
        
    )
}





export default ProjectItem;