import React from 'react';
import './App.css'
import Header from './Header';
import Footer from './Footer';
import Employee from './Employee';
import NotFound from "./NotFound";
import { Route, Routes, BrowserRouter as Router} from "react-router-dom";
import GroupedTeamMembers from "./GroupedTeamMembers";
import Nav from "./Nav"

export default function App() {
    const [selectedTeam, setTeam] = React.useState(JSON.parse(localStorage.getItem("selectedItm")));
  const [employees, setEmployee] = React.useState([{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }]);

  function handleTeamSelection(e) {
    e.preventDefault();
    setTeam(e.target.value)
    
  }
  
  function handleCardClick(e) {
    
    const transformedEmployees = employees.map((empy) => empy.id === parseInt(e.currentTarget.id) ? (empy.teamName === selectedTeam)?{...empy, teamName: ""}:{...empy, teamName: selectedTeam}:{...empy});

    setEmployee(transformedEmployees);
    
  }

  React.useEffect(()=> {
    localStorage.setItem("employeeList",JSON.stringify(employees));
    localStorage.setItem("selectedItm",JSON.stringify(selectedTeam))
  },[employees])
 
  
  return (
   
      <>
        <Router>
        <Nav />
        <Header selectedTeam={selectedTeam} selectedTeamCount={employees.filter(elem=>(elem.teamName===selectedTeam)).length} />
        <Routes>
          <Route path="/" element={<Employee employees={employees} handleTeamSelection={handleTeamSelection} handleCardClick={handleCardClick} selectedTeam={selectedTeam} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers employees={employees} selectedTeam={selectedTeam} setTeam={setTeam} />} />
  
        </Routes>
        <Footer />
      </Router>
      </>
  
  )
}
