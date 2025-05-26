import FadeInWhenVisible from './FadeInWhenVisible';


export default function Services() {
  const services = [
    {
      title: 'Family Law',
      description: (
          <>
          Assistance with divorce, custody, <br /> alimony.
          </>
      ),
      delay: 0.2
    },
    {
      title: 'Civil Litigation',
      description: 'Representing you in court for disputes, claims, and negotiations.',
      delay: 0.4
    },
    {
      title: 'Exam Preparation',
      description: 'Comprehensive courses to help students pass the bar exam with confidence.',
      delay: 0.6
    }
  ];

  return (
    <section id="services" className="container text-gray-400 mx-auto px-6 py-16">
      <FadeInWhenVisible>
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
      </FadeInWhenVisible>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <FadeInWhenVisible key={index} delay={service.delay}>
            <div className="bg-black text-foreground border border-accent rounded-xl p-6 shadow">
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
}

