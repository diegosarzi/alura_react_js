import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    const aoSelecionado = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={aoSelecionado} value={props.valor} required={props.obrigatorio}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )    
}

export default ListaSuspensa;