let personProfile = {
    firstName: "",
    lastName: "",
    age: 0,
    familyMembers: [],
    height: "",
    weight: "",
    isEligibleVote: false,
    birthYear: "",
    ageCalc: function () { return this.age = new Date().getFullYear() - this.birthYear; },
    checkVote: function () {
        let tempAge = this.ageCalc();
        if (tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = false; }
    },

}


personProfile.calcBmi = function () {
    let ans = (this.weight / (this.height) ** 2).toFixed(2)
    if (ans > 30) {
        return "Obese => " + ans
    } else if (ans > 18.5 && ans < 24.9) {
        return "Normal => " + ans
    } else if (ans > 20.0 && ans < 29.9) {
        return "Overweight => " + ans

    } else {
        return "underWeight => " + ans

    }
}




personProfile.firstName = prompt("Enter Your First Name");
personProfile.lastName = prompt("Enter Your Last Name");
personProfile.job = prompt("What is Your Profession ?");
personProfile.birthYear = prompt("Enter Your Birth Date");
personProfile.weight = prompt("Your Weight in Kg  ? ");
personProfile.height = prompt("Your Height in M  ? ");
let numberOfFamily = prompt("Number of Family  ? ");

//Receiving the family number 
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    personProfile.familyMembers[i] = prompt("Your Family  Members " + (i + 1));
}


personProfile.ageCalc();
personProfile.checkVote();
// Adding Self Invoking Function Expression 
(function () {

    console.log("**************************************************************")
    console.log("Here is your Profile ")
    console.log("Full Name: " + personProfile.firstName + " " + personProfile.lastName);
    console.log("Profession : " + personProfile.job);
    console.log("Age : " + personProfile.age + " " + "years old");
    console.log("Is Eligible to Vote : " + personProfile.isEligibleToVote);
    console.log("Family Members ");
    //Displaying the family member with foreach
    personProfile.familyMembers.forEach(function (member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });
    // call bmi calculator 
    personProfile.calcBmi();
    console.log("**************************************************************")

})();
