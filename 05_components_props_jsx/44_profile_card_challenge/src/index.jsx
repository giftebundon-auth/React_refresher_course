import React from "react";
import ReactDom from "react-dom/client";
import "./styles.css"

function App() {
    return (
        <div className="card">
            <Avatar/>
            <div className="data">
                <Intro/>
                <SkillList/>
            </div>
        </div>
    );
}
function Avatar(){
    return <img src="jonas.jpeg" alt="Jonas Schmedtmann" className="avatar" />
}

function Intro(){
    return <div>
        <h1>Jonas Schmedtmann</h1>
        <p>Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.</p>
    </div>
}
function SkillList(){
    return <div className="skill-list">
        <Skill skill="React" emoji="💪" color="#123456"/>
        <Skill skill="HTML+CSS" emoji="💪" color="orange"/>
        <Skill skill="JavaScript" emoji="💪" color="yellow"/>
        <Skill skill="Svelte" emoji="👶" color="orangered"/>
    </div>
}
function Skill(props){
    return <div className="skill" style={{backgroundColor:props.color}}>
        <span>{props.skill} </span>
        <span>{props.emoji}</span>
    </div>
}
// React v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// React before v18
// React.render(<App/>, document.getElementById("root"))
