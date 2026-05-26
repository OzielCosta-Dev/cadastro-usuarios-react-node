
import { useRef } from 'react'    
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'


import { Title, Container, Form, ContainerInputs, Input, InputLabel } from './styles'


import Button from '../../componets/Button'
import TopBackground from '../../componets/background'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const navigate = useNavigate()

  async function registerNewUser() {
    try {
      await api.post('/usuarios', {
        email: inputEmail.current.value,
        age: parseInt(inputAge.current.value),
        name: inputName.current.value,
      })

      navigate('/lista-de-usuarios')
    } catch (error) {
      console.error(error)
      alert('Nao foi possivel cadastrar o usuario. Verifique se a API esta ligada.')
    }

  }

  return (
    <Container>
      <TopBackground />

      <Form>
        <Title>Cadastro de Usuários</Title>
        <ContainerInputs>

          <div>
            <InputLabel>Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do Usuário" ref={inputAge} />
          </div>

        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>
            Email<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="Email do Usuário" ref={inputEmail} />
        </div>

        <Button type='button' onClick={registerNewUser} theme="primary" border="none">
          Cadastrar Usuário
        </Button>
      </Form>


      <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>
        Ver Lista de Usuários
      </Button>


    </Container>



  )

}


export default Home  /* uma coisa só por página. */


/* 
   Exportar "Padrão" uma coisa só por página.
   apenas Exportar.


*/
