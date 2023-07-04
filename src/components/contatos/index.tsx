import { useDispatch } from 'react-redux'
import { FormEvent, useEffect, useState } from 'react'
import * as S from './styles'

import { cadastrar, editar, remover } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'
import { BotaoSalvar } from '../../styles'
import { Form } from 'react-router-dom'

type Props = Contato

const Contatos = ({
  titulo: tituloOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [titulo, setTitulo] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(titulo, telefone, email, 3)

    dispatch(cadastrar(contatoParaAdicionar))
  }

  useEffect(() => {
    if (tituloOriginal.length > 0) {
      setTitulo(tituloOriginal)
    }
  }, [tituloOriginal])

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setTitulo(tituloOriginal)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
  }

  return (
    <>
      <S.Card className={modalEstaAberto ? 'visivel' : ''}>
        <S.Info
          placeholder="Nome Completo"
          disabled={!estaEditando}
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
        />
        <S.Info
          placeholder="Telefone"
          disabled={!estaEditando}
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        />
        <S.Info
          placeholder="E-mail"
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <S.BarraAcoes>
          {estaEditando ? (
            <>
              <BotaoSalvar
                onClick={() => {
                  dispatch(
                    editar({
                      id,
                      titulo,
                      telefone,
                      email
                    })
                  )
                  setEstaEditando(false)
                }}
              >
                Salvar
              </BotaoSalvar>
              <S.BotaoCancelarRemover onClick={cancelarEdicao}>
                Cancelar
              </S.BotaoCancelarRemover>
            </>
          ) : (
            <>
              <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
              <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
                Remover
              </S.BotaoCancelarRemover>
            </>
          )}
        </S.BarraAcoes>
      </S.Card>

      <S.BotaoAdicionar onClick={() => setModalEstaAberto(true)}>
        +
      </S.BotaoAdicionar>

      <S.ModalContainer className={modalEstaAberto ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <h1>Cadastrar Contato</h1>
          <S.Close onClick={() => setModalEstaAberto(false)}>X</S.Close>
          <Form onSubmit={cadastrarContato} className="position">
            <S.Info
              placeholder="Nome Completo"
              value={titulo}
              onChange={(evento) => setTitulo(evento.target.value)}
            />
            <S.Info
              placeholder="Telefone"
              value={telefone}
              onChange={(evento) => setTelefone(evento.target.value)}
            />
            <S.Info
              placeholder="E-mail"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <div className="position-button">
              <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
            </div>
          </Form>
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </S.ModalContainer>
    </>
  )
}

export default Contatos
