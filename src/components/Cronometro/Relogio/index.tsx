import "./Relogio.scss";

interface Props {
    tempo: number | undefined;
}

export default function Relogio({ tempo = 0 }: Props) {
    const minutos = Math.floor(tempo / 60);
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, "0")
    const segundos = (tempo % 60);
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, "0")
    return(
        <>
        <span className="relogioNumero">{minutoDezena}</span>
        <span className="relogioNumero">{minutoUnidade}</span>
        <span className="relogioDivisao">:</span>
        <span className="relogioNumero">{segundoDezena}</span>
        <span className="relogioNumero">{segundoUnidade}</span>
        </>
    )
}