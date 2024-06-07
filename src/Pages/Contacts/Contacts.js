import './Contacts.css';
import Title from '../../Components/Title/Title';

function Contacts() {
  return (
    <section className="Contacts">
      <div className="container">
        
        <Title>Contacting Kulikov</Title>
        <div className="Contacts_in">
          <div className="Contacts_block">
            <div className="Contacts_tit">GMAIL</div>
            <p className="Contacts_block-tit">service@kulikov.com</p>
          </div>
          <div className="Contacts_block">
            <div className="Contacts_tit">PHONES
HELP SERVICE</div>
            <p className="Contacts_block-tit">Bishkek: +996556583858
Almata: +77273647777
Novosibirsk: +73833228901
</p>
          </div>
          
          
          
          
          <div className="Contacts_block">
            <div className="Contacts_tit">WORKING HOURS
HELP SERVICE</div>
            <p className="Contacts_block-tit">Bishkek: Пн.-Вс. 07:00 - 23:00
Almata: Пн.-Вс. 08:00 - 22:00
Novosibirsk: Пн.-Вс. 09:00 - 23:00
</p>
          </div>
        </div>
        <div className="Contacts_map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d46793.32304975421!2d74.61601280000001!3d42.860544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1714988710851!5m2!1sru!2skg" title="Контактная информация" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contacts;