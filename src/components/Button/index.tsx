import React from "react";
import './Botao.scss';

class Botao extends React.Component<{
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