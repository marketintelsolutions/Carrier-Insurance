import React, { useState } from 'react';

const ClaimsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        inquiry: 'quote',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation
        const phoneRegex = /^[\+]?[0-9][\d\s\-\(\)]{7,15}$/;
        const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(formData.phone) || cleanPhone.length < 8) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Please provide details about your inquiry';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('https://api.useplunk.com/v1/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.REACT_APP_PLUNK_API_KEY}`
                },
                body: JSON.stringify({
                    to: process.env.REACT_APP_SUBMISSION_EMAIL,
                    subject: `New ${formData.inquiry} inquiry from ${formData.name}`,
                    body: `
                        <h2>New Form Submission</h2>
                        <p><strong>Name:</strong> ${formData.name}</p>
                        <p><strong>Email:</strong> ${formData.email}</p>
                        <p><strong>Phone:</strong> ${formData.phone}</p>
                        <p><strong>Type of Inquiry:</strong> ${formData.inquiry}</p>
                        <p><strong>Message:</strong></p>
                        <p>${formData.message.replace(/\n/g, '<br>')}</p>
                    `
                })
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                inquiry: 'quote',
                message: ''
            });

        } catch (error) {
            console.error('Submission error:', error);
            setErrors({ submit: 'Failed to submit form. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitSuccess) {
        return (
            <section className='w-full max-w-[1200px] px-6 xl:px-0 mx-auto pt-20 md:pt-40'>
                <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-[10px] text-center'>
                    <h2 className='text-xl font-semibold mb-2'>Thank you for your submission!</h2>
                    <p>One of our licensed insurance advisors will contact you within 1 business day.</p>
                    <button
                        onClick={() => setSubmitSuccess(false)}
                        className='mt-4 px-6 py-2 bg-green-600 text-white rounded-[5px] hover:bg-green-700 transition-colors'
                    >
                        Submit Another Inquiry
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className='w-full max-w-[1200px] px-6 xl:px-0 mx-auto pt-20 md:pt-40'>
            <h2 className='text-xl md:text-2xl max-w-[800px]'>Fill out the form below and one of our licensed insurance advisors will contact you within 1 business day.</h2>

            <div className='bg-gray-200 p-10 mt-10 rounded-[10px] flex flex-col gap-10'>
                {errors.submit && (
                    <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-[5px]'>
                        {errors.submit}
                    </div>
                )}

                <div className='flex flex-wrap md:flex-nowrap gap-10'>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="name" className='text-lg font-light'>Name *</label>
                        <input
                            type="text"
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`py-3 px-5 text-base rounded-[5px] w-full ${errors.name ? 'border-2 border-red-500' : 'border border-gray-300'}`}
                        />
                        {errors.name && <span className='text-red-500 text-sm'>{errors.name}</span>}
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="email" className='text-lg font-light'>Email *</label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`py-3 px-5 text-base rounded-[5px] w-full ${errors.email ? 'border-2 border-red-500' : 'border border-gray-300'}`}
                        />
                        {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}
                    </div>
                </div>

                <div className='flex flex-wrap md:flex-nowrap gap-10'>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="phone" className='text-lg font-light'>Phone Number *</label>
                        <input
                            type="tel"
                            id='phone'
                            name='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`py-3 px-5 text-base rounded-[5px] w-full ${errors.phone ? 'border-2 border-red-500' : 'border border-gray-300'}`}
                        />
                        {errors.phone && <span className='text-red-500 text-sm'>{errors.phone}</span>}
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="inquiry" className='text-lg font-light'>Type of Inquiry</label>
                        <select
                            name="inquiry"
                            id="inquiry"
                            value={formData.inquiry}
                            onChange={handleInputChange}
                            className='py-3 px-5 text-base rounded-[5px] w-full border border-gray-300'
                        >
                            <option value="quote">Get a Quote</option>
                            <option value="policy">Existing Policy</option>
                            <option value="claim">File a Claim</option>
                            <option value="general">General Question</option>
                        </select>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="message" className='text-lg font-light'>Message *</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide details about your inquiry..."
                        className={`py-3 px-5 text-base rounded-[5px] h-[200px] w-full resize-vertical ${errors.message ? 'border-2 border-red-500' : 'border border-gray-300'}`}
                    />
                    {errors.message && <span className='text-red-500 text-sm'>{errors.message}</span>}
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`py-4 w-full text-white rounded-[5px] transition-colors ${isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-red-600 hover:bg-red-700'
                        }`}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </div>
        </section>
    );
};

export default ClaimsForm;