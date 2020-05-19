
function register()                                    
{ 
    var name = document.RegForm.Name;      
    var password = document.RegForm.Password;               
    var mobile = document.RegForm.Mobile;     
    var address = document.RegForm.Address;
    var age = document.RegForm.Age;  

    if (name.value.length < 3 || name.value.length > 15)                                  
    { 
        window.alert("Please enter minimum 3 and Maximun 15 character user-id"); 
        name.focus(); 
        return false; 
    }
    
    if (password.value.length < 8)                        
    { 
        window.alert("Please enter minimum 8 character password"); 
        password.focus(); 
        return false; 
    }
   
    if (mobile.value.length != 10)                           
    { 
        window.alert("Please enter 10 digit mobile number"); 
        mobile.focus(); 
        return false; 
    } 
   
    if (age.value < 18 || age.value > 100)                           
    { 
        window.alert("Please enter age between 18-100"); 
        age.focus(); 
        return false; 
    } 
    
    return true; 
}