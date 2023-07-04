import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Botao } from '../components/contatos/styles'

export const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  list-style: none;
}`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
