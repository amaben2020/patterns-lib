// Button component with variant prop
const Button = ({ label, onClick, variant }) => {
  const buttonStyles = {
    primary: { backgroundColor: "blue", color: "white" },
    secondary: { backgroundColor: "gray", color: "black" },
  };

  const style = buttonStyles[variant] || {};

  return (
    <button style={style} onClick={onClick}>
      {label}
    </button>
  );
};

// Usage
const App = () => {
  return (
    <div>
      <Button label="Primary" onClick={handleClick} variant="primary" />
      <Button label="Secondary" onClick={handleClick} variant="secondary" />
    </div>
  );
};
