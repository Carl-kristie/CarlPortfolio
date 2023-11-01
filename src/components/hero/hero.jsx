import "./hero.css"
import video from "../../assets/tunnel.mp4"

function Hero() {
    return ( 
        <>

        <section className="hero">
                  <video autoPlay loop muted>
        <source src={video} type="video/mp4"/>
      </video>
        <div className="hero-text1">
            <div className="name">Carlkristie Obinna</div>
            <div className="title">Creative Web Developer</div>
            <div className="scroll-down"><svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path></svg></div>
        </div>

        </section>
        </>
     );
}

export default Hero;