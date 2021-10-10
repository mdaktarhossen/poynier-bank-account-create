// login area event add
const enterBtn=document.getElementById('enterBtn');
enterBtn.addEventListener('click', function(){
const loginArea=document.getElementById('login-area')
loginArea.style.display='none'
// block area event add
const blockArea=document.getElementById('second-page')
blockArea.style.display='block'
})

// second page event handale add
const depositeBtn=document.getElementById('depositeBtn')
  depositeBtn.addEventListener('click', function(){
  const depositeAmountNumber=getInputNumber('deposite-Amount');
  spanTagUpdated('current-Deposite' ,depositeAmountNumber)
  spanTagUpdated('current-Balance' ,depositeAmountNumber)
  document.getElementById('deposite-Amount').value="";
})

const WithdrowButton=document.getElementById('WithdrowBtn');
  WithdrowButton.addEventListener('click', function(){
  const WithdrowAmountNumber=getInputNumber('Withdrow-Amount');
  spanTagUpdated('current-withdrow' ,WithdrowAmountNumber);
  spanTagUpdated('current-Balance' ,-1*WithdrowAmountNumber);
  document.getElementById('Withdrow-Amount').value=''

})

function getInputNumber(id){
  const Amount=document.getElementById(id).value;
  const AmountNumber=parseFloat(Amount);
  return AmountNumber;
}

function spanTagUpdated(id, depositeAmountNumber){
  const current=document.getElementById(id).innerText;
  const currentNumber=parseFloat(current);
  const totalAmount=depositeAmountNumber+currentNumber;
  document.getElementById(id).innerText=totalAmount;
}