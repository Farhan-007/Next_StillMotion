"use client"
import { useEffect, useRef, useState } from 'react';
import LoadingModal from '../components/LoadingModal';

const Contact: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [submitMessage, setSubmitMessage] = useState<string>("")
    const formRef = useRef<HTMLFormElement | null>(null);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [formErrors, setFormErrors] = useState<{ name: string; email: string; phone: string; message: string }>({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

    useEffect(() => {
        const form = formRef.current;

        const validateForm = (): boolean => {
            const errors = { name: "", email: "", phone: "", message: "" };
            let isValid = true;

            if (name.trim().length < 3) {
                errors.name = "Username must be at least 3 characters long.";
                isValid = false;
            }

            const phoneRegex = /^[0-9]{10,15}$/;
            if (!phoneRegex.test(phone)) {
                errors.phone = "Phone must be a number and have at least 10 digits.";
                isValid = false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errors.email = "Please enter a valid email address.";
                isValid = false;
            }

            setFormErrors(errors);
            return isValid;
        };

        const handleSubmit = async (e: Event) => {
            e.preventDefault();
            if (!validateForm()) return;

            setIsLoading(true);
            setSubmitMessage("");

            if (form) {
                const data = new FormData(form);
                const action = form.action;

                try {
                    await fetch(action, {
                        method: 'POST',
                        body: data,
                    });
                    setSubmitMessage("Your message has been successfully sent!"); // Show success message
                } catch (error) {
                    console.error("Error:", error);
                    setSubmitMessage("There was an error submitting your message. Please try again."); // Show error message
                } finally {
                    setIsLoading(false); // Hide loading indicator
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
    }, [name, email, phone, message]);

    return (
        <div id='contact'>
            <section className="text-gray-400 bg-black transition-transform body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            title="map"
                            className="absolute inset-0"
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453.66771070826314!2d80.82582511484989!3d24.542851857098867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847fb3d4c1b963%3A0x9b5c12150f886c3b!2sRahil%20Khan%20Photography!5e0!3m2!1sen!2sin!4v1722166058085!5m2!1sen!2sin"
                            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.16)' }}
                        ></iframe>
                        <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Nazeerabad, Nai Basti, Ward No.35, Satna (M.P)</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                                <a className="text-indigo-400 leading-relaxed">rahilkhansstudio@gmail.com</a>
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">9691446645</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <form
                            ref={formRef}
                            id='my-form'
                            method="POST"
                            action="https://script.google.com/macros/s/AKfycbyxLNGMXTNHWlZszwGq9KXWufiB4Ve3FGzFg9bmFH2F8krqXUNeimwZHevUm0IeG7nirA/exec"
                        >
                            <h2 className="text-white text-xl font-semibold mb-5 title-font">Contact Us</h2>
                            <div className="flex gap-4 mb-4">
                                <div>
                                    <label htmlFor="name" className="hidden sm:block leading-7 text-sm text-gray-400">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="Name"
                                        placeholder='Fullname'
                                        value={name}
                                        onChange={handleNameChange}
                                        required
                                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3"
                                    />
                                    {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="number" className="hidden sm:block leading-7 text-sm text-gray-400">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="number"
                                        name="Number"
                                        placeholder='Phone Number'
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        required
                                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3"
                                    />
                                    {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="hidden sm:block leading-7 text-sm text-gray-400">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="Email"
                                    placeholder='Email'
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3"
                                />
                                {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="hidden sm:block leading-7 text-sm text-gray-400">Message</label>
                                <textarea
                                    id="message"
                                    name="Query"
                                    placeholder='Message'
                                    value={message}
                                    onChange={handleMessageChange}
                                    required
                                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none"
                                ></textarea>
                                {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
                            </div>
                            <button type="submit" className="btn text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                {isLoading ? 'Submitting...' : 'Submit'}
                            </button>
                            <LoadingModal isLoading={isLoading} />
                        </form>
                        {submitMessage && <p className="text-green-500 mt-4">{submitMessage}</p>}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;