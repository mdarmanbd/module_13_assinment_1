import{ref,reactive} from 'vue'
import route from '../router/router'

const authStore = reactive({
    isAuthenticated:localStorage.getItem('auth') == 1,
    user:localStorage.getItem('user'),
    authenicate(username,password){
        fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username:username,password:password})
    })
    .then(res => res.json())
    .then(res => 
        {
            if(res.username == username){
                console.log(res)
                authStore.isAuthenticated = true
                authStore.user = res
                localStorage.setItem('auth',1)
                localStorage.setItem('user',JSON.stringify(res.username))
                route.push('/')
            }else{
                alert('wrong username:' + username)
            }
           
        })
},
    logout(){
        authStore.isAuthenticated = false
        authStore.user = {}
        localStorage.setItem('auth',0)
        localStorage.setItem('user',{})
        route.push('/Login')
        
    }
})

export{authStore}