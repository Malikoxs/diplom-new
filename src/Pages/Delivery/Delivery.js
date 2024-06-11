import Title from '../../Components/Title/Title';
import './Delivery.css';
import video from '../../img/vvideo.mp4'

function Delivery() {
  return (
    <section className="Delivery">
      <div className="container">
        <Title>Delivery</Title>
        <div className="Delivery_in flex">
          <div className="Delivery_video">
          <video width="100%" controls autoPlay muted>
      <source src={video} type="video/mp4"/>
    </video>

          </div>
          <div className="Delivery_txt">
            <h3 className='Delivery_tit'>Kulikov delivery in Bishkek </h3>
            <p>
              <b>We are the Kulikovsky Confectionery House!</b>
              We not only prepare the most delicious sushi and rolls in Bishkek, but we also know how to quickly serve our dishes. Time is money, and in our case, time is the client’s joy. Therefore, we set the delivery time to 1 hour. All your orders will be served within an hour. But no one will cancel traffic and jams. If the road is rush hour, then, unfortunately, we may be delayed on the way. But don’t despair, because we have the lowest price for delivery – only 100 soms. But that’s not all. If you order food worth over 700 soms, we will deliver your dishes completely free of charge. </p>
            <h3 className='Delivery_tit'>What makes us special? 
            </h3>
            <p>
            If you decide to order sushi in Bishkek, then doing it with us is easy, fast and profitable. To place an order, you can call us at the following numbers:
            <b>0702223167</b>
              </p>
               
              <h3 className='Delivery_tit'>Choose Kulikov and we will not keep you waiting - only fresh and hot dishes to your table. </h3>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Delivery;