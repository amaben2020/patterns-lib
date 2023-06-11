// Customizable Button component
const Button = ({ label, color, size, icon, onClick }) => {
  const buttonStyle = {
    background: color,
    fontSize: size === "large" ? "20px" : "16px",
    // Add icon styles if applicable
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {icon && <span className="icon">{icon}</span>}
      {label}
    </button>
  );
};

<Button label="" color="" />;
