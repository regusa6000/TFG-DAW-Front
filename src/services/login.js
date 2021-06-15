import axios from "axios"

export const login = (email,password) =>{

    return axios.post('http://antesdedesplegar.com:8080/login',{email,password})

}
export const register = (name,lastname,email,password,telephone,rol)=>{

    return axios.post('http://antesdedesplegar.com:8080/user',{name,lastname,email,password,telephone,rol})

}
export const update = (id,name,lastname,email,password,telephone,rol)=>{

    return axios.put('http://antesdedesplegar.com:8080/user',{id,name,lastname,email,password,telephone,rol})

}
export const alltask = (id_user)=>{

    return axios.get('http://antesdedesplegar.com:8080/task?id_user='+id_user)

}
export const registerTask = (idUser,nameTask,description,taskDate)=>{

    return axios.post('http://antesdedesplegar.com:8080/task',{idUser,nameTask,description,taskDate})

}
export const deleteTask = (id_task)=>{

    return axios.delete('http://antesdedesplegar.com:8080/task/'+id_task)

}
export const verifyEmail = (email)=>{

    return axios.get('http://antesdedesplegar.com:8080/consulta?email='+email)

}
export const taskInProgress = (id_user,activo)=>{

    return axios.get('http://antesdedesplegar.com:8080/task?id_user='+id_user+"&activo="+activo)

}
export const endTask = (id_user,activo)=>{

    return axios.get('http://antesdedesplegar.com:8080/task?id_user='+id_user+"&activo="+activo)

}
export const updateTask = (id,idUser,nameTask,description,taskDate)=>{

    return axios.put('http://antesdedesplegar.com:8080/task',{id,idUser,nameTask,description,taskDate})

}
export const allRss = ()=>{

    return axios.get('http://antesdedesplegar.com:8080/rss')

}
export const subscripcion = (idRss,idUser,active) =>{

    return axios.put('http://antesdedesplegar.com:8080/rss/subscribe/'+idRss+'/user/'+idUser+'/active/'+active)

}
export const verificarSubscription = (idUser) =>{

    return axios.get('http://antesdedesplegar.com:8080/rss/user/'+idUser)

}