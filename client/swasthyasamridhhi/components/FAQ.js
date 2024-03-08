export default function FAQ() {
  return (
    <>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What services do we provide?
        </div>
        <div className="collapse-content">
          <p>
            Our application offers a comprehensive suite of services for managing patient health records, including secure authentication, patient profile management, appointment scheduling, medical record management, and doctor-patient communication.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How secure is your data with our services?
        </div>
        <div className="collapse-content">
          <p>
            We prioritize the security and confidentiality of your data. Our platform implements robust encryption methods, strict access controls, and regular security audits to ensure that your health records remain protected at all times.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What are the benefits of our application?
        </div>
        <div className="collapse-content">
          <p>
            Our application offers numerous benefits, including streamlined healthcare management processes, enhanced communication between patients and doctors, improved patient outcomes, and compliance with healthcare regulations. Additionally, our platform is user-friendly, secure, and scalable, ensuring a seamless experience for both healthcare providers and patients.
          </p>
        </div>
      </div>
    </>
  );
}
