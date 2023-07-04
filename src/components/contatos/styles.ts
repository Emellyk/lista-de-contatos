import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: ${variaveis.azul};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 24px;
  border-radius: 8px;
  margin-top: 14px;
`

export const Info = styled.textarea`
  color: ${variaveis.azulEscuro};
  font-size: 16px;
  padding: 8px 16px;
  font-family: 'Open sans', sans-serif;
  background-color: ${variaveis.azul};
  border: none;
  border-radius: 8px;
  resize: none;
  display: block;
  width: 100%;
`

export const BarraAcoes = styled.div`
  background-color: ${variaveis.azulEscuro};
  padding: 14px;
  border-radius: 0 0 8px 8px;
`

export const Botao = styled.a`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.btnEditar};
  border-radius: 8px;
  margin: 10px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const BotaoAdicionar = styled.button`
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
`

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    height: 1624px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const ModalContent = styled.div`
  position: relative;
  height: 470px;
  width: 986px;
  margin-top: -30px;
  margin-left: -60px;
  background-color: ${variaveis.azul};
  z-index: 1;
  max-width: 1024px;
  align-items: center;
  display: block;
  padding: 32px;
  border-radius: 8px;

  h1 {
    text-align: center;
    color: ${variaveis.azulEscuro};
  }

  .position {
    margin-top: 50px;
    display: block;
    background-color: transparent !important;
  }

  .position-button {
    margin-top: 30px;
  }
`

export const Close = styled.button`
  border: none;
  position: absolute;
  font-weight: bold;
  top: 8px;
  right: 14px;
  cursor: pointer;
  color: ${variaveis.azulEscuro};
  background-color: transparent;
`
