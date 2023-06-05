import { Navigate } from "react-router-dom";

export function RotaPrivada({children}){
    const dados = {idUser: localStorage.getItem('user'), tipoUser: localStorage.getItem('tipoUser')}

    if (dados.idUser !== null){
        return children
    }else{
        localStorage.setItem('msgInvalidado', 'Acesso negado.')
        return <Navigate to ={'/'}/>
    }
}

export function RotaPrivadaAdm({children}){
    const dados = {idUser: localStorage.getItem('user'), tipoUser: localStorage.getItem('tipoUser')}

    if (dados.idUser !== null && dados.tipoUser === 'ADM'){
        return children
    }else{
        localStorage.setItem('msgInvalidado', 'Acesso negado.')
        return <Navigate to ={'/'}/>
    }
}
export function RotaPrivadaToken({children}){
    const dadosEmail = {emailUser: localStorage.getItem('userEmail')}

    if(dadosEmail.emailUser !== null){
        return children
    }else{
        localStorage.setItem('msgInvalidado', 'Acesso negado.')
        return <Navigate to ={'/'}/>
    }
}