import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { memo } from "react";

const Card = styled.div<IDraggingProps>`
  /* background: ${({ theme }) => theme.cardColor}; */
  background: ${(props) =>
    props.$isDragging ? "tomato" : props.theme.cardColor};
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 5px;
  transition: all 0.3s;
  box-shadow: ${(props) =>
    props.$isDragging ? "0px 0px 10px rgba(0,0,0,0.5)" : "none"};
`;

interface IDraggingProps {
  $isDragging: boolean;
}

interface IDraggableCardProps {
  todoText: string;
  todoId: number;
  index: number;
}

const DraggableCard = ({ todoId, todoText, index }: IDraggableCardProps) => {
  return (
    <Draggable key={todoId} draggableId={todoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          $isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {todoText}
        </Card>
      )}
    </Draggable>
  );
};

export default memo(DraggableCard);
