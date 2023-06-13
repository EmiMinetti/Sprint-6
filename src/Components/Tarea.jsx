export const Tarea = (props) => {
    return <div className={props.estado===false?`tareaSt${props.theme}`:`tareaStCompleted${props.theme}`}>
        <div className="divTarea">
            <input className="checkInput" checked={props.estado} onChange={() => props.handleChecked(props.index)} type="checkbox" />
            <p className="contenidoTarea">{props.tarea}</p>
        </div>
        <button onClick={() => props.handleDelete(props.index)} className="btnTarea"><img src="../../../public/Images/icon-cross.svg" alt="" /></button>
    </div> 
}