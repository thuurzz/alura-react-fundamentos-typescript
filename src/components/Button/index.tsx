import React from "react";
import './Botao.scss';



// versao abaixo usando function component
interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode;
}

function Botao({ onClick, type, children }: Props) {
    return(
        <button onClick={onClick} type={type} className="botao">
            {children}
        </button>
    )
}


// versao abaixo usando class component
class Botao1 extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined,
    onClick? : () => void;
}> {
    render() {
        const { type = "button", onClick } = this.props;
        return(
            <button onClick={onClick} type={type} className="botao">
                {this.props.children}
            </button>
        )
    }
}

export default Botao;