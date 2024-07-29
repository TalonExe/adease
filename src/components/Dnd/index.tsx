import React, { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragStartEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";

import { Droppable } from "@/components/ui/Droppable";
import { Draggable } from "@/components/ui/Draggable";

type markup = {
  id: UniqueIdentifier;
  element: React.ReactNode;
  parent: UniqueIdentifier | undefined;
};

function Dnd() {
  const containers = ["A", "B", "C"];
  const [parent, setParent] = useState<UniqueIdentifier>();
  const [child, setChild] = useState<markup[]>([
    { id: "", element: <></>, parent: "" },
  ]);
  const [buttonList, setButtonList] = useState<markup[]>([
    {
      id: 1,
      element: (
        <Draggable key="1" id="1">
          Drag me
        </Draggable>
      ),
      parent: "Z",
    },
    {
      id: 2,
      element: (
        <Draggable key="2" id="2">
          Drag me
        </Draggable>
      ),
      parent: "Z",
    },
    {
      id: 3,
      element: (
        <Draggable key="3" id="3">
          Drag me
        </Draggable>
      ),
      parent: "Z",
    },
  ]);

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <Droppable key="Z" id="Z">
        {buttonList.filter((d) => d.parent == "Z").map((d) => d.element)}
      </Droppable>

      {containers.map((id) => (
        // We updated the Droppable component so it would accept an `id`
        // prop and pass it to `useDroppable`

        <Droppable key={id} id={id}>
          Drag Here
          {buttonList.filter((d) => d.parent == id).map((d) => d.element)}
        </Droppable>
      ))}
    </DndContext>
  );

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    setChild(
      buttonList.filter((d) => {
        return d.id == active.id;
      })
    );
    console.log(child[0]);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;
    setParent(over ? over.id : undefined);
    buttonList
      .filter((d) => {
        return d.id == child[0].id;
      })
      .map((d) => (d.parent = parent));
  }
}

export default Dnd;
