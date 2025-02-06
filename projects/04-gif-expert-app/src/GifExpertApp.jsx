import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  const onAddCategory = () => {
    // categories.push('Halo');
    setCategories(['Halo', ...categories]);
    // setCategories(cat => [...cat, 'Halo']);
  }
  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory />
      {/* listado de items */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((item) => {
            return <li key={item}>{item}</li>
          })
        }
      </ol>
        {/* gifitem */}
    </>
  );
}
