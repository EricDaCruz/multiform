import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

export function FormStep3() {
   const navigate = useNavigate();
   const { state, dispatch } = useForm();

   useEffect(() => {
      if (state.name === "") {
         navigate("/");
      } else {
         dispatch({
            type: FormActions.setCurrentStep,
            payload: 3,
         });
      }
   }, []);

   const handleSendCadaster = () => {
      if(state.email != '' && state.github != ''){
          console.log(state);
      }else{
          toast.error('Preencha todos os campos')
      }
      
   };

   const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({
         type: FormActions.setEmail,
         payload: e.target.value,
      });
   };
   const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({
         type: FormActions.setGithub,
         payload: e.target.value,
      });
   };

   return (
      <Theme>
         <C.Container>
            <p>Passo {state.currentStep}/3</p>
            <h1>Legal, {state.name}, onde te achamos?</h1>
            <p>Preencha com seus contatos.</p>

            <hr />

            <label>
               Qual seu e-mail?
               <input
                  type="email"
                  value={state.email}
                  onChange={handleEmailChange}
               />
            </label>
            <label>
               Qual seu GitHub?
               <input
                  type="url"
                  value={state.github}
                  onChange={handleGithubChange}
               />
            </label>

            <Link to="/step2" className="backButton">
               Voltar
            </Link>
            <button onClick={handleSendCadaster}>Finalizar Cadastro</button>
         </C.Container>
         <Toaster position="top-right" reverseOrder={true} />
      </Theme>
   );
}
