
function add(exp) {
    let nums = exp.split(",")
    let sum = 0;
    nums.forEach(num => {
        sum += parseInt(num)
    });
    return sum
}

function sub(exp) {
    let nums = exp.split(",")
    let sum = 0;
    nums.forEach((num, i) => {
        if (i == 0) {
            sum = parseInt(num)
        } else {
            sum -= parseInt(num)
        }
    });
    return sum
}

function mult(exp) {
    let nums = exp.split(",")
    let sum = 0;
    nums.forEach((num, i) => {
        if (i == 0) {
            sum = parseInt(num)
        } else {
            sum *= parseInt(num)
        }
    });
    return sum
}

function div(exp) {
    let nums = exp.split(",")
    let sum = 0;
    if(nums[nums.length -1] == 0) {
        console.log("MAth Error");
        return
    }
    else {
        nums.forEach((num, i) => {
            if (i == 0) {
                sum = parseInt(num)
            } else {
                sum /= parseInt(num)
            }
        });
    }
    return sum
}

(function () {
    let choice = prompt(" addition: 1 mult: 2 sub: 3 div: 4")
    if(choice == "1") {
        let sums = prompt("additon in commas")
        console.log(`sum ${sums} : ${add(sums)}`);
    } else if(choice == "2") {
        let mults = prompt("multiplication in commas")
        console.log(`product  ${mults} : ${mult(mults)}`);
    } else if(choice == "3") {
        let subs = prompt("subtraction in commas")
        console.log(`Subtraction ${subs} : ${sub(subs)}`);
    } else if(choice == "4") {
        let divs = prompt("division in commas")
        console.log(`Division ${divs} : ${div(divs)}`);
    }


    // console.log(sums);
}
)()