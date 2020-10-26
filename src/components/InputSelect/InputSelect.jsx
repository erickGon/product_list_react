import React, { useState, useEffect } from "react";
import "./InputSelect.scss";

function InputSelect({ onChange, options, selected, name }) {
  useEffect(() => {
    if (selected) {
      setCurrentValue(selected);
    }
  }, [selected]);

  const [currentValue, setCurrentValue] = useState({ code: null, name: null });

  function handleChange(event) {
    const selectedOption = options.find(
      (option) => option.code == event.target.value
    );

    onChange(selectedOption);
  }

  return (
    <section className="input-container">
      <label className="input-container_label" htmlFor={name}>
        {name}:{" "}
      </label>
      <select
        className="input-container_select"
        onChange={handleChange}
        name={name}
        value={currentValue?.code ? currentValue?.code : ""}
      >
        {currentValue?.code ? null : (
          <option data-testid="empty-option" value=" ">
            {" "}
          </option>
        )}
        {options
          ? options.map((option) => (
              <option key={option.code} value={option.code}>
                {option.name}
              </option>
            ))
          : null}
      </select>
    </section>
  );
}

export default InputSelect;
