import { useState } from "react";
import GroupedTeamCard from "../Components/GroupedTeamMemberCard/GroupedTeamCard"

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {

  return (
    <GroupedTeamCard employees={employees} selectedTeam={selectedTeam} setTeam={setTeam} />
  )
}

export default GroupedTeamMembers;