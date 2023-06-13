import { useState } from 'react';
import { Tarea } from "./Tarea"

export const ListaReservas = ({ theme, tareas, handleChecked, tareasFiltradas, setFilter, handleClearCompleted, handleDelete, tareasActivas }) => {
  const [activeButton, setActiveButton] = useState("");

  const handleClick = (filter) => {
    setFilter(filter);
    setActiveButton(filter);
  };

  return (
    <>
      {tareas.length > 0 && (
        <div className={`listaSt${theme}`}>
          {tareasFiltradas.map((mitarea, index) => {
            return (
              <Tarea
                theme={theme}
                handleDelete={handleDelete}
                handleChecked={handleChecked}
                key={index}
                index={index}
                tareas={tareas}
                tarea={mitarea.mensaje}
                estado={mitarea.completed}
              />
            );
          })}
          <div className="pieLista">
            <p>{tareasActivas} items left</p>
            <div className="centroPie">
              <button
                onClick={() => handleClick("todas")}
                className={activeButton === "todas" ? "btnCentroPie active" : "btnCentroPie"}
              >
                All
              </button>
              <button
                onClick={() => handleClick("pendientes")}
                className={activeButton === "pendientes" ? "btnCentroPie active" : "btnCentroPie"}
              >
                Active
              </button>
              <button
                onClick={() => handleClick("completadas")}
                className={activeButton === "completadas" ? "btnCentroPie active" : "btnCentroPie"}
              >
                Completed
              </button>
            </div>
            <button onClick={() => handleClearCompleted()} className="btnCentroPie">
              Clear completed
            </button>
          </div>
        </div>
      )}
    </>
  );
}






