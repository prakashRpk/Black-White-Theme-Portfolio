import { Typewriter } from 'react-simple-typewriter';
import '../Styles/Home.css'
import img from '../img/my img 3.jpg'
import comma from '../images/comma.png'
const Main = () =>{
    return(<>
    <div id='home'>
        <img src={comma} alt="" className='comma' />
        <h1 className='Quote'>One step at a time,<br /> You'll get there</h1>
        <span className='underline-1'></span>
        <img src={img} alt="" className='myimg' />
        <h1 className='name'>
      <Typewriter
        words={["Welcome to my Portfolio!", "Hi I'm prakash!", "I'm Full Stack Developer"]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </h1>

    <p className='paragraph'>
      <Typewriter
        words={[`I'm full-stack developer passionate about creating innovative websites and
applications. With a strong foundation in both front-end and back-end technologies, I aim to bring
ideas to life through seamless, user-friendly digital experiences. Currently, I am honing my skills in HTML,
CSS, JavaScript, and various backend frameworks, with the goal of developing my own projects and
contributing to impactful tech solutions`]}
        loop={1}
        cursor
        cursorStyle="✒️"
        typeSpeed={60}
        deleteSpeed={40}
        delaySpeed={1200}
      />
    </p>
    </div>
    </>)
}
export default Main;