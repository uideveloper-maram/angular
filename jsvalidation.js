
function validationForm(){
			
				//alert(" Registration Form");
			var username=document.getElementById("uname").value;
			var password=document.getElementById("pword").value;
			var phonenumber=document.getElementById("num").value;
			if(username == "nandini"){
				document.getElementById("Nerror").classList.add("error");
				document.getElementById("Nerror").classList.remove("no-display");
				
			}else{
				document.getElementById("Nerror").classList.add("no-display");	
				document.getElementById("Nerror").classList.remove("erro");
				
			}
			
			if(username == ""){
				document.getElementById("Nerror").classList.add("error");	
				document.getElementById("Nerror").classList.remove("no-display");
				//console.log("User Name is empty");							
				}
			
			else{
				document.getElementById("Nerror").classList.add("no-display");	
				document.getElementById("Nerror").classList.remove("erro");
			}
			if(password == ""){
				console.log("Enter PasswordS");
				return;
				
			}
			if(phonenumber == ""){
				alert("Enter Phone Number");
				return;
			}
			if(phonenumber >10 || phonenumber <10){
				alert("phone Number shoud have 10 digits");
				return;
			}
			if(isNaN(phonenumber)){
				alert("phonenumber should not have character");
				return;
			}
			
			
			
		}