import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from 'react-intersection-observer';
import React, { Suspense } from 'react';

import TitleHeader from "../components/TitleHeader";
const ContactExperience = React.lazy(() => import('../components/models/contact/ContactExperience'));

const Contact = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const result = await emailjs.sendForm(
        "service_fkcy9ze",
        "template_p8s9ox4",
        formRef.current,
        "sWjGIGU4utGYlRx2N"
      );

      console.log(result.text);
      alert("Message sent successfully");
      formRef.current?.reset();
    } catch (err) {
      console.error(err?.text || err);
      alert("❌ Failed to send message. Please check your IDs and Allowed Origins and form fields.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding" ref={ref}>
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect         "
          sub=" My Email:       Sofienmeftahi113t@gmail.com "
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10 bg-black-100/95 backdrop-blur-sm border-2 border-cyan-500/20">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="from_name">Your name</label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    defaultValue="Sofien Meftahi"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="reply_to">Your Email</label>
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to"
                    defaultValue="sofienmeftahi113t@gmail.com"
                    placeholder="sofien.meftahi02@gmail.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" disabled={sending}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {sending ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              {inView && (
                <Suspense fallback={<div style={{height: '100%', width: '100%'}} />}> 
                  <ContactExperience />
                </Suspense>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
