import React, {useState } from 'react';

const TeamMembers = ()=> {
    const [teams, setTeams] = useState(Users)
    console.log(teams)
    return(
        <>
        <h1>{teams.map(teams=>
        teams.name)}</h1>
        </>
        <div className="userList">
<h1> List of Users </h1>
<p>Name: ${user.name}
Email: ${user.email}
Role: ${user.role}</p>
</div>
    );
}

export default TeamMembers