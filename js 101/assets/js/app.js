// window.alert("alerted")

// document.write("written")

var firstName;
var lastName;
var age;
var Job;
let tempAge;
let eligibleVote;
let noFamily;
let familyMembers = new Array();
let birthYear;

firstName = prompt("your first name bro?");
lastName = prompt("your last name bro?");
age = prompt("your age bro?");
Job = prompt("your Job bro?");
noFamily = prompt("number of family");
birthYear = prompt("Enter Your Birth Year");

for (let i = 0; i < (noFamily); i++) {
    familyMembers[i] = prompt("Family Member " + (i + 1));
}

(function () {

    console.log("user info");
    console.log(`Full Name ${firstName} ${lastName}`);
    console.log(`proffession ${Job}`);
    console.log(`You are ${age} years old`);
    tempAge = parseInt(age);

    if (tempAge >= 18) eligibleVote = true;
    else eligibleVote = false;


    console.log(`Eligable to vote: ${eligibleVote}`);
    console.log(`your age is ${ageCalc(birthYear)}`);
})()


familyMembers.forEach((familyMember, i) => {
    console.log(`Family member ${i + 1} ${familyMember}`);
})


function ageCalc(birthYear) {
    return new Date().getFullYear() - birthYear;

}
