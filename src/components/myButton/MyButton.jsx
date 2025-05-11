import './MyButton.css'

function MyButton({text = 'Click me..', type = 'button', onClick}) {
  return (
  <button type={type} className="my-button" onClick={onClick}>
    {text}
    </button>
  );
}

export default MyButton;

