/* eslint-disable react/prop-types */
const GameListItem = ({ title, category, imageUrl }) => {
  return (
    <div className="allGames">
      <div className="allGames-info">
        <img src={imageUrl} />
        <h6>{category}</h6>
        <h2>{title}</h2>
        <a href="#" className="details-button">
          Details
        </a>
      </div>
    </div>
  );
};

export default GameListItem;