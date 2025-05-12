import './Herocard.css';


function HeroCard ({ hero }) {
    return (
 <div key={hero.id} className={`hero-card ${hero.isDark ? 'hero-card-dark' : 'hero-card-light'}`}>
          <h3>{hero.name}</h3>
          <p>{hero.age} years old</p>
          <p>{hero.isDark ? 'Villain 🔥' : 'Hero ✨'}</p>
          <p>Weapons: {hero.weapons.map((weapon, index) => index !== hero.weapons.lenght -1 ? weapon + ', ' : weapon + '')}</p>
          <div className="image-wrapper">
            <img src={hero.image} alt="" />
          </div>
        </div>
      );
    }


export default HeroCard;
