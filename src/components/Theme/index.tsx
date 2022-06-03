import { ReactNode } from "react";
import { Header } from "../Header";
import { ItemSidebar } from "../ItemSidebar";
import * as C from "./styles";
import { useForm } from '../../contexts/FormContext'

type Props = {
   children: ReactNode;
};

export function Theme({ children }: Props) {
    const { state } = useForm()

   return (
      <C.Container>
         <C.Area>
            <Header />

            <C.Steps>
               <C.Sidebar>
                  <ItemSidebar
                     title="Pessoal"
                     description="Se identifique"
                     icon="profile"
                     path="/"
                     active = {state.currentStep === 1 }
                  />
                  <ItemSidebar
                     title="Profissional"
                     description="Seu nível"
                     icon="book"
                     path="/step2"
                     active = {state.currentStep === 2 }
                  />
                  <ItemSidebar
                     title="Contatos"
                     description="Como te achar"
                     icon="mail"
                     path="/step3"
                     active = {state.currentStep === 3 }
                  />
               </C.Sidebar>
               <C.Page>{children}</C.Page>
            </C.Steps>
         </C.Area>
      </C.Container>
   );
}
