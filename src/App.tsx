import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  author: string;
  title: string;
  text: string;
}

function App() {
  const testimonials: Testimonial[] = [
    {
      author: "Christy Scott",
      title: "Chief Data Officer - Monster Energy",
      text: "I had the pleasure of working closely with JT on multiple challenging projects. His exceptional problem-solving skills and attention to detail were instrumental in its success. I highly recommend JT for his dedication, professionalism, and ability to deliver results."
    },
    {
      author: "Sean Plotkins",
      title: "Owner Reenergized",
      text: "Working with JT and his team at Off The Charts has been a game-changer for our business. Their ability to simplify complex data and provide actionable insights is unmatched. JT's dashboards are so clear and useful, it feels like having a perfect assist in water polo—always setting you up for success. What really stands out is their mix of professionalism and approachability. They make the process smooth and even enjoyable. If you're ready to stop treading water and start making waves in your industry, JT and his team are the ones to call."
    },
    {
      author: "Shaunda Brown",
      title: "Founder and CEO of Circles Bali",
      text: "JT was exceptional in his role, consistently delivering fast and responsive support while managing complex data insights. His ability to transform overwhelming data into clear, actionable dashboards was invaluable to our business, saving us countless hours and financial resources. He was always proactive in identifying areas for improvement, making our reporting system more efficient and user-friendly. His expertise in tools like Google Sheets, SQL, Postgres, and Superset, as well as his strong analytical skills, made him an integral part of our team."
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 10000); // Auto-advance every 10 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              James Sarmento
            </h1>
            <div className="flex justify-center items-center space-x-6 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Mission Viejo, 92691</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>(925)-628-1472</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Problem Solver, Data Storyteller & Analytics Professional
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Objective and passionate story-teller with 6+ years of experience with data transformation, analysis and visualization. Enthusiastic about strategic problems requiring innovative thought leadership to solve.
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="https://github.com/jayyyyteee" className="text-gray-500 hover:text-gray-900">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/jtsarmento/" className="text-gray-500 hover:text-gray-900">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:jt.sarmento4@gmail.com" className="text-gray-500 hover:text-gray-900">
                <Mail className="w-6 h-6" />
              </a>

            </div>
            <div className="mt-4">
              <a 
                href="https://trekbytes.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View My Django/Python/AWS Hobby Project: TrekBytes.com
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <section>
          <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
          <div className="mt-6 space-y-8">
            {/* Off The Charts Data */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Founder & Principal Data Engineer</h3>
                  <p className="text-gray-600">Off The Charts Data - OTC-Data.com</p>
                </div>
                <span className="text-gray-500">2/2024 - Present</span>
              </div>
              <p className="mt-2 text-gray-600">Launched a data engineering and analytics consultancy, focusing on optimizing data pipelines, cloud integration, creating insightful automated tools/dashboards, and delivering actionable business intelligence</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Successfully negotiated and managed three ongoing data engineering engagements, demonstrating flexibility and high client satisfaction</li>
                <li>• Designed and implemented efficient, scalable data pipelines that streamlined data collection, transformation, and reporting processes, reducing time-to-insight and operational costs for clients</li>
                <li>• Performed in-depth data analyses that guided the development of improved pricing models, boosting member conversion from 13% to 30% for one client</li>
              </ul>
            </div>

            {/* Monster Energy - LSEC BI Manager */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">LSEC Business Intelligence Manager</h3>
                  <p className="text-gray-600">Monster Energy Company</p>
                </div>
                <span className="text-gray-500">10/2022 - 2/2024</span>
              </div>
              <p className="mt-2 text-gray-600">Developed and managed holistic analytical suite of dashboard reporting for Large Store and Emerging Channels, collaborating with CCO and VPs to cater to their analytical needs</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Created first "Execution Dashboard" aggregating +350M rows of invoice data, tracking out of stocks and distribution success by store level, leading to +5% in stock rate within 3 months of deployment</li>
                <li>• Developed internal "Channel Connect" system standardizing reporting for each retail channel on an automated basis, resulting in saving ~120 hours of time of manual reporting a year</li>
              </ul>
            </div>

            {/* Monster Energy - Category Management */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Category Management Data Analyst</h3>
                  <p className="text-gray-600">Monster Energy Company</p>
                </div>
                <span className="text-gray-500">02/2021 - 10/2022</span>
              </div>
              <p className="mt-2 text-gray-600">Responsible for developing and maintaining suite of internal Power BI point of sale dashboards, aggregating many sources of data, creating efficient pipelines and transforming using programmatic languages</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Grew 97 users/4k unique views per month to 600 users/12k unique views per month in one year</li>
                <li>• Developed standardized report to identify the largest share opportunities, growing MEC share by 2.9 pts in 7 Eleven during August of 2021</li>
                <li>• Developed 38 store level specific dashboards, customizing each to meet key stakeholders needs, leading bi-monthly training sessions with ~100 attendees each time</li>
              </ul>
            </div>

            {/* Monster Energy - Drug Retail */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Drug Retail Category Analyst</h3>
                  <p className="text-gray-600">Monster Energy Company</p>
                </div>
                <span className="text-gray-500">07/2020 - 02/2021</span>
              </div>
              <p className="mt-2 text-gray-600">Oversaw ~15,000 drug accounts in the US, assisting sales teams with creating data driven selling stories</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Grew MEC sales by $6MM (+16%) in 2020 at Walgreens, exceeding sales goals</li>
                <li>• Finalist for company-wide internal "Shark Tank" competition recommending and leading team of four in redesigning and upgrading of Monster HQ first floor and courtyard, culminating to sales pitch in front of executive leadership resulting in ~$40M approval</li>
              </ul>
            </div>

            {/* Gallo Sales Company */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Category Analyst & Chain Sales Representative</h3>
                  <p className="text-gray-600">Gallo Sales Company</p>
                </div>
                <span className="text-gray-500">06/2016 - 06/2019</span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Analyzed, drew and implemented schematic wine shelf sets for all 198 Save Mart Company stores</li>
                <li>• Managed Gallo's 70+ wine and spirits portfolio in 22 chain grocery stores in San Francisco area</li>
              </ul>
            </div>
          </div>
        </section>

        {/* In the News Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">In the News</h2>
          <div className="mt-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex flex-col space-y-4">
                <a 
                  href="https://merage.uci.edu/news/2020/03/msba-students-study-app,-present-findings-to-city-of-san-diego-chief-data-officer.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                    MSBA Students Study App, Present Findings to City of San Diego Chief Data Officer
                  </h3>
                  <p className="text-gray-600 mt-2">
                    UCI Paul Merage School of Business - March 2020
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What Others Are Saying Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">What Others Are Saying</h2>
          <div className="mt-6">
            <div className="bg-white p-8 rounded-lg shadow relative">
              <div className="flex justify-between absolute top-4 left-4 right-4">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="pt-8">
                <blockquote className="text-lg text-gray-700 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="mt-6">
                  <p className="text-gray-900 font-semibold">{testimonials[currentTestimonial].author}</p>
                  <p className="text-gray-600">{testimonials[currentTestimonial].title}</p>
                </div>
              </div>
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">Skills & Certifications</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900">Technical Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">SQL</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">git</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">bash</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">dbt</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Airflow</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Spark</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Snowflake</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Power BI</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Looker</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Data Visualization</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Big Query</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">dbeaver</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">R</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">MS Office</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900">Certifications</h3>
              <div className="mt-4 space-y-2">
                <p className="text-gray-600">AWS Certified Cloud Practitioner</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          <div className="mt-6 space-y-6">
            {/* Graduate Education */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Master of Science in Business Analytics</h3>
                  <p className="text-gray-600">University of California Irvine, Paul Merage School of Business</p>
                  <p className="text-gray-600">GPA: 3.65/4.00</p>
                </div>
                <span className="text-gray-500">2020</span>
              </div>
            </div>

            {/* Undergraduate Education */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Bachelor of Science in Business Administration</h3>
                  <p className="text-gray-600">University of the Pacific, Eberhardt School of Business</p>
                  <p className="text-gray-600">Minor in Economics, Concentration in Finance</p>
                  <div className="mt-2">
                    <p className="text-gray-600">GPA Overall: 3.49/4.00</p>
                    <p className="text-gray-600">Finance: 3.58/4.00</p>
                    <p className="text-gray-600">Economics: 3.5/4.00</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-600">• Intercollegiate Athletics: NCAA Division I Men's Water Polo, 2013 National Runner-Up</p>
                  </div>
                </div>
                <span className="text-gray-500">2016</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;