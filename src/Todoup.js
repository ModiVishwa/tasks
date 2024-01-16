import React, { useState } from 'react';

function Todoup() {
  const [title, setTitle] = useState('');
  const [Desc, setDesc] = useState('');
  const [disp, setDisp] = useState([]);
  const [edit, setEdit] = useState(null);

  const add = () => {
    const newItem = { title, Desc };
    setDisp([...disp, newItem]);
    setTitle('');
    setDesc('');
  };

  const remoItem = (index) => {
    setDisp(disp.filter((item, i) => i !== index));
  };

  const editItem = (index) => {
    setEdit(index);
  };

  const handleChange = (e, index, property) => {
    const updatedItems = [...disp];
    updatedItems[index][property] = e.target.value;
    setDisp(updatedItems);
  };

  const saveItem = (index) => {
    setEdit(null); // Turn off edit mode
  };

  return (
    <div className='whole'>
      Todoup
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
      <input type="text" value={Desc} onChange={(e) => setDesc(e.target.value)} placeholder='Description' />
      <button className='add_b' onClick={add}>
        Add
      </button>

      <ul className='todo-list'>
        {disp.map((item, index) => (
          <li key={index} className='todo-item'>
            {edit === index ? (
              <>
                <input type="text" value={item.title} onChange={(e) => handleChange(e, index, 'title')} />
                <input type="text" value={item.Desc} onChange={(e) => handleChange(e, index, 'Desc')} />
                <button className='save_b' onClick={() => saveItem(index)}>
                  Save
                </button>
              </>
            ) : (
              `${item.title} ==> ${item.Desc}`
            )}
            <button className='edit_b' onClick={() => editItem(index)}>Edit</button>
            <button className='remove_b' onClick={() => remoItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todoup;
