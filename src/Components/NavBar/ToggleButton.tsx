import { IoMdMenu } from "react-icons/io"

interface ToggleProps {
  onClosed: () => void
}

export const ToggleButton:React.FC<ToggleProps> = ({ onClosed }) => {
  return (
    <button onClick={onClosed} className="flex md:hidden">
      <IoMdMenu size={30} className="text-comp"/>
    </button>
  )
}
