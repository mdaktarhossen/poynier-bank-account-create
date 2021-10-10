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
  const depositeAmount=document.getElementById('deposite-Amount').value;
  const depositeAmountNumber=parseFloat(depositeAmount);

  const currentDeposite=document.getElementById('current-Deposite').innerText;
  const currentDepositeNumber=parseFloat(currentDeposite);
  const totalDeposite=depositeAmountNumber+currentDepositeNumber;
  document.getElementById('current-Deposite').innerText=totalDeposite;
  
  const currentBalance=document.getElementById('current-Balance').innerText;
  const currentBalanceNumber=parseFloat(currentBalance);
  const totalCurrentBalance=depositeAmountNumber+currentBalanceNumber;
  document.getElementById('current-Balance').innerText=totalCurrentBalance;

  document.getElementById('deposite-Amount').value="";

})

function spanTagUpdated(){

}