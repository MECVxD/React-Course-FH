import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // console.log(newCategory);
    setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat, newCategory]);
  }
  return (
    <>
      <h1>GifExpertApp</h1>
  
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />
      
      {
        categories.map(( category ) => (
          <GifGrid 
            key={ category }
            category={category}
          />
        ))
      }
    </>
  );
}
