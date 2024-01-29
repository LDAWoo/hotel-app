import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ItemPhoto from "./ItemPhoto";
import PropTypes from "prop-types";

const DragImage = ({ data, onClick, images = [], setImages }) => {
  const [listImage, setListImage] = useState([]);

  useEffect(() => {
    setListImage(data);
  }, [data]);

  useEffect(() => {
    const imagesWithDraggableId = listImage.map((image, index) => ({
      ...image,
      draggableId: `image-${index}`,
    }));

    setImages(imagesWithDraggableId);
  }, [listImage, setImages]);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;
    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setImages(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="images">
        {(provided) => (
          <div className="grid grid-cols-2" {...provided.droppableProps} ref={provided.innerRef} style={{ gridArea: "1/1" }}>
            {images.map((photo, index) => {
              return (
                <Draggable key={photo.name} draggableId={photo.name} index={index}>
                  {(provided) => (
                    <div
                      className={`rounded-[4px] aspect-[20/20] box-border float-left m-[10px] text-center relative ${index === 0 ? "shadow-[0_0_0_1px_#ff8000]" : "shadow-[0_0_4px_2px_rgba(0,0,0,0.2)] dark:shadow-[0_0_4px_2px_rgba(200,200,200,0.2)] hover:shadow-[0_14px_32px_0_rgba(0,0,0,0.2)] dark:hover:shadow-[0_14px_32px_0_rgba(200,200,200,0.2)]"}
                      `}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ItemPhoto name={photo.name} url={photo.url} alt={photo.name} onClick={onClick} />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

DragImage.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func,
  images: PropTypes.array,
  setImages: PropTypes.func,
};

export default DragImage;
