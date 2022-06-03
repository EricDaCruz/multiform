 import {Router} from './router'
 import { FormProvider } from './contexts/FormContext'

 export function App (){
  return(
   <FormProvider>
       <Router />
   </FormProvider>
  )

 }