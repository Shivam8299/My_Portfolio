import React from 'react'
// import assets from '../assets/my_image.jpeg'
function About() {
  return (
    <div className='w-[100%] mt-2 bg-blue-50'>
      <div className='flex justify-center'>
        <p className='text-3xl md:text-4xl lg:text-5xl mt-6 mb-4'>About
          <span className='text-green-500'> me </span>
        </p>
      </div>
      <div className='flex flex-col lg:flex-row lg:mt-24 lg:ml-60 gap-6 justify-center'>
        <div className='w-full md:w-[350px] mb-4 lg:mb-44  '>

          <img className='w-full rounded-xl shadow-xl md:h-[560px]' src='https://images.pexels.com/photos/6804588/pexels-photo-6804588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="my_image" />
        </div>
        <div className='rounded-xl  shadow-2xl bg-white sm:h-[470px] lg:h-[420px] pb-4 pl-3 mt-16 sm:mt-0 lg:w-[600px]  '>
          <p className='text-black text-2xl sm:text-3xl mt-2 font-semibold ml-4'>Tech-Stack</p>
          <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 mt-8'>
            <div>
              <img className='w-16' src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="JavaScript" />
              <p className='text-gray-700'>Javascript</p>
            </div>
            <div>
              <img className='w-16 ' src="https://cdn-icons-png.flaticon.com/128/16380/16380889.png" alt="HTML" />
              <p className='ml-2 text-gray-700 text-sm mt-1'>HTML</p>
            </div>
            <div>
              <img className='w-10 mt-2' src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="CSS" />
              <p className='mt-2 ml-1 text-gray-700'>CSS</p>
            </div>
            <div>
              <img className='w-14' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWv9x0Ycm1yW_8z7TUCqCMzmx5UtR_eGbLpXANUhmr1lyYT8el_lgKULmERyye6o6szQ&usqp=CAU" alt="Tailwind" />
              <p className='mt-1 text-gray-700'>Tailwind</p>
            </div>
            <div>
              <img className='w-14' src="https://www.svgrepo.com/show/327388/logo-react.svg" alt="React" />
              <p className='mt-1 text-gray-700'>React</p>
            </div>
            <div>
              <img className='w-12 h-12 mt-2 rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3BJCUaAko_zjufh6UIDOEdBQZ8qgg0fIWwA&s" alt="Node" />
              <p className='mt-1 ml-1 text-gray-700'>Node</p>
            </div>
            <div>
              <img className='w-12 border border-gray-200 rounded-xl mt-2' src="https://img.icons8.com/nolan/512/express-js.png" alt="Express" />
              <p className='mt-1 text-gray-700'>Express</p>
            </div>
            <div>
              <img className='w-12 mt-3 rounded-xl ml-1' src="https://www.clipartmax.com/png/middle/114-1147615_mongodb-leaf-open-source-nosql-database-startups-mongodb-logo.png" alt="MongoDB" />
              <p className='text-sm mt-1 text-gray-700'>MongoDB</p>
            </div>
            <div>
              <img className='w-14' src="https://img.icons8.com/?size=512&id=40670&format=png" alt="" />
              <p className='mt-1 ml-1 text-gray-700'>C Lang</p>
            </div>
            <div>
              <img className='w-12 rounded-xl h-12 mt-2' src="https://seeklogo.com/images/M/mysql-logo-B4943FE6DD-seeklogo.com.png" alt="" />
              <p className='mt-1 text-gray-700'>MySQL</p>
            </div>
            <div>
              <img className='w-12 rounded-xl h-12 mt-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwNvnvd8WZPJVnX_SoCkNPMcEZ7LxR4lkcCg&s" alt="" />
              <p className='mt-1 text-gray-700'>Redux</p>
            </div>
            <div>
              <img className='w-12 rounded-xl h-12 mt-2 ml-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYph_D2f-3aPzDzEVTU_ZGL7xDd8TiIRAUA&s" alt="" />
              <p className='mt-1 text-sm text-gray-700'>TypeScript</p>
            </div>
          </div>
        </div>
        <div className=''>
          <div className=' w-full flex justify-center items-center shadow-xl bg-gray-300 md:w-[250px] h-28 rounded-xl'>
            <a href='mailto:shivammishra0381@gmail.com' className='px-10 py-3 bg-white hover:bg-green-500 hover:text-white rounded-xl translate-all duration-300 '>Click to send email</a>
          </div>
          <div className='flex justify-center items-center shadow-xl bg-gray-300 mt-4 mb-6 w-full md:w-[280px] h-28 rounded-xl'>
            <a href='Shivam_.pdf' download='shivam.resume' className='px-10 py-3 bg-white  rounded-xl hover:border-1 hover:bg-green-500 hover:text-white hover:border-black translate-all duration-300'>Download Resume </a>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <p className=' pl-1 md:pl-16 pr-1 md:pr-20 text-gray-700 text-lg font-medium leading-normal'>

          Hi, I’m Naveen, a software developer from Ernakulam with a keen passion for technology and innovation. I hold a Bachelor’s degree in Computer Applications from MG University, which laid the foundation for my journey into software development.
        </p>
        <div>
          <p className='text-2xl font-medium mt-3 mb-2 ml-1 md:ml-16'> My Jaurney </p>
        </div>
        <div>
          <p className=' pl-1 md:pl-16 pr-1 md:pr-20 text-gray-700 text-lg leading-normal font-medium mb-44'>
          After graduation, I delved into an intensive self-learning program focused on MERN stack development. This journey was not just about gaining technical expertise but also about fostering discipline, adaptability, and problem-solving skills. By dedicating myself, I strengthened understanding of modern web development frameworks and technologies while adhering to industry standards.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About