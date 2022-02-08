import React, { useEffect, useState } from 'react'
import { get } from 'lodash'
import { Link } from 'react-router-dom'
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa'

import { toast } from 'react-toastify'
import { AlunoContainer, ProfilePicture } from './styled'
import Loading from '../../components/Loading'
import { Container } from '../../styles/GlobalStyles'
import axios from '../../services/axios'

export default function Alunos() {
  const [alunos, setAlunos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true)
        const response = await axios.get('/alunos')
        setTimeout(() => {
          // set time out simulando o delay do servidor
          setAlunos(response.data)
          setIsLoading(false)
        }, 2000)
      } catch (error) {
        toast.error('Não foi possivel carregar os alunos. Favor fazer o login')
      }
    }
    getData()
  }, [])
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Alunos</h1>
      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Photos[0].url', false) ? (
                <img
                  src={aluno.Photos[1].url}
                  alt="teste"
                  crossOrigin="use-credentials"
                />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.sobrenome}</span>
            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} />
            </Link>
            <Link to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  )
}
