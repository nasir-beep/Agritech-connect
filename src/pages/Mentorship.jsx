import { useState } from "react";
import Navbar from "../services/Navbar";
import Footer from "../services/Footer";
import MentorCard from "../components/MentorCard";

function Mentorship() {
  const [searchTerm, setSearchTerm] = useState("");

  const mentors = [
    { id: 1, name: "Dr. Lungile Mathe", expertise: "Crop Science & Soil Management", experience: "12 years", 
      specialties: ["Maize", "Wheat", "Soil Health"], available: true
    },

    { id: 2, name: "Maggie Sambo", expertise: "Organic Farming & Pest Control", experience: "10 years", 
      specialties: ["Organic", "Pest Management", "Composting"], available: true
    },

    { id: 3, name: "Prof. Joseph Peacock", expertise: "Agricultural Economics", experience: "20 years", 
      specialties: ["Farm Business", "Marketing", "Finance"], available: false
    },

    { id: 4, name: "Ntokozo Ngomane", expertise: "Irrigation & Water Management", experience: "8 years", 
      specialties: ["Irrigation", "Water Conservation", "Drought"], available: true
    },

    { id: 5, name: "Sandile Ndlovu", expertise: "Livestock Management", experience: "12 years", 
      specialties: ["Cattle", "Poultry", "Animal Health"], available: true
    },

    { id: 6, name: "Dr. Precious Khumalo", expertise: "Plant Pathology", experience: "14 years", 
      specialties: ["Disease Detection", "Treatment", "Prevention"], available: false
    }
  ];

  const filteredMentors = mentors.filter(mentor =>
    mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mentor.expertise.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mentor.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleConnect = (mentorName) => {
    alert(`Connection request sent to ${mentorName}! They will contact you soon.`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Find a Mentor</h1>

        <div className="max-w-md mb-8">
          <input
            type="text"
            placeholder="Search by name, expertise, or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field"/>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <div key={mentor.id} className="relative">
              <MentorCard
                name={mentor.name}
                expertise={mentor.expertise}
                onConnect={() => handleConnect(mentor.name)}/>
                
              {!mentor.available && (
                <div className="absolute top-2 right-2 bg-gray-500 text-white px-2 py-1 rounded text-sm">
                  Unavailable
                </div>
              )}
              <div className="mt-2 text-sm text-gray-500">
                <span>{mentor.experience} experience</span>
              </div>
              <div className="mt-1 flex flex-wrap gap-1">
                {mentor.specialties.map((specialty, idx) => (
                  <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <p className="text-center text-gray-500 py-12">
            No mentors found matching your search.
          </p>
        )}

        <div className="mt-12 bg-green-50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">How Mentorship Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">1️⃣</div>
              <h3 className="font-semibold mb-2">Find a Mentor</h3>
              <p className="text-sm text-gray-600">Browse our list of experienced agricultural experts</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-2">2️⃣</div>
              <h3 className="font-semibold mb-2">Send Request</h3>
              <p className="text-sm text-gray-600">Click connect and send a mentorship request</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">3️⃣</div>
              <h3 className="font-semibold mb-2">Start Learning</h3>
              <p className="text-sm text-gray-600">Get personalized guidance for your farming journey</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Mentorship;