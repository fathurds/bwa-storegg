interface InputProps {
  label: string;
  placeholder: string;
  id?: string;
}
export default function Input(props: InputProps) {
  const { label, placeholder, id, ...nativeProps } = props;
  return (
    <>
      <label
        htmlFor={id}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        id={id}
        name={id}
        aria-describedby={id}
        placeholder={placeholder}
        {...nativeProps}
      />
    </>
  );
}
