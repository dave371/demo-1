'use client';

import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useField } from 'formik';

export default function InputField({ name, type, ...rest }) {
  const [field, meta] = useField(name);

  return (
    <div>
      <input
        type={type}
        name={name}
        {...rest}
        {...field}
        className={`w-full h-12 pl-3 text-lg text-black rounded-md focus:outline-none focus:ring-4 focus:ring-secondary ${
          meta.touched && meta.error ? 'ring-alert ring-4' : ''
        }`}
      />

      {meta.error ? <InputError error={meta.error} /> : null}
    </div>
  );
}

function InputError({ error }) {
  return <p className="mt-2 text-lg font-medium">{error}</p>;
}
