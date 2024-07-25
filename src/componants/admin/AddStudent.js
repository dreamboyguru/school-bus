import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AiOutlineClose } from 'react-icons/ai';

// Custom test to allow single spaces
Yup.addMethod(Yup.string, 'singleSpace', function() {
  return this.test('single-space', 'Not multiple spaces', function(value) {
    // Check if the value contains consecutive spaces
    return !/\s{2,}/.test(value);
  });
});

const destinations = [
  { value: 'new_york', label: 'New York' },
  { value: 'los_angeles', label: 'Los Angeles' },
  { value: 'chicago', label: 'Chicago' },
  { value: 'houston', label: 'Houston' },
  { value: 'miami', label: 'Miami' }
];

const points = {
  new_york: [
    { value: 'point_a', label: 'Point A' },
    { value: 'point_b', label: 'Point B' }
  ],
  los_angeles: [
    { value: 'point_c', label: 'Point C' },
    { value: 'point_d', label: 'Point D' }
  ],
  chicago: [
    { value: 'point_e', label: 'Point E' },
    { value: 'point_f', label: 'Point F' }
  ],
  houston: [
    { value: 'point_g', label: 'Point G' },
    { value: 'point_h', label: 'Point H' }
  ],
  miami: [
    { value: 'point_i', label: 'Point I' },
    { value: 'point_j', label: 'Point J' }
  ]
};

// Validation Schema using Yup
const validationSchema = Yup.object({
    StudentName: Yup.string()
        .min(4, 'Min 4 characters')
        .matches(/^[a-zA-Z\s]*$/, 'Only characters')
        .singleSpace()
        .required('Required'),
    LastName: Yup.string()
        .min(4, 'Min 4 Required')
        .matches(/^[a-zA-Z\s]*$/, 'Only characters ')
        .singleSpace()
        .required('Required'),
    RollNumber: Yup.number()
        .required('Required')
        .min(1, 'Invalid'),
    FatherName: Yup.string()
        .min(4, 'Min 4 characters')
        .matches(/^[a-zA-Z\s]*$/, 'Only characters')
        .singleSpace()
        .required('Required'),
    MotherName: Yup.string()
        .min(4, 'Min 4 characters')
        .matches(/^[a-zA-Z\s]*$/, 'Only characters')
        .singleSpace()
        .required('Required'),
    PhoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, '10 digits')
        .required('Required'),
    Email: Yup.string().email('Invalid email').required('Required'),
    Destination: Yup.string().required('Required'),
    Point: Yup.string().required('Required')
});

const AddStudent = ({ togglePopup }) => {
  const [selectedDestination, setSelectedDestination] = useState('');
  const [availablePoints, setAvailablePoints] = useState([]);

  useEffect(() => {
    if (selectedDestination) {
      setAvailablePoints(points[selectedDestination]);
    } else {
      setAvailablePoints([]);
    }
  }, [selectedDestination]);

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white p-8 pt-4 rounded shadow-lg max-w-lg w-full relative">
            <button
                onClick={togglePopup}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            ><AiOutlineClose className='text-red-600 text-2xl hover:scale-125' />
            </button>
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-200 -mx-6 text-center text-gray-800">Add New Student</h2>
            <Formik
                initialValues={{
                    StudentName: '',
                    LastName: '',
                    RollNumber: '',
                    FatherName: '',
                    MotherName: '',
                    PhoneNumber: '',
                    Email: '',
                    Destination: '',
                    Point: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    // Handle form submission
                    console.log(values);
                    resetForm();
                }}
            >{({ setFieldValue }) => (
                <Form>
                    <div className="mb-4 flex flex-row space-x-2">
                        <div className='w-full'>
                            <div className="relative">
                                <ErrorMessage
                                name="StudentName"
                                component="div"
                                className="text-red-500 text-xs absolute top-2 right-1"
                                />
                            </div>
                            <label className="block text-gray-800 mb-1" htmlFor="StudentName">
                                Student Name
                            </label>
                            <Field
                                type="text"
                                id="StudentName"
                                name="StudentName"
                                className="border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                            />
                        </div>
                        <div className='w-full'>
                            <div className="relative">
                                <ErrorMessage
                                name="LastName"
                                component="div"
                                className="text-red-500 text-xs absolute top-2 right-1"
                                />
                            </div>
                            <label className="block text-gray-800 mb-1" htmlFor="LastName">
                                Last Name
                            </label>
                            <Field
                                type="text"
                                id="LastName"
                                name="LastName"
                                className="border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="relative">
                            <ErrorMessage
                            name="RollNumber"
                            component="div"
                            className="text-red-500 text-xs absolute top-2 right-1"
                            />
                        </div>
                        <label className="block text-gray-800 mb-1" htmlFor="RollNumber">
                            Roll Number
                        </label>
                        <Field
                            type="number"
                            id="RollNumber"
                            name="RollNumber"
                            className="phone-input border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                        />
                        </div>
                    <div className='flex flex-row space-x-2 mb-4'>
                        <div className="w-full">
                            <div className="relative">
                                <ErrorMessage
                                name="FatherName"
                                component="div"
                                className="text-red-500 text-xs absolute top-2 right-1"
                                />
                            </div>
                            <label className="block text-gray-800 mb-1" htmlFor="FatherName">
                                Father Name
                            </label>
                            <Field
                                type="text"
                                id="FatherName"
                                name="FatherName"
                                className="border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                            />
                        </div>
                        <div className="w-full">
                            <div className="relative">
                                <ErrorMessage
                                name="MotherName"
                                component="div"
                                className="text-red-500 text-xs absolute top-2 right-1"
                                />
                            </div>
                            <label className="block text-gray-800 mb-1" htmlFor="MotherName">
                                Mother Name
                            </label>
                            <Field
                                type="text"
                                id="MotherName"
                                name="MotherName"
                                className="border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                            />
                        </div>
                    </div>
                    <div className='flex flex-row space-x-2 mb-4'>
                        <div className="w-full">
                            <div className="relative">
                                <ErrorMessage
                                name="PhoneNumber"
                                component="div"
                                className="text-red-500 text-xs absolute top-2 right-1"
                                />
                            </div>
                            <label className="block text-gray-800 mb-1" htmlFor="PhoneNumber">
                                Phone Number
                            </label>
                            <Field
                                type="number"
                                id="PhoneNumber"
                                name="PhoneNumber"
                                className="phone-input border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                            />
                        </div>
                        <div className="w-full">
                            <div className="relative">
                                <ErrorMessage
                                name="Email"
                                component="div"
                                className="text-red-500 text-xs absolute top-2 right-1"
                                />
                            </div>
                            <label className="block text-gray-800 mb-1" htmlFor="Email">
                                Email
                            </label>
                            <Field
                                type="email"
                                id="Email"
                                name="Email"
                                className="border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                            />
                        </div>
                    </div>
                    <div className='flex flex-row space-x-2 mb-4'>
                        <div className="w-full">
                            <div className="relative">
                                <ErrorMessage
                                name="Destination"
                                component="div"
                                className="text-red-500 text-xs absolute top-2 right-1"
                                />
                            </div>
                            <label className="block text-gray-800 mb-1" htmlFor="Destination">
                                Destination
                            </label>
                            <Field
                                as="select"
                                id="Destination"
                                name="Destination"
                                className="border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                                onChange={(e) => {
                                const value = e.target.value;
                                setSelectedDestination(value);
                                setFieldValue('Destination', value);
                                setFieldValue('Point', ''); // Reset Point field
                                }}
                            ><option value="">Select a destination</option>
                                {destinations.map(destination => (
                                <option key={destination.value} value={destination.value}>
                                    {destination.label}
                                </option>
                                ))}
                            </Field>
                        </div>
                        <div className="w-full">
                            <div className="relative">
                                <ErrorMessage
                                name="Point"
                                component="div"
                                className="text-red-500 text-xs absolute top-2 right-1"
                                />
                            </div>
                            <label className="block text-gray-800 mb-1" htmlFor="Point">
                                Point
                            </label>
                            <Field
                                as="select"
                                id="Point"
                                name="Point"
                                className="border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                            >
                                <option value="">Select a point</option>
                                {availablePoints.map(point => (
                                <option key={point.value} value={point.value}>
                                    {point.label}
                                </option>
                                ))}
                            </Field>
                        </div>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-gradient-to-tr from-blue-300 hover:from-blue-500 via-blue-500 hover:via-blue-300 to-blue-300 hover:to-blue-500 text-white w-full py-2 rounded text-md font-bold hover:text-gray-900"
                        >Submit
                        </button>
                    </div>
                </Form>
            )}</Formik>
        </div>
    </div>,
    document.getElementById('portal-root')
  );
};

export default AddStudent;
