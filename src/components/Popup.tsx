import '../styles/Popup.css';

interface PopupProps {
  message: string;
  isVisible: boolean;
}

const Popup: React.FC<PopupProps> = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Popup;
