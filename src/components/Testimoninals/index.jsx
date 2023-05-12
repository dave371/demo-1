import { roboto } from '@/app/fonts';
import { robotoItalic } from '@/app/fonts';

export default function Testimonials() {
  const data = [
    {
      name: 'Sarah Johnson',
      testimonial:
        'Working with Robert has been life-changing for me. Not only have I achieved my fitness goals, but I have gained the confidence and knowledge to maintain a healthy lifestyle. Thank you!',
    },
    {
      name: 'David Lee',
      testimonial:
        'I have tried numerous fitness programs in the past, but nothing compares to the level of support and guidance I received from Robert. The personalized attention and accountability kept me motivated and on track.',
    },
    {
      name: 'Emily Brown',
      testimonial:
        'As a busy professional, I never thought I could find the time to prioritize my health and fitness. But Robert worked with my schedule and helped me create a realistic plan that has transformed my physical and mental well-being.',
    },
  ];

  return (
    <section className="mt-12">
      <h2 className={`mb-8 font-semibold text-2xl ${roboto.className}`}>
        Testimonials
      </h2>

      <div className="flex flex-col gap-32 md:items-center xl:flex-row xl:items-stretch">
        {data.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            name={testimonial.name}
            testimonial={testimonial.testimonial}
          />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ name, testimonial }) {
  return (
    <div className="flex flex-col justify-between md:w-[75%] xl:w-full">
      <p
        className={`${robotoItalic.className} text-lg font-medium text-center`}
      >
        {`"${testimonial}"`}
      </p>

      <p className={`${roboto.className} font-normal text-xl text-center mt-5`}>
        {name}
      </p>
    </div>
  );
}
