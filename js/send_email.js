(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "P4xYiCbvsjbS0p4Uv",
    });
})();

window.onload = function() {
    document.getElementById('ContactMeForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm("service_552ms1d","template_090i7aw", this)
            .then(() => {
                console.log('SUCCESS!');
                alert("Email sent successfully!");
                document.getElementById('from_name').value = '';
                document.getElementById('from_lastname').value = '';
                document.getElementById('company_name').value = '';
                document.getElementById('address').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('message').value = '';
            }, (error) => {
                console.log('FAILED...', error);
                alert("Error while sending the email!");
            });
    });
}

function success() {
    if(document.getElementById("from_name").value==="" || document.getElementById("from_lastname").value==="" || document.getElementById("email").value==="" 
    || document.getElementById("message").value==="") { 
             document.getElementById('button').disabled = true; 
         } else { 
             document.getElementById('button').disabled = false;
         }
     }