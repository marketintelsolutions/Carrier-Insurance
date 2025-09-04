import React, { useState } from 'react';
import { FaUsers, FaHandshake, FaTrophy, FaGraduationCap, FaLaptop, FaMapMarkerAlt, FaClock, FaBriefcase, FaChevronDown, FaChevronUp, FaEnvelope, FaUserTie, FaChartLine, FaShieldAlt, FaHeart } from 'react-icons/fa';
import SharedBanner from '../components/SharedBanner';

const CareerPage = () => {
    const [expandedJob, setExpandedJob] = useState(null);

    const toggleJob = (jobId) => {
        setExpandedJob(expandedJob === jobId ? null : jobId);
    };

    const companyValues = [
        { icon: FaHandshake, title: 'Integrity', desc: 'Integrity in everything we do' },
        { icon: FaUsers, title: 'Team-Oriented', desc: 'Supportive, team-oriented environment' },
        { icon: FaTrophy, title: 'Growth Opportunities', desc: 'Growth opportunities & professional development' },
        { icon: FaLaptop, title: 'Flexible Work', desc: 'Flexible work options' },
        { icon: FaHeart, title: 'Great Environment', desc: 'Great work environment' }
    ];

    const openPositions = [
        {
            id: 'general-manager',
            title: 'General Manager',
            location: 'Oniru, Victoria Island, Lagos State',
            type: 'Full Time',
            icon: FaUserTie,
            description: 'Lead overall operations and strategic direction of the insurance company.',
            requirements: ['10+ years management experience', 'Insurance industry background', 'Strategic leadership skills'],
            responsibilities: ['Strategic planning and execution', 'Team leadership and development', 'Business growth oversight']
        },
        {
            id: 'business-development',
            title: 'Business Development Manager',
            location: 'Oniru, Victoria Island, Lagos State',
            type: 'Hybrid',
            icon: FaChartLine,
            description: 'Proactive and results-oriented Business Development Manager to help grow our client base by identifying, engaging, and closing companies that need insurance services.',
            requirements: [
                'First degree in Insurance, Business Administration, Economics, Accounting, or relevant field',
                '5-10 years of experience in Insurance, B2B sales, business development',
                '5+ years of solid sales experience from professional service sector',
                'Ability to draft, decipher, and negotiate business contracts',
                'Excellent written and verbal communication skills',
                'Proficiency in Microsoft Office (Excel and Word)'
            ],
            responsibilities: [
                'Identify and qualify potential clients using LinkedIn, Twitter, AngelList, Crunchbase',
                'Build comprehensive prospect lists and maintain CRM records',
                'Execute structured cold email campaigns and LinkedIn outreach',
                'Conduct discovery calls and present company services',
                'Close deals and coordinate hand-off to client relationship team',
                'Represent company at events and conferences',
                'Collaborate with Talent team and provide progress updates'
            ]
        },
        {
            id: 'senior-relationship',
            title: 'Senior Relationship Manager',
            location: 'Oniru, Victoria Island, Lagos State',
            type: 'Hybrid',
            icon: FaUsers,
            description: 'Experienced and dynamic Senior Relationship Manager to manage and grow a portfolio of existing clients while identifying new business opportunities.',
            requirements: [
                'Bachelor\'s degree in Accounting, Economics, Business Administration, Insurance',
                'Minimum 5 years of experience in insurance industry',
                'At least 2 years in relationship management or sales role',
                'Strong knowledge of insurance products (property, casualty, life, health)',
                'Excellent communication and interpersonal skills',
                'Professional certifications (CIIN, CIP, CIB) are an asset'
            ],
            responsibilities: [
                'Develop and maintain strong relationships with existing clients',
                'Identify and pursue new business opportunities',
                'Develop and maintain relationships with insurance partners',
                'Risk management and asset protection',
                'Account planning and business development',
                'Proposal and pitch development',
                'Team collaboration and market intelligence'
            ],
            benefits: [
                'Competitive salary and bonus structure',
                'Comprehensive benefits package (health, dental, life insurance)',
                'Opportunities for professional growth and development',
                'Collaborative and supportive work environment'
            ]
        },
        {
            id: 'executive-assistant',
            title: 'Executive Assistant',
            location: 'Oniru, Victoria Island, Lagos State',
            type: 'Full Time',
            icon: FaBriefcase,
            description: 'Provides high-level administrative support to senior executives, ensuring their day-to-day operations run smoothly and efficiently.',
            requirements: [
                'Bachelor\'s degree in Business Administration, Communications, or related field',
                '3–7 years of experience as Executive Assistant or senior administrative role',
                'Prior experience supporting C-level executives highly desirable',
                'Exceptional organizational and time-management skills',
                'Proficiency in Microsoft Office Suite and collaboration tools',
                'High degree of professionalism and discretion'
            ],
            responsibilities: [
                'Manage executive\'s calendar, scheduling meetings and travel',
                'Screen and prioritize emails, calls, and communications',
                'Prepare reports, presentations, and correspondence',
                'Coordinate logistics for meetings, events, and conferences',
                'Handle sensitive information with confidentiality',
                'Serve as liaison between executive and stakeholders',
                'Track action items, deadlines, and project milestones'
            ]
        },
        {
            id: 'relationship-manager',
            title: 'Relationship Manager',
            location: 'Oniru, Victoria Island, Lagos State',
            type: 'Full Time',
            icon: FaHandshake,
            description: 'Build, maintain, and expand strong, long-term relationships with clients while providing tailored solutions and ensuring high satisfaction levels.',
            requirements: [
                'Bachelor\'s degree in Business, Finance, Marketing, or related field',
                '2–5+ years of experience in relationship management or client service roles',
                'Experience in banking, financial services, insurance, or B2B sales',
                'Strong interpersonal and communication skills',
                'Proficiency in CRM tools and MS Office applications',
                'Self-motivated and goal-driven'
            ],
            responsibilities: [
                'Manage portfolio of existing clients and ensure satisfaction',
                'Identify client needs and provide suitable solutions',
                'Develop new business through networking and outreach',
                'Maintain regular communication with clients',
                'Conduct client reviews and risk analysis',
                'Collaborate with internal teams to deliver solutions',
                'Track sales targets and relationship growth goals'
            ]
        }
    ];

    return (
        <>
            <SharedBanner
                img={'careerbanner'}
                heading={"At Truebond Insurance Brokers, we believe in building more than just policies"}
                page={'Grow With Truebond Insurance'}
            />
            <div className="bg-white">
                <div className="max-w-max mx-auto px-4 py-16">
                    {/* Company Values */}
                    <div className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-montserrat font-bold text-primaryBlack mb-6">
                                Our Company Values & Culture
                            </h2>
                            <p className="text-lg font-inter text-primaryGrey max-w-3xl mx-auto">
                                Join a company that values integrity, teamwork, and professional growth in a supportive environment
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {companyValues.map((value, index) => {
                                const IconComponent = value.icon;
                                return (
                                    <div key={index} className="bg-primaryRed/10 rounded-lg p-6 text-center hover:bg-primaryRed/20 transition-colors">
                                        <IconComponent className="mx-auto text-3xl text-primaryRed mb-4" />
                                        <h3 className="text-lg font-montserrat font-semibold text-primaryBlack mb-2">
                                            {value.title}
                                        </h3>
                                        <p className="text-primaryGrey font-inter text-sm">
                                            {value.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Open Positions */}
                    <div className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-montserrat font-bold text-primaryBlack mb-6">
                                Open Positions
                            </h2>
                            <p className="text-lg font-inter text-primaryGrey max-w-3xl mx-auto">
                                Explore exciting career opportunities and join our dynamic team of insurance professionals
                            </p>
                        </div>

                        <div className="space-y-6">
                            {openPositions.map((job) => {
                                const IconComponent = job.icon;
                                const isExpanded = expandedJob === job.id;

                                return (
                                    <div key={job.id} className="bg-white rounded-xl shadow-lg border border-primaryGrey/20 overflow-hidden">
                                        {/* Job Header */}
                                        <div
                                            className="p-6 cursor-pointer hover:bg-primaryGrey/5 transition-colors"
                                            onClick={() => toggleJob(job.id)}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="bg-primaryRed/10 p-3 h-fit rounded-lg mr-4">
                                                        <IconComponent className="text-2xl text-primaryRed" />
                                                    </div>
                                                    <div className=''>
                                                        <h3 className="text-lg md:text-xl font-montserrat font-bold text-primaryBlack">{job.title}</h3>
                                                        <div className="flex text-xs md:text-base items-center text-primaryGrey font-inter mt-1">
                                                            <FaMapMarkerAlt className="mr-2" />
                                                            <span className="mr-4 max-w-[40%] md:max-w-max">{job.location}</span>
                                                            <FaClock className="mr-2" />
                                                            <span>{job.type}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {isExpanded ? <FaChevronUp className="text-primaryGrey" /> : <FaChevronDown className="text-primaryGrey" />}
                                            </div>

                                            <p className="text-primaryGrey font-inter mt-3">
                                                {job.description}
                                            </p>
                                        </div>

                                        {/* Expanded Content */}
                                        {isExpanded && (
                                            <div className="border-t border-primaryGrey/20 p-6 bg-primaryGrey/5">
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                                    {/* Requirements */}
                                                    <div>
                                                        <h4 className="text-lg font-montserrat font-semibold text-primaryBlack mb-4">
                                                            Requirements
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {job.requirements.map((requirement, index) => (
                                                                <li key={index} className="flex items-start text-primaryGrey font-inter text-sm">
                                                                    <FaShieldAlt className="text-primaryRed mr-2 mt-1 flex-shrink-0" />
                                                                    {requirement}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Responsibilities */}
                                                    <div>
                                                        <h4 className="text-lg font-montserrat font-semibold text-primaryBlack mb-4">
                                                            Key Responsibilities
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {job.responsibilities.map((responsibility, index) => (
                                                                <li key={index} className="flex items-start text-primaryGrey font-inter text-sm">
                                                                    <FaShieldAlt className="text-primaryRed mr-2 mt-1 flex-shrink-0" />
                                                                    {responsibility}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Benefits (if available) */}
                                                    {job.benefits && (
                                                        <div className="lg:col-span-2">
                                                            <h4 className="text-lg font-montserrat font-semibold text-primaryBlack mb-4">
                                                                What We Offer
                                                            </h4>
                                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                                {job.benefits.map((benefit, index) => (
                                                                    <li key={index} className="flex items-start text-primaryGrey font-inter text-sm">
                                                                        <FaShieldAlt className="text-primaryRed mr-2 mt-1 flex-shrink-0" />
                                                                        {benefit}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Apply Button */}
                                                <a href={`mailto:info@carrierinsurancebrokers.com?subject=Application for ${job.title}`} className="mt-6 inline-flex pt-6 border-t border-primaryGrey/20">
                                                    <button className="bg-primaryRed text-white px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-primaryRed/90 transition-colors flex items-center">
                                                        <FaEnvelope className="mr-2" />
                                                        Apply Now
                                                    </button>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>


                    <div className="bg-black rounded-xl shadow-lg py-24 p-8 mb-16 text-white">
                        <div className="text-center mb-8">
                            <h2 className="text-5xl font-montserrat font-bold mb-4">
                                Why Join Truebond?
                            </h2>
                            <p className="font-inter opacity-90 max-w-2xl mx-auto">
                                Be part of a company that invests in your growth and values your contribution to our shared success
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: FaGraduationCap, title: 'Professional Development', desc: 'Continuous learning and skill enhancement opportunities' },
                                { icon: FaUsers, title: 'Collaborative Culture', desc: 'Work with experienced professionals in a supportive team environment' },
                                { icon: FaLaptop, title: 'Modern Work Environment', desc: 'Flexible work options and modern tools to help you succeed' },
                                { icon: FaTrophy, title: 'Career Growth', desc: 'Clear advancement paths and leadership development programs' }
                            ].map((benefit, index) => {
                                const IconComponent = benefit.icon;
                                return (
                                    <div key={index} className="text-center">
                                        <IconComponent className="mx-auto text-3xl text-primaryRed mb-3" />
                                        <h4 className="font-montserrat font-semibold mb-2">{benefit.title}</h4>
                                        <p className="font-inter text-sm opacity-90">{benefit.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="text-center bg-primaryRed/10 rounded-lg p-8">
                        <FaEnvelope className="mx-auto text-5xl text-primaryRed mb-4" />
                        <h2 className="text-2xl font-montserrat font-bold text-primaryBlack mb-4">
                            Ready to Join Our Team?
                        </h2>
                        <p className="text-primaryGrey font-inter max-w-2xl mx-auto mb-6">
                            If you are a motivated and experienced professional looking for a new challenge,
                            we'd love to hear from you. Submit your application and join our growing team.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:info@carrierinsurancebrokers.com?subject=I want to join the team"

                                className="bg-primaryRed text-white px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-primaryRed/90 transition-colors inline-flex items-center justify-center"
                            >
                                <FaEnvelope className="mr-2" />
                                Send Your Resume
                            </a>
                            <button className="bg-primaryBlack text-white px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-primaryBlack/90 transition-colors">
                                Learn More About Us
                            </button>
                        </div>

                        <div className="mt-6 pt-6 border-t border-primaryGrey/30">
                            <p className="text-primaryGrey font-inter text-sm">
                                Email your application to: <span className="font-semibold text-primaryBlack">info@truebondinsurancebrokers.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CareerPage;