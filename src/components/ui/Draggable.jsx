
"use client"
import React from 'react';
import { useDraggable } from '@dnd-kit/core';

function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;


  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes} className='h-fit w-fit p-2 bg-black text-white rounded-md' onClick={() => console.log("hi")}>
      {props.children}
    </button>
  );
}

export default Draggable