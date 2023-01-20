import { TeamDropDown } from "./TeamDropDown";
import femaleProfile from './images/femaleProfile.jpeg';
import maleProfile from './images/maleProfile.jpeg';
import TeamMembers from "./TeamMembers"

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
          <TeamMembers employees={employees} handleCardClick={handleCardClick} selectedTeam={selectedTeam} />
        </div>
      </div>
    </main>
  )
};

export default Employee;