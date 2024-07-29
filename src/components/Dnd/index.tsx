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
  const [parent, setParent] = useState<UniqueIdentifier | undefined>("Z");
  const [child, setChild] = useState<markup[]>([
    { id: "", element: <></>, parent: "Z" },
  ]);
  const [buttonList, setButtonList] = useState<markup[]>([
    {
      id: 1,
      element: (
        <Draggable key="1" id="1">
          Send Email
        </Draggable>
      ),
      parent: "Z",
    },
    {
      id: 2,
      element: (
        <Draggable key="2" id="2">
          Submit Survey
        </Draggable>
      ),
      parent: "Z",
    },
    {
      id: 3,
      element: (
        <Draggable key="3" id="3">
          send WhatsApp using number
        </Draggable>
      ),
      parent: "Z",
    },
    {
      id: 4,
      element: (
        <Draggable key="4" id="4">
          Send Google Calender Booking Link
        </Draggable>
      ),
      parent: "Z",
    },
    {
      id: 5,
      element: (
        <Draggable key="5" id="5">
          Send Webhook
        </Draggable>
      ),
      parent: "Z",
    },
    {
      id: 6,
      element: (
        <Draggable key="6" id="6">
          Send to Google Sheet
        </Draggable>
      ),
      parent: "Z",
    },
    {
      id: 7,
      element: (
        <Draggable key="7" id="7">
          Send to ChatGPT
        </Draggable>
      ),
      parent: "Z",
    },
    {
      id: 8,
      element: (
        <Draggable key="8" id="8">
          IF function
        </Draggable>
      ),
      parent: "Z",
    },
    {
      id: 9,
      element: (
        <Draggable key="9" id="9">
          LOOP Function
        </Draggable>
      ),
      parent: "Z",
    },
    {
      id: 10,
      element: (
        <Draggable key="10" id="10">
          WAIT Function
        </Draggable>
      ),
      parent: "Z",
    },
  ]);

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex h-full w-full justify-center items-center">
        <div className="h-full w-full flex justify-center items-center border-solid border-[0.5px]">
          <Droppable key="Z" id="Z">
            <div className="flex flex-col h-full w-full justify-center items-start gap-4">
              {buttonList.filter((d) => d.parent == "Z").map((d) => d.element)}
            </div>
          </Droppable>
        </div>

        <div className=" flex flex-col h-full w-full justify-center items-center border-solid border-[0.5px] gap-4">
          {containers.map((id) => (
            // We updated the Droppable component so it would accept an `id`
            // prop and pass it to `useDroppable`
            <div
              key={id}
              className="p-8 bg-gray-50 h-28 w-56 flex justify-start items-center"
            >
              <Droppable key={id} id={id}>
                Drag Here
                {buttonList.filter((d) => d.parent == id).map((d) => d.element)}
              </Droppable>
            </div>
          ))}
        </div>
      </div>
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
