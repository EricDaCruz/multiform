import { useNavigate } from 'react-router-dom';
import * as C from './styles'
import {useForm, FormActions} from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';

export function FormStep1(){
    const navigate = useNavigate();
    const {state, dispatch} = useForm()

    useEffect(()=>{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    const handleNextStep = () => {
        if(state.name != ''){
            navigate('/step2')
        }else{
            toast.error("Preencha os dados")
        }
    }

    const handleNameChange = (e :ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr />

                <label>
                    Seu nome completo
                    <input 
                        autoFocus
                        type="text"
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>
                    Próximo
                </button>
            </C.Container>
            <Toaster position="top-right" reverseOrder={true}/>
        </Theme>
    )
}