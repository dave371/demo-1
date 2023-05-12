'use client';

import { Form, Formik } from 'formik';
import { contactFormSchema } from '@/app/variables/contactFormSchema';

import InputField from './InputField';
import withLabel from './withLabel';
import { roboto } from '@/app/fonts';
import TextAreaField from './TextAreaField';
import Button from './Button';

const NameInputField = withLabel(InputField);
const EmailInputField = withLabel(InputField);
const MessageField = withLabel(TextAreaField);

export default function ContactForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={contactFormSchema}
        val
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
      >
        {(props) => (
          <Form
            className={`p-3 border-4 rounded-md border-secondary lg:w-1/2 ${roboto.className}`}
          >
            <h3
              className={`text-2xl font-medium flex justify-center mb-12 ${roboto.className}`}
            >
              Contact Form
            </h3>

            <div className="flex flex-col gap-5">
              <NameInputField name="name" type="text" labelClass={` text-xl `}>
                Name
              </NameInputField>

              <EmailInputField
                name="email"
                type="text"
                labelClass={` text-xl `}
              >
                Email
              </EmailInputField>

              <MessageField name="message" labelClass={` text-xl `}>
                Message
              </MessageField>
            </div>

            <Button
              type="submit"
              className={`w-full h-12 mt-10 text-lg font-medium bg-secondary  rounded-md`}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
