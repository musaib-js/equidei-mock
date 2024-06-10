const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {getUserDetails, getTeamDetails, getSuperVisorDetails} = require('./utils/fetchUserDetails');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Equidei Mock APIs');
    }
);

app.post('/get-user-details', (req, res) => {
    try {
        let phone_number = req.body.phone_number;
        let user = getUserDetails(phone_number);
        if (user.length === 0){
            res.send({
                status: "error",
                message: "User not found"
            })
        }
        res.send({
            user: user,
            status: "success",
            message: "User details fetched successfully"
        })
    } catch (error) {
        res.send({
            status: "error",
            message: "Something went wrong"
        })
    }
   
    } 
);

app.post('/get-team-details', (req, res) => {
    try {
        let team_id= req.body.team_id;
        let team = getTeamDetails(team_id);
        if (team.length === 0){
            res.send({
                status: "error",
                message: "Team not found"
            })
        }
        res.send({
            team: team,
            status: "success",
            message: "User details fetched successfully"
        })
    } catch (error) {
        res.send({
            status: "error",
            message: "Something went wrong"
        })
    }  
})

app.post('/get-supervisor-details', (req, res) => {
    try {
        let team_id= req.body.team_id;
        let supervisor = getSuperVisorDetails(team_id);
        if (supervisor.length === 0){
            res.send({
                status: "error",
                message: "Supervisor not found"
            })
        }
        res.send({
            supervisor: supervisor,
            status: "success",
            message: "Supervisor details fetched successfully"
        })
    } catch (error) {
        res.send({
            status: "error",
            message: "Something went wrong"
        })
    }  
}
)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})