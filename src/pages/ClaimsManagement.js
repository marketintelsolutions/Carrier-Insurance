import React from 'react';
import { FaClipboardCheck, FaClock, FaHandshake, FaUserTie, FaChartLine, FaFileAlt, FaPhone, FaShieldAlt, FaCheckCircle, FaUsers, FaGavel, FaCog } from 'react-icons/fa';

const ClaimsManagement = () => {
    const processSteps = [
        { icon: FaFileAlt, title: 'Claim Submission', desc: 'Easy and efficient claim filing process' },
        { icon: FaClipboardCheck, title: 'Initial Assessment', desc: 'Quick evaluation of your claim details' },
        { icon: FaUserTie, title: 'Loss Adjustor Assignment', desc: 'Pre-appointed specialist handles your case' },
        { icon: FaHandshake, title: 'Resolution & Payment', desc: 'Comprehensive support to claim settlement' }
    ];

    const keyElements = [
        {
            icon: FaUserTie,
            title: 'Pre-appointed Loss Adjustor',
            description: 'Who will meet with you pre-loss to ensure that they understand your business and insurance portfolio long before a claim.'
        },
        {
            icon: FaClock,
            title: 'Periodic Claims Updates',
            description: 'Regular review meetings and updates to keep you informed throughout the claims process.'
        },
        {
            icon: FaHandshake,
            title: 'Comprehensive Representation',
            description: 'Working on your behalf and representing you in front of surveyors, adjusters, arbitrators, lawyers, carriers as well as other parties.'
        },
        {
            icon: FaCog,
            title: 'Technical Support',
            description: 'Expert technical support and guidance for major losses to ensure optimal outcomes.'
        },
        {
            icon: FaChartLine,
            title: 'Analytical Support',
            description: 'Identify claim trends and patterns to help prevent future losses and optimize your coverage.'
        },
        {
            icon: FaFileAlt,
            title: 'Documentation Support',
            description: 'Comprehensive support right from documentation to repayment ensuring smooth process.'
        }
    ];

    const relationships = [
        { icon: FaShieldAlt, title: 'Insurers', desc: 'Strong partnerships with leading insurance companies' },
        { icon: FaUserTie, title: 'Loss Adjusters', desc: 'Experienced professionals who understand your business' },
        { icon: FaGavel, title: 'Lawyers', desc: 'Legal experts to support complex claims' },
        { icon: FaUsers, title: 'Specialists', desc: 'Industry experts for specialized claim requirements' }
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[70vh] bg-gradient-to-r from-green-600 to-green-800 overflow-hidden">
                <img
                    src="/images/nightcity.jpg"
                    alt="Claims Management"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <FaClipboardCheck className="mx-auto text-6xl mb-4" />
                        <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
                            Claims Management
                        </h1>
                        <p className="text-xl font-inter max-w-2xl mx-auto">
                            Quick, easy and efficient claim process to ensure help is provided when you need it most
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-max mx-auto px-4 py-16">
                {/* Introduction */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-montserrat font-bold text-primaryBlack mb-6">
                        Professional Claims Management at Truebond
                    </h2>
                    <p className="text-lg font-inter text-primaryGrey max-w-4xl mx-auto mb-8">
                        At Truebond Insurance Broker, we have a quick, easy and efficient claim process to ensure that
                        help is provided when you need it the most. The most important characteristic of an efficient
                        insurance broker is their claims management strategy.
                    </p>
                    <div className="bg-green-50 rounded-lg p-6 max-w-3xl mx-auto">
                        <p className="font-inter text-primaryBlack font-semibold">
                            With Truebond, you can expect nothing short of total, comprehensive support throughout the life of a claim.
                        </p>
                    </div>
                </div>

                {/* Claims Process Steps */}
                <div className="mb-16">
                    <h2 className="text-3xl font-montserrat font-bold text-primaryBlack text-center mb-12">
                        Our Claims Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center relative">
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <IconComponent className="text-4xl text-green-600 mx-auto mb-4 mt-4" />
                                    <h3 className="text-lg font-montserrat font-semibold text-primaryBlack mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-primaryGrey font-inter text-sm">
                                        {step.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Key Elements */}
                <div className="mb-16">
                    <h2 className="text-3xl font-montserrat font-bold text-primaryBlack text-center mb-12">
                        Our Proactive Claim Services
                    </h2>
                    <p className="text-center text-primaryGrey font-inter mb-8 max-w-3xl mx-auto">
                        Our proactive claim services have a holistic approach and include the following key elements:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {keyElements.map((element, index) => {
                            const IconComponent = element.icon;
                            return (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                                    <IconComponent className="text-3xl text-green-600 mb-4" />
                                    <h3 className="text-xl font-montserrat font-semibold text-primaryBlack mb-3">
                                        {element.title}
                                    </h3>
                                    <p className="text-primaryGrey font-inter">
                                        {element.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Professional Relationships */}
                <div className="bg-primaryBlack rounded-xl shadow-lg p-8 mb-16">
                    <div className="text-center mb-8">
                        <FaHandshake className="mx-auto text-5xl text-green-400 mb-4" />
                        <h2 className="text-3xl font-montserrat font-bold text-white mb-4">
                            Established Professional Relationships
                        </h2>
                        <p className="text-gray-300 font-inter max-w-2xl mx-auto">
                            Our claims specialists have established healthy working relationships with key industry professionals
                            to ensure clients have adequate protection.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relationships.map((relationship, index) => {
                            const IconComponent = relationship.icon;
                            return (
                                <div key={index} className="text-center p-4">
                                    <IconComponent className="mx-auto text-3xl text-green-400 mb-3" />
                                    <h4 className="font-montserrat font-semibold text-white mb-2">{relationship.title}</h4>
                                    <p className="text-gray-300 font-inter text-sm">{relationship.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Support Features */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <FaPhone className="text-4xl text-green-600 mb-4" />
                        <h3 className="text-2xl font-montserrat font-bold text-primaryBlack mb-4">
                            24/7 Support Available
                        </h3>
                        <p className="text-primaryGrey font-inter mb-4">
                            Our dedicated claims team is available around the clock to assist you with any
                            claim-related queries or emergencies.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center text-primaryGrey font-inter">
                                <FaCheckCircle className="text-green-600 mr-2" />
                                Emergency claim reporting
                            </li>
                            <li className="flex items-center text-primaryGrey font-inter">
                                <FaCheckCircle className="text-green-600 mr-2" />
                                Real-time claim tracking
                            </li>
                            <li className="flex items-center text-primaryGrey font-inter">
                                <FaCheckCircle className="text-green-600 mr-2" />
                                Expert guidance and support
                            </li>
                        </ul>
                    </div>

                    <div className="bg-green-50 rounded-lg p-8">
                        <FaChartLine className="text-4xl text-green-600 mb-4" />
                        <h3 className="text-2xl font-montserrat font-bold text-primaryBlack mb-4">
                            Claims Performance
                        </h3>
                        <p className="text-primaryGrey font-inter mb-4">
                            We pride ourselves on our efficient claims processing and high customer satisfaction rates.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-montserrat font-bold text-green-600">98%</div>
                                <div className="text-sm font-inter text-primaryGrey">Claim Success Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-montserrat font-bold text-green-600">24hrs</div>
                                <div className="text-sm font-inter text-primaryGrey">Average Response Time</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gradient-to-r from-green-600 to-green-800 rounded-lg p-8 text-white">
                    <FaShieldAlt className="mx-auto text-5xl mb-4" />
                    <h2 className="text-2xl font-montserrat font-bold mb-4">
                        Need to File a Claim?
                    </h2>
                    <p className="font-inter max-w-2xl mx-auto mb-6">
                        Our claims team is ready to assist you. Contact us immediately to start your claim process
                        and get the support you need.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-gray-100 transition-colors">
                            File a Claim
                        </button>
                        <button className="bg-primaryBlack text-white px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-gray-700 transition-colors">
                            Emergency Hotline
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClaimsManagement;