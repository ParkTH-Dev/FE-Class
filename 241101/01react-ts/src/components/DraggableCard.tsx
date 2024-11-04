import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { memo } from "react";

const Card = styled.div`
  background: ${({ theme }) => theme.cardColor};
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 5px;
`;

interface IDraggableCardProps {
  todo: string;
  index: number;
}

const DraggableCard = ({ todo, index }: IDraggableCardProps) => {
  console.log(todo);
  return (
    <Draggable key={todo} draggableId={todo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {todo}
        </Card>
      )}
    </Draggable>
  );
};

export default memo(DraggableCard);
