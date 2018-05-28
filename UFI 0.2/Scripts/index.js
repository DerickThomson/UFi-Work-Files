//Do not edit these values
const inchToMeter = 0.0254;
const cmToMeter = 0.01;
const  kgToLbs = 2.20462;

const heightInInch = 'h1';
const heightInMeter = 'h2';

const weightInKg = 'w1';
const weightInLbs = 'w2';
//do not edit anything above

//edit this as per your need
const explanations = [
    null,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
]

//edit this as per your need
const emailSubject = 'Urban Fitness test score';
const alertMsg = "We have send the details to your mail id";




$('#submitBtn').on('click', (event) => {
    validateAndSubmit(event);
})

var validateAndSubmit = event => {
    // debugger;
    // event.preventDefault();
    let fullName = $('#fullName').val(),
        email = $('#email').val(),
        phone = $('#phone').val(),
        pin = $('#pin').val(),
        weight = $('#weight').val(),
        weightIn = $('#weightIn option:selected').attr('id'),
        height = $('#height').val(),
        heightIn = $('#heightIn option:selected').attr('id'),
        activityLevel = $('#activityLevel option:selected').attr('id');
    let BMI = calculateBMI(weight, weightIn, height, heightIn);
    let bmlObj = getBmlValues(BMI);
    let bmrObj = getBmrValues(activityLevel);
    let scoreDetails = getScoreDetails(bmlObj, bmrObj);
    if(scoreDetails){
        var bodyText = `Dear ${fullName}, <br /> Thank you for using Urban Fitness to check your fitness level using our proprietary Urban Fitness Index technology. 
Your score as of today is ${scoreDetails.combinedScore} should be re-checked on a regular basis to ensure you are improving or 
maintaining your fitness level. We recommend a maximum of a 3-month interval`;
        $('#inputForm').css('display','none');
        $('#displayResult').css('display','block');
        $('#info').html(bodyText)
        $('#explanation').html(explanations[scoreDetails.explanation]);
        $('#displayResult').removeClass('hide');
        // $('#score').html('Score : '+scoreDetails.combinedScore);
        // $('#ranking').html('Ranking : '+scoreDetails.ranking);
    }
    let data = {
        'name' : fullName,
        'email' : email,
        'phone': phone,
        'pin': pin,
        'weight' : weight,
        'height': height,
        'activityLevel' : activityLevel
    }

    updateUserDetails(data);
    sendUserEmail(bodyText,email);
    return;
}

var sendUserEmail = function(bodyText,email){
    var data = {'body' : bodyText, 'email' : email, 'subject' : emailSubject};
    $.ajax({
        url:'./PHP/sendMail.php',
        method: 'POST',
        data : data,
        success: function(result){
            alert(alertMsg);
            console.log(result);
            // $('body').html(result);
        },
        error: function(res){
            console.log(res)
        }
    })
}


var updateUserDetails = (data) =>{
    var data = {'details': data};
    // debugger;
    $.ajax({
        url:'./PHP/updateUserDetails.php',
        method: 'POST',
        data : data,
        success: function(result){
            console.log(result);
            // $('body').html(result);
        },
        error: function(res){
            console.log(res)
        }
    })
}

function  calculateBMI(weight, weightIn, height, heightIn) {
    let h = heightIn === heightInInch ? inchToMeter * height : height * cmToMeter;
    let w = weightIn === weightInKg ? Number(weight) :   weight / kgToLbs;

    var bmi = w/Math.pow(h,2);

    return bmi;
}
