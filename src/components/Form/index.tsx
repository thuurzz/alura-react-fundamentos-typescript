import React from "react";
import { ITarefa } from "../../types/tarefas";
import Botao from "../Button";
import './Form.scss';

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}>{
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento:React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}]);
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