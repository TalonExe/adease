
"use client"
import React, {useState} from 'react';
import {DndContext, DragEndEvent} from '@dnd-kit/core';

import Droppable from '@/components/ui/Droppable';
import Draggable from "@/components/ui/Draggable";

function Dnd_menu() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable>Drag me</Draggable>
  );
  
  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <Droppable>
        {isDropped ? draggableMarkup : 'Drop here'}
      </Droppable>
    </DndContext>
  );
  
  function handleDragEnd(event: DragEndEvent) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }}

  export default Dnd_menu