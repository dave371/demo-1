export default function Button({
  name,
  onClick = () => {},
  className,
  children,
}) {
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}
