import { TeamDropDown } from "../TeamDropdownCard/TeamDropdownCard";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard"

const Employee = ( {employees,handleTeamSelection, handleCardClick, selectedTeam}) => {
  // const employees = JSON.parse(localStorage.getItem("employeeList"))
  
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <TeamDropDown handleTeamSelection={handleTeamSelection} selectedTeam={selectedTeam} />
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <TeamMemberCard employees={employees} handleCardClick={handleCardClick} selectedTeam={selectedTeam} />
        </div>
      </div>
    </main>
  )
};

export default Employee;