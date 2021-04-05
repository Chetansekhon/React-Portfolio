import React from "react";

function ProjectItem({ title, children, url, deployedUrl, image }){
    return(
        <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <a href={deployedUrl} ><img src="https://bulma.io/images/placeholders/1280x960.png" alt="{Placeholder image}"/>{image}</a>
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
         View project
     </a>
    </div>
  </div>
</div>
        
    )
}





export default ProjectItem;