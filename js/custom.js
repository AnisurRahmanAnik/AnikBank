// LOGIN HANDLER
let logInBtn = document.getElementById('login-btn')
let input = document.getElementsByTagName('input')
logInBtn.addEventListener('click',function(){
   const email = document.getElementById('email').value
   const pass = document.getElementById('pass').value
   if(email=='anik' && pass=='anik is king'){
    document.getElementById('login-area').style.display = 'none'
    document.getElementById('transit').style.display = 'block'
   }else{
       alert('You have entered wrong email or password')
   }
})
// DEPOSIT EVENT HANDERLLER
const depositBtn = document.getElementById('addDeposit')
depositBtn.addEventListener('click',function(){
    const depositAmount = document.getElementById('depositAmount').value
    const depositNumber = parseFloat(depositAmount)

    const currentDeposit = document.getElementById('currentDeposit').innerText
    const currentDepositNumber = parseFloat(currentDeposit)
    const total = currentDepositNumber + depositNumber
    document.getElementById('currentDeposit').innerText = total

    const currentBalance = document.getElementById('currentBalance').innerText
    const currentBalanceNumber = parseFloat(currentBalance)
    const totalBalance = currentBalanceNumber + depositNumber
    document.getElementById('currentBalance').innerText = totalBalance
    // spanText('currentBalence',depositNumber)


    document.getElementById('depositAmount').value = ''

})
// WITHDRAW EVENT HANDELER
const withdrawBtn = document.getElementById('addedWithdraw')
withdrawBtn.addEventListener('click',function(){
    const withdrawAmount = document.getElementById('withdrawAmmount').value
    const withdrawAmountNumber = parseFloat(withdrawAmount)

    const currentWithdraw = document.getElementById('currentWithdraw').innerText
    const currentWithdrawNumber = parseFloat(currentWithdraw)
    const totalWithdraw = withdrawAmountNumber + currentWithdrawNumber
    document.getElementById('currentWithdraw').innerText = totalWithdraw

    const currentBalance = document.getElementById('currentBalance').innerText
    const currentBalanceNumber = parseFloat(currentBalance)
    const totalBalance = currentBalanceNumber - withdrawAmountNumber
    document.getElementById('currentBalance').innerText = totalBalance
   
})











// function spanText(id,addedNum){
//     const currentBalance = document.getElementById(id).innerText
//     const currentBalanceNumber = parseFloat(currentBalance)
//     const totalBalance = currentBalanceNumber + addedNum
//     document.getElementById(id).innerText = totalBalance
// }