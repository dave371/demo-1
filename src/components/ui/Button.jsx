export default function Button({
  name,
  onClick = () => {},
  className,
  children,
  type,
}) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
