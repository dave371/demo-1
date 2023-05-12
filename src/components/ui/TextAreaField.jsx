'use client';

import { useField } from 'formik';

export default function TextAreaField({ name, ...rest }) {
  const [field, meta] = useField(name);

  return (
    <div>
      <textarea
        className={`w-full h-56 p-3 text-lg text-black rounded-md focus:outline-none focus:ring-4 focus:ring-secondary resize-none ${
          meta.touched && meta.error ? 'ring-alert ring-4' : ''
        }`}
        name={name}
        {...rest}
        s
        {...field}
      ></textarea>

      {meta.error ? <InputError error={meta.error} /> : null}
    </div>
  );
}

function InputError({ error }) {
  return <p className="mt-2 text-lg font-medium">{error}</p>;
}
