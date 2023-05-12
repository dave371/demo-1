import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useField } from 'formik';

export default function withLabel(Component) {
  return function LabeledField({ children, name, labelClass, ...rest }) {
    const [field, meta] = useField(name);

    return (
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className={`${labelClass} block`} htmlFor={name}>
            {children}
          </label>

          {meta.error ? (
            <ExclamationCircleIcon className="w-8 h-8 text-main-text-color" />
          ) : null}
        </div>
        <Component name={name} {...rest} />
      </div>
    );
  };
}
