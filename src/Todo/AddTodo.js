import React, { useState } from 'react';

function AddTodo({ onCreate }) {
  const styles = {
    form: {
      margin: '10px 0',
      padding: '0 13px',
    },
  };

  const [value, setValue] = useState('');

  function submitHandler(evt) {
    evt.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue('');
    }
  }

  return (
    <form style={styles.form} onSubmit={submitHandler}>
      <input 
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
      <button type="submit">
        Add todo
      </button>
    </form>
  );
}

export default AddTodo;
