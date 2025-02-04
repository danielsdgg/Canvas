import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Day5: React.FC = () => {
    const navigate = useNavigate();
  
    return (
        <>
            {/* Student Handbook Section */}
            <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
                {/* Back Button */}
                <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
                    <FaArrowLeft className="mr-2" />
                    Back
                </button>
                
                <h2 className="text-3xl font-semibold bg-gray-800 text-white py-4 px-6 rounded-t-lg">
                    Student Handbook: Guidelines & Professionalism in Learning
                </h2>
                
                <div className="space-y-6">
                    {/* Code of Conduct */}
                    <div>
                        <h3 className="text-2xl font-medium text-gray-500 mb-2">1. Code of Conduct</h3>
                        <p className="text-gray-700 leading-relaxed">
                            All students are expected to uphold the highest standards of integrity and professionalism. The following principles should be followed:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                            <li>Respect for instructors and fellow students</li>
                            <li>Honest and ethical behavior in all coursework</li>
                            <li>Punctuality in assignments and class attendance</li>
                        </ul>
                    </div>
                    
                    {/* Classroom Etiquette */}
                    <div>
                        <h3 className="text-2xl font-medium text-gray-500 mb-2">2. Classroom Etiquette</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Professional behavior is expected in both physical and virtual classrooms. Proper etiquette includes:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                            <li>Keeping distractions minimal (e.g., silent mobile phones)</li>
                            <li>Raising hands before speaking in discussions</li>
                            <li>Engaging in constructive and respectful conversations</li>
                        </ul>
                    </div>
                    
                    {/* Academic Integrity */}
                    <div>
                        <h3 className="text-2xl font-medium text-gray-500 mb-2">3. Academic Integrity</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Academic integrity is the foundation of a good learning environment. Violations include:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                            <li>Plagiarism: Using others’ work without citation</li>
                            <li>Cheating: Unauthorized use of resources during exams</li>
                            <li>Fabrication: Misrepresentation of information</li>
                        </ul>
                    </div>
                    
                    {/* Professional Development */}
                    <div>
                        <h3 className="text-2xl font-medium text-gray-500 mb-2">4. Professional Development</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Beyond coursework, students should actively engage in professional growth. Recommended actions:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                            <li>Networking with peers and industry professionals</li>
                            <li>Building a professional portfolio</li>
                            <li>Attending webinars and workshops</li>
                        </ul>
                    </div>
                    
                    {/* Mental Health and Well-being */}
                    <div>
                        <h3 className="text-2xl font-medium text-gray-500 mb-2">5. Mental Health and Well-being</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Learning can be challenging, and mental well-being is crucial for success. Students should:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                            <li>Maintain a healthy work-life balance</li>
                            <li>Seek support when needed from mentors or counselors</li>
                            <li>Engage in relaxation and mindfulness activities</li>
                        </ul>
                    </div>
                    
                    {/* Conclusion */}
                    <div>
                        <h3 className="text-2xl font-medium text-gray-500 mb-2">Final Thoughts</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Success in this program requires discipline, dedication, and a commitment to continuous learning. 
                            By following these guidelines, students can ensure a productive and professional learning experience. 
                            Stay focused, stay professional, and strive for excellence!
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Day5;
