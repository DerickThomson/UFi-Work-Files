// const bmiUnderweightLegend = {''}
// const bmiOptimalLegend = 'Op';
const underWeight = 'Un';
const optimal = 'Op';
const overWeight = 'Ov';
const obese = 'Ob';

function getBmlValues(bmi) {
    var retObj = {};
    switch (true){
        case (bmi > 0 && bmi <18):
            retObj = {'category' : 'Underweight', 'legend' : underWeight, 'scale': '3'};
            break;
        case (bmi > 18 && bmi < 24.49):
            retObj = {'category' : 'Optimal', 'legend' : optimal, 'scale': '5'};
            break;
        case (bmi > 24.49 && bmi < 30):
            retObj = {'category' : 'Overweight', 'legend' : overWeight, 'scale': '3'};
            break
        case (bmi > 30):
            retObj = {'category' : 'Obese', 'legend' : obese, 'scale': '1'};
            break;
    }
    return retObj;
}