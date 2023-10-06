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
            <BoldButton
              data-testid="bold"
              isActive={isBoldActive}
              onClick={handleBoldClick}
            >
              B
            </BoldButton>
            <ItalicButton
              data-testid="italic"
              isActive={isItalicActive}
              onClick={handleItalicClick}
            >
              i
            </ItalicButton>
            <UnderlineButton
              data-testid="underline"
              isActive={isUnderlineActive}
              onClick={handleUnderlineClick}
            >
              U
            </UnderlineButton>
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
