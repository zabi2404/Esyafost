import "/src/style/common/navbar.css"
import "/src/style/home_page/hero_section.css"
import Button from "/src/components/button.jsx";


function HeroSection() {

  return (
 <>
    <div className="Container">
      <div className="gradient g1"></div>
      <div className="hero-section">
        <div className="gradient"></div>
        <img className="hero_image" src="/images/hero_image.png " alt="" />
      </div>
      <div className="heading">

        <h1>Multiply Your Currency With <span>Esyasoft</span></h1>
        <p>
          Are you tired of your currency not going as far as it used to? Try esyasoft and multiply your money! With our
          user-friendly interface and expert market analysis, you'll be earning more in no time
        </p>
        <Button
          title="Start Trading"
        />
      </div>
    </div>
 </>

)
}

export default HeroSection;