import Input from "./Input";
import Label from "./Label";

const InputElement = ({
  children,
  id,
  name,
  text,
  type,
  value,
  classname,
  classInput,
}) => {
  return (
    <div className="flex flex-col items-center justify-end">
      <Input
        type={type}
        id={id}
        name={name}
        value={value}
        classInput={classInput}
      />
      <Label htmlFor={id} text={text} classname={classname}>
        {children}
      </Label>
    </div>
  );
};

export default InputElement;
