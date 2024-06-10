let mockTeamDetails = [
    {
        team_name: "PAI Engineering",
        team_id: "1",
        supervisor: "Musaib",
        supervisor_phone: "919541483162",
        supervisor_id: "919541483162",
        supervisor_email: "musaib@pai.ai"
    },
    {
        team_name: "PAI Product Management",
        team_id: "2",
        supervisor: "Prakhar",
        supervisor_phone: "919541483163",
        supervisor_id: "919541483163",
        supervisor_email: "prakhar@pai.ai"
    },
    
]

let mockUserDetails = [
    {
        phone_number: '919541483162',
        name: "Musaib",
        email: "musaib.altaf@polynomial.ai",
        organisation: "Polynomial",
        organisation_id: "1",
        team: "Engineering",
        team_id: "1",
        team_name: "PAI Engineering",
    },
    {
        phone_number: '919541483163',
        name: "Prakhar",
        email: "prakhar.k@polynomial.ai",
        organisation: "Polynomial",
        organisation_id: "1",
        team: "Product Management",
        team_id: "2",
        team_name: "PAI Engineering",
    },
    {
        phone_number: '919541483164',
        name: "Ravi",
        email: "prakhar.k@polynomial.ai",
        organisation: "Polynomial",
        organisation_id: "1",
        team: "Engineering",
        team_id: "1",
        team_name: "PAI Engineering",
    },

]

function getUserDetails(phone_number){
    let user = mockUserDetails.filter(user => user.phone_number === phone_number);
    return user;
}

function getTeamDetails(team_id){
    let team = mockTeamDetails.filter(team => team.team_id === team_id);
    return team
}

function getSuperVisorDetails(team_id){
    let supervisor = mockTeamDetails.filter(team => team.team_id === team_id);
    supervisor = supervisor.map(supervisor => {
        return {
            supervisor: supervisor.supervisor,
            supervisor_phone: supervisor.supervisor_phone,
            supervisor_id: supervisor.supervisor_id,
            supervisor_email: supervisor.supervisor_email
        }
    })
    return supervisor
}
module.exports = {
    getUserDetails,
    getTeamDetails,
    getSuperVisorDetails
}