interface CheckboxProps {
  id: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked = false,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked);
  };

  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={handleChange}
      className="h-6 w-6 md:h-5 md:w-5 shrink-0 rounded border border-gray-900 cursor-pointer bg-none text-accent-foreground accent-transparent"
    />
  );
};

export default Checkbox;
