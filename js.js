function sendMail(){
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    };
    const serviceID = "123vignesh";
    const templateID = "template_uqycpvr";

emailjs
.send(serviceID,templateID,params)
.then((res) =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert ("your message sent successfully");
    })
    .catch((err) => console.log(err));
}