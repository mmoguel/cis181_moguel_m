/*
  AI Study Toolkit
  Basic JavaScript interactions
*/

function welcomeStudent() {
  var studentName = prompt("What is your first name?");

  if (studentName === null || studentName.trim() === "") {
    alert("Welcome to the AI Study Toolkit!");
  } else {
    alert(
      "Welcome to the AI Study Toolkit, " +
      studentName.trim() +
      "!"
    );
  }
}
function calculateStudyTime() {
  const courseCount = Number(document.getElementById("courseCount").value);
  const hoursPerCourse = Number(
    document.getElementById("hoursPerCourse").value
  );
  const studyResult = document.getElementById("studyResult");

  if (courseCount <= 0 || hoursPerCourse <= 0) {
    studyResult.textContent =
      "Please enter a number greater than zero in both fields.";
    return;
  }

  const totalHours = courseCount * hoursPerCourse;

  studyResult.textContent =
    "Your estimated weekly study time is " + totalHours + " hours.";
}
function confirmFeedbackSubmission() {
  const studentName = document.getElementById("studentName").value.trim();

  const confirmed = confirm(
    "Are you ready to submit your feedback?"
  );

  if (confirmed) {
    alert(
      "Thank you for your feedback, " + studentName + "!"
    );

    document.getElementById("feedbackForm").reset();
  }

  return false;
}