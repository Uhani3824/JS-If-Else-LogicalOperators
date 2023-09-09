// Question-1

// Task-1
var johnMass=35
var markMass=50
var johnHeight=5.0
var markHeight=6.5
var johnBmi=johnMass / johnHeight ** 2
var markBmi=markMass / markHeight ** 2

if(johnBmi>markBmi)
{
    console.log("John's BMI is higher than Mark's!")
}
else
{
    console.log("Mark's BMI is higher than John's!")
}

// Task-2
if(johnBmi>markBmi)
{
    console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`)
}
else
{
    console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`)
}

// Question-2

//Task-1
userAge=prompt("Enter your age:")

if(userAge>18)
{
    console.log("User is old enough to vote")
}
else
{
    console.log("User is not old enough to vote")
}

// Task-2
userGrade=prompt("Enter your grade:")

if(userGrade=='A' || userGrade=='a')
{
    console.log("Excellent performance!")
}
else if(userGrade=='B' || userGrade=='b')
{
    console.log("Good performance!")
}
else if(userGrade=='C' || userGrade=='c')
{
    console.log("Satisfactory performance!")
}
else if(userGrade=='D' || userGrade=='D')
{
    console.log("Less than satisfactory performance!")
}
else if(userGrade=='F' || userGrade=='F')
{
    console.log("Unsatisfactory performance!")
}
else
{
    console.log("Error:Enter a valid grade(A,B,C,D,F)")
}

// Task-3
userAge=prompt("Enter your age:")

if(userAge>=0 && userAge<=2)
{
    console.log("You are a baby")
}
else if(userAge>=3 && userAge<=5)
{
    console.log("You are a toddler")
}
else if(userAge>=6 && userAge<=12)
{
    console.log("You are a child")
}
else if(userAge>=13 && userAge<=18)
{
    console.log("You are a teenager")
}
else
{
    console.log("You are an adult")
}

// Task-4
num=prompt("Enter a number:")

if(num>0)
{
    console.log("It is a positive number")
}
else if(num<0)
{
    console.log("It is a negative number")
}
else if(num==0)
{
    console.log("The number is zero")
}