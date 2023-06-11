/**
 * Button component
 * @param {string} label - The button label
 * @param {function} onClick - Click event handler
 * @returns {JSX.Element} - Button component
 */
const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
