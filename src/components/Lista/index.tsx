import { ITarefa } from "../../types/tarefas";
import Item from "./Item";
import './Lista.scss';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: Props) {
    return(
        <aside className="listaTarefas">
        <h2>Tarefas
        </h2>
            <ul>
                {tarefas.map((item) => ( 
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                   />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;