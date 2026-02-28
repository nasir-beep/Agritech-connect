import { useState } from "react";
import Navbar from "../services/Navbar";
import Footer from "../services/Footer";

function Learning() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    { id: 1, title: "How to Grow Bell Peppers from Seeds", duration: "11:59 minutes", lessons: 1, level: "Beginner", 
      description: "Learn the complete process of growing bell peppers from seed to harvest, including soil preparation, planting, and care tips.",
      videoUrl: "https://www.youtube.com/embed/N9KN6PXmoRI", modules: ["Seed Selection and Preparation", "Ideal Soil and Container Setup","Planting and Watering Schedule",
        "Sunlight and Temperature Requirements","Harvesting Tips"]
    },

    { id: 2, title: "How to Grow Tomatoes at Home", duration: "10:46 minutes", lessons: 1, level: "Beginner",
      description: "A step-by-step guide to growing juicy tomatoes at home, from seedling to ripe fruit.", videoUrl: "https://www.youtube.com/embed/DFH_yfbUJWY",
      modules: ["Choosing Tomato Varieties", "Starting from Seeds vs. Seedlings", "Supporting Tomato Plants", "Watering and Feeding", "Common Pest Prevention"]
    },

    { id: 3, title: "5 Gardening Tips", duration: "9:18 minutes", lessons: 1, level: "Beginner", description: "Five essential gardening tips to improve your plant health and yield, perfect for new and experienced gardeners.",
      videoUrl: "https://www.youtube.com/embed/heTxEsrPVdQ", modules: [ "Tip 1: Soil Health Basics", "Tip 2: Proper Watering Techniques", "Tip 3: Natural Pest Control", "Tip 4: Importance of Mulching", "Tip 5: Composting 101"]
    },
 
    { id: 4, title: "Sustainable Farming Basics", duration: "2 hours", lessons: 8, level: "Beginner",
      description: "Learn the fundamentals of sustainable agriculture and eco-friendly farming practices.",
      modules: ["Introduction to Sustainable Farming",  "Soil Health Management", "Water Conservation", "Crop Rotation",  "Natural Pest Control", "Organic Fertilizers", "Farm Planning", "Certification Process" ]
    },

    { id: 5, title: "Advanced Irrigation Techniques", duration: "3 hours", lessons: 6, level: "Intermediate", description: "Master modern irrigation systems and water management for optimal crop yield.",
      modules: ["Water Requirements of Crops", "Drip Irrigation Systems", "Sprinkler Systems", "Smart Irrigation Controllers", "Water Quality Management", "Maintenance and Troubleshooting"]
    },

    { id: 6, title: "Organic Pest Management", duration: "1.5 hours", lessons: 5, level: "Beginner", description: "Natural and effective methods to protect your crops from pests without chemicals.", 
      modules: ["Identifying Common Pests", "Beneficial Insects", "Natural Repellents", "Companion Planting","Prevention Strategies"]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Learning Hub</h1>

        {selectedCourse ? (
          <div>
            <button onClick={() => setSelectedCourse(null)} className="mb-6 text-primary hover:underline">
              ← Back to Courses
            </button>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedCourse.title}</h2>
                  <div className="flex gap-4 text-sm text-gray-600 mb-4">
                    <span>{selectedCourse.duration}</span>
                    <span>{selectedCourse.lessons} lessons</span>
                    <span>{selectedCourse.level}</span>
                  </div>
                </div>
                <button className="btn-primary">
                  Start Learning
                </button>
              </div>

              {selectedCourse.videoUrl && (
                <div className="mb-8">
                  <div className="relative pb-56 md:pb-56 h-0 overflow-hidden rounded-lg shadow-lg">
                    <iframe src={selectedCourse.videoUrl} title={selectedCourse.title} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen className="absolute top-0 left-0 w-full h-full"></iframe>
                  </div>
                    <p className="text-sm text-gray-500 mt-2 flex items-center">Watch the full video tutorial above</p>
                </div>
              )}

              <p className="text-gray-700 mb-6">{selectedCourse.description}</p>

              <h3 className="font-bold text-lg mb-4">Course Modules:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {selectedCourse.modules.map((module, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
        
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="card cursor-pointer hover:shadow-xl transition"
                   onClick={() => setSelectedCourse(course)}>
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-primary">{course.title}</h2>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                    {course.level}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{course.duration}</span>
                  <span>{course.lessons} lessons</span>
                </div>

                <button className="btn-primary w-full">
                  View Course
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Learning;