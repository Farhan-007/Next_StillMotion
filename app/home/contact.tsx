"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LoadingModal from "../_components/LoadingModal";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formErrors, setFormErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  useEffect(() => {
    const form = formRef.current;
    const validateForm = () => {
      let errors: any = {};
      let isValid = true;

      if (!name) {
        errors.name = "Name is required.";
        isValid = false;
      }

      if (!phone || phone.length < 10) {
        errors.phone = "Valid phone number is required.";
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email address.";
        isValid = false;
      }

      if (!message) {
        errors.message = "Message cannot be empty.";
        isValid = false;
      }

      setFormErrors(errors);
      return isValid;
    };

    const handleSubmit = async (e: Event) => {
      e.preventDefault();
      if (!validateForm()) return;

      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (form) {
        const data = new FormData(form);
        const action = form.action;
        try {
          await fetch(action, {
            method: "POST",
            body: data,
          });
          setSubmitMessage("Your message has been sent successfully!");
        } catch (error) {
          setSubmitMessage("Error sending message. Please try again.");
        } finally {
          setIsLoading(false);
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
          form.reset();
        }
      }
    };

    form?.addEventListener("submit", handleSubmit);
    return () => form?.removeEventListener("submit", handleSubmit);
  }, [name, phone, email, message]);

  return (
    <motion.section
      id="contact"
      className="bg-black text-gray-400 py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3 relative bg-gray-900 rounded-lg p-6 flex items-end justify-start">
          <iframe
            title="map"
            className="absolute inset-0 w-full h-full filter grayscale contrast-125 opacity-20"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453.66771070826314!2d80.82582511484989!3d24.542851857098867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847fb3d4c1b963%3A0x9b5c12150f886c3b!2sRahil%20Khan%20Photography!5e0!3m2!1sen!2sin!4v1722166058085!5m2!1sen!2sin"
          ></iframe>
          <div className="relative flex flex-wrap py-4 rounded shadow-md bg-gray-900">
            <div className="w-full sm:w-1/2 px-4">
              <h2 className="text-xs font-semibold tracking-widest text-white">
                ADDRESS
              </h2>
              <p className="mt-1 text-sm">
                Nazeerabad, Nai Basti, Ward No.35, Satna (M.P)
              </p>
            </div>
            <div className="w-full sm:w-1/2 px-4 mt-4 sm:mt-0">
              <h2 className="text-xs font-semibold tracking-widest text-white">
                EMAIL
              </h2>
              <a
                className="text-indigo-400 leading-relaxed text-sm"
                href="mailto:rahilkhansstudio@gmail.com"
              >
                rahilkhansstudio@gmail.com
              </a>
              <h2 className="mt-4 text-xs font-semibold tracking-widest text-white">
                PHONE
              </h2>
              <p className="leading-relaxed text-sm">9691446645</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <motion.form
            ref={formRef}
            id="contact-form"
            method="POST"
            action="https://script.google.com/macros/s/AKfycbyxLNGMXTNHWlZszwGq9KXWufiB4Ve3FGzFg9bmFH2F8krqXUNeimwZHevUm0IeG7nirA/exec"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <input
                  type="text"
                  name="Name"
                  placeholder="Full Name"
                  value={name}
                  onChange={handleNameChange}
                  required
                  className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 py-2 px-3 text-white text-sm"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-xs">{formErrors.name}</p>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="tel"
                  name="Number"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                  className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 py-2 px-3 text-white text-sm"
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-xs">{formErrors.phone}</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="Email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 py-2 px-3 text-white text-sm"
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs">{formErrors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <textarea
                name="Query"
                placeholder="Message"
                value={message}
                onChange={handleMessageChange}
                required
                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 py-2 px-3 text-white text-sm resize-none h-24"
              ></textarea>
              {formErrors.message && (
                <p className="text-red-500 text-xs">{formErrors.message}</p>
              )}
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-indigo-500 py-2 rounded-lg text-white font-semibold text-sm hover:bg-indigo-600"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </motion.button>
            {isLoading && <LoadingModal isLoading={isLoading} />}
          </motion.form>
          {submitMessage && (
            <p className="text-green-500 mt-4 text-center text-sm">
              {submitMessage}
            </p>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
