//calculate tip function

function calculateTip(){
  const billAmount = parseFloat(document.getElementById("bill").value).toFixed(2);
  const serviceQuality = parseFloat(document.getElementById("service").value).toFixed(2);
  const numOfPeople = parseFloat(document.getElementById("people").value).toFixed(2);

  if(!isFinite(billAmount) || billAmount<=0){
    alert('Please enter valid information');
    return;
  }

  if(numOfPeople<1){
    alert('Please enter correct number of persons');
    return;
  }

  const tipAmount= billAmount * serviceQuality;
  const totalAmount = billAmount + tipAmount;
  const perPerson = totalAmount / numOfPeople;
  const tipPerPerson = tipAmount / numOfPeople;

  //display result to the DOM

  document.getElementById('tipAmount').textContent = '$'+ tipAmount;
  document.getElementById('totalAmount').textContent = '$'+ totalAmount;
  document.getElementById('perPerson').textContent = '$'+ perPerson;
  document.getElementById('tipPerPerson').textContent = '$'+ tipPerPerson;
}


//calculate the tip without clicking on the calculate button, by using querySelectorAll() method we can trigger the function when all input fields are changed

const allEls = document.querySelectorAll('input , select').forEach((element)=>{
  element.addEventListener('input', calculateTip)
})

