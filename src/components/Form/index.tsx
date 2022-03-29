import React, { useState } from "react";
import { ITarefa } from "../../types/tarefas";
import Botao from "../Button";
import './Form.scss';
import { v4 as uuidv4 } from 'uuid';


// usando function component
interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({ setTarefas}:Props ) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionarTarefa(evento:React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas,
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false, 
                    id: uuidv4()
                }
            ]
        );
        setTarefa("");
        setTempo("00:00");
    }

    return (
        <form className="novaTarefa" onSubmit={adicionarTarefa}>
                <div className="inputContainer">
                    <label htmlFor="tarefa">
                        Tarefa
                    </label>
                    <input 
                        type="text" 
                        name="tarefa" 
                        id="tarefa" 
                        value={tarefa}
                        onChange={evento => setTarefa(evento.target.value)}
                        placeholder="O que você quer estudar" 
                        required 
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                        type="time" 
                        step="1" 
                        name="tempo" 
                        id="tempo" 
                        value={tempo}
                        onChange={evento => setTempo(evento.target.value)}
                        min="00:00:00" 
                        max="01:30:00" 
                        required
                    />
                </div>
                <Botao type="submit">
                    Adcionar
                </Botao>
            </form>
    )
}


// usando class component
class Formulario1 extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}>{
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento:React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas,
                {
                    ...this.state,
                    selecionado: false,
                    completado: false, 
                    id: uuidv4()
                }
            ]
        );
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
    }

    render(){
        return(
            <form className="novaTarefa" onSubmit={this.adicionarTarefa.bind(this)}>
                <div className="inputContainer">
                    <label htmlFor="tarefa">
                        Tarefa
                    </label>
                    <input 
                        type="text" 
                        name="tarefa" 
                        id="tarefa" 
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa : evento.target.value})}
                        placeholder="O que você quer estudar" 
                        required 
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                        type="time" 
                        step="1" 
                        name="tempo" 
                        id="tempo" 
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                        min="00:00:00" 
                        max="01:30:00" 
                        required
                    />
                </div>
                <Botao type="submit">
                    Adcionar
                </Botao>
            </form>
        )
    }
}

export default Formulario;