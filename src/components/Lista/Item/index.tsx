import './Item.scss';
import React from 'react';
import { ITarefa } from '../../../types/tarefas';

interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({ tarefa, tempo, selecionado, completado, id , selecionaTarefa }: Props) {
    return(
        <li className={`${"item"} ${selecionado ? "itemSelecionado" : ""}`} onClick={() => selecionaTarefa({
            tarefa, tempo, selecionado, completado, id
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}