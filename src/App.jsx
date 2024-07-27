import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { Titulo, Container, Lista, Input, Button, Ul, ListaTarefas, Trash, Check } from './styles.js'

function App() {
  const [list, setList] = useState([])
  const [task, setTask] = useState('')


  function inputTarefa(event) {
    setTask(event.target.value)

  }

  function adicionarTarefa() {
    if(task) {
      setList([...list, { id: uuid(), task, finished: false }])
    }
  }

  function finalizarTarefa(id) {
    const newList = list.map(iten => (
      iten.id == id ? { ...iten, finished: !iten.finished } : iten
    ))

    setList(newList)
  }

  function deletarIten(id) {
    const itenDeletado = list.filter(iten => (
      iten.id !== id
    ))


    setList(itenDeletado)
  }

  return (
    <Container>

      <Titulo>
        Lista de Tarefas
      </Titulo>

      <Lista>

        <Input onChange={inputTarefa} placeholder="Digite sua tarefa" />
        <Button onClick={adicionarTarefa} >Adicionar</Button>

        <Ul>
          {
            list.length > 0 ? (
              list.map(iten => (
                <ListaTarefas isFinished={iten.finished} key={iten.id}>
                  < Check onClick={() => finalizarTarefa(iten.id)} />
                  <li >{iten.task}</li>
                  <Trash onClick={() => deletarIten(iten.id)} />
                </ListaTarefas>
              ))
            ) : (
              <h3>Lista vazia</h3>
            )
          }
        </Ul>
      </Lista>
    </Container>


  )
}

export default App
