import Botao from "../Button"
import Relogio from "./Relogio"
import './Cronometro.scss'
import { tempoParaSegundos } from "../../common/utils/date"

export default function Cronometro() {
    console.log("Conversão: ", tempoParaSegundos("01:01:01"))
    return(
        <div className="cronometro">
            <p className="titulo">Escolha um Card e inicie o cronômetro:</p>
            <div className="relogioWrapper">
                <Relogio />
            </div>
            <Botao>
                Começar
            </Botao>
        </div>
    )
}