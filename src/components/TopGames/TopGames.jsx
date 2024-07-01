import { useState } from 'react';
import { useGames } from '../../context/Games/useGames';

export const TopGames = () => {
  const [gamesState] = useGames();
  const { games } = gamesState;

  const [sortBy, setSortBy] = useState({ property: 'rating', order: 'desc' });

  const sortGames = (property, order) => {
    return [...games].sort((a, b) => {
      if (order === 'asc') {
        return a[property] - b[property];
      } else {
        return b[property] - a[property];
      }
    });
  };

  const handleSortChange = (property) => {
    const newOrder = sortBy.property === property && sortBy.order === 'asc' ? 'desc' : 'asc';
    setSortBy({ property, order: newOrder });
  };

  const sortedGames = sortGames(sortBy.property, sortBy.order);

  return (
    <div style={{ paddingTop: '230px', paddingBottom: '30px', textAlign: 'center', color: 'white' }}>
      <h1 style={{ marginBottom: '20px' }}>Top Games</h1>
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => handleSortChange('rating')}
          style={{
            borderRadius: '10px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
            padding: '10px 20px',
            cursor: 'pointer',
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid white'
          }}
        >
          Sort by Rating {sortBy.property === 'rating' && `(${sortBy.order === 'asc' ? 'Asc' : 'Desc'})`}
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {sortedGames.map((game) => (
          <li 
            key={game.id} 
            style={{
              borderRadius: '10px', 
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)', 
              padding: '10px',
              position: 'relative',
              color: 'white',
              border: '1px solid white'
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget.querySelector('.additional-info');
              target.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget.querySelector('.additional-info');
              target.style.opacity = '0';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>{game.name}</div>
              <div className="additional-info" style={{ opacity: 0, transition: 'opacity 0.5s ease', color: 'white' }}>
                Rating: {game.rating}, Release Date: {game.released}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
