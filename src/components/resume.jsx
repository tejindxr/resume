 import React from "react";

const Resume =() => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-black p-8 pt-3 font-sans">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-semibold pb-3">Tejinder Singh</h1>
        <p className="text-sm text-gray-600">📧 tejindxr@gmail.com | 📞 +91 9643120001</p>
        <p className="text-sm text-blue-600">
          <a href="https://github.com/tejindxr" target="_blank" rel="noreferrer" className="underline">github.com/tejindxr</a> |{" "}
          <a href="https://linkedin.com/in/tejindxr" target="_blank" rel="noreferrer" className="underline">linkedin.com/in/tejindxr</a>
        </p>
      </div>

      {/* Skills */}
      <section className="mb-4 caret-black">
        
        <h2 className="text-lg font-semibold border-b border-b-black">Skills</h2>
        <p><strong>Languages:</strong> Java, Kotlin, JavaScript , HTML , CSS</p>
        <p><strong>Technologies & Tools:</strong> ReactJS, JetpackCompose, Firebase, MongoDB, Spring, Tailwind</p>
      </section>

      {/* Experience */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold border-b border-b-black">Work Experience</h2>

        <div className="mb-3">
  <h3 className="font-semibold pt-2">
    SpaceECE India Foundation | E-Learning / Edtech
    <span className="float-right text-sm">Mar 2025 – May 2025</span>
  </h3>
  <p className="italic text-sm">Android Developer</p>
  <ul className="list-disc list-inside text-sm pl-2">
    <li>
      Intern as an Android developer, collaborating with teams to solve real-world challenges and streamline app development.
    </li>
    <li>
      Developed app with AI generated story telling.
    </li>
    <li>
      <strong>Stack:</strong> Kotlin, Android Studio, Firebase, Jetpack Compose
    </li>
  </ul>
</div>

<div className="mb-3">
  <h3 className="font-semibold ">
    Wayspire | IT / Computers - Software
    <span className="float-right text-sm">Jul 2024 – Aug 2024</span>
  </h3>
  <p className="italic text-sm">Android Developer</p>
  <ul className="list-disc list-inside text-sm pl-2">
    <li>
      Completed an internship focused on building and improving Android applications using Kotlin and Jetpack Compose.
    </li>
    <li>
      Gained hands-on experience working on real-world projects that strengthened coding and design implementation skills.
    </li>
    <li>
      <strong>Stack:</strong> Kotlin, Android SDK, Java, Android Studio
    </li>
  </ul>
</div>

      </section>

      {/* Education */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold border-b border-b-black ">Education</h2>
        <p className="pt-2"><strong>B-Tech  Information Technology</strong> 
        <div className="float-right text-sm font-semibold text-black">CGPA 8.1/10</div>
        </p>
        <p className="text-sm text-gray-600"> GGSIPU - Bhagwan Parshuram Institute of Technology</p>
        <p className="text-sm text-gray-600">Nov 2022 – Jul 2026</p>
        {/* <p className="text-sm">Core Subjects: DBMS, Data Structures, Algorithms, AI, ML, Image Processing</p> */}
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-lg font-semibold border-b border-b-black">Project Work</h2>
        <ul className="list-disc list-inside text-sm pl-2">
          
          
          <li className="py-2">
                <strong>ShoeBox - E-comm Android App : </strong>
                <a href="https://github.com/tejindxr/ShoeBox" target="_blank" rel="noreferrer" className="underline float-right text-sm text-blue-500">ShoeBox- Github</a>

                <p>
                Built with Jetpack Compose, ViewModel, and Firebase, featuring
                authentication, categorized listings, and checkout.
                Optimized UI & Data: Designed a responsive UI with Firebase
                integration.<br />
                
                </p> 

                <a href="https://github.com/tejindxr/ShoeBox/commit/c645ea820a3f6881511e50ad2c1f6a4099eb6210" target="_blank" rel="noreferrer">
                  <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                      View Screenshots
                  </button>
              </a>
          </li>
          <li className="pb-2">

            <strong>Restaurant Menu App</strong>
            <a 
              href="https://github.com/tejindxr/RestaurantApp" 
              target="_blank" 
              rel="noreferrer" 
              className="underline float-right text-sm text-blue-500"
            >
              Restaurant App - Github
            </a>

            <p>
              Restaurant Menu Platform: Built using Jetpack Compose and Kotlin 
              to display dynamic menus fetched from a remote API. Implemented 
              category filtering, item detail screens, and cart functionality 
              for a seamless user experience.
              <br />
            </p>
            <a href="https://github.com/tejindxr/RestaurantApp/commit/616114a01024e400ddf5be83f4ab80958d830d63" target="_blank" rel="noreferrer">
                  <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                      View Screenshots
                  </button>
              </a>

          </li>

          <li className="pb-2">

                <strong>Petify - Pet Adoption App</strong>
                <a href="https://github.com/tejindxr/Petify"  target="_blank" rel="noreferrer" className="underline float-right text-sm text-blue-500">Petify- Github</a>

                <p>
                Adoption Platform: Developing an app with Jetpack Compose,
                ViewModel, and Firebase to enable users to adopt and list domestic animals.
                Implementing authentication, listings, and an intuitive UI for easy 
                adoption and pet management.
                <br />
                </p>
                <a href="https://github.com/tejindxr/Petify/commit/2213f5264fcc48141702d2288f926b63c658d793" target="_blank" rel="noreferrer">
                  <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                      View Screenshots
                  </button>
              </a>
          </li>
          




          <li className="pb-2">

                <strong>WatchBatman - Movie Search Website </strong>
                <a href="https://watchbatman.vercel.app/"  target="_blank" rel="noreferrer" className="underline float-right text-sm text-blue-500">WatchB- Web</a>
 
                <p>
                Built a movie search application in React with Vite, fetching data from OMDb API. 
                Used hooks and Tailwind CSS for styling and responsiveness.
                Implemented real-time search functionality and dynamic rendering of movie data.
                <br/>
                </p>

          </li>
          <li>
          <strong>Minor Projects:</strong>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li className="flex justify-between items-center">
              Sudoku App – Interactive and fun sudokufor Android
              <a
                href="https://github.com/tejindxr/Sudoku"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm underline"
              >
                GitHub
              </a>
            </li>
            <li className="flex justify-between items-center">
              Notes App – CRUD functionality with persistent state
              <a
                href="https://github.com/tejindxr/Notes-with-Reminder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm underline"
              >
                GitHub
              </a>
            </li>
            <li className="flex justify-between items-center">
              Joke Generator – Async fetch from joke API
              <a
                href="https://jokes-khaki-sigma.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm underline"
              >
                Joke-web
              </a>
            </li>
          </ul>
        </li>

 
       </ul>
      </section>
    </div>
  );
};

export default Resume;


