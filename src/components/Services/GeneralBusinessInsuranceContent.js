import React, { useState } from 'react';
import { FaShieldAlt, FaBuilding, FaUser, FaChevronDown, FaChevronUp, FaFire, FaCar, FaHome, FaPlane, FaShip, FaMoneyBill, FaUsers, FaCog } from 'react-icons/fa';

const GeneralBusinessInsuranceContent = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const individualInsurance = [
        { name: 'Crop Insurance', icon: FaHome, desc: 'Protection for agricultural crops against natural disasters' },
        { name: 'Home Insurance', icon: FaHome, desc: 'Comprehensive coverage for your residential property' },
        { name: 'Property Insurance', icon: FaBuilding, desc: 'Protection for commercial and residential properties' },
        { name: 'Fire Insurance', icon: FaFire, desc: 'Coverage against fire damage and related perils' },
        { name: 'Motor Insurance', icon: FaCar, desc: 'Complete vehicle protection and liability coverage' },
        { name: 'Travel Insurance', icon: FaPlane, desc: 'Coverage for travel-related risks and emergencies' },
        { name: 'Professional Indemnity', icon: FaShieldAlt, desc: 'Protection against professional negligence claims' },
        { name: 'Health Insurance', icon: FaUsers, desc: 'Medical coverage for individuals and families' }
    ];

    const corporateInsurance = [
        { name: 'Marine Insurance', icon: FaShip, desc: 'Coverage for maritime cargo and hull protection' },
        { name: 'Money Insurance', icon: FaMoneyBill, desc: 'Protection for cash and valuable items' },
        { name: 'Public Liability', icon: FaUsers, desc: 'Coverage for third-party claims and damages' },
        { name: 'Credit Insurance', icon: FaShieldAlt, desc: 'Protection against customer payment defaults' },
        { name: 'Product Liability', icon: FaCog, desc: 'Coverage for product-related injury or damage claims' },
        { name: 'Directors & Officers', icon: FaBuilding, desc: 'Protection for company leadership liability' },
        { name: 'Business Interruption', icon: FaCog, desc: 'Coverage for loss of income due to disruptions' },
        { name: 'Machinery Breakdown', icon: FaCog, desc: 'Protection against equipment failure and breakdown' }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[70vh] bg-gradient-to-r from-primaryBlack to-gray-800 overflow-hidden">
                <img
                    src="/images/nightcity.jpg"
                    alt="General Business Insurance"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <FaShieldAlt className="mx-auto text-6xl text-primaryRed mb-4" />
                        <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
                            General Business Insurance
                        </h1>
                        <p className="text-xl font-inter max-w-2xl mx-auto">
                            Comprehensive protection for individuals and corporations across all business sectors
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-max mx-auto px-4 py-16">
                {/* Individual Insurance Section */}
                <div className="mb-12">
                    <div
                        className="bg-primaryRed text-white p-6 rounded-t-lg cursor-pointer flex justify-between items-center"
                        onClick={() => toggleSection('individual')}
                    >
                        <div className="flex items-center">
                            <FaUser className="text-2xl mr-4" />
                            <h2 className="text-2xl font-montserrat font-bold">Individual Insurance</h2>
                        </div>
                        {openSection === 'individual' ? <FaChevronUp /> : <FaChevronDown />}
                    </div>

                    {openSection === 'individual' && (
                        <div className="bg-gray-50 p-6 rounded-b-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {individualInsurance.map((item, index) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                            <IconComponent className="text-3xl text-primaryRed mb-4" />
                                            <h3 className="text-lg font-montserrat font-semibold mb-2">{item.name}</h3>
                                            <p className="text-primaryGrey font-inter text-sm">{item.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/* Corporate Insurance Section */}
                <div className="mb-12">
                    <div
                        className="bg-primaryBlack text-white p-6 rounded-t-lg cursor-pointer flex justify-between items-center"
                        onClick={() => toggleSection('corporate')}
                    >
                        <div className="flex items-center">
                            <FaBuilding className="text-2xl mr-4" />
                            <h2 className="text-2xl font-montserrat font-bold">Corporate Insurance</h2>
                        </div>
                        {openSection === 'corporate' ? <FaChevronUp /> : <FaChevronDown />}
                    </div>

                    {openSection === 'corporate' && (
                        <div className="bg-gray-50 p-6 rounded-b-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {corporateInsurance.map((item, index) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                            <IconComponent className="text-3xl text-primaryRed mb-4" />
                                            <h3 className="text-lg font-montserrat font-semibold mb-2">{item.name}</h3>
                                            <p className="text-primaryGrey font-inter text-sm">{item.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/* Detailed Coverage Information */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-montserrat font-bold text-primaryBlack mb-6 text-center">
                        Comprehensive Coverage Details
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-montserrat font-semibold text-primaryRed mb-4">
                                Property & Asset Protection
                            </h3>
                            <ul className="space-y-2 text-primaryGrey font-inter">
                                <li>• Fire, Lightning, and Explosion coverage</li>
                                <li>• Flood, Storm, and Natural disaster protection</li>
                                <li>• Burglary and Theft coverage</li>
                                <li>• Electronic Equipment Insurance</li>
                                <li>• Machinery Breakdown protection</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-montserrat font-semibold text-primaryRed mb-4">
                                Liability & Risk Management
                            </h3>
                            <ul className="space-y-2 text-primaryGrey font-inter">
                                <li>• Public and Product Liability</li>
                                <li>• Professional Indemnity coverage</li>
                                <li>• Directors and Officers protection</li>
                                <li>• Business Interruption insurance</li>
                                <li>• Credit and Money insurance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralBusinessInsuranceContent;