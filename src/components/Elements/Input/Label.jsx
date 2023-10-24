const Label = ({ htmlFor, children, text, classname }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`${classname} cursor-pointer peer-checked:text-orange`}
    >
      {children}
      <p className="text-base">{text}</p>
    </label>
  );
};

export default Label;
