import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 24px;
  border-radius: 8px;
  margin-top: 14px;
`

export const Info = styled.textarea`
  color: ${variaveis.azulEscuro};
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  font-family: 'Open sans', sans-serif;
  background-color: transparent;
  border: none;
  resize: none;
  display: block;
  width: 100%;
`
