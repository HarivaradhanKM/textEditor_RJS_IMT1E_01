import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #25262c;
  color: #f8fafc;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: row;
  padding: 75px;
  border: 1px solid white;
`
export const TextWithImageContainer = styled.div`
  border: none;
  padding: 15px;
  height: 80vh;
  width: 100%;
  background-color: #1b1c22;
  display: flex;
  justify-content: space-between;
`
export const ImageContainer = styled.div`
  background-color: #1b1c22;
  margin-left: 45px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const MainHeading = styled.h1`
  font: bold 25px Roboto;
  color: #f8fafc;
  text-align: center;
  margin-bottom: 100px;
`
export const TextEditorImage = styled.img`
  height: 300px;
  width: 350px;
`
export const EditorContainer = styled.div`
  width: 50%;
  background-color: #25262c;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2.8px 2.2px 0px;
  border-radius: 10px;
  margin-left: 10px;
  border: 0.05px solid #cbd5e1;
`
export const IconContainer = styled.ul`
  height: 50px;
  border: 0.05px solid #cbd5e1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  background-color: #25262c;
  color: #f1f5f9;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
`

export const IconListContainer = styled.li`
  list-style-type: none;
`

export const BoldButton = styled.button`
  background-color: transparent;
  font: 400 25px Roboto;
  color: ${props => props.color};
  border: none;
  margin-left: 20px;
  margin: 10px;
  list-style-type: none;
`
export const ItalicButton = styled.button`
  background-color: transparent;
  font: 25px Roboto;
  font-style: italic;
  color: ${props => props.color};
  border: none;
  margin: 10px;
  list-style-type: none;
`
export const UnderlineButton = styled.button`
  background-color: transparent;
  font: 22px Roboto;
  text-decoration: underline;
  color: ${props => props.color};
  border: none;
  margin: 10px;
  list-style-type: none;
`
