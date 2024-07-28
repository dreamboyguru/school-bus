import React, { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Test = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5;

  const students = [
    { id: 1, name: 'Student 1' },
    { id: 2, name: 'Student 2' },
    { id: 3, name: 'Student 3' },
    { id: 4, name: 'Student 4' },
    { id: 5, name: 'Student 5' },
    { id: 6, name: 'Student 6' },
    { id: 7, name: 'Student 7' },
    { id: 8, name: 'Student 8' },
    { id: 9, name: 'Student 9' },
    { id: 10, name: 'Student 10' },
    { id: 11, name: 'Student 11' },
    { id: 12, name: 'Student 12' },
    { id: 13, name: 'Student 13' },
    { id: 14, name: 'Student 14' },
    { id: 15, name: 'Student 15' },
    { id: 16, name: 'Student 16' },
    { id: 17, name: 'Student 17' },
    { id: 18, name: 'Student 18' },
    { id: 19, name: 'Student 19' },
    { id: 20, name: 'Student 20' },
    { id: 21, name: 'Student 21' },
  ];

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

  const totalPages = Math.ceil(students.length / studentsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <ul className="mb-4">
        {currentStudents.map(student => (
          <li key={student.id} className="p-2 border-b border-gray-200">
            {student.name}
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          <MdChevronLeft size={24} />
        </button>
        {getPageNumbers().map(number => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`px-4 py-2 rounded-md ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          <MdChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Test;
