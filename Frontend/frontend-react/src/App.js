import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');

  // Fetch items from backend
  useEffect(() => {
    fetch('/api/items')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));
  }, []);

  // Add new item
  const addItem = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    const newItem = await response.json();
    setItems([newItem, ...items]);
    setName('');
  };

  // Delete item
  const deleteItem = async (id) => {
    await fetch(`/api/items/${id}`, { method: 'DELETE' });
    setItems(items.filter(item => item._id !== id));
  };

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>📝 My Todo App</h1>
      
      <form onSubmit={addItem}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter item name"
          style={{ padding: '10px', width: '70%', fontSize: '16px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px' }}>
          Add
        </button>
      </form>

      <ul style={{ marginTop: '20px' }}>
        {items.map(item => (
          <li key={item._id} style={{ padding: '10px', listStyle: 'none', border: '1px solid #ddd', marginBottom: '10px' }}>
            {item.name}
            <button onClick={() => deleteItem(item._id)} style={{ float: 'right', color: 'red' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
