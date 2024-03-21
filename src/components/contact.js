import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="px-20 py-4 h-screen">
      <h1 className="text-3xl text-center">Contact Us</h1>
      <p className="text-sm text-center">Reach out to Engage and Collaborate with us. We'll contact you within 24 hours</p>
      <div className="flex items-center justify-center h-[80vh]">
        <section className="flex items-center justify-between gap-8 w-8/12 h-[70vh]">
          <div className="border rounded-xl border-dotted border-primary p-8 w-1/2 h-full">
            <form>
              <div className="space-y-2">
                <input
                  className="border border-primary w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                  placeholder="First Name"
                  type="text"
                />
                <input
                  className="border border-primary w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                  placeholder="First Name"
                  type="text"
                />
                <input
                  className="border border-primary w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                  placeholder="First Name"
                  type="text"
                />
                <textarea
                  className="border border-primary w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                  placeholder="First Name"
                  type="text"
                  rows={4}
                />
                <button className="bg-primary text-white py-3 w-full text-sm rounded">Submit</button>
              </div>
            </form>
          </div>
          <div className="w-1/2">
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
