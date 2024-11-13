// Experts1.js
import React from 'react';
import expertsData from './ExpertsData';
import Expert from './Expert';

const Experts1 = () => {
    return (
        <div>
            <h1>Liste des Experts</h1>
            <ul>
                {expertsData.map((expert) => (
                    <Expert key={expert.id} expert={expert} />
                ))}
            </ul>
        </div>
    );
};

export default Experts1;
