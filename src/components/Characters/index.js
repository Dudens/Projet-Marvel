import "./index.css";
import Card from "../Card";

const Characters = (props) => {
  // le tableau de data est props.data

  return (
    <div className="CharactersContainer">
      {props.data.map((character) => {
        return <Card name={character.name}imageUrl={character.thumbnail.path + "."+ character.thumbnail.extension} />;
      })}
    </div>
  );
};

export default Characters;
