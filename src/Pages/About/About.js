import Title from '../../Components/Title/Title';
import './About.css';
import video from '../../img/video.mp4'

function About() {
  return (
    <section className="About">
      <div className="container">
        <Title>About Us</Title>
        <div className="About_in flex">
          <div className="About_video">
          <video width="100%"controls autoPlay muted>
      <source src={video} type="video/mp4"/>
    </video>
          </div>
          <div className="About_txt">
            <h3 className='About_tit'>We are a large and friendly Violet family! </h3>
            <p>
              <b>We are the Kulikovsky Confectionery House!</b>
              A MINUTE OF HISTORY
IN 1991...
In 1991, Oleg Borisovich Kulikov baked the Bird's Milk cake, which began the history of the large and friendly purple family and the Kulikovsky brand. At the very beginning, the production of Kulikovo cakes was a family business, which had only a small kitchen in a standard apartment in the city of Bishkek. 

Gradually, we gained clients and grew in popularity. Along with it, the range of desserts offered and the place where all this was produced grew. So, in 10 years, the business grew into a small family confectionery with its own workshop, ordering salon and loyal customers.
            </p>
            <h3 className='About_tit'>What makes us special? 
            <b>We use...</b></h3>
            <p>
              <b>NATURAL RAW MATERIALS</b>
              Flour, nuts, eggs, butter, fresh berries, dried fruits, etc. — all the raw materials from which we make our desserts undergo strict control by specialists in our own laboratory. It is important to us that a safe and healthy product comes to your table, which will bring not only joy, but also benefit!
               </p>
               <p>
              <b>FOOD SAFETY SYSTEM</b>
              Our company was one of the first in Kyrgyzstan to be certified and became the owner of the current FSSC 22,000 food safety system certificate. This system allows us to control the quality of work and the product itself at all stages of production.
              </p>
              <h3 className='About_tit'>We continue to grow and develop! </h3>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;
