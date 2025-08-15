import React from 'react';
import { FaHeartbeat, FaHospital, FaAmbulance, FaPills, FaStethoscope, FaUserMd, FaShieldAlt, FaUsers, FaCheckCircle, FaStar } from 'react-icons/fa';

const HealthInsurance = () => {
    const coverageAreas = [
        { icon: FaHospital, title: 'Surgical Procedures', desc: 'Complete coverage for all surgical interventions and procedures' },
        { icon: FaAmbulance, title: 'Ambulance Services', desc: 'Emergency transportation and ambulance fee coverage' },
        { icon: FaPills, title: 'Medications', desc: 'Prescription drugs and medication cost coverage' },
        { icon: FaStethoscope, title: 'Diagnostic Tests', desc: 'Laboratory tests, imaging, and diagnostic procedures' },
        { icon: FaUserMd, title: 'Therapy Sessions', desc: 'Physical therapy, rehabilitation, and treatment sessions' },
        { icon: FaHospital, title: 'Hospital Stays', desc: 'Inpatient and outpatient hospital treatment costs' }
    ];

    const benefits = [
        'Wide range protection for medical expenses',
        'Coverage for private individuals and corporate employees',
        'Comprehensive surgical procedure coverage',
        'Emergency ambulance services included',
        'Prescription medication coverage',
        'Diagnostic tests and laboratory work',
        'Physical therapy and rehabilitation',
        'Specialist consultation coverage'
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[70vh] bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
                <img
                    src="/images/nightcity.jpg"
                    alt="Health Insurance"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <FaHeartbeat className="mx-auto text-6xl mb-4" />
                        <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
                            Health Insurance
                        </h1>
                        <p className="text-xl font-inter max-w-2xl mx-auto">
                            Comprehensive health coverage for individuals and corporate employees with wide range medical protection
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-max mx-auto px-4 py-16">
                {/* Main Description */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-montserrat font-bold text-primaryBlack mb-6">
                        Let's Cover You With The Right Health Insurance
                    </h2>
                    <p className="text-lg font-inter text-primaryGrey max-w-4xl mx-auto mb-8">
                        Our dedicated advisors are here to guide you, ensuring you find the plan that best fits your needs.
                        With us, securing the right health insurance is straightforward and stress-free.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-6 max-w-3xl mx-auto">
                        <p className="font-inter text-primaryBlack">
                            This covers the cost and treatments of private individuals and corporate employees.
                            It gives wide range protection for medical expenses such as surgical procedures,
                            ambulance fee, medications, diagnostic tests, and therapy sessions.
                        </p>
                    </div>
                </div>

                {/* Coverage Areas */}
                <div className="mb-16">
                    <h2 className="text-3xl font-montserrat font-bold text-primaryBlack text-center mb-12">
                        What We Cover
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coverageAreas.map((area, index) => {
                            const IconComponent = area.icon;
                            return (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-blue-500">
                                    <IconComponent className="text-4xl text-blue-600 mb-4" />
                                    <h3 className="text-xl font-montserrat font-semibold text-primaryBlack mb-3">
                                        {area.title}
                                    </h3>
                                    <p className="text-primaryGrey font-inter">
                                        {area.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="bg-gradient-to-r from-primaryBlack to-gray-800 rounded-xl shadow-lg p-8 mb-16">
                    <div className="text-center mb-8">
                        <FaShieldAlt className="mx-auto text-5xl text-blue-400 mb-4" />
                        <h2 className="text-3xl font-montserrat font-bold text-white mb-4">
                            Health Insurance Benefits
                        </h2>
                        <p className="text-gray-300 font-inter max-w-2xl mx-auto">
                            Comprehensive coverage designed to protect your health and financial well-being
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            {benefits.slice(0, 4).map((benefit, index) => (
                                <div key={index} className="flex items-start mb-4">
                                    <FaCheckCircle className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-300 font-inter">{benefit}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            {benefits.slice(4).map((benefit, index) => (
                                <div key={index} className="flex items-start mb-4">
                                    <FaCheckCircle className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-300 font-inter">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Individual vs Corporate Coverage */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="bg-blue-50 rounded-lg p-8">
                        <FaUsers className="text-4xl text-blue-600 mb-4" />
                        <h3 className="text-2xl font-montserrat font-bold text-primaryBlack mb-4">
                            Individual Coverage
                        </h3>
                        <p className="text-primaryGrey font-inter mb-4">
                            Tailored health insurance plans for individuals and families, providing comprehensive
                            medical coverage and peace of mind.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center text-primaryGrey font-inter">
                                <FaStar className="text-blue-600 mr-2" />
                                Personal health coverage
                            </li>
                            <li className="flex items-center text-primaryGrey font-inter">
                                <FaStar className="text-blue-600 mr-2" />
                                Family plan options
                            </li>
                            <li className="flex items-center text-primaryGrey font-inter">
                                <FaStar className="text-blue-600 mr-2" />
                                Flexible premium payments
                            </li>
                        </ul>
                    </div>

                    <div className="bg-primaryRed rounded-lg p-8 text-white">
                        <FaUsers className="text-4xl mb-4" />
                        <h3 className="text-2xl font-montserrat font-bold mb-4">
                            Corporate Coverage
                        </h3>
                        <p className="mb-4 font-inter">
                            Group health insurance solutions for businesses, ensuring comprehensive
                            medical coverage for all employees.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center font-inter">
                                <FaStar className="mr-2" />
                                Employee health benefits
                            </li>
                            <li className="flex items-center font-inter">
                                <FaStar className="mr-2" />
                                Group discounted rates
                            </li>
                            <li className="flex items-center font-inter">
                                <FaStar className="mr-2" />
                                Comprehensive coverage
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gray-50 rounded-lg p-8">
                    <FaHeartbeat className="mx-auto text-5xl text-primaryRed mb-4" />
                    <h2 className="text-2xl font-montserrat font-bold text-primaryBlack mb-4">
                        Ready to Secure Your Health?
                    </h2>
                    <p className="text-primaryGrey font-inter max-w-2xl mx-auto mb-6">
                        Our experienced advisors are ready to help you find the perfect health insurance
                        plan that meets your specific needs and budget.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-primaryRed text-white px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-red-700 transition-colors">
                            Get a Quote
                        </button>
                        <button className="bg-primaryBlack text-white px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-gray-700 transition-colors">
                            Speak to Advisor
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthInsurance;