import { useState } from "react"
import { ListaReservas } from "./ListaDeReservas"



export const Hero = (props) => {
    return <div className={`${props.theme}Hero`}>
        <div className="contenHero">
            <div className="textAndMoon">
                <h1 className="textTodo">TODO</h1>
                <button className="buttHero"
                    onClick={() => props.setTheme(props.theme === "sun" ? "moon" : "sun")}
                >
                    <img className="lunaHero" src={`/Images/icon-${props.theme}.svg`} alt="" />
                </button>
                </div>
            <div className="fullStack">
                <form onSubmit={props.handleSubmit} className={`${props.theme}Input`}>
                    <input onChange={()=> props.handleCompleteGral()} className="checkInput" type="checkbox" />
                    <input value={props.mitarea} onChange={props.handleTarea} className="inputText" type="text" placeholder="Create a new todo... " />
                </form>   
                <ListaReservas theme={props.theme} tareasActivas={props.tareasActivas} handleDelete={props.handleDelete} handleClearCompleted={props.handleClearCompleted} setFilter={props.setFilter} tareasFiltradas={props.tareasFiltradas} handleChecked={props.handleChecked} tareas={props.tareas} mitarea={props.mitarea}/>
                <div className="pieTodo">
                    <p>Full Stack Developer Bootcamp</p>
                    <p>Cadede by <a href="">Angatupyry.</a></p>
                </div>
            </div>
        </div>
    </div>
}