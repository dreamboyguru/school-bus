import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

const validationSchema = Yup.object({
    Destination: Yup.string().required('Destination is required'),
    Point: Yup.string().required('Point is required')
});

const MyForm = () => {
    const [selectedDestination, setSelectedDestination] = useState('');
    const [availablePoints, setAvailablePoints] = useState([]);

    useEffect(() => {
        if (selectedDestination) {
            setAvailablePoints(points[selectedDestination]);
        } else {
            setAvailablePoints([]);
        }
    }, [selectedDestination]);

    return (
        <Formik
            initialValues={{ Destination: '', Point: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ setFieldValue }) => (
                <Form>
                    <div>
                        <label htmlFor="Destination">Destination</label>
                        <Field
                            as="select"
                            id="Destination"
                            name="Destination"
                            className="border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                            onChange={(e) => {
                                const value = e.target.value;
                                setFieldValue('Destination', value);
                                setSelectedDestination(value);
                                setFieldValue('Point', '');
                            }}
                        >
                            <option value="" label="Select destination" />
                            {destinations.map((destination) => (
                                <option key={destination.value} value={destination.value}>
                                    {destination.label}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage name="Destination" component="div" className="text-red-500" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="Point">Point</label>
                        <Field
                            as="select"
                            id="Point"
                            name="Point"
                            className="border border-blue-300 shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 w-full rounded"
                            disabled={!selectedDestination}
                        >
                            <option value="" label="Select point" />
                            {availablePoints.map((point) => (
                                <option key={point.value} value={point.value}>
                                    {point.label}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage name="Point" component="div" className="text-red-500" />
                    </div>
                    <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default MyForm;
