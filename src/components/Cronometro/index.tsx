import Botao from "../Button"
import Relogio from "./Relogio"
import './Cronometro.scss'
import { tempoParaSegundos } from "../../common/utils/time"
import { ITarefa } from "../../types/tarefas";
import { useEffect, useState } from "react";

interface Props{
    selecionado: ITarefa | undefined;
}

export default function Cronometro({ selecionado }: Props) {
    const [tempo, setTempo] = useState<number>();
    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado?.tempo))
        }
    }, [selecionado])

    
    function regressiva(contador:number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
        }, 1000)
    }

    return(
        <div className="cronometro">
            <p className="titulo">Escolha um Card e inicie o cronômetro:</p>
            <div className="relogioWrapper">
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={()=> regressiva(tempo)}>
                Começar
            </Botao>
        </div>
    )
}