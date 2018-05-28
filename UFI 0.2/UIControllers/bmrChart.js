const Sedentary = 'Se';
const Active = 'Ac';
const Athlete = 'At';

function getBmrValues(activityLevel) {
    var retObj = {};
    switch (activityLevel){
        case Sedentary:
            retObj = {'legend' : Sedentary, 'scale' : '1'};
            break;
        case Active:
            retObj = {'legend' : Active, 'scale' : '3'};
            break;
        case Athlete:
            retObj = {'legend' : Athlete, 'scale' : '5'};
            break;
    }
    return retObj;
}