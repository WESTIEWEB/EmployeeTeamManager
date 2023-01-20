import EmployeeCard from "../Components/EmployeeCard/EmployeeCard"

const Employee = ( {employees,handleTeamSelection, handleCardClick, selectedTeam}) => {
  // const employees = JSON.parse(localStorage.getItem("employeeList"))
  
  return (
    <>
      <EmployeeCard employees={employees} handleTeamSelection={handleTeamSelection} handleCardClick={handleCardClick} selectedTeam={selectedTeam} />
    </>
  )
};

export default Employee;