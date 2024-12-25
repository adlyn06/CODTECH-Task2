import AboutImg from '../assets/about.jpg'

export default function About(){
    return <section className='flex flex-col md:flex-row bg-gray-900 px-5 ' id='about'>
        <div className='py-10 md:w-1/3'>
            <img className='md:w-50 md:h-[400px] flex justify-center px-42 h-[350px] w-50' src={AboutImg}></img>
        </div>
        <div className='md:w-1/2 flex justify-center'>
          <div className='flex flex-col justify-center md:pl-20  py-10 text-white'>
             <h1 className='text-4xl  border-b-4 border-[#3c3cc9] mb-5 w-[170px] font-bold'>About Me</h1>
             <p ></p>I'm currently in my second year of pursuing a Bachelor of Computer Science and Engineering with a specialization in Artificial Intelligence and Machine learning. I'm a passionate Front-End Developer with a solid foundation in HTML,CSS,JavaScript,and ReactJs. My skills include crafting responsive,user-friendly interfaces using Tailwind CSS. I'm committed to continuous learning and improving my development techniques.
          </div>
            
        </div>
    </section>
}