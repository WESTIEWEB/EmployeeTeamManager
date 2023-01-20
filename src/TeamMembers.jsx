import TeamMemberCard from "./TeamMemberCard"
import femaleProfile from './images/femaleProfile.jpeg';
import maleProfile from './images/maleProfile.jpeg';

const TeamMembers = ({employees, handleCardClick, selectedTeam }) => {
  return (
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
              </div>
                 )
            }
    </div>
  )
};

export default TeamMembers;