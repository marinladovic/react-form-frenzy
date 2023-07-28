import * as Dialog from "@radix-ui/react-dialog";
import { RxCross2 } from "react-icons/rx";
import "./modal.css";

type Props = {
  icon?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
  onConfirm: () => void;
  confirmText?: string;
  open: boolean;
  toggleModal: () => void;
};

const Modal: React.FC<Props> = ({
  icon,
  title,
  children,
  onConfirm,
  confirmText,
  open,
  toggleModal,
}) => (
  <Dialog.Root open={open} onOpenChange={toggleModal}>
    <Dialog.Trigger asChild>
      <button>{icon ? icon : "Open Modal"}</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        {title && (
          <Dialog.Title className="DialogTitle">
            {title ?? "Modal Title"}
          </Dialog.Title>
        )}
        {children}
        <div
          style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
        >
          <button className="Button green" onClick={onConfirm}>
            {confirmText ?? "Save"}
          </button>
        </div>
        <button className="IconButton" aria-label="Close" onClick={toggleModal}>
          <RxCross2 />
        </button>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
