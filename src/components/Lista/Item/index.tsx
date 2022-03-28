import '../Lista.scss';
import React from 'react';
import { ITarefa } from '../../../types/tarefas';

interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({ tarefa, tempo, selecionado, completado, id , selecionaTarefa }: Props) {
    console.log("Item atual: ", {tarefa, tempo, selecionado, completado, id })
    return(
        <li className="item" onClick={() => selecionaTarefa({
            tarefa, tempo, selecionado, completado, id
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}