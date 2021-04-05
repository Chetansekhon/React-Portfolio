import React from "react";
import ProjectItem from "../ProjectItem"
function About(){
    return(
       <div className="about">
           <ProjectItem 
                title="Coding Collective"  
                url="https://github.com/zhanez/Coding-collective" 
                deployedUrl="https://coding-collective.herokuapp.com/"
           ></ProjectItem>
           <ProjectItem 
                title="Feast with Friends" 
                url="https://github.com/laurenb08/feastWithFriends" 
                deployedUrl="https://feastwithfriendsproject.herokuapp.com/"
            />
           <ProjectItem
                title="Workout Tracker" 
                url="https://github.com/Chetansekhon/Workout-Tracker"
                deployedUrl="https://limitless-forest-83462.herokuapp.com/"
            />
            <ProjectItem
                title="Password Generator" 
                url="https://github.com/Am-White/ProjectUno"
                deployedUrl="https://chetansekhon.github.io/Password-Generator/"
            />
            <ProjectItem
                title="Note Taker" 
                url="https://github.com/Chetansekhon/Password-Generator"
                deployedUrl="https://note-taker-cs.herokuapp.com/notes"
            />
            <ProjectItem
                title="Budget Tracker" 
                url="https://github.com/Chetansekhon/Budget-Tracker"
                deployedUrl="https://radiant-citadel-85718.herokuapp.com/"
            />
        
       </div>
        
    )
}





export default About;
