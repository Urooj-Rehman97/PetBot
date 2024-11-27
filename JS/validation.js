function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username";
        return false;
    }
    else if (document.Formfill.Email.value=="")
    {
        document.getElementById("result").innerHTML="Enter your email"
        return false;
    }
    else if (document.Formfill.Password.value=="")
    {
        document.getElementById("result").innerHTML="Enter your password"
        return false;
    }
    
}