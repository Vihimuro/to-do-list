import { MongoClient } from "mongodb"

const url = `mongodb://localhost:27017`
const client = new MongoClient(url)

const dataBase = `electronchallenge`

async function bdconnect() {
  return (await client.connect())
}

export async function ConectaBd() {
  return (await bdconnect()).db(dataBase)
}   

export async function DesconectaBd() {
  return (await bdconnect()).close()
}

export async function criaCollectionTarefas() {
  return (await ConectaBd()).createCollection(`tarefas`, () =>{})
}