import React, { Component } from 'react'
import './Main.css'

import Form from './Form'
import Tarefas from './Tarefas'

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    indice: -1,
  }

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))
    if (tarefas) this.setState({ tarefas })
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state
    if (tarefas === prevState.tarefas) return
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }

  setFocus = () => {
    document.querySelector('input[type="text"').focus()
  }

  handleClickDelete = (e, index) => {
    const { tarefas } = this.state
    tarefas.splice(index, 1)
    this.setState({
      tarefas: [...tarefas],
    })
    this.setFocus()
  }

  handleClickEdit = (e, index) => {
    const { tarefas } = this.state
    this.setState({
      indice: index,
      novaTarefa: tarefas[index],
    })
    this.setFocus()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { tarefas, indice } = this.state
    let { novaTarefa } = this.state
    novaTarefa = novaTarefa.trim()
    if (indice !== -1) {
      tarefas[indice] = novaTarefa
    } else {
      if (tarefas.indexOf(novaTarefa) !== -1) return
      tarefas.push(novaTarefa)
    }
    this.setState({
      tarefas: [...tarefas],
      novaTarefa: '',
      indice: -1,
    })
    this.setFocus()
  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    })
  }

  handleKeyDown = (e, index) => {
    if (e.key === 'Enter') return this.handleClickEdit(e, index)
    if (e.key === 'Delete') return this.handleClickDelete(e, index)
    return false
  }

  render() {
    const { novaTarefa, tarefas, indice } = this.state
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />
        <Tarefas
          handleClickEdit={this.handleClickEdit}
          handleClickDelete={this.handleClickDelete}
          handleKeyDown={this.handleKeyDown}
          tarefas={tarefas}
          indice={indice}
        />
      </div>
    )
  }
}
