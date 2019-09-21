import React from 'react';
import {
  Draggable,
  DragDropContext,
  Droppable,
} from 'react-beautiful-dnd';

export default class Items extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        1,
        2,
        3,
      ],
    };
  }

  render() {
    return (
      <DragDropContext
        onDragEnd={(dragResult) => {
          if (!dragResult.destination) {
            return;
          }

          const result = Array.from(this.state.items);
          const [removed] = result.splice(dragResult.source.index, 1);
          result.splice(dragResult.destination.index, 0, removed);

          this.setState({
            items: result,
          });
        }}
      >
        <h1>items</h1>
        <Droppable
          droppableId={'droppable'}
        >
          {(provided, _snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {this.state.items.map((item, index) => (
                <Draggable
                  draggableId={`d-${item}`}
                  index={index}
                  key={item}
                >
                  {(draggableProvided, _draggableSnapshot) => (
                    <div
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      {item}
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
}
