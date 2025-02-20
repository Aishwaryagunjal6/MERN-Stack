document.addEventListener('DOMContentLoaded', ()=>{
  //select the elements
  const calculatorButton = document.getElementById("calculateBtn")
  const amountInput = document.getElementById("amount")
  const interestInput = document.getElementById("interest")
  const yearsInput = document.getElementById("years")

  //summary
  const monthlyPayment = document.getElementById("monthly")
  const totalPayment = document.getElementById("total")
  const totalInterestPayment = document.getElementById("totalInterest")

  // function to calculate the loan
  function calculateLoan(){
    const principal =parseFloat(amountInput.value);
    const interest = parseFloat(interestInput.value)/100/12;
    const payments = parseFloat(yearsInput.value)*12;

    if(isNaN(principal) || isNaN(interest) || isNaN(payments)){
      alert('Please enter valid numbers');
      return;
    }

    //calc monthly payment
    const x = Math.pow(1+interest, payments);
    const monthly = (principal* x * interest)/(x-1);
    if(isFinite(monthly)){
      //calculate total payment and interest
      const total = monthly*payments;
      const totalInterest = total - principal;

      monthlyPayment.textContent = monthly;
      totalPayment.textContent = total;
      totalInterestPayment.textContent= totalInterest
    }
  }
  console.log(monthlyPayment)

  calculatorButton.addEventListener('click', calculateLoan);
})

