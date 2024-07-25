import React from 'react';
import ReactDOM from 'react-dom';
import { IoClose } from 'react-icons/io5';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AiOutlineClose } from 'react-icons/ai';

// Validation Schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(4, 'min 4 characters required')
    .max(25, 'min 4 characters required')
    .matches(/^[a-zA-z]+$/, 'Only characters allowed')
    .required('Name is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
      .required('Phone number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    licenseNumber: Yup.string()
        .matches(/^[a-zA-z0-9]+$/, 'Only characters allowed')
        .required('license Number is required'),
});

const AddDrivers = ({ togglePopup }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-8 pt-4 rounded shadow-lg max-w-lg w-full relative">
        <button
          onClick={togglePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <AiOutlineClose className='text-red-600 text-2xl hover:scale-125' />
        </button>
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-200 -mx-6 text-center text-gray-800">Add New drivers</h2>
        <Formik
          initialValues={{ name: '', licenseNumber: '',  phone: '', email: '', status : 0}}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            // Handle form submission
            console.log(values);
            resetForm();
          }}
        >
          {() => (
            <Form>
                <div className="mb-4">
                    <div className='relative'>
                    <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm absolute top-0 right-0"
                    />
                    </div>
                    <label className="block text-gray-800 mb-2" htmlFor="name">
                    Driver Name
                    </label>
                    <Field
                    type="text"
                    id="name"
                    name="name"
                    className="border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                    />
                </div>
                
                <div className="mb-4">
                    <div className='relative'>
                    <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-500 text-sm absolute top-0 right-0"
                    />
                    </div>
                    <label className="block text-gray-800 mb-2" htmlFor="phone">
                    Phone
                    </label>
                    <Field
                    type="number"
                    id="phone"
                    name="phone"
                    className="phone-input border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                    />
                </div>
                <div className="mb-4">
                    <div className='relative'>
                    <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm absolute top-0 right-0"
                    />
                    </div>
                    <label className="block text-gray-800 mb-2" htmlFor="email">
                    Email
                    </label>
                    <Field
                    type="email"
                    id="email"
                    name="email"
                    className="border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                    />
                </div>
                <div className="mb-4">
                    <div className='relative'>
                    <ErrorMessage
                        name="licenseNumber"
                        component="div"
                        className="text-red-500 text-sm absolute top-0 right-0"
                    />
                    </div>
                    <label className="block text-gray-800 mb-2" htmlFor="licenseNumber">
                        license Number
                    </label>
                    <Field
                    type="text"
                    id="licenseNumber"
                    name="licenseNumber"
                    className="border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-gradient-to-tr from-blue-300 hover:from-blue-500 via-blue-500 hover:via-blue-300 to-blue-300 hover:to-blue-500 text-white w-full py-2 rounded text-md font-bold hover:text-gray-900"
                >
                    Submit
                </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>,
    document.getElementById('portal-root') // Make sure you have a div with id 'portal-root' in your index.html
  );
};

export default AddDrivers;
