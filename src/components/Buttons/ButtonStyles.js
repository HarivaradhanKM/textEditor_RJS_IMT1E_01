import styled from 'styled-components'

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 5px;
`

export const BoldButton = styled(Button)`
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
`

export const ItalicButton = styled(Button)`
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
`

export const UnderlineButton = styled(Button)`
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
`

export const TextArea = styled.textarea`
  font-weight: ${props => (props.isBoldActive ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalicActive ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderlineActive ? 'underline' : 'none')};
  width: 100%;
  height: 200px;
  margin-top: 10px;
`
