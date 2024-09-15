// problem_1
function calculateTax(income, expenses) {
    if (income >= 0 && expenses >= 0) {
        if (income >= expenses) {
            let totalProfet = income - expenses;
            let totalTex = totalProfet * 0.20;
            return totalTex;
        } else {
            return 'Invalid Input'
        }
    } else {
        return 'Invalid Input'
    }
}

// problem_2
function sendNotification(email) {
    if (email.includes('@')) {
        let userAndDom = email.split('@');
        let masege = userAndDom[0] + " sent you an email from " + userAndDom[1];
        return masege;

    } else {
        return 'Invalid Email'
    }
}

// problem_3
function checkDigitsInName(name) {
    if (typeof name == 'string') {
        let numders = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let addElements = [];
        for (let i of name) {

            if (numders.includes(i) === true) {
                addElements.push(i);
            }
        }
        if (addElements.length >= 1) {
            return true
        }
        else {
            return false
        }
    } else {
        return 'Invalid Input';
    }

}

// problem_4 

// let myObj = { name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }

function calculateFinalScore(obj) {
    if (typeof obj == 'object') {
        let result = 0;
        if (obj.testScore <= 50 && obj.schoolGrade <= 30) {
            if (obj.isFFamily) {
                result = obj.testScore + obj.schoolGrade + 20;
            } else {
                result = obj.testScore + obj.schoolGrade + 0;

            }
        } else {
            return 'invalid input'
        }

        if (result >= 80) {
            return true;
        } else {
            return false;
        }



    } else {
        return "invalid input ";
    }
}


// problem_5 
function waitingTime(waitingTimes, serialNumber) {
    if (Array.isArray(waitingTimes) && typeof serialNumber == 'number' && serialNumber >= waitingTimes.length) {

        let sumeAllTime = 0;
        for (let i of waitingTimes) {
            sumeAllTime = sumeAllTime + i;
        }
        let avargeTime = Math.round(sumeAllTime / waitingTimes.length);

        let isratWainting = (serialNumber - 1 - waitingTimes.length) * avargeTime;

        return isratWainting;
    } else {
        return "invalid input";
    }
}


// console.log(waitingTime([7, 8, 3, 4, 5], "9"))
// console.log(waitingTime("[6,2]", 9))
// console.log(waitingTime(7 , 10))
// console.log(waitingTime([6], 4))