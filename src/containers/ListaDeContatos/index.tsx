import { useSelector } from 'react-redux'

import Contatos from '../../components/contatos'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <>
      <Container>
        <ul>
          {itens.map((c) => (
            <li key={c.titulo}>
              <Contatos
                id={c.id}
                titulo={c.titulo}
                telefone={c.telefone}
                email={c.email}
              />
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

export default ListaDeContatos
