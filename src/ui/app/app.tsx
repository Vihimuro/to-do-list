import React, { useEffect, useState } from 'react'
import './app.scss'
import { Formulario } from 'src/components/Formulario'
//import { ListaTarefas } from 'src/components/ListaTarefas'
import { ITarefa } from 'src/interface/tarefa'
import { AlteraTarefa, CriaTarefa, DeletaTarefa, EncontraTodas } from 'src/controller/tarefaController'
import { ListaTarefas } from 'src/components/ListaTarefas'
import { usePrompt } from 'use-prompt'

export const App: React.FC = () => {

  const [lista, setLista] = useState<any>([])
  const [prompt, showPrompt, visible] = usePrompt()
  const [cancelReason, setCancelReason] = useState<any>(null)
  const [confirmResponse, setConfirmResponse] = useState<any>(null)
  const [name, setName] = useState<String>(``)

  async function showMyPrompt() {
    try {
      setCancelReason(null)
      setConfirmResponse(null)
      const response = await showPrompt(({ resolve, reject }) => (
        <div className="prompt" onClick={resolve}>
          <div onClick={(event) => event.stopPropagation()}>
            <div className="question">Are you sure?</div>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => reject(`clicked cancel`)}>Cancel</button>
            <button onClick={() => resolve(name)}>Yes</button>
          </div>
        </div>
      ))
      setConfirmResponse(response)
    } catch (reason) {
      setCancelReason(reason)
    }
  }

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

  const handleAltera = async (id:string) => {
    await showMyPrompt() 
    if (name !== ``) {
      const tarefa = {"nome": name}
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

//<ListaTarefas/>