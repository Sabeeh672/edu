const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    category: "development",
    instructor: "John Smith",
    price: "$49.99",
    image: "web.jpg",
    description: "Master HTML, CSS, JavaScript, React, Node.js and more!",
    duration: "40 hours",
    level: "Beginner",
    lectures: "200+ Lectures",
    resources: "50+ Resources",
    learningPoints: [
      "HTML5 & CSS3 fundamentals",
      "Modern JavaScript (ES6+)",
      "React.js for building UIs",
      "Node.js & Express backend",
      "MongoDB database",
      "RESTful API development",
    ],
    
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    category: "data-science",
    instructor: "Sarah Johnson",
    price: "$59.99",
    image: "ds.jpeg",
    description:
      "Learn Python, data analysis, and machine learning algorithms.",
    duration: "50 hours",
    level: "Intermediate",
    lectures: "180+ Lectures",
    resources: "60+ Resources",
    learningPoints: [
      "Python programming fundamentals",
      "Data analysis with Pandas & NumPy",
      "Data visualization with Matplotlib & Seaborn",
      "Machine learning algorithms",
      "Model evaluation and optimization",
      "Real-world data science projects",
    ],
   
  },
  {
    id: 3,
    title: "Digital Marketing Masterclass",
    category: "marketing",
    instructor: "Mike Brown",
    price: "$39.99",
    image: "dm.jpg",
    description: "Master SEO, social media, email marketing, and more.",
    duration: "35 hours",
    level: "Beginner",
    lectures: "150+ Lectures",
    resources: "40+ Resources",
    learningPoints: [
      "SEO optimization techniques",
      "Social media marketing strategies",
      "Email marketing campaigns",
      "Content marketing planning",
      "Google Analytics mastery",
      "Conversion rate optimization",
    ],
    
  },
  {
    id: 4,
    title: "UI/UX Design Complete Course",
    category: "design",
    instructor: "Emily White",
    price: "$44.99",
    image: "ui.jpg",
    description: "Learn to create beautiful and user-friendly interfaces.",
    duration: "45 hours",
    level: "Beginner",
    lectures: "170+ Lectures",
    resources: "45+ Resources",
    learningPoints: [
      "User research and persona creation",
      "Wireframing and prototyping",
      "Visual design principles",
      "Typography and color theory",
      "Design tools (Figma, Adobe XD)",
      "Usability testing methods",
    ],
    
  },
  {
    id: 5,
    title: "Python Programming Masterclass",
    category: "development",
    instructor: "David Lee",
    price: "$54.99",
    image: "py.avif",
    description: "From basics to advanced Python programming concepts.",
    duration: "55 hours",
    level: "Beginner to Advanced",
    lectures: "220+ Lectures",
    resources: "70+ Resources",
    learningPoints: [
      "Python syntax and fundamentals",
      "Object-oriented programming",
      "Data structures and algorithms",
      "File handling and databases",
      "Web scraping and automation",
      "Building real-world applications",
    ],
    
  },
  {
    id: 6,
    title: "Social Media Marketing",
    category: "marketing",
    instructor: "Lisa Anderson",
    price: "$34.99",
    image: "social.jpg",
    description: "Grow your brand on Facebook, Instagram, Twitter, and more.",
    duration: "30 hours",
    level: "Beginner",
    lectures: "130+ Lectures",
    resources: "35+ Resources",
    learningPoints: [
      "Social media strategy development",
      "Content creation and scheduling",
      "Audience engagement techniques",
      "Paid advertising on social platforms",
      "Analytics and performance tracking",
      "Influencer marketing strategies",
    ],
    
  },
  {
    id: 7,
    title: "Mobile App Development with React Native",
    category: "development",
    instructor: "Tom Harris",
    price: "$64.99",
    image: "mobile.jpg",
    description: "Build iOS and Android apps with React Native.",
    duration: "60 hours",
    level: "Intermediate",
    lectures: "190+ Lectures",
    resources: "65+ Resources",
    learningPoints: [
      "React Native fundamentals",
      "Cross-platform app development",
      "State management with Redux",
      "Native device features access",
      "App deployment to stores",
      "Performance optimization",
    ],
    
  },
  {
    id: 8,
    title: "Graphic Design Fundamentals",
    category: "design",
    instructor: "Amy Roberts",
    price: "$42.99",
    image: "graphic.jpg",
    description: "Master Adobe Photoshop, Illustrator, and design principles.",
    duration: "38 hours",
    level: "Beginner",
    lectures: "160+ Lectures",
    resources: "42+ Resources",
    learningPoints: [
      "Adobe Photoshop essentials",
      "Vector graphics with Illustrator",
      "Design theory and principles",
      "Brand identity creation",
      "Print and digital design",
      "Portfolio development",
    ],
    
  },
  {
    id: 9,
    title: "Deep Learning & Neural Networks",
    category: "data-science",
    instructor: "Dr. James Wilson",
    price: "$69.99",
    image: "deep.webp",
    description: "Advanced machine learning with TensorFlow and PyTorch.",
    duration: "70 hours",
    level: "Advanced",
    lectures: "210+ Lectures",
    resources: "80+ Resources",
    learningPoints: [
      "Neural network architectures",
      "Deep learning frameworks (TensorFlow, PyTorch)",
      "Computer vision with CNNs",
      "Natural language processing",
      "Reinforcement learning",
      "Model deployment and serving",
    ],
    
  },
];


/*PAGE NAVIGATION*/
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
  window.scrollTo(0, 0);

  if (pageId === "courses") {
    displayCourses(courses);
  }
}

/*DISPLAY COURSES*/
function displayCourses(courseList) {
  const grid = document.getElementById("courseGrid");
  grid.innerHTML = "";

  courseList.forEach(course => {
    grid.innerHTML += `
      <div class="col-md-4 course-item"
           data-title="${course.title.toLowerCase()}"
           data-category="${course.category}">
        <div class="card course-card">
          <img src="assets/${course.image}" class="card-img-top course-img">
          <div class="card-body">
            <h5>${course.title}</h5>
            <p>${course.description}</p>
            <button class="btn btn-success w-100"
                    onclick="openCourse(${course.id})">
              View Details
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

/*FILTER BY CATEGORY*/
function filterByCategory(category) {
  const filtered =
    category === "all"
      ? courses
      : courses.filter(c => c.category === category);

  displayCourses(filtered);
}

/*SEARCH COURSES*/
function filterCourses() {
  const text = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll(".course-item");

  items.forEach(item => {
    item.style.display =
      item.dataset.title.includes(text) ? "block" : "none";
  });
}

/*COURSE DETAILS*/
function openCourse(id) {
  const course = courses.find(c => c.id === id);
  if (!course) return;

  document.getElementById("detailTitle").textContent = course.title;
  document.getElementById("detailDescription").textContent = course.description;
  document.getElementById("detailImage").src = "assets/" + course.image;
  document.getElementById("detailPrice").textContent = course.price;
  document.getElementById("detailDuration").textContent = course.duration;
  document.getElementById("detailLevel").textContent = course.level;
  document.getElementById("detailLectures").textContent = course.lectures;
  document.getElementById("detailResources").textContent = course.resources;

  const points = document.getElementById("detailLearningPoints");
  points.innerHTML = "";
  course.learningPoints.forEach(p => {
    points.innerHTML += `<li>${p}</li>`;
  });

  showPage("courseDetail");
}

/*CONTACT FORM*/
function handleContactSubmit(e) {
  e.preventDefault();
  alert("Thank you! We will contact you soon.");
  e.target.reset();
}

/*INITIAL LOAD*/
document.addEventListener("DOMContentLoaded", () => {
  displayCourses(courses);
});
