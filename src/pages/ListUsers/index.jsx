import { useEffect, useState } from 'react'
import api from '../../services/api'
import Button from '../../componets/Button'
import TopBackground from '../../componets/background'
import { useNavigate } from 'react-router-dom'

import Trash from '../../assets/trash.svg'
import { Container, Title, ContainerUsers, CardUsers, TrashIcon, AvatarUser } from './styles'




function ListUsers() {
    
    const navigate = useNavigate()
    
    const [users, setUsers] = useState([])
    const getAvatarUrl = (user) => {
        const username = user.name || user.email || String(user.id)

        return `https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${encodeURIComponent(username)}`
    }

    // Toda vez que a tela carrega, o useEffect é chamado
    // Toda vez que uma determinada variável Muda de valor, ele é chamado.
    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')
            setUsers(data)
        }

        getUsers()

    }, [])

    
    async function deleteUsers(id) {
        setUsers(currentUsers => currentUsers.filter(user => user.id !== id))

        await api.delete(`/usuarios/${id}`)
    }

        // Atualiza a lista de usuários após a exclusão
    return (
        <Container>
            <TopBackground />
            <Title>Lista de Usuarios</Title>
           <ContainerUsers>
            {users.map(user => (
                <CardUsers key={user.id}>
                  <AvatarUser
                    src={getAvatarUrl(user)}
                    alt={`Avatar de ${user.name}`}
                  />
                <div >
                    <h3>{user.name}</h3>
                     <p>{user.age}</p>
                    <p>{user.email}</p>
                   
                </div>
                <TrashIcon src={Trash} alt="Excluir" onClick={() => deleteUsers(user.id)} />
                </CardUsers>
            ))}
            </ContainerUsers>

            <Button type='button' onClick={() => navigate('/')}>
                Voltar
            </Button>
        </Container>
    )
}

export default ListUsers
