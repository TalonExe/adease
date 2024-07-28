
"use client"
import React from 'react';
import { useDroppable } from '@dnd-kit/core';

function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };


  return (
    <div ref={setNodeRef} style={style} className='w-full h-full flex justify-center items-center'>
      {props.children}
    </div>
  );
}


export default Droppable