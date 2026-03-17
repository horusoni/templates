let data = `${ new Date().getFullYear()}-${ new Date().getMonth() + 1}-${new Date().getDate()}`
let host = "https://data-api-redbackxs-projects.vercel.app"
const ip = ''

buscarDados(ip)

async function buscarDados(){
    await fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => ip = data.ip)
    .catch(error => console.error("Erro ao obter o IP:", error));

    await fetch('https://ipinfo.io/'+ip+'?token=d69ec511080c79')
    .then(res => res.json())    
    .then(data => 
        ipInfo = data)
    .catch(error => console.log(error))
  
    let user = {
        dataName:'infoLoc',
        IP: ip,
        userAgent: navigator.userAgent,
        screen:{
            largura: window.screen.width+'px',
            altura: window.screen.height+'px'
        },
        cidade:ipInfo.city,
        pais: ipInfo.country,
        hostname:ipInfo.hostname,
        locProvedor: ipInfo.loc,
        org: ipInfo.org,
        postal: ipInfo.postal,
        region: ipInfo.region,
        
        data : data,
        horas: `${new Date().getHours()}:${new Date().getMinutes()}`  
    } 

    sendData(user,'dados')
   
}

async function sendData(dados, rota){
     await fetch(`${host}/${rota}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => console.log("Resposta do servidor:", data))
    .catch(error => console.error("Erro:", error));
    
}