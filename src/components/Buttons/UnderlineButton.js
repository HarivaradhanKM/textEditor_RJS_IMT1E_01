import {AiOutlineUnderline} from 'react-icons/ai'
import {Button} from './ButtonStyles'

const UnderlineButton = ({isActive, onClick}) => (
  <Button type="button" onClick={onClick} data-testid="underline">
    <AiOutlineUnderline color={isActive ? '#faff00' : '#f1f5f9'} />
  </Button>
)

export default UnderlineButton
