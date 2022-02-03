import React from 'react'
import PropTypes from 'prop-types'

import { FaEdit, FaWindowClose } from 'react-icons/fa'
import './style.css'

export default function Tarefas({
  handleClickEdit, handleClickDelete, handleKeyDown, tarefas, indice,
}) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li tabIndex="0" className={indice === index ? 'editing' : ''} key={tarefa} onKeyDown={(e) => handleKeyDown(e, index)}>
          {tarefa}
          <span>
            <FaEdit onClick={(e) => handleClickEdit(e, index)} className="edit" />
            <FaWindowClose onClick={(e) => handleClickDelete(e, index)} className="delete" />
          </span>
        </li>
      ))}
    </ul>
  )
}

Tarefas.propTypes = {
  handleClickEdit: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired,
  indice: PropTypes.number.isRequired,
}
