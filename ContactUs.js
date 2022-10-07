document.querySelector("#submit").addEventListener('click',function(){
    let nama = document.querySelector("#nama").value; 
    if(nama.length<5){
        alert("Enter your name at least 5 Alphabets!");
    }else{
        console.log(nama);
    }
    let emails = document.querySelector("#emails").value; 
    if(emails.length<1){
        alert("Enter your email address!");
    }else{
        console.log(emails);
    }
    document.querySelectorAll(".Gender").forEach(function(gender){
        let male = document.getElementById('genderMale').value;
        let female = document.getElementById('genderFemale').value;
        if(document.getElementById('genderMale').checked) {
            console.log(male);
          }else if(document.getElementById('genderFemale').checked){
            console.log(female);
          }else{
              alert("Please choose your gender");
          }
    let branch = document.querySelector("#branch").value;
    if(branch==""){
        alert("Choose Danbam Branch Location!");
    }else{
        console.log(branch);
    }
    // let terms = document.getElementById('#terms').value
    if(document.getElementById('terms').checked==false){
        alert("Please agree with our terms");
    }
    
   })
})