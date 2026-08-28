import "../styles/componentsStyles/TeamsCard.css";
import mailIcon from "../assets/mail-icon.png";

function TeamsCard(props) {
  const fallbackImg = `https://ui-avatars.com/api/?name=${encodeURIComponent(props.name || 'Member')}&background=ff6600&color=fff&size=200`;

  return (
    <div className="Card">
      <img 
        src={props.img || fallbackImg} 
        alt={props.name}
        onError={(e) => { e.target.src = fallbackImg; }}
      />
      <h3>{props.name}</h3>
      <h4>{props.designation}</h4>
      {props.email && (
        <div className="Card-info">
          <img src={mailIcon} alt="mail" />
          <p>
            <a href={`mailto:${props.email}`}>Email</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default TeamsCard;
