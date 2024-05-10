import Modal from "react-modal";

export interface ModalProps {
  body?: React.ReactElement;
  title?: string;
  open: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  goCheck?: () => void;
  isCheck?: boolean;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const Modals: React.FC<ModalProps> = ({ open, onClose, title, body }) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel={title}
    >

      {body}
    </Modal>
  );
};
