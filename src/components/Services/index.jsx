import { roboto } from '@/app/fonts';
import {
  ClipboardDocumentListIcon,
  HeartIcon,
  ClipboardDocumentCheckIcon,
  ChatBubbleBottomCenterTextIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

export default function Services() {
  const data = [
    {
      title: 'Personalized Workouts',
      description:
        'Customized workout plans based on individual goals and fitness levels.',
      icon: (
        <ClipboardDocumentListIcon className="w-16 h-16 text-main-text-color" />
      ),
    },
    {
      title: 'Nutritional Guidance',
      description:
        'Tailored meal planning and nutritional advice to support fitness goals.',
      icon: <HeartIcon className="w-16 h-16 text-main-text-color" />,
    },
    {
      title: 'Progress Tracking',
      description:
        'Regular assessments to track progress and adjust plans as needed.',
      icon: (
        <ClipboardDocumentCheckIcon className="w-16 h-16 text-main-text-color" />
      ),
    },
    {
      title: 'Communication and Support',
      description:
        'Regular check-ins and ongoing support from a certified personal trainer.',
      icon: (
        <ChatBubbleBottomCenterTextIcon className="w-16 h-16 text-main-text-color" />
      ),
    },
  ];

  return (
    <section className="mt-12">
      <h2 className={`mb-8 font-semibold text-2xl ${roboto.className}`}>
        Services
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item) => (
          <ServiceCard
            key={item.title}
            title={item.title}
            description={item.description}
            Icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ title, description, Icon }) {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      {Icon}
      <h3 className={`${roboto.className} text-lg font-medium`}>{title}</h3>
      <p className="text-base w-[85%] lg:w-[95%]">{description}</p>
    </div>
  );
}
