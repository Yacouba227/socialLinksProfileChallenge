import './App.css';
import user from './images/avatar-jessica.jpeg'
function App() {
  return (
    <>
      <div className='container'>
        <div className="wrapper">
          <img src={user} alt="" />
          <h3 className='meme'>Halidou Yacoubou</h3>
          <p className='seul'>London, United Kingdom</p>
          <p className='meme fon'>"Front-end developer and avid reader."</p>
         
           <a href="https://github.com/Yacouba227"> <li>GitHub</li></a>
           <a href="https://www.frontendmentor.io/profile/Yacouba227"> <li>Frontend Mentor</li></a>
           <a href="https://www.linkedin.com/in/halidou-ali-yacoubou-71a296189/"> <li>LinkedIn</li></a>
           <a href=""> <li>Twitter</li></a>
           <a href=""> <li>Instagram</li></a>
         
        </div>
      </div>
    </>
  );
}

export default App;
