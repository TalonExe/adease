import React, {useState} from 'react';
import {DndContext, DragEndEvent, DragMoveEvent, UniqueIdentifier} from '@dnd-kit/core';

import {Droppable} from '@/components/ui/Droppable';
import {Draggable} from '@/components/ui/Draggable';

function Dnd() {
  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState<UniqueIdentifier>();
  const [child, setChild] = useState()
  
  const draggableMarkup = (
    [{
      id: 1,
      element:<Draggable key="1" id="1">Drag me</Draggable>,
      parent: 'A'
    },
    {
      id: 2,
      element:<Draggable key="2" id="2">Drag me</Draggable>,
      parent: 'A'
    },
    {
      id: 3,
      element:<Draggable key="3" id="3">Drag me</Draggable>,
      parent: 'A'
    },
    ]
      
    
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === undefined ? draggableMarkup.map((d)=> d.element) : undefined}

      {containers.map((id) => (
        // We updated the Droppable component so it would accept an `id`
        // prop and pass it to `useDroppable`
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup.map((d)=> d.element) : 'Drop here'}
        </Droppable>
      ))}
    </DndContext>
  );

  function handleDragEnd(event : DragEndEvent) {
    const {over} = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    console.log(over);
    
    setParent(over ? over.id : undefined);
  }
};

export default Dnd