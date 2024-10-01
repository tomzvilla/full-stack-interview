import React from 'react';

import TicketList from './components/TicketList';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Ticket Dashboard</h1>
          <div className="rounded-lg p-3">
            <TicketList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;