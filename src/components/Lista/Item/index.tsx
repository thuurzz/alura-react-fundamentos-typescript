import '../Lista.scss';
import React from 'react';
import { ITarefa } from '../../../types/tarefas';

export default function Item({ tarefa, tempo, selecionado, completado, id }: ITarefa) {
    console.log("Item atual: ", {tarefa, tempo, selecionado, completado, id })
    return(
        <li className="item">
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}