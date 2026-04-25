//This is a function that takes a student's score and tells them what grade they earned.

function checkGrade(score) {
    if (score < 0 || score > 100) {
        console.log("Invalid score. Please enter a number between 0 and 100")
     return
    }    if (score >= 80) {
        console.log("Grade: (A) - Excellent Work!")
    } else if (score >= 70 && score < 80) {
        console.log("Grade: (B) - Good Job!")
    } else if (score  >= 60 && score < 70) {
        console.log("Grade: (C) - Not bad, keep pushing.")
    } else if (score >= 50 && score < 60) {
        console.log("Grade: (D) - You passed but study harder.")
    } else {console.log("Grade: (F) - You need to resit this.")}
}

checkGrade(85)