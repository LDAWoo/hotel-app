import { memo, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function DragOption({ data, currentData, setCurrentData, droppableId, component, handleChange }) {
  const Component = component;

  useEffect(() => {
    const itemWithDraggableId = data.map((item, index) => ({
      ...item,
      draggableId: `${droppableId}-${index}`,
    }));
    setCurrentData(itemWithDraggableId);
  }, []);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;
    const arrayItems = Array.from(currentData);
    const [reorderedItem] = arrayItems.splice(result.source.index, 1);
    arrayItems.splice(result.destination.index, 0, reorderedItem);
    setCurrentData(arrayItems);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId={droppableId} type="group">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {currentData.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {Component && <Component items={item} id={droppableId} handleChange={handleChange} />}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default memo(DragOption);
