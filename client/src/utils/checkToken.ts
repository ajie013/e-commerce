import Cookies from 'js-cookie';


const isTokenExist =  () =>{
    const token = Cookies.get('token')
    

    return new Promise((resolve, reject)=>{
        if(!token){
            alert('You need to login first')     
            reject("Login first");
        }  
        else{
            resolve("Token exist")
        }   
    
    })

}

export default isTokenExist