import React from 'react';

const Card = ({username, id, catchPhrase}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}test?200x200`} alt='robopic' />
            <div>
                <h2>{username}</h2>
                <p className="i">"{catchPhrase}"</p>
            </div>
        </div>
        
    );
};

export default Card;