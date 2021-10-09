// // login area event handel
// const button=document.getElementById("btn");
// button.addEventListener('click', function(){
//   const loginPage=document.getElementById('login');
//   loginPage.style.display='none';

//   const secondPage=document.getElementById('second-page');
//   secondPage.style.display='block';
// })
// // second page event handle
// const depositeButton=document.getElementById('depositeButton');
// depositeButton.addEventListener('click', function(){

//   const depositevalu=document.getElementById('depositevalu').value;
//   const depositeNumber=parseFloat(depositevalu);

//   const depositeAmount=document.getElementById('depositeAmount').innerText;
//   const depositeAmountNumber=parseFloat(depositeAmount)
//   const totalDeposite=depositeNumber+depositeAmountNumber;

//   document.getElementById('depositeAmount').innerText=totalDeposite;
//   document.getElementById('depositevalu').value='';

// })

// FIRST PAGE EVENT HANDEL ADD
const button = document.getElementById("btn");
button.addEventListener("click", function () {
  const loginArea = document.getElementById("login");
  loginArea.style.display = "none";

  const secondPage = document.getElementById("second-page");
  secondPage.style.display = "block";
});

// SECOND PAGE EVENT HANDALE ADD
const depositeButton=document.getElementById('depositeButton')
depositeButton.addEventListener('click', function(){
const depositevalu=document.getElementById('depositevalu').value;
const depositeValuNumber=parseFloat(depositevalu);

// const depositeAmount=document.getElementById('depositeAmount').innerText;
// const depositeAmountNumber=parseFloat(depositeAmount);
// const totalDeposite=depositeValuNumber+depositeAmountNumber;
// document.getElementById('depositeAmount').innerText=totalDeposite;


spanTagUpdeted('depositeAmount',depositeValuNumber )
spanTagUpdeted('currentBalance', depositeValuNumber);

document.getElementById('depositevalu').value='';
})

function spanTagUpdeted(id, depositeValuNumber){
  const currentBalance=document.getElementById(id).innerText;
  const currentBalanceNumber=parseFloat(currentBalance);
  const totalBalance=depositeValuNumber+currentBalanceNumber;
  document.getElementById(id).innerText=totalBalance;
}

