import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  const [groupedEmployee, setGroupInfo] = useState(groupTeamMembers());

  
  console.log("employess",employees)
  console.log(groupedEmployee)

  function groupTeamMembers () {
    const teams = [];
    let teamAMembers = employees.filter((elem) => elem.teamName === "TeamA");
    let teamA = {team: "TeamA", members:teamAMembers, collapsed: selectedTeam === "TeamA"?false:true};
    teams.push(teamA);
    
    let teamBMembers = employees.filter((elem) => elem.teamName === "TeamB");
    let teamB = {team: "TeamB", members:teamBMembers, collapsed: selectedTeam === "TeamB"?false:true};
    teams.push(teamB)

    let teamCMembers = employees.filter((elem) => elem.teamName === "TeamC");
    let teamC = {team: "TeamC", members:teamCMembers, collapsed: selectedTeam === "TeamC"?false:true}
    teams.push(teamC)
  
    let teamDMembers = employees.filter((elem) => elem.teamName === "TeamD");
    let teamD = {team: "TeamD", members:teamDMembers, collapsed: selectedTeam === "TeamD"?false:true};
    teams.push(teamD);

    return teams;
  
  };

  const handleTeamClick = (e) => {
    var newGroupData = groupedEmployee.map(groupedD => groupedD.team === e.currentTarget.id?{...groupedD,collapsed:!groupedD.collapsed}:{...groupedD});

    setGroupInfo(newGroupData);
    setTeam(e.currentTarget.id);
  }

  return (
    <div className="container">
      {groupedEmployee.map(elem => 
      
      <div key={elem.team} className="card text-center mt-2" style={{cursor:"pointer"}} >
        <h4 onClick={handleTeamClick} id={ elem.team } className="card-header text-secondary bd-white">
          Team: {elem.team}
        </h4>
        <div id={"collapse_" + elem.team} className={elem.collapsed === true?"collapse":""}>
          <hr />
          {
            elem.members.length === 0? <p>no data available</p>:
            elem.members.map(el =>
              <div className="mt-2">
                <h5 className="card-title mt-2">
                  <span className="text-dark">
                    Full Name : {el.fullName}
                  </span>
                </h5>
                <p>Designation: {el.designation}</p>
              </div>
              )
          }
          
        </div>
      </div>
                          
        )}
    </div>
  )
}

export default GroupedTeamMembers;