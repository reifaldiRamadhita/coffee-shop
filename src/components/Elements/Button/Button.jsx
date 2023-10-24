const Button = ({ children, classname, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center text-3xl ${classname}`}
    >
      {children}
    </button>
  );
};

export default Button;
