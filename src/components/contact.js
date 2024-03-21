import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="sm:px-20 px-2 py-4 md:h-screen">
      <h1 className="text-3xl text-center">Contact Us</h1>
      <p className="text-sm text-center">Reach out to Engage and Collaborate with us. We'll contact you within 24 hours</p>
      <div className="border-b-4 border-black w-36 mx-auto mt-2"></div>
      <div className="flex items-center justify-center h-[80vh]">
        <section className="md:flex items-center justify-between gap-8 md:w-8/12 w-full md:h-[70vh]">
          <div className="border rounded-xl border-dotted border-primary p-8 md:w-1/2 h-full">
            <form>
              <div className="space-y-2">
                <input
                  className="border border-primary w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                  placeholder="First Name"
                  type="text"
                />
                <input
                  className="border border-primary w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                  placeholder="Last Name"
                  type="text"
                />
                <input
                  className="border border-primary w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                  placeholder="Email"
                  type="email"
                />
                <textarea
                  className="border border-primary w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                  placeholder="Message"
                  type="text"
                  rows={4}
                />
                <button className="bg-primary text-white py-3 w-full text-sm rounded">Submit</button>
              </div>
            </form>
          </div>
          <div className="w-1/2 md:block hidden">
            <div className="mx-auto">
                <img className="w-full object-cover h-[70vh] rounded" src="/hero2.jpg" alt="" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
