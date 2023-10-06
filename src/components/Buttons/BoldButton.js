import {VscBold} from 'react-icons/vsc'

const BoldButton = ({isActive, onClick}) => (
  <button type="button" onClick={onClick} data-testid="bold">
    <VscBold color={isActive ? '#faff00' : '#f1f5f9'} />
  </button>
)

export default BoldButton
