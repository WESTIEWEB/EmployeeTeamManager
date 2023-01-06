import React from 'react';

const Header = ( {selectedTeamCount, selectedTeam }) => {
  console.log(selectedTeamCount)
  return (
    <header>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 text-center">
            <h3>Team Members Allocation</h3>
            <h5>
              {selectedTeam} has {selectedTeamCount} Members
            </h5>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header