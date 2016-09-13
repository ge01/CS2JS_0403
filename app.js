// Event listener that fires when a user clicks a button.
document.getElementById("myBtn").addEventListener("click", function(){
  computeLoan();
});

// Named constants
var MINIMUM_SALARY = 40000;
var MINIMUM_YEARS_ON_JOB = 2;

// Global variables
var salary;       // Decimal
var yearsOnJob;   // Integer

function computeLoan(){
  // Get the salary and years on the job.
  salary = parseFloat(document.getElementById('salary').value);
  yearsOnJob =  parseInt(document.getElementById('yearsOnJob').value);


  // Determine whether the user qualifies.
  if (salary >= MINIMUM_SALARY)
  {
    if (yearsOnJob >= MINIMUM_YEARS_ON_JOB)
    {
      // The user qualifies.
      document.getElementById("outLoanDecision").style.color = "#31B617";
      document.getElementById('outLoanDecision').innerHTML = "You qualify for the loan.";
    }
    else
    {
      // The user does not qualify.
      document.getElementById("outLoanDecision").style.color = "#F52209";
      document.getElementById('outLoanDecision').innerHTML = "Minimum years at current job not met.";
    }
  }
  else
  {
    // The user does not qualify.
    document.getElementById("outLoanDecision").style.color = "#F52209";
    document.getElementById('outLoanDecision').innerHTML = "Minimum salary requirement not met.";
  }
}
