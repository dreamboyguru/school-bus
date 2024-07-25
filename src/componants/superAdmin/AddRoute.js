import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AiOutlineClose } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

// Validation Schema
const validationSchema = Yup.object({
  from: Yup.object({
    name: Yup.string().required('From location is required'),
    lat: Yup.number().required('Required').min(-90).max(90),
    lon: Yup.number().required('Required').min(-180).max(180)
  }).required(),
  to: Yup.object({
    name: Yup.string().required('To location is required'),
    lat: Yup.number().required('Required').min(-90).max(90),
    lon: Yup.number().required('Required').min(-180).max(180)
  }).required(),
  points: Yup.array()
  .of(
    Yup.object().shape({
      name: Yup.string().required('Point name is required'),
      lat: Yup.number()
        .required('Required')
        .min(-90, 'Latitude must be between -90 and 90')
        .max(90, 'Latitude must be between -90 and 90'),
      lon: Yup.number()
        .required('Required')
        .min(-180, 'Longitude must be between -180 and 180')
        .max(180, 'Longitude must be between -180 and 180')
      })
    )
    .min(1, 'At least one point is required')
});

export const AddRouteForm = ({ onAddRoute, togglePopup }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-8 pt-4 rounded shadow-lg max-w-xl w-full max-h-[700px] relative overflow-y-scroll">
        <button
          onClick={togglePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <AiOutlineClose className='text-red-600 text-2xl hover:scale-125' />
        </button>
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-200 -mx-6 text-center text-gray-800">Add New Route</h2>
        <Formik
          initialValues={{ 
            from: { name: '', lat: '', lon: '' }, 
            to: { name: '', lat: '', lon: '' },  
            points: [{ name: '', lat: '', lon: '' }] 
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            onAddRoute(values);
            // resetForm();
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className="text-left overflow-y-auto">
              <div className="mb-4 mt-2">
                <div className='relative'>
                  <ErrorMessage name="from.name" component="div" className="absolute top-0 right-0 text-red-600 text-sm mt-1" />
                </div>
                <label htmlFor="from.name" className="block font-semibold pl-1 text-gray-800">From</label>
                <Field
                  type="text"
                  id="from.name"
                  name="from.name"
                  className="border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                />
                <div className='relative flex flex-row justify-between space-x-2 mt-1'>
                  <ErrorMessage name="from.lat" component="div" className="absolute top-0 right-[51%] text-red-600 text-xs mt-1 bg-white px-2" />
                  <Field
                    type="number"
                    id="from.lat"
                    name="from.lat"
                    placeholder="Latitude"
                    className="phone-input border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-6/12 rounded mt-2"
                  />
                  <ErrorMessage name="from.lon" component="div" className="absolute top-0 right-1 text-red-600 text-xs mt-1 bg-white px-2" />
                  <Field
                    type="number"
                    id="from.lon"
                    name="from.lon"
                    placeholder="Longitude"
                    className="phone-input border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-6/12 rounded mt-2"
                  />
                </div>
              </div>

              

              <div className="mb-4">
                <div className='relative'>
                  <ErrorMessage name="to.name" component="div" className="absolute top-0 right-0 text-red-600 text-sm mt-1" />
                </div>
                <label htmlFor="to.name" className="block font-semibold pl-1 text-gray-800">To</label>
                <Field
                  type="text"
                  id="to.name"
                  name="to.name"
                  className="border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                />
                <div className='relative flex flex-row justify-between space-x-2 mt-1'>
                  <ErrorMessage name="to.lat" component="div" className="absolute top-0 right-[51%] text-red-600 text-xs mt-1 bg-white px-2" />
                  <Field
                    type="number"
                    id="to.lat"
                    name="to.lat"
                    placeholder="Latitude"
                    className="phone-input border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-6/12 rounded mt-2"
                  />
                  <ErrorMessage name="to.lon" component="div" className="absolute top-0 right-1 text-red-600 text-xs mt-1 bg-white px-2" />
                  <Field
                    type="number"
                    id="to.lon"
                    name="to.lon"
                    placeholder="Longitude"
                    className="phone-input border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-6/12 rounded mt-2"
                  />
                </div>
              </div>
              <div className='font-semibold text-center'>Points</div>
              <FieldArray name="points">
                {({ push, remove }) => (
                  <div>
                    {values.points.map((point, index) => (
                      <div key={index} className="">
                        <div className="mb-2">
                          <div className='relative'>
                            <ErrorMessage name={`points.${index}.name`} component="div" className="absolute top-0 right-0 text-red-600 text-sm" />
                          </div>
                          <label
                            htmlFor={`points.${index}.name`}
                            className="block text-sm font-medium text-gray-700"
                          >
                            {index+1}. Point Name
                          </label>
                          <Field
                            name={`points.${index}.name`}
                            className="border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                          />
                        </div>
                        <div className='mb-2 flex flex-row space-x-2 justify-between'>
                          <div className=" w-[48%]">
                            <label
                              htmlFor={`points.${index}.lat`}
                              className="block text-sm font-medium text-gray-700"
                            >
                              Latitude
                            </label>
                            <div className='relative'>
                              <ErrorMessage name={`points.${index}.lat`} component="div" className="absolute bg-white px-2 -top-2 right-0 text-red-600 text-xs" />
                            </div>
                            <Field
                              name={`points.${index}.lat`}
                              type="number"
                              placeholder="Latitude"
                              className="phone-input border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                            />
                           
                          </div>
                          <div className="w-[48%]">
                            <label
                              htmlFor={`points.${index}.lon`}
                              className="block text-sm font-medium text-gray-700"
                            >
                              Longitude
                            </label>
                            <div className='relative'>
                              <ErrorMessage name={`points.${index}.lon`} component="div" className="absolute bg-white px-2 -top-2 right-0 text-red-600 text-xs" />
                            </div>
                            <Field
                              name={`points.${index}.lon`}
                              type="number"
                              placeholder="Longitude"
                              className="phone-input border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                            />
                          </div>
                          <div className='w-auto flex items-center justify-center'>
                            <button
                              type="button"
                              onClick={() => remove(index)}
                              className="text-red-500 text-3xl pt-2 rounded hover:text-red-700"
                            >
                              <MdDelete />
                            </button>
                          </div>
                        </div>
                        
                      </div>
                    ))}
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => push({ name: '', lat: '', lon: '' })}
                        className="mt-0 mb-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                      >
                        Add Point
                      </button>
                    </div>
                  </div>
                )}
              </FieldArray>

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
            <div>{route.from.name}</div>
            <div>{route.to.name}</div>
          </div>
          <hr className="border border-gray-200" />
          <div className="p-4 flex flex-wrap">
            {route.points.map((point, i) => (
              <div
                key={i}
                className="text-gray-800 bg-blue-200 m-2 p-2 rounded-md shadow text-lg"
              >
                {point.name} (Lat: {point.lat}, Lon: {point.lon})
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
