import React, { useState } from 'react'
import { ITarefa } from 'src/interface/tarefa'
import './Formulario.scss'

export const Formulario = ({handleCriaTarefa}: any) => {

  const [tarefa, setTarefa] = useState<ITarefa>({status: false, nome:``})

  const handleSubmit = async (tarefa: ITarefa) => {
    if(tarefa.nome !== ``){
      await handleCriaTarefa(tarefa)
    }
    setTarefa({status: false, nome:``})
  }

  return(
    <div className = "form" >
      <input id="standard-basic" type = "text" placeholder= "Nova Tarefa" value= {tarefa.nome} onChange={(event) => {setTarefa({status: false, nome : event.target.value})}}/>
      <button className="button-form" onClick={() => handleSubmit(tarefa)}>Salvar</button>
    </div>
  )
}