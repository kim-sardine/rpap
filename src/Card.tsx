import React from 'react';

export class MyCard {
    cells: string[];

    constructor(cells: string[]) {
        this.cells = cells;
    }
}

interface CardProps {
    card: MyCard
}

function Card({card}: CardProps) {

  return (
    <div>
        {card.cells}
    </div>
  );
}

export default Card;
