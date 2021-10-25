import Header from './components/Header/Header'
import './main.css'

import VB from './assets/images/Logos/vb.svg'
import PHP from './assets/images/Logos/php.svg'
import Python from './assets/images/Logos/python.svg'
import Pascal from './assets/images/Logos/pascal.webp'
import Skill from './components/Skill/Skill'
import Experience from './components/Experience/Experience'

const App = () => {
  const skills = [
    {
      logo: VB,
      title: 'VBasic'
    },
    {
      logo: PHP,
      title: 'PHP'
    },
    {
      logo: Python,
      title: 'Python'
    },
    {
      logo: Pascal,
      title: 'Pascal'
    }
  ]

  const experiences = [
    {
      company: 'Turkmen agriculture institute',
      level: 'Lecturer',
      date: '2021',
      description: 'Teaching experience 15 years',
    },
  ]

  return (
    <>
      <Header />
      <section className="flex px-10 font-montserrat-medium">
        <main className="container grid grid-cols-12 gap-5 mx-auto">
          <aside className="col-span-12 lg:col-span-4 bg-gray-100 text-gray-800 p-5 lg:p-16">
          <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-green-500"> Experience </h1>
            {
              experiences.map(experience => {
                return (
                  <Experience
                    company={experience.company}
                    level={experience.level}
                    date={experience.date}
                    description={experience.description}
                  />
                )
              })
            }
          </aside>

          <aside className="col-span-12 lg:col-span-8 px-5 lg:p-16 font-montserrat-medium">
              
            <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-green-500"> Teaching terms </h1>
            <ul className="list-disc ml-5">
              <li className="text-sm lg:text-md text-gray-600"> Network security </li>
              <li className="text-sm lg:text-md text-gray-600"> GIS </li>
              <li className="text-sm lg:text-md text-gray-600"> Operating systems </li>
            </ul>


            <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-green-500 mt-5 lg:mt-10"> Skills </h1>
            <div className="grid grid-cols-12 gap-5 mb-7">
              {
                skills.map((skill, index) => {
                  return (
                    <Skill key={index} logo={skill.logo} title={skill.title} />
                  )
                })
              }
            </div>

          </aside>
        </main>
      </section>
    </>
  );
}

export default App;
