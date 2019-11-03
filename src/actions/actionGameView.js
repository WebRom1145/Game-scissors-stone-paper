
export const playAction = (user, round, scoreUser, scoreCom, maxRound) => {

let com = getRandomComValue()
let result = determineTheWinner(user, com)
let image = getImage(user,com, result )
let nexRound = nextRound(round, maxRound)
let score = resultDeterminationore(result,scoreUser,scoreCom )

return((dispatch) => {

    dispatch({type: 'PLAY_ACTION',
        payload: {
            userImage:image.user,
            comImage: image.com,
            round: nexRound,
            scoreUser:score.scoreUser ,
            scoreCom:score.scoreCom
        }});
});

}

const getRandomComValue = () => {
    return Math.floor(Math.random() * 3) + 1
}

const nextRound = (round,maxRound) => {
    if(round < maxRound){
        return round+1
    }else{
        return 'End'
    }
    
}
const resultDeterminationore = (winner, scoreUser,scoreCom) => {
    let score = {}
    if(winner === 'user'){
        score.scoreUser=scoreUser+1
        score.scoreCom=scoreCom
    }
   else if(winner === 'com'){
    score.scoreUser=scoreUser
    score.scoreCom=scoreCom+1
    }
    else{
        score.scoreUser=scoreUser
        score.scoreCom=scoreCom
    }
    return score
}


const determineTheWinner = (user,com) => {
switch(user){
    case 1:
            if(com === 1) {
                return 'nobody'
            }
            else if(com === 3 ) {
                return 'com'
            }
            else {
                return 'user'
            }
        break;
    case 2:
            if(com === 2) {
                return 'nobody'
            }
            else if(com === 1 ) {
                return 'com'
            }
            else {
                return 'user'
            }
        break;
    default:
            if(com === 3) {
                return 'nobody'
            }
            else if(com === 2 ) {
                return 'com'
            }
            else {
                return 'user'
            }
                    
        break;
}
}

 const getImage = (user, com, winner ) => {
    const images = {
        choseWin: {
            1: require('../assets/img/stein.png'),
            2: require('../assets/img/schere.png'),
            3:require('../assets/img/papier.png'),
        },
        choseLose:{
            1: require('../assets/img/stein-grau.png'),
            2: require('../assets/img/schere-grau.png'),
            3:require('../assets/img/papier-grau.png'),
        }
    };
    let result={}
    if(winner === 'user'){
        result.user = images.choseWin[user]
        result.com = images.choseLose[com]
    }
    if(winner === 'com'){
        result.user = images.choseLose[user]
        result.com = images.choseWin[com]
    }
    if(winner === 'nobody'){
        result.user = images.choseWin[user]
        result.com = images.choseWin[com]
    }
    return result
 }
 export const handelGameRestart= () =>{
     return{type:'INIT'} 
 }
 export const setInitState = () => {
     return {type: 'INIT_GAME_VIEW'}
 }