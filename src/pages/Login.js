import Header from "../components/Header"
import Login from "../components/Login"

export default function LoginPage(){
    return(
        <>
             <Header
                heading="Acesse sua conta"
                paragraph="Não possui cadastro? "
                linkName="Cadastre-se"
                linkUrl="/signup"
                />
            <Login/>
        </>
    )
}