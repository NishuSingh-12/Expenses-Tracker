function Select({
  label,
  id,
  name,
  value,
  onChange,
  error,
  firstValue,
  options,
}) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        <option hidden>{firstValue}</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="error">{error}</p>
    </div>
  );
}

export default Select;
