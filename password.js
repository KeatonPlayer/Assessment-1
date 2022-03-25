alert('Welcome to the club')
let pass =prompt('Please enter a password' )
if (pass.length>=10){
    alert('Thanks for giving me your password have a nice day')
    window.location.reload();
}
else if (pass.length<10){
    alert('Please enter up to at least 10 characters')
    window.location.reload();
}

