import React from 'react';

const Header = ( {selectedTeamCount, selectedTeam }) => {
  
  return (
    <header>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-8 justify-content-center text-center">
            <h3>Team Members Allocation</h3>
            {selectedTeam === null? <h5></h5> :<><h5>
              {selectedTeam} has {selectedTeamCount} {selectedTeamCount===1?"member":"members"}
            </h5></>}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header