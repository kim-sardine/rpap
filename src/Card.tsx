import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export class MyCard {
    cells: string[];

    constructor(cells: string[]) {
        this.cells = cells;
    }
}

interface CardProps {
    card: MyCard
}

function CardComponent({card}: CardProps) {
    return (
        <Card className="my-card" variant="outlined">
            <CardContent>
                {card.cells.map(cell=> <Typography variant="h4">{cell}</Typography>)}
            </CardContent>
        </Card>
    );
}

export default CardComponent;
