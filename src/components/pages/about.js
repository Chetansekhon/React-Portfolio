import React from "react";
import ProjectItem from "../ProjectItem"
import coding from "../../images/Coding.png"
import feast from  "../../images/Feast.png"
import workout from  "../../images/Fitness.png"
import password from  "../../images/Password.png"
import note from  "../../images/Note.png"
import budget from  "../../images/Budget.png"
function About(){
    return(
       <div className="about">
           <ProjectItem 
                title="Coding Collective"  
                url="https://github.com/zhanez/Coding-collective" 
                deployedUrl="https://coding-collective.herokuapp.com/"
                imageUrl ={coding}
           ></ProjectItem>
           <ProjectItem 
                title="Feast with Friends" 
                url="https://github.com/laurenb08/feastWithFriends" 
                deployedUrl="https://feastwithfriendsproject.herokuapp.com/"
                imageUrl ={feast}
            />
           <ProjectItem
                title="Workout Tracker" 
                url="https://github.com/Chetansekhon/Workout-Tracker"
                deployedUrl="https://limitless-forest-83462.herokuapp.com/"
                imageUrl ={workout}
            />
            <ProjectItem
                title="Password Generator" 
                url="https://github.com/Am-White/ProjectUno"
                deployedUrl="https://chetansekhon.github.io/Password-Generator/"
                imageUrl ={password}
            />
            <ProjectItem
                title="Note Taker" 
                url="https://github.com/Chetansekhon/Password-Generator"
                deployedUrl="https://note-taker-cs.herokuapp.com/notes"
                imageUrl ={note}
            />
            <ProjectItem
                title="Budget Tracker" 
                url="https://github.com/Chetansekhon/Budget-Tracker"
                deployedUrl="https://radiant-citadel-85718.herokuapp.com/"
                imageUrl ={budget}
            />
        
       </div>
        
    )
}





export default About;
