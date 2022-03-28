import React from "react";
import './Botao.scss';

class Botao extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined
}> {

    render() {
        const { type = "button"} = this.props;
        return(
            <button type={type} className="botao">
                {this.props.children}
            </button>
        )
    }
}

export default Botao;