import { useEffect, useState } from 'react';
import './App.css'
import { Hero } from './Components/Header'

function App() {
  const [theme, setTheme] = useState("sun");
  const [tareas, setTareas] = useState([]);
  const [mitarea, setMitarea] = useState ("");
  const [filter, setFilter] = useState ("todas");
  const [checkTareas, setCheckTareas]= useState (true);

  const handleTarea = (e) => {
      setMitarea(e.target.value);
  }
  
  const agregarTarea = (mitarea) => {
      setTareas([...tareas, {mensaje: mitarea, completed: false}]);
      setMitarea("");
    }

  const handleSubmit = (event) => {
        event.preventDefault();
         agregarTarea(mitarea);
  };

  const handleChecked = (index) => {
    const listaTareas = tareas.map((tarea, i) => {
      if (i === index) {
        return {...tarea, completed: !tarea.completed};
      }
      return tarea;
    });  
    setTareas(listaTareas);
  };

  const handleClearCompleted = () => {
    setTareas(tareas.filter((tarea)=> tarea.completed === false));
  }

  const handleDelete = (index) => {
    const tareasAux = tareas.filter((_, i) => i !== index);
    setTareas(tareasAux);
  };

  const handleCompleteGral = () => {
    setCheckTareas(!checkTareas)
    const mistareas = tareas.map((tarea)=>{
      return { ...tarea, completed: checkTareas};
    });
    setTareas(mistareas)
  }

  let tareasFiltradas = tareas
  if (filter==="completadas") {
    tareasFiltradas=tareas.filter((tarea)=> tarea.completed === true);
  }
  if (filter==="pendientes") {
    tareasFiltradas=tareas.filter((tarea)=> tarea.completed === false);   
  }
  if (filter==="todas") {
    tareasFiltradas=tareas;   
  }

  let tareasActivas = tareas.filter((tarea) => tarea.completed === false).length; 




  return (
    <>
        <Hero checkTareas={checkTareas} handleCompleteGral={handleCompleteGral} tareasActivas={tareasActivas}  handleDelete={handleDelete} handleClearCompleted={handleClearCompleted} setFilter={setFilter} tareasFiltradas={tareasFiltradas} handleChecked={handleChecked} mitarea={mitarea} tareas={tareas} theme={theme} setTheme={setTheme} handleTarea={handleTarea} agregarTarea={agregarTarea} handleSubmit={handleSubmit} />
    </>
  )
}

export default App
