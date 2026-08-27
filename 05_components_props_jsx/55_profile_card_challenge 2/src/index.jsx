import React from "react";
import ReactDom from "react-dom/client";
import "./styles.css"
const skills = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA"
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "#EFD81D"
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCAF"
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33"
    },
    {
        skill: "React",
        level: "advanced",
        color: "#60DAFB"
    },
    {
        skill: "Svelte",
        level: "beginner",
        color: "#FF3B00"
    }
];

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                <SkillList />
            </div>
        </div>
    );
}
function Avatar() {
    return <img src="jonas.jpeg" alt="Jonas Schmedtmann" className="avatar" />
}

function Intro() {
    return <div>
        <h1>Jonas Schmedtmann</h1>
        <p>Full-stack web developer and teacher at Udemy. When not coding or
            preparing a course, I like to play board games, to cook (and eat), or to
            just enjoy the Portuguese sun at the beach.</p>
    </div>
}
function SkillList() {
    const skillLists = skills
    return <ul className="skill-list">
        {skillLists.map(skill=> (<Skill skill={skill.skill} color ={skill.color} level={skill.level}  />))}
    </ul>
}
function Skill({skill, color, level}) {
    return <li className="skill" style={{ backgroundColor:color }}>
        <span>{skill} </span>
        <span>
            {level === "beginner" && "👶"}
            {level === "intermediate" && "👍"}
            {level === "advanced" && "💪"}
            </span>
    </li>
}
console.log(true && "Some string")
console.log(false && "Some string") // short circuiting
// React v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// React before v18
// React.render(<App/>, document.getElementById("root"))
