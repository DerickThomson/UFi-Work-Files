function getScoreDetails(bmiObj, bmrObj) {
    let bmi = bmiObj.legend;
    // let bmiScore = bmiObj.Scale;

    // let  = bmrObj.legend;
    let bmr = Number(bmrObj.scale);

    let retObj = {};

    switch (bmi){
        case underWeight:
            switch (bmr){
                case 1:
                    retObj = {'explanation' : 1, 'combinedScore' : 4, 'ranking': 11}
                    break;
                case 3:
                    retObj = {'explanation' : 2, 'combinedScore' : 6, 'ranking': 5}
                    break;
                case 5:
                    retObj = {'explanation' : 3, 'combinedScore' : 4, 'ranking': 11}
                    break;
            }
            break;
        case optimal:
            switch (bmr){
                case 1:
                    retObj = {'explanation' : 4, 'combinedScore' : 6, 'ranking': 6}
                    break;
                case 3:
                    retObj = {'explanation' : 5, 'combinedScore' : 8, 'ranking': 2}
                    break;
                case 5:
                    retObj = {'explanation' : 6, 'combinedScore' : 10, 'ranking': 1}
                    break;
            }
            break;
        case overWeight:
            switch (bmr){
                case 1:
                    retObj = {'explanation' : 7, 'combinedScore' : 4, 'ranking': 10}
                    break;
                case 3:
                    retObj = {'explanation' : 8, 'combinedScore' : 6, 'ranking': 7}
                    break;
                case 5:
                    retObj = {'explanation' : 9, 'combinedScore' : 8, 'ranking': 4}
                    break;
            }
            break;
        case obese:
            switch (bmr){
                case 1:
                    retObj = {'explanation' : 10, 'combinedScore' : 2, 'ranking': 12}
                    break;
                case 3:
                    retObj = {'explanation' : 11, 'combinedScore' : 4, 'ranking': 9}
                    break;
                case 5:
                    retObj = {'explanation' : 12, 'combinedScore' : 6, 'ranking': 8}
                    break;
            }
            break;
    }
    return retObj;

}