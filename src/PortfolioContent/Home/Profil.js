import React from 'react'
import Typical from 'react-typical'
export default function Profil() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <a href='https://www.facebook.com/sneha.golhe'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-instagram'></i>         
                    </a>
                    <a href='https://x.com/snehagolhe'>
                        <i className='fa fa-twitter-square'></i>
                    </a>
                    <a href='https://www.youtube.com/@mylittleworld8858'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    

                </div>

                <div className='profile-detail-name'>
                    <span className='primary-text'>
                        {""}
                        Hello, I'M <span className='highlighted-text'>Sneha</span>
                    </span>
                </div>
                <div className='profil-deatail-role'>
                <span className='primary-text'>
                        {""}
                        <h1>
                            {""}
                            <Typical 
                            loop={Infinity}
                            steps={[
                                "Web Developer 🔴",
                                1500,
                                "Full Stack Developer 😎",
                                1500,
                                "Java Developer 👩‍💻",
                                1500,
                                "React/React Native Dev 🤳",
                                1500,
                                "Code, Design, Innovate 🤝",
                                1500,
                                
                            ]}>

                            </Typical>

                        </h1>
                        <span className='profile-role-tagline'>
                        Creating innovative web solutions and seamless user experiences.

                        </span>
                    </span>
                </div>
                <div className='profile-option' >
                    <button className='btn primary-btn'>
                        {""}
                        Hire Me{""}
                    </button>
                    <a href='Sneha-Golhe-Resume.pdf' download='Sneha Sneha-Golhe-Resume.pdf'>
                            <button className='btn highlited-btn'>Get Resume</button>
                    </a>
                </div>

            </div>

        </div>
      
    </div>
  );
}
