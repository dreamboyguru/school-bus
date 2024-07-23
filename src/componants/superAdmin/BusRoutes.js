import React, { useState } from 'react';
import { AddRouteForm } from './AddRoute'; // Import only the component you need

const BusRoutes = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
      document.body.style.overflow = isOpen ? 'auto' : 'hidden'; // Disable background scroll
    };

    const [routes, setRoutes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleAddRoute = (newRoute) => {
        setRoutes([...routes, newRoute]);
    };

    // Example routes data for testing (uncomment to use)
    // setRoutes([
    //     {
    //         from: 'Location A',
    //         to: 'Location B',
    //         numbers: ['point 1', 'point 2', 'point 3']
    //     },
    //     {
    //         from: 'Location C',
    //         to: 'Location D',
    //         numbers: ['point 4', 'point 5', 'point 6']
    //     },
    //     {
    //         from: 'Location B',
    //         to: 'Location D',
    //         numbers: ['Point 2', 'point 5', 'point 6']
    //     },
    //     {
    //         from: 'Location A',
    //         to: 'Location D',
    //         numbers: ['Point 2', 'point 5', 'point 6']
    //     },
    //     // Add more routes as needed
    // ]);

    const filteredRoutes = routes.filter(route => {
        const fromToMatch = 
            route.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
            route.to.toLowerCase().includes(searchQuery.toLowerCase());
        const numbersMatch = route.numbers.some(num =>
            num.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return fromToMatch || numbersMatch;
    });

    return (
        <div className="m-4">
            {isOpen && <AddRouteForm onAddRoute={handleAddRoute} togglePopup={togglePopup} />}
            <div className="mb-4 flex flex-row px-2">
                <button 
                    className='w-1/6 bg-white rounded-md shadow p-2 px-10 mr-5 hover:bg-gray-100 text-gray-800 font-semibold hover:font-bold hover:scale-105 duration-500'
                    onClick={togglePopup}
                >Add New
                </button>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search routes..."
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
            </div>
            <div className="flex flex-wrap justify-between">
                {filteredRoutes.map((route, index) => (
                    <div
                        key={index}
                        className="w-[49%] h-auto bg-white m-1.5 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex flex-row w-full justify-around text-xl font-bold p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 text-black rounded-t-lg">
                            <div>{route.from}</div>
                            <div>{route.to}</div>
                        </div>
                        <hr className="border border-gray-200" />
                        <div className="p-4 flex flex-wrap">
                            {route.numbers.map((num, i) => (
                                <div
                                    key={i}
                                    className="text-gray-700 bg-blue-200 m-2 p-2 rounded-md shadow text-lg"
                                >
                                    {num}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BusRoutes;
