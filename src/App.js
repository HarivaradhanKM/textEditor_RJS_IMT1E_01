import {useState} from 'react'
import './App.css'
import {
  MainContainer,
  TextWithImageContainer,
  MainHeading,
  ImageContainer,
  TextEditorImage,
  EditorContainer,
  IconContainer,
  IconListContainer,
  BoldButton,
  ItalicButton,
  UnderlineButton,
} from './styledComponents'

const App = () => {
  const [isBoldActive, setIsBoldActive] = useState(false)
  const [isItalicActive, setIsItalicActive] = useState(false)
  const [isUnderlineActive, setIsUnderlineActive] = useState(false)

  const handleBoldClick = () => {
    setIsBoldActive(!isBoldActive)
  }

  const handleItalicClick = () => {
    setIsItalicActive(!isItalicActive)
  }

  const handleUnderlineClick = () => {
    setIsUnderlineActive(!isUnderlineActive)
  }

  return (
    <MainContainer>
      <TextWithImageContainer>
        <ImageContainer>
          <MainHeading>Text Editor</MainHeading>
          <TextEditorImage
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </ImageContainer>
        <EditorContainer>
          <IconContainer>
            <IconListContainer>
              <BoldButton
                data-testid="bold"
                isActive={isBoldActive}
                onClick={handleBoldClick}
                color={isBoldActive ? '#faff00' : '#f1f5f9'}
              >
                B
              </BoldButton>
            </IconListContainer>
            <IconListContainer>
              <ItalicButton
                data-testid="italic"
                isActive={isItalicActive}
                onClick={handleItalicClick}
                color={isItalicActive ? '#faff00' : '#f1f5f9'}
              >
                i
              </ItalicButton>
            </IconListContainer>
            <IconListContainer>
              <UnderlineButton
                data-testid="underline"
                isActive={isUnderlineActive}
                onClick={handleUnderlineClick}
                color={isUnderlineActive ? '#faff00' : '#f1f5f9'}
              >
                U
              </UnderlineButton>
            </IconListContainer>
          </IconContainer>
          <textarea
            style={{
              fontWeight: isBoldActive ? 'bold' : 'normal',
              fontStyle: isItalicActive ? 'italic' : 'normal',
              textDecoration: isUnderlineActive ? 'underline' : 'normal',
              backgroundColor: 'transparent',
              height: '538px',
              color: '#f1f5f9',
              padding: '15px',
            }}
          />
        </EditorContainer>
      </TextWithImageContainer>
    </MainContainer>
  )
}

export default App
