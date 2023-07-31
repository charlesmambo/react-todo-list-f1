import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value: '');

    const inputRef = useRef(null);
    useEffect(() =>{ //add auto input focus
        inputRef.current.focus();
    });

    //INPUT HANDLE CHANGE FUNCTION
    const handleChange = e =>{
        setInput(e.target.value);
    }

    //INPUT PREVENTDEFAULT FUNCTION
    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    }

  return (
<form className='todo-form' onSubmit={handleSubmit}>
  {props.edit ? (
    <>
      <input
        type="text"
        value={input}
        name="text"
        placeholder='Edit the todo'
        className='todo-input edit'
        onChange={handleChange}
        ref={inputRef}
        autoComplete="off"
      />
      <button className='todo-button edit'>Edit todo</button>
    </>
  ) : (
    <>
      <input
        type="text"
        value={input}
        name="text"
        placeholder='Add a todo'
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
        autoComplete="off"
      />
      <button className='todo-button'>Add todo</button>
    </>
  )}
</form>

  );
}

export default TodoForm;