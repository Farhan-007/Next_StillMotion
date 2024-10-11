"use client"
import React, { useEffect, useRef, useState } from 'react';

//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453.66771070826314!2d80.82582511484989!3d24.542851857098867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847fb3d4c1b963%3A0x9b5c12150f886c3b!2sRahil%20Khan%20Photography!5e0!3m2!1sen!2sin!4v1722166058085!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{filter: 'grayscale(1) contrast(1.2) invert(90%)'}}></iframe>

const Contact: React.FC = () => {

    const formRef = useRef<HTMLFormElement | null>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     query: ""
    // });


    // Handle changes for all fields with a single function
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value, // Dynamically update the field based on its name
    //     }));
    // };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

// setFormErrors(name,"hbj")

    useEffect(() => {
        const form = formRef.current;

        const validateForm = (): boolean => {
            if (form) {
                const errors = {
                    name: ""
                };
                // Validate name (at least 3 characters)
                if (name && name.trim().length < 3) {
                    // setFormErrors("Username must be at least 3 characters long.");
                    return false;
                }
                // Validate phone (must be a number with at least 10 digits)
                const phoneRegex = /^[0-9]{10,15}$/;
                if (!phoneRegex.test(phone)) {
                    // setFormErrors("Phone must be a number and have at least 10 digits.");
                    return false;
                }
                // Validate email (must be a valid email format)
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    // setFormErrors("Please enter a valid email address.");
                    return false;
                }
                // No errors
                // setFormErrors(null);
                return true;
            }
            return true;
        };

        // Function to handle the form submission
        const handleSubmit = (e: Event) => {
            e.preventDefault();
            if (!validateForm()) return;
            if (form) {
                const data = new FormData(form);
                const action = form.action;
                form.reset();

                fetch(action, {
                    method: 'POST',
                    body: data,
                })
                    .then(() => {
                        console.log("Success!");
                    });
            }
        };

        // Attach the submit event listener
        form?.addEventListener("submit", handleSubmit);

        // Cleanup the event listener when the component unmounts
        return () => {
            form?.removeEventListener("submit", handleSubmit);
        };
    }, []);

    return (
        <div id='contact'>
            <section className="text-gray-400 bg-black transition-transform body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" title="map" className="absolute inset-0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453.66771070826314!2d80.82582511484989!3d24.542851857098867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847fb3d4c1b963%3A0x9b5c12150f886c3b!2sRahil%20Khan%20Photography!5e0!3m2!1sen!2sin!4v1722166058085!5m2!1sen!2sin" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.16) ' }}></iframe>
                        <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">nazeerabad, nai basti, ward no.35, satna (m,p)</p>
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
                            // className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
                            ref={formRef}
                            id='my-form'
                            method="POST"
                            action="https://script.google.com/macros/s/AKfycbyxLNGMXTNHWlZszwGq9KXWufiB4Ve3FGzFg9bmFH2F8krqXUNeimwZHevUm0IeG7nirA/exec"
                        >
                            <h2 className="text-white text-xl font-semibold mb-5 title-font">Contact Us</h2>
                            {/* <p className="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p> */}
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
                                        className="w-full placeholder:text-gray-400 sm:placeholder:text-transparent bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    {formErrors && <p className="text-red-500 text-sm">{formErrors.name}</p>}
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
                                        className="w-full placeholder:text-gray-400 sm:placeholder:text-transparent bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className=" hidden sm:block leading-7 text-sm text-gray-400">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="Email"
                                    placeholder='Email'
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                    className="w-full placeholder:text-gray-400 sm:placeholder:text-transparent bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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
                                    className="w-full placeholder:text-gray-400 sm:placeholder:text-transparent bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <button type='submit' className="btn text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                            {/* <p className="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
                        </form>
                    </div>


                    {/* <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <form onSubmit={handleSubmit}>
                            <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
                            <p className="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                            <div className="flex gap-4 mb-4">
                                <div>
                                    <label htmlFor="fullname" className="leading-7 text-sm text-gray-400">Full Name</label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            id="firstname"
                                            name="firstName"
                                            placeholder='Firstname'
                                            onChange={handleChange}
                                            className="w-full bg-gray-800 rounded border border-gray-700 text-base outline-none text-gray-100 py-1 px-3"
                                        />
                                        <input
                                            type="text"
                                            id="lastname"
                                            name="lastName"
                                            placeholder='Lastname'
                                            onChange={handleChange}
                                            className="w-full bg-gray-800 rounded border border-gray-700 text-base outline-none text-gray-100 py-1 px-3"
                                        />
                                    </div>
                                    {errors.Name && <p className="text-red-500 text-sm">{errors.Name}</p>}
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="Email"
                                    placeholder='Email'
                                    value={formData.Email}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 rounded border border-gray-700 text-base outline-none text-gray-100 py-1 px-3"
                                />
                                {errors.Email && <p className="text-red-500 text-sm">{errors.Email}</p>}
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="number" className="leading-7 text-sm text-gray-400">Phone Number</label>
                                <input
                                    type="tel"
                                    id="number"
                                    name="Number"
                                    placeholder='Phone Number'
                                    value={formData.Number}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 rounded border border-gray-700 text-base outline-none text-gray-100 py-1 px-3"
                                />
                                {errors.Number && <p className="text-red-500 text-sm">{errors.Number}</p>}
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                                <textarea
                                    id="message"
                                    name="Query"
                                    placeholder='Message'
                                    value={formData.Query}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 rounded border border-gray-700 text-base outline-none text-gray-100 py-1 px-3 h-32 resize-none"
                                ></textarea>
                                {errors.Query && <p className="text-red-500 text-sm">{errors.Query}</p>}
                            </div>
                            <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-6 hover:bg-indigo-600 rounded text-lg">Submit</button>
                            <p className="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                        </form>
                    </div> */}


                </div>
            </section>
        </div>
    )
}

export default Contact
