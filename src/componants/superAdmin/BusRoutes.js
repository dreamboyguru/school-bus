import React, { useState } from 'react';
import { AddRouteForm } from './AddRoute'; // Import only the component you need
import { IoMdSwap } from 'react-icons/io';

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

    const filteredRoutes = routes.filter(route => {
        const fromToMatch = 
            route.from.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            route.to.name.toLowerCase().includes(searchQuery.toLowerCase());
        const pointsMatch = route.points.some(point =>
            point.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return fromToMatch || pointsMatch;
    });

    return (
        <div className="m-2">
            {isOpen && <AddRouteForm onAddRoute={handleAddRoute} togglePopup={togglePopup} />}
            <div className="mb-4 flex flex-row">
                <button 
                    className='w-1/6 bg-white rounded-md shadow p-2 px-10 mr-5 hover:bg-gray-100 text-gray-800 font-semibold hover:font-bold hover:scale-105 duration-500'
                    onClick={togglePopup}
                >Add New
                </button>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search here..."
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
                            <div className='w-5/12 custom-scrollbar overflow-x-auto scroll mr-4'>
                                {route.from.name}
                            </div>
                            <div className='w-1/12 pt-1'><IoMdSwap className='text-2xl'/></div>
                            <div className='w-5/12 custom-scrollbar overflow-x-auto scroll ml-4'>
                                {route.to.name}
                            </div>
                        </div>
                        <hr className="border border-gray-200" />
                        <div className="p-4 flex flex-wrap">
                            {route.points.map((point, i) => (
                                <div
                                    key={i}
                                    className="text-gray-700 border border-gray-500 m-2 p-0 px-5 rounded-md text-lg"
                                >
                                    {point.name}
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
