function Input({ label, id, name, value, onchange, error }) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input id={id} name={name} value={value} onChange={onchange} />
      <p className="error">{error}</p>
    </div>
  );
}

export default Input;
