import React from 'react';
import Ticket from './Ticket';


interface TicketData {
    activityName: string;
    currentQueueNumber: number;
    servingTime: number;
    price: number;
}


const mockTickets: TicketData[] = [
    {
        activityName: "Roller Coaster Ride",
        currentQueueNumber: 42,
        servingTime: 15,
        price: 10.99
    },
    {
        activityName: "Ferris Wheel",
        currentQueueNumber: 18,
        servingTime: 20,
        price: 8.50
    },
    {
        activityName: "Haunted House",
        currentQueueNumber: 31,
        servingTime: 25,
        price: 12.99
    },
    {
        activityName: "Bumper Cars",
        currentQueueNumber: 7,
        servingTime: 10,
        price: 7.50
    },
    {
        activityName: "Water Slide",
        currentQueueNumber: 55,
        servingTime: 5,
        price: 9.99
    }
];

const TicketList: React.FC = () => {
    return (
        <ul className="rounded-lg shadow overflow-hidden space-y-2">
            {mockTickets.map((ticket, index) => (
                <li
                    key={ticket.activityName}
                    className={`${index % 2 === 0 ? 'bg-green-50' : 'bg-blue-50'}`}
                >
                    <Ticket {...ticket} />
                </li>
            ))}
        </ul>
    );
};

export default TicketList;