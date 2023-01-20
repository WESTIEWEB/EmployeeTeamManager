import React from 'react';
import HeaderCard from '../Components/HeaderCard/HeaderCard'

const Header = ( {selectedTeamCount, selectedTeam }) => {
  
  return (
    <HeaderCard selectedTeamCount={selectedTeamCount} selectedTeam={selectedTeam} />
  )
}

export default Header