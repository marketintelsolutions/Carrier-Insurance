import React, { useState } from 'react';
import { FaHeart, FaUsers, FaUser, FaShieldAlt, FaChevronDown, FaChevronUp, FaHandHoldingHeart, FaUmbrella, FaLifeRing } from 'react-icons/fa';

const LifeBusinessInsurance = () => {
    const [activeCard, setActiveCard] = useState(null);

    const lifeInsuranceTypes = [
        {
            id: 'group-life',
            title: 'Group Life Insurance',
            icon: FaUsers,

            description: 'Cost-effective insurance solutions for employees providing lump sum payments or income replacement in the event of death, permanent disability or temporary incapacity.',
            features: [
                'Lump sum death benefits',
                'Permanent disability coverage',
                'Temporary incapacity protection',
                'Accident and sickness coverage',
                'Cost-effective group rates',
                'Employee benefit packages'
            ],
            color: 'bg-primaryRed'
        },
        {
            id: 'individual-life',
            title: 'Individual Life Insurance',
            icon: FaUser,

            description: 'Personal insurance coverage providing death benefits to individuals, covering expenses such as funeral costs and outstanding debts.',
            features: [
                'Death benefit protection',
                'Funeral expense coverage',
                'Outstanding debt protection',
                'Beneficiary payouts',
                'Flexible premium options',
                'Personal financial security'
            ],
            color: 'bg-primaryBlack'
        },
        {
            id: 'group-accident',
            title: 'Group Personal Accident Insurance',
            icon: FaShieldAlt,

            description: 'Extended coverage including accidental/natural death, permanent total/partial disability, and temporary total disability following accidents and/or sickness.',
            features: [
                'Accidental death coverage',
                'Natural death benefits',
                'Permanent Total Disability',
                'Permanent Partial Disability',
                'Temporary Total Disability',
                'Worldwide coverage'
            ],
            color: 'bg-primaryGrey'
        }
    ];

    const whychoose = [
        {
            icon: FaUmbrella,
            title: 'Comprehensive Coverage',
            image: 'coverage',
            desc: 'Complete protection against various life risks'
        },
        {
            icon: FaUsers,
            image: 'group',
            title: 'Group Benefits',
            desc: 'Cost-effective solutions for businesses'
        },
        {
            icon: FaHeart,
            image: 'family',
            title: 'Family Protection',
            desc: 'Secure your family\'s financial future'
        },
        {
            icon: FaShieldAlt,
            image: 'claims',
            title: 'Reliable Claims',
            desc: 'Quick and efficient claim processing'
        }
    ]

    return (
        <div className="bg-primaryGrey/10 min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[80vh] bg-gradient-to-r from-primaryRed to-primaryRed/80 overflow-hidden">
                <img
                    src="/images/nightcity.jpg"
                    alt="Life Business Insurance"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-8">
                            Life Business Insurance
                        </h1>
                        <p className="text-xl font-inter max-w-2xl mx-auto">
                            Protecting what matters most with comprehensive life insurance solutions for individuals and groups
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-max mx-auto px-4 py-16">
                {/* Main Insurance Types */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {lifeInsuranceTypes.map((type) => {
                        const IconComponent = type.icon;
                        const isActive = activeCard === type.id;

                        return (
                            <div key={type.id} className="bg-white h-fit rounded-xl  overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className={`${type.color} p-6 text-white`}>
                                    <IconComponent className="text-4xl mb-4" />
                                    <h3 className="text-2xl h-12 font-montserrat font-bold mb-2">{type.title}</h3>
                                </div>

                                <div className="p-6">
                                    <p className="text-primaryGrey h-28 font-inter mb-4 leading-relaxed">
                                        {type.description}
                                    </p>

                                    <button
                                        className="flex items-center justify-between w-full text-primaryRed font-montserrat font-semibold"
                                        onClick={() => setActiveCard(isActive ? null : type.id)}
                                    >
                                        View Features
                                        {isActive ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>

                                    {isActive && (
                                        <div className="mt-4 pt-4 border-t border-gray-200">
                                            <ul className="space-y-2">
                                                {type.features.map((feature, index) => (
                                                    <li key={index} className="flex items-center text-primaryGrey font-inter text-sm">
                                                        <FaLifeRing className="text-primaryRed mr-2 text-xs" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Benefits Section */}
                <div className=" rounded-xl flex justify-between mb-16">
                    <div className="text-center   max-w-[600px] flex flex-col justify-center mb-8">
                        <h2 className="text-5xl  font-montserrat font-bold text-primaryBlack mb-8">
                            Why Choose Our Life Insurance?
                        </h2>
                        <p className="text-primaryGrey font-inter text-xl max-w-xl mx-auto">
                            Our life insurance solutions are designed to provide peace of mind and financial security for you and your loved ones
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {whychoose.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <div key={index} className="text-center flex flex-col items-center gap-5 p-4">
                                    {/* <IconComponent className="mx-auto text-3xl text-primaryRed mb-3" /> */}
                                    <img src={`/images/${benefit.image}.png`} alt={benefit.image} className='max-w-[50px]' />
                                    <h4 className="font-montserrat font-semibold text-primaryBlack mt-2">{benefit.title}</h4>
                                    <p className="text-primaryGrey font-inter text-sm">{benefit.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Coverage Details */}
                <div className="bg-gradient-to-r from-primaryBlack to-primaryGrey rounded-xl shadow-lg p-8 text-white">
                    <h2 className="text-3xl font-montserrat font-bold mb-6 text-center">
                        Coverage Details
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-montserrat font-semibold mb-4 text-primaryRed">
                                What We Cover
                            </h3>
                            <ul className="space-y-2 font-inter">
                                <li>• Death benefits for natural and accidental causes</li>
                                <li>• Permanent total and partial disability</li>
                                <li>• Temporary disability from accidents or sickness</li>
                                <li>• Worldwide coverage protection</li>
                                <li>• Funeral and burial expenses</li>
                                <li>• Outstanding debt settlement</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-montserrat font-semibold mb-4 text-primaryRed">
                                Additional Benefits
                            </h3>
                            <ul className="space-y-2 font-inter">
                                <li>• Flexible premium payment options</li>
                                <li>• Group discount rates available</li>
                                <li>• Quick claim processing</li>
                                <li>• Expert advisory services</li>
                                <li>• 24/7 customer support</li>
                                <li>• Annual policy reviews</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center bg-gradient-to-r mt-10 from-primaryRed to-primaryRed/80 rounded-lg p-8 text-white">
                    <FaShieldAlt className="mx-auto text-5xl mb-4" />
                    <h2 className="text-2xl font-montserrat font-bold mb-4">
                        Need a Suitable Life Insurance?
                    </h2>
                    <p className="font-inter max-w-2xl mx-auto mb-6">
                        Our experienced team is ready to help you find the perfect insurance solution
                        tailored to your specific business needs and requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white border border-white text-primaryRed px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-transparent hover:text-white transition-colors">
                            Get a Quote
                        </button>
                        <button className="bg-primaryBlack text-white px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-primaryBlack/80 transition-colors">
                            Speak to Advisor
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LifeBusinessInsurance;