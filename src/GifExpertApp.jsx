import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* buscador */}
        <AddCategory 
            // setCategories={setCategories}
            onNewCategory={onAddCategory}
        >
        </AddCategory>
        {
            categories.map(c => 
            (
                <GifGrid key={c} categoria={c}></GifGrid>
            )
            ) 
        }
        {/* listado de gifs */}
            {/* Gif Item */}
    </>
  );
}
