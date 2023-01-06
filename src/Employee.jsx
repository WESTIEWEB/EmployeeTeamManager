import femaleProfile from './images/femaleProfile.jpeg';
import maleProfile from './images/maleProfile.jpeg';

const Employee = ({employees,handleTeamSelection, handleCardClick, selectedTeam}) => {

  console.log(employees)
  
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelection}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {
              employees.map((elem) => 
              <div key={elem.id} id={elem.id} className={(elem.teamName === selectedTeam? "card m-2 stabdout" : "card m-2")} style={{ cursor: "pointer"}} onClick={handleCardClick}>
                  {
                   ( elem.gender === "male"?
                    <img src={maleProfile} className="card-img-top"/> : 
                    <img src={femaleProfile} className="card-img-top"/>)
                  }
                    <div className="card-body">
                      <h5 className="card-title">Full Name: {elem.fullName}</h5>
                      <p className="card-text">Designation :<b>{elem.designation}</b></p>
                    </div>
              </div>)
            }
          </div>
        </div>
      </div>
    </main>
  )
};

export default Employee;