import React from 'react';

interface TicketProps {
    activityName: string;
    currentQueueNumber: number;
    servingTime: number;
    price: number;
}

const Ticket: React.FC<TicketProps> = ({
    activityName,
    currentQueueNumber,
    servingTime,
    price,
}) => {
    // TODO: Implement ticket component
    return <>
        <p>TODO</p>
    </>;
}

export default Ticket;