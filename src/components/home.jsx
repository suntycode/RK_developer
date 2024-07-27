import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-blue-500">About</a></li>
              <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-20">
        <h2 className="text-4xl font-bold animate-fadeIn">Welcome to My Portfolio</h2>
        <p className="mt-4">I'm a Full-Stack Developer</p>
        <img src="https://via.placeholder.com/600x400" alt="Hero" className="mx-auto mt-8 rounded-lg shadow-lg" />
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-20">
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">I am a passionate developer with experience in building web applications using modern technologies...</p>
        <div className="mt-8 flex justify-center">
          <img src="https://via.placeholder.com/300x300" alt="About Me" className="rounded-full shadow-lg" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-200 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Projects</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="https://via.placeholder.com/400x300" alt="Project 1" className="rounded-lg" />
              <h3 className="mt-4 text-xl font-bold">Project 1</h3>
              <p className="mt-2">Description of project 1...</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="https://via.placeholder.com/400x300" alt="Project 2" className="rounded-lg" />
              <h3 className="mt-4 text-xl font-bold">Project 2</h3>
              <p className="mt-2">Description of project 2...</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="https://via.placeholder.com/400x300" alt="Project 3" className="rounded-lg" />
              <h3 className="mt-4 text-xl font-bold">Project 3</h3>
              <p className="mt-2">Description of project 3...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white text-center py-8">
        <p>Contact me at: <a href="mailto:example@example.com" className="underline">example@example.com</a></p>
      </footer>
    </div>
  );
};

export default Home;
