import TeamMemberCard from "../Components/TeamMemberCard/TeamMemberCard"

const TeamMembers = ({employees, handleCardClick, selectedTeam }) => {
  return (
    <>
      <TeamMemberCard employees={employees} handleCardClick={handleCardClick} selectedTeam={selectedTeam} />
    </>
  )
};

export default TeamMembers;