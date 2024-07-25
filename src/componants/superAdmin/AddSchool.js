import React from 'react';
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

// Validation Schema using Yup
const validationSchema = Yup.object({
  schoolName: Yup.object({
    name: Yup.string()  
      .min(4, 'min 4 characters required')
      .matches(/^[a-zA-Z\s]*$/, 'Only characters and single spaces allowed')
      .singleSpace()
      .required('School Name is required'),
    lat: Yup.number().required('Required').min(-90).max(90),
    lon: Yup.number().required('Required').min(-180).max(180)
  }).required(),
  
  principalName: Yup.string()
    .min(4, 'min 4 characters required')
    .matches(/^[a-zA-Z\s]*$/, 'Only characters and single spaces allowed')
    .singleSpace()
    .required('Principal Name is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

const AddSchool = ({ togglePopup }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-8 pt-4 rounded shadow-lg max-w-lg w-full relative">
        <button
          onClick={togglePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <AiOutlineClose className='text-red-600 text-2xl hover:scale-125' />
        </button>
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-200 -mx-6 text-center text-gray-800">Add New School</h2>
        <Formik
          initialValues={{ schoolName: { name: '', lat: '', lon: '' }, principalName: '',  phone: '', email: '', status : 0}}
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
                    name="schoolName.name"
                    component="div"
                    className="text-red-500 text-sm absolute top-0 right-0"
                  />
                </div>
                <label className="block text-gray-800 mb-2" htmlFor="schoolName.name">
                  School Name
                </label>
                <Field
                  type="text"
                  id="schoolName.name"
                  name="schoolName.name"
                  className="border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                />
                <div className='flex flex-row space-x-2 pt-2'>
                  <div className='w-full relative'>
                    <ErrorMessage
                        name="schoolName.lat"
                        component="div"
                        className="text-red-500 text-xs absolute top-0 right-1 bg-white px-2"
                    />
                    <Field
                      type="number"
                      id="schoolName.lat"
                      name="schoolName.lat"
                      placeholder="Latitude"
                      className="phone-input border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                    />
                  </div>
                  <div className='w-full relative'>
                    <ErrorMessage
                      name="schoolName.lon"
                      component="div"
                      className="text-red-500 text-xs absolute top-0 right-1 bg-white px-2"
                    />  
                    <Field
                      type="number"
                      id="schoolName.lon"
                      name="schoolName.lon"
                      placeholder="Longitude"
                      className="phone-input border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className='relative'>
                  <ErrorMessage
                    name="principalName"
                    component="div"
                    className="text-red-500 text-sm absolute top-0 right-0"
                  />
                </div>
                <label className="block text-gray-800 mb-2" htmlFor="principalName">
                  Principal Name
                </label>
                <Field
                  type="text"
                  id="principalName"
                  name="principalName"
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

export default AddSchool;
