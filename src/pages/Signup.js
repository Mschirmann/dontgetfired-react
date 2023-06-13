import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage(){
    return(
        <>
            <Header
              heading="Faça seu cadastro"
              paragraph="Já possui cadastro? "
              linkName="Acesse"
              linkUrl="/"
            />
            <Signup/>
        </>
    )
}