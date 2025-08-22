import React, { useState } from 'react';
import { FaIndustry, FaPlane, FaBuilding, FaHospital, FaOilCan, FaCog, FaSeedling, FaTruck, FaChevronDown, FaChevronUp, FaShieldAlt, FaUsers, FaMoneyBill } from 'react-icons/fa';
import SharedBanner from '../components/SharedBanner';
import { Link } from 'react-router-dom';

const InsuranceIndustrySectors = () => {
    const [expandedSectors, setExpandedSectors] = useState(new Set(['aviation', 'construction', 'healthcare', 'oil-gas', 'manufacturing', 'agriculture', 'transportation']));

    const toggleSector = (sectorId) => {
        const newExpandedSectors = new Set(expandedSectors);
        if (newExpandedSectors.has(sectorId)) {
            newExpandedSectors.delete(sectorId);
        } else {
            newExpandedSectors.add(sectorId);
        }
        setExpandedSectors(newExpandedSectors);
    };

    const sectors = [
        {
            id: 'aviation',
            title: 'Aviation Sector',
            icon: FaPlane,
            description: 'Aviation insurance is a sensitive insurance sector covering comprehensive protection for aircraft operations.',
            products: [
                'Aircraft Hull Insurance',
                'Airport Owners\' and Operators\' Liability Insurance',
                'Passenger Liability Insurance',
                'Hangar Keeper\'s Liability',
                'Aviation Product Liability Insurance'
            ]
        },
        {
            id: 'construction',
            title: 'Construction Sector',
            icon: FaBuilding,
            description: 'Well known as C.A.R (Contractors All Risk), providing insurance for ongoing construction against fortuitous loss or damage.',
            products: [
                'Material Damage Section',
                'Third-Party Liability Section',
                'Construction Equipment Coverage',
                'Workmanship Insurance',
                'Project Delay Coverage'
            ]
        },
        {
            id: 'healthcare',
            title: 'Healthcare/Pharmaceutical Sector',
            icon: FaHospital,
            description: 'Healthcare insurance sector with specialized policies for medical and pharmaceutical industries.',
            products: [
                'Medical Malpractice Insurance',
                'Professional Liability Insurance',
                'Product Liability Insurance',
                'Clinical Trial Insurance',
                'Pharmaceutical Product Coverage'
            ]
        },
        {
            id: 'oil-gas',
            title: 'Oil and Gas',
            icon: FaOilCan,
            description: 'Comprehensive coverage for exploration & production (E&P) risk exposures in the oil and gas industry.',
            sections: [
                {
                    title: 'Physical Damage / Property All Risk',
                    items: ['Oil rigs, platforms, pipelines', 'Refineries, depots, processing facilities', 'Equipment and machinery', 'Offshore and onshore installations', 'Storage tanks and terminals']
                },
                {
                    title: 'Business Interruption / Loss of Production',
                    items: ['Loss of revenue due to downtime', 'Extra expense to resume operations', 'Equipment failure coverage', 'Natural disaster protection']
                },
                {
                    title: 'Third-Party Liability',
                    items: ['Bodily injury or death to third parties', 'Damage to third-party property', 'Environmental liability', 'Contractor liability']
                }
            ]
        },
        {
            id: 'manufacturing',
            title: 'Manufacturing Sector',
            icon: FaCog,
            description: 'Comprehensive insurance solutions for manufacturing industries with multiple coverage options.',
            products: [
                'Industrial All Risk (IAR) Insurance',
                'Fire and Special Perils Insurance',
                'Burglary/Theft Insurance',
                'Machinery Breakdown Insurance',
                'Business Interruption Insurance',
                'Product Liability Insurance',
                'Public Liability Insurance'
            ]
        },
        {
            id: 'agriculture',
            title: 'Agricultural Sector',
            icon: FaSeedling,
            description: 'Specialized insurance coverage for agricultural operations and farming activities.',
            products: [
                'Crop Insurance',
                'Livestock Insurance',
                'Poultry Insurance',
                'Farm Property Insurance',
                'Agricultural Equipment & Machinery Insurance'
            ]
        },
        {
            id: 'transportation',
            title: 'Transportation Sector',
            icon: FaTruck,
            description: 'Regulatory insurance coverage for transportation and logistics operations.',
            products: [
                'Motor Insurance',
                'Goods-in-Transit (GIT) Insurance',
                'Marine Cargo Insurance',
                'Carrier\'s Liability Insurance',
                'Fleet Insurance'
            ]
        }
    ];

    return (
        <>
            <SharedBanner
                img={'insuranceindustry'}
                heading={'Specialized insurance solutions across diverse industries with tailored coverage for specific sector risks'}
                page={'Insurance Industry & Sectors'}
            />
            <div className="bg-white min-h-screen">
                <div className="max-w-max mx-auto px-4 py-16">
                    {/* Introduction */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-montserrat font-bold text-primaryBlack mb-6">
                            Comprehensive Sector Coverage
                        </h2>
                        <p className="text-lg font-inter text-primaryGrey max-w-4xl mx-auto">
                            We provide specialized insurance solutions across multiple industries, understanding the unique risks
                            and requirements of each sector to deliver comprehensive protection.
                        </p>
                    </div>

                    {/* Sectors Grid */}
                    <div className="space-y-6">
                        {sectors.map((sector, index) => {
                            const IconComponent = sector.icon;
                            const isExpanded = expandedSectors.has(sector.id);
                            const isEven = index % 2 === 0;

                            return (
                                <div key={sector.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                    {/* Sector Header */}
                                    <div
                                        className={`bg-primaryBlack p-6 cursor-pointer transition-all duration-300 hover:opacity-90`}
                                        onClick={() => toggleSector(sector.id)}
                                    >
                                        <div className="flex items-center justify-between text-white">
                                            <div className="flex items-center">
                                                {/* <IconComponent className="text-3xl mr-4" /> */}
                                                <div>
                                                    <h3 className="text-2xl font-montserrat font-bold">{sector.title}</h3>
                                                    <p className="font-inter opacity-90 mt-1">{sector.description}</p>
                                                </div>
                                            </div>
                                            {isExpanded ? <FaChevronUp className="text-xl" /> : <FaChevronDown className="text-xl" />}
                                        </div>
                                    </div>

                                    {/* Expanded Content */}
                                    {isExpanded && (
                                        <div className="p-6">
                                            {sector.products && (
                                                <div>
                                                    <h4 className="text-xl font-montserrat font-semibold text-primaryBlack mb-4">
                                                        Insurance Products & Coverage
                                                    </h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                        {sector.products.map((product, index) => (
                                                            <div key={index} className="bg-primaryGrey/10 rounded-lg p-4 border-l-4 border-primaryRed">
                                                                <div className="flex items-center">
                                                                    <FaShieldAlt className="text-primaryRed mr-2" />
                                                                    <span className="font-inter text-primaryBlack">{product}</span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {sector.sections && (
                                                <div className="space-y-6">
                                                    {sector.sections.map((section, index) => (
                                                        <div key={index}>
                                                            <h4 className="text-xl font-montserrat font-semibold text-primaryBlack mb-3">
                                                                {section.title}
                                                            </h4>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                                {section.items.map((item, itemIndex) => (
                                                                    <div key={itemIndex} className="bg-primaryGrey/10 rounded-lg p-3 border-l-4 border-primaryRed">
                                                                        <div className="flex items-center">
                                                                            <FaShieldAlt className="text-primaryRed mr-2 text-sm" />
                                                                            <span className="font-inter text-primaryBlack text-sm">{item}</span>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Statistics Section */}
                    <div className="mt-16 bg-primaryRed/30 rounded-xl shadow-lg p-8 text-black">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-montserrat font-bold mb-4">
                                Industry Coverage Statistics
                            </h2>
                            <p className="font-inter opacity-90 max-w-2xl mx-auto">
                                Our comprehensive coverage across multiple sectors ensures specialized protection for diverse industry needs
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-montserrat font-bold mb-2">7+</div>
                                <div className="font-inter">Major Sectors</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-montserrat font-bold mb-2">50+</div>
                                <div className="font-inter">Insurance Products</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-montserrat font-bold mb-2">100%</div>
                                <div className="font-inter">Risk Coverage</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-montserrat font-bold mb-2">24/7</div>
                                <div className="font-inter">Support Available</div>
                            </div>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                            <FaShieldAlt className="mx-auto text-4xl text-primaryRed mb-4" />
                            <h3 className="text-xl font-montserrat font-semibold text-primaryBlack mb-3">
                                Specialized Coverage
                            </h3>
                            <p className="text-primaryGrey font-inter">
                                Tailored insurance solutions designed for specific industry risks and requirements
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                            <FaUsers className="mx-auto text-4xl text-primaryRed mb-4" />
                            <h3 className="text-xl font-montserrat font-semibold text-primaryBlack mb-3">
                                Expert Consultation
                            </h3>
                            <p className="text-primaryGrey font-inter">
                                Industry specialists who understand sector-specific challenges and insurance needs
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                            <FaMoneyBill className="mx-auto text-4xl text-primaryRed mb-4" />
                            <h3 className="text-xl font-montserrat font-semibold text-primaryBlack mb-3">
                                Competitive Rates
                            </h3>
                            <p className="text-primaryGrey font-inter">
                                Cost-effective insurance solutions with competitive premiums across all sectors
                            </p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 text-center bg-gray-50 rounded-lg p-8 text-white">
                        <FaIndustry className="mx-auto text-5xl text-primaryRed mb-4" />
                        <h2 className="text-2xl text-primaryBlack font-montserrat font-bold mb-4">
                            Need Sector-Specific Insurance?
                        </h2>
                        <p className="font-inter text-primaryGrey max-w-2xl mx-auto mb-6">
                            Our industry specialists are ready to help you find the perfect insurance solution
                            tailored to your sector's unique requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to={'/claims'}>
                                <button className="bg-primaryRed text-white px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-red-700 transition-colors">
                                    Get Sector Quote
                                </button>
                            </Link>
                            <Link to={'/contact'}>
                                <button className="bg-primaryBlack text-white px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-gray-700 transition-colors">
                                    Speak to Specialist
                                </button>
                            </Link >
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default InsuranceIndustrySectors;