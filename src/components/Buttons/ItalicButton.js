import {GoItalic} from 'react-icons/go'
import {Button} from './ButtonStyles'

const ItalicButton = ({isActive, onClick}) => (
  <Button type="button" onClick={onClick} data-testid="italic">
    <GoItalic color={isActive ? '#faff00' : '#f1f5f9'} />
  </Button>
)

export default ItalicButton
