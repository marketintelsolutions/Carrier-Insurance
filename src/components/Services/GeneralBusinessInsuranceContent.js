import React, { useState } from 'react';
import { FaShieldAlt, FaBuilding, FaUser, FaChevronDown, FaChevronUp, FaFire, FaCar, FaHome, FaPlane, FaShip, FaMoneyBill, FaUsers, FaCog, FaSeedling, FaHeart, FaGavel, FaLaptop } from 'react-icons/fa';

const GeneralBusinessInsurance = () => {
    const [openSections, setOpenSections] = useState(['individual', 'corporate']);
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleSection = (section) => {
        setOpenSections(prev =>
            prev.includes(section)
                ? prev.filter(s => s !== section)
                : [...prev, section]
        );
    };

    const toggleCard = (cardId) => {
        setExpandedCard(expandedCard === cardId ? null : cardId);
    };

    const individualInsurance = [
        {
            id: 'crop',
            name: 'Crop Insurance',
            icon: FaSeedling,
            desc: 'Protection for agricultural crops against natural disasters and weather-related losses'
        },
        {
            id: 'home',
            name: 'Home Insurance',
            icon: FaHome,
            desc: 'Comprehensive coverage for residential property including homeowner\'s and tenant\'s insurance'
        },
        {
            id: 'property',
            name: 'Property Insurance',
            icon: FaBuilding,
            desc: 'Property All Risks coverage incorporating accidental loss, destruction or damage to property',
            details: 'This is a broader form of cover compared to the standard Fire and Allied perils policy. This "All Risks" policy incorporates accidental loss destruction or damage to the property subject to specified exclusions. It also covers Fire, Lightning, Allied Perils and Burglary.'
        },
        {
            id: 'fire',
            name: 'Fire & Special Perils',
            icon: FaFire,
            desc: 'Protection against Fire, Lighting, Explosion, Storm, Tempest, Flood, Burst Pipe, Malicious Damage',
            details: 'The policy protects your property against the threat of Fire, Lighting, Explosion, Storm, Tempest, Flood, Burst Pipe, Malicious Damage, Earthquake, Aircraft Damage, Riot & Strike, Impact damage, Burglary etc. An insurance policy designed to cover losses from a burglary and fire.'
        },
        {
            id: 'travel',
            name: 'Travel Insurance',
            icon: FaPlane,
            desc: 'Coverage for travel-related risks and emergencies during domestic and international trips'
        },
        {
            id: 'motor',
            name: 'Motor Insurance',
            icon: FaCar,
            desc: 'Complete vehicle protection and liability coverage for personal and commercial vehicles'
        },
        {
            id: 'professional',
            name: 'Professional Indemnity',
            icon: FaGavel,
            desc: 'Compensation for legal costs due to negligent acts, errors, breach of duty or omission',
            details: 'This cover will provide compensation to professionals for Legal costs and expenses incurred due to negligent acts, errors, breach of duty or omission and can be arranged as an annual policy or on project specific basis. This insurance also covers all the claims that medical, Legal or any professional are exposed to.'
        },
        {
            id: 'health',
            name: 'Health Insurance',
            icon: FaHeart,
            desc: 'Medical coverage for individuals and families including surgical procedures and treatments'
        }
    ];

    const corporateInsurance = [
        {
            id: 'marine-cargo',
            name: 'Marine Cargo Insurance',
            icon: FaShip,
            desc: 'Coverage for Import/Export shipments on All-Risk or restricted cover basis',
            details: 'Marine Cargo Insurance will cover all the Import / Export shipments on an All-Risk basis (As per Institute Cargo Clause (A)) or on restricted cover basis. Or on the restricted cover (as per Institute Cargo Clause (C) or Institute Cargo Clause (B)).'
        },
        {
            id: 'marine-hull',
            name: 'Marine Hull Insurance',
            icon: FaShip,
            desc: 'Coverage for marine vehicles including hull, machinery, gear and equipment',
            details: 'This type of insurance covers all marine vehicles such as rowing boat or huge ocean-going tankers. MARINE HULL INSURANCE will cover the vessel, including hull, machinery, gear and equipment against loss or damage from specified perils. This policy also covers Liability to certain limits.'
        },
        {
            id: 'money',
            name: 'Money Insurance',
            icon: FaMoneyBill,
            desc: 'Comprehensive All Risk coverage for cash at premises and during transportation',
            details: 'Money insurance policy provides comprehensive All Risk insurance coverage for cash at the sales counters/premises during business hours and within locker safes outside office hours while being carried from one location to another.'
        },
        {
            id: 'public-liability',
            name: 'Public Liability',
            icon: FaUsers,
            desc: 'Coverage for third-party claims and damages including fraud protection',
            details: 'Public Liability Insurance covers any loss or damage to Third Party Property and/or death, bodily injury due to any activities by the insured, at the premises or within the territorial limits defined under the policy. This also covers money / stock belonging to the Insured and any financial losses sustained by the insured due to any acts of fraud by the employees.'
        },
        {
            id: 'credit',
            name: 'Credit Insurance',
            icon: FaShieldAlt,
            desc: 'Protection against customer payment defaults and insolvency',
            details: 'Credit insurance provides protection against any loss occurred in the event of a customer failing to pay the trade credit debts. The loss can be as a result of the customer becoming insolvent or in case, he/she fails to pay within the agreed credit period.'
        },
        {
            id: 'product-liability',
            name: 'Product Liability',
            icon: FaCog,
            desc: 'Coverage for injury or damage caused by manufactured, sold or supplied products',
            details: 'Product Liability Insurance covers any loss or damage to Third Party Property and/or death, bodily injury due to the use of products manufactured, sold or supplied by the insured.'
        },
        {
            id: 'general-liability',
            name: 'Comprehensive General Liability',
            icon: FaShieldAlt,
            desc: 'Umbrella cover for all business liability exposures',
            details: 'This policy is an umbrella cover designed to protect the insured against legal liability to third parties arising due to any of their business activities. The policy covers all liability exposures of a business such as Public Liability, Product Liability, and Employer\'s Liability unless specifically excluded.'
        },
        {
            id: 'directors',
            name: 'Directors & Officers Liability',
            icon: FaBuilding,
            desc: 'Protection for Directors and Officers against catastrophic financial loss',
            details: 'This type of Liability Insurance protects the Directors and Officers against catastrophic financial loss by protecting the personal assets. The policy provides reimbursement to the organization whenever required or permitted by law to compensate the Directors or Officers for their losses.'
        },
        {
            id: 'business-interruption',
            name: 'Business Interruption',
            icon: FaCog,
            desc: 'Coverage for loss of gross profits following material damage',
            details: 'The policy covers loss of gross profits or revenue which may result from a reduction in the turnover following a loss under the material damage policy (Fire or Property All Risk policy).'
        },
        {
            id: 'electronic',
            name: 'Electronic Equipment Insurance',
            icon: FaLaptop,
            desc: 'Coverage for electronic equipment damage and data reinstatement costs',
            details: 'The policy covers material damage to the electronic equipment, increased cost of working following damage to the equipment and additional (clerical) costs incurred for reinstatement of the lost data. All portable electronic equipment can be covered for insured losses anywhere in the world as well.'
        },
        {
            id: 'machinery',
            name: 'Machinery Breakdown Insurance',
            icon: FaCog,
            desc: 'Protection against sudden unforeseen machinery breakdown',
            details: 'This policy covers expensive machinery against sudden unforeseen breakdown (excluding breakdown due to wear and tear). This insurance also covers payment for repairs / replacement of the machinery and/or its parts following a break-down. The Machinery Breakdown Loss of Profit Insurance protects the loss of gross profit and/or increased cost of working due to a continuing interruption to business caused by a breakdown covered by the Machinery Breakdown insurance.'
        }
    ];

    return (
        <div className="bg-white">
            <div className="max-w-max mx-auto px-4 py-16">
                {/* Individual Insurance Section */}
                <div className="mb-12">
                    <div
                        className="bg-primaryRed text-white p-6 rounded-t-lg cursor-pointer flex justify-between items-center"
                        onClick={() => toggleSection('individual')}
                    >
                        <div className="flex items-center">
                            {/* <FaUser className="text-2xl mr-4" /> */}
                            <h2 className="text-2xl font-montserrat font-bold">Individual Insurance</h2>
                        </div>
                        {openSections.includes('individual') ? <FaChevronUp /> : <FaChevronDown />}
                    </div>

                    {openSections.includes('individual') && (
                        <div className="bg-primaryGrey/10 p-6 rounded-b-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {individualInsurance.map((item, index) => {
                                    const IconComponent = item.icon;
                                    const isExpanded = expandedCard === item.id;
                                    return (
                                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                            <IconComponent className="text-3xl text-primaryRed mb-4" />
                                            <h3 className="text-lg font-montserrat font-semibold mb-2">{item.name}</h3>
                                            <p className="text-primaryGrey font-inter text-sm mb-3">{item.desc}</p>

                                            {item.details && (
                                                <>
                                                    <button
                                                        className="text-primaryRed font-inter text-sm hover:underline"
                                                        onClick={() => toggleCard(item.id)}
                                                    >
                                                        {isExpanded ? 'Show Less' : 'Learn More'}
                                                    </button>

                                                    {isExpanded && (
                                                        <div className="mt-3 pt-3 border-t border-primaryGrey/20">
                                                            <p className="text-primaryGrey font-inter text-sm">{item.details}</p>
                                                        </div>
                                                    )}
                                                </>
                                            )}
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
                            {/* <FaBuilding className="text-2xl mr-4" /> */}
                            <h2 className="text-2xl font-montserrat font-bold">Corporate Insurance</h2>
                        </div>
                        {openSections.includes('corporate') ? <FaChevronUp /> : <FaChevronDown />}
                    </div>

                    {openSections.includes('corporate') && (
                        <div className="bg-primaryGrey/10 p-6 rounded-b-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {corporateInsurance.map((item, index) => {
                                    const IconComponent = item.icon;
                                    const isExpanded = expandedCard === item.id;
                                    return (
                                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                            <IconComponent className="text-3xl text-primaryRed mb-4" />
                                            <h3 className="text-lg font-montserrat font-semibold mb-2">{item.name}</h3>
                                            <p className="text-primaryGrey font-inter text-sm mb-3">{item.desc}</p>

                                            {item.details && (
                                                <>
                                                    <button
                                                        className="text-primaryRed font-inter text-sm hover:underline"
                                                        onClick={() => toggleCard(item.id)}
                                                    >
                                                        {isExpanded ? 'Show Less' : 'Learn More'}
                                                    </button>

                                                    {isExpanded && (
                                                        <div className="mt-3 pt-3 border-t border-primaryGrey/20">
                                                            <p className="text-primaryGrey font-inter text-sm">{item.details}</p>
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gray-50 rounded-lg p-8 text-white">
                    <FaShieldAlt className="mx-auto text-5xl text-primaryRed mb-4" />
                    <h2 className="text-2xl text-primaryBlack font-montserrat font-bold mb-4">
                        Need Comprehensive Business Protection?
                    </h2>
                    <p className="font-inter text-primaryGrey max-w-2xl mx-auto mb-6">
                        Our experienced team is ready to help you find the perfect insurance solution
                        tailored to your specific business needs and requirements.
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

export default GeneralBusinessInsurance;