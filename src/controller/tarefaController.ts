import { ObjectId } from "mongodb"
import { ConectaBd} from "src/database/mongo"
import { ITarefa } from "src/interface/tarefa"

export const CriaTarefa = async (tarefa: ITarefa) => {
  const resultado = (await ConectaBd()).collection(`tarefas`).insertOne(tarefa)
  return resultado
}

export const EncontraTarefa = async (id: string) => {
  const resultado = (await ConectaBd()).collection(`tarefas`).findOne({_id: new ObjectId(id) })
  return resultado
}

export const EncontraTodas = async () => {
  const resultado = (await ConectaBd()).collection(`tarefas`).find({}).sort({status: 1}).toArray()
  return resultado
}

//updateOne -> por id
//findOneAndUpdate -> por tarefa
export const AlteraTarefa = async (id: string, tarefa: ITarefa | any) => {
  const resultado = (await ConectaBd()).collection(`tarefas`).updateOne({_id: new ObjectId(id)}, {$set: tarefa})
  return resultado
}

export const DeletaTarefa = async (id: string) => {
  const resultado = (await ConectaBd()).collection(`tarefas`).deleteOne({_id: new ObjectId(id)})
  return resultado
}