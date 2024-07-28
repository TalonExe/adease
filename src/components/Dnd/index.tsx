
"use client"
import React, {useState} from 'react';
import {DndContext, DragEndEvent} from '@dnd-kit/core';

import Droppable from '@/components/ui/Droppable';
import Draggable from "@/components/ui/Draggable";

function Dnd() {

  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <div className='w-full h-full border-solid border-2 flex justify-center items-center'>
      <Draggable>
      Drag me
    </Draggable>
    </div>
    
  );
  
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className='flex flex-row h-full w-full border-solid border-2 justify-center items-center'>
        {draggableMarkup}
      <Droppable>
        {isDropped ? draggableMarkup : 'Drop here'}
      </Droppable>
      </div>
      
    </DndContext>
  );
  
  function handleDragEnd(event: DragEndEvent) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }}

  export default Dnd