import {IoPencilOutline, IoTrashBin } from "react-icons/io5"
import './ListaTarefas.scss'
export const ListaTarefas = ({lista, handleStatus, handleDeleta, handleAltera}: any) => {

  return (
    <div className="lista">
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Tarefa</th>
            <th>Alterar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(lista).map((tarefa: any) => (
            <tr key={tarefa[1]._id}>
              <td> 
                <input type="checkbox" checked={tarefa[1].status} onChange={(event) => {handleStatus(tarefa[1]._id, event.target.checked)}}></input>
              </td>
              <td className = {((tarefa[1].status === true) ? `isConluida` : `null`)}> {tarefa[1].nome}</td>
              <td>
                <IoPencilOutline onClick={() => handleAltera(tarefa[1]._id)}></IoPencilOutline>
              </td>
              <td>
                <IoTrashBin onClick={() => handleDeleta(tarefa[1]._id)}></IoTrashBin>
              </td>
            </tr>
          ))}          
        </tbody>
      </table>  
    </div>

  )
}

