import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  points: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required('Point name is required'),
        lat: Yup.number()
          .required('Latitude is required')
          .min(-90, 'Latitude must be between -90 and 90')
          .max(90, 'Latitude must be between -90 and 90'),
        lon: Yup.number()
          .required('Longitude is required')
          .min(-180, 'Longitude must be between -180 and 180')
          .max(180, 'Longitude must be between -180 and 180'),
      })
    )
    .min(1, 'At least one point is required'),
});

const PointsForm = () => {
  return (
    <Formik
      initialValues={{ points: [{ name: '', lat: '', lon: '' }] }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form data', values);
      }}
    >
      {({ values }) => (
        <Form className="max-w-lg mx-auto p-4 bg-white rounded shadow">
          <FieldArray name="points">
            {({ push, remove }) => (
              <div>
                {values.points.map((point, index) => (
                  <div key={index} className="mb-4 p-4 border rounded">
                    <div className="mb-2">
                      <label
                        htmlFor={`points.${index}.name`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <Field
                        name={`points.${index}.name`}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <ErrorMessage
                        name={`points.${index}.name`}
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor={`points.${index}.lat`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Latitude
                      </label>
                      <Field
                        name={`points.${index}.lat`}
                        type="number"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <ErrorMessage
                        name={`points.${index}.lat`}
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor={`points.${index}.lon`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Longitude
                      </label>
                      <Field
                        name={`points.${index}.lon`}
                        type="number"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <ErrorMessage
                        name={`points.${index}.lon`}
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
                      >
                        Remove Point
                      </button>
                    </div>
                  </div>
                ))}
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => push({ name: '', lat: '', lon: '' })}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                  >
                    Add Point
                  </button>
                </div>
              </div>
            )}
          </FieldArray>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PointsForm;
