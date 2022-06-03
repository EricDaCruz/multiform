import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { SelectOptions } from "../../components/SelectOptions";
import { useEffect } from "react";

export function FormStep2() {
   const navigate = useNavigate();
   const { state, dispatch } = useForm();

   useEffect(() => {
      if (state.name === "") {
         navigate("/");
      } else {
         dispatch({
            type: FormActions.setCurrentStep,
            payload: 2,
         });
      }
   }, []);

   const handleNextStep = () => {
      navigate("/step3");
   };

   const setLevel = (level: number) => {
      dispatch({
         type: FormActions.setLevel,
         payload: level,
      });
   };

   return (
      <Theme>
         <C.Container>
            <p>Passo {state.currentStep}/3</p>
            <h1>{state.name}, o que melhor descreve você</h1>
            <p>Escolha a que você se identifica.</p>

            <hr />

            <SelectOptions
               title="Sou iniciante"
               description="Comecei a programar há menos de 2 anos"
               icon="🥳"
               selected={state.level === 0}
               onClick={() => setLevel(0)}
            />

            <SelectOptions
               title="Sou programador"
               description="Já programo há 2 anos ou mais"
               icon="😎"
               selected={state.level === 1}
               onClick={() => setLevel(1)}
            />

            <Link to="/" className="backButton">Voltar</Link>
            <button onClick={handleNextStep}>Próximo</button>
         </C.Container>
      </Theme>
   );
}
