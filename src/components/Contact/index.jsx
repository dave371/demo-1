import { roboto } from '@/app/fonts';
import ContactForm from '../ui/ContactForm';

export default function Contact() {
  return (
    <section className="mt-12">
      <h2 className={`mb-8 font-semibold text-2xl ${roboto.className}`}>
        Contact
      </h2>

      <div className="flex flex-col justify-between gap-10 lg:flex-row">
        <p className="mb-5 text-xl font-medium leading-relaxed lg:w-1/2 xl:w-2/6">
          {`Get in touch with us to start your fitness journey today! Whether you
            have a question, comment, or just want to say hello, we'd love to hear
            from you. Fill out the contact form below and we'll get back to you as
            soon as possible.`}
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
