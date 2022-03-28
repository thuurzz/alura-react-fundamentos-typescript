import Botao from "../Button"
import Relogio from "./Relogio"
import './Cronometro.scss'
import { tempoParaSegundos } from "../../common/utils/time"
import { ITarefa } from "../../types/tarefas";
import { useState } from "react";

interface Props{
    selecionado: ITarefa | undefined;
}

export default function Cronometro({selecionado}:Props) {
    const [tempo, setTtempo] = useState<number>();
    if (selecionado?.tempo) setTtempo(tempoParaSegundos(selecionado.tempo));
    return(
        <div className="cronometro">
            <p className="titulo">Escolha um Card e inicie o cronômetro:</p>
            Tempo:{tempo}
            <div className="relogioWrapper">
                <Relogio />
            </div>
            <Botao>
                Começar
            </Botao>
        </div>
    )
}