import React, { useEffect, useState } from 'react'
import './app.scss'
import { Formulario } from 'src/components/Formulario'
import { ITarefa } from 'src/interface/tarefa'
import { AlteraTarefa, CriaTarefa, DeletaTarefa, EncontraTodas } from 'src/controller/tarefaController'
import { ListaTarefas } from 'src/components/ListaTarefas'

export const App: React.FC = () => {

  const smalltalk = require(`smalltalk`)
  const [lista, setLista] = useState<any>([])

  const listaTarefa = async () => {
    await EncontraTodas().then((data) => {
      setLista({ ...data })
    })
  }

  useEffect(() => {
    listaTarefa()
  }, [])

  const handleCriaTarefa = async (tarefa : ITarefa) => {
    await CriaTarefa(tarefa)
    await listaTarefa()
  }

  const handleStatus = async (id: string, status: boolean) => {
    const tarefa = { "status": status}
    await AlteraTarefa(id, tarefa)
    await listaTarefa()
  }

  const handleDeleta = async (id:string) => {
    await DeletaTarefa(id)
    await listaTarefa()
  }

  const handleAltera = async (id:string, nome:string) => {
    await smalltalk
      .prompt(`Alterar`, `Novo nome:`, nome, {type: `text`}) 
      .then((value: string) => {
        nome = value
      })
      .catch(() => {

      })
    if (nome !== ``) {
      const tarefa = {"nome": nome}
      await AlteraTarefa(id, tarefa)
    }
    await listaTarefa()
  }



  return (
    <div className="App">
      <div className="App-header">
        <h1>Todo List</h1>
      </div>
      <div className="Form">
        <Formulario handleCriaTarefa={handleCriaTarefa}/>
      </div>
      <div className="Lista">
        <ListaTarefas lista={lista} handleStatus={handleStatus} handleDeleta={handleDeleta} handleAltera={handleAltera}/>
      </div>
    </div>
  )
}
