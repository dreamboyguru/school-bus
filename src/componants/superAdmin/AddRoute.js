import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AiOutlineClose } from 'react-icons/ai';

// Validation Schema
const validationSchema = Yup.object({
  from: Yup.string().required('From location is required'),
  to: Yup.string().required('To location is required'),
  points: Yup.array()
    .of(Yup.string().required('Each point is required'))
    .min(1, 'At least one point is required')
});

export const AddRouteForm = ({ onAddRoute, togglePopup }) => {
  return (
    
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-8 pt-4 rounded shadow-lg max-w-lg w-full relative">
      <button
          onClick={togglePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <AiOutlineClose className='text-red-600 text-2xl hover:scale-125' />
        </button>
      <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-200 -mx-6 text-center text-gray-800">Add New Route</h2>
          <Formik
            initialValues={{ from: '', to: '', points: [''] }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              onAddRoute(values);
              resetForm();
            }}
          >
            {({ values, setFieldValue }) => (
              <Form className="text-left">
                <div className="mb-4">
                  <div className='relative'>
                    <ErrorMessage name="from" component="div" className="absolute top-0 right-0 text-red-600 text-sm mt-1" />
                  </div>
                  <label htmlFor="from" className="block text-gray-800">From</label>
                  <Field
                    type="text"
                    id="from"
                    name="from"
                    className="border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                  />
                </div>

                <div className="mb-4">
                  <div className='relative'>
                    <ErrorMessage name="to" component="div" className="absolute top-0 right-0 text-red-600 text-sm mt-1" />
                  </div>
                  <label htmlFor="to" className="block text-gray-800">To</label>
                  <Field
                    type="text"
                    id="to"
                    name="to"
                    className="border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                  />
                  <ErrorMessage name="to" component="div" className="text-red-600 text-sm mt-1" />
                </div>

                <div className="mb-4">
                  <div className='relative'>
                    <ErrorMessage name="points" component="div" className="absolute top-0 right-0 text-red-600 text-sm mt-1" />
                  </div>
                  <label className="block text-gray-800">Points</label>
                  {values.points.map((point, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <Field
                        type="text"
                        name={`points.${index}`}
                        className="border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                      />
                      <button
                        type="button"
                        className="ml-2 text-red-500"
                        onClick={() => setFieldValue('points', values.points.filter((_, i) => i !== index))}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="text-blue-500 mt-2"
                    onClick={() => setFieldValue('points', [...values.points, ''])}
                  >
                    Add Point
                  </button>
                </div>

                <button
                  type="submit"
                  className="bg-gradient-to-tr from-blue-300 hover:from-blue-500 via-blue-500 hover:via-blue-300 to-blue-300 hover:to-blue-500 text-white w-full py-2 rounded text-md font-bold hover:text-gray-900"
                >
                  Add Route
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
  );
};

export const BusRoute = ({ routes }) => {
  return (
    <div className="flex flex-wrap m-4 justify-between">
      {routes.map((route, index) => (
        <div
          key={index}
          className="w-[49%] h-auto bg-white m-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex flex-row w-full justify-around text-xl font-bold p-4 bg-blue-500 text-white rounded-t-lg">
            <div>{route.from}</div>
            <div>{route.to}</div>
          </div>
          <hr className="border border-gray-200" />
          <div className="p-4 flex flex-wrap">
            {route.points.map((num, i) => (
              <div
                key={i}
                className="text-gray-800 bg-blue-200 m-2 p-2 rounded-md shadow text-lg"
              >
                {num}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

