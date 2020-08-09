import React from 'react';
import { Typography, Box, Card, CardContent, Grow } from '@material-ui/core';

export class MyCard {
    cells: string[];

    constructor(cells: string[]) {
        this.cells = cells;
    }
}

type CardProps = {
    card: MyCard;
}

type CellProps = {
    cell: string;
    idx: number;
}

const Cell = ({cell, idx}: CellProps) => {

    if (idx === 0) {
        return <Typography variant="h3">{cell}</Typography>;
    }
    return <Typography variant="h5" color="textSecondary">{cell}</Typography>;
}

function CardComponent({card}: CardProps) {
    return (
        <Grow in={true} timeout={3000}>
            <Card className="my-card" variant="elevation">
                <CardContent>
                    <Box m="1rem">
                        {card.cells.map((cell, idx)=> <Cell cell={cell} idx={idx} />)}
                    </Box>
                </CardContent>
            </Card>
        </Grow>
    );
}

export default CardComponent;
