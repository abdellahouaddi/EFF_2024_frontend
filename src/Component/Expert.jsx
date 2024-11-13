import React from 'react';
import Evenement from './Evenement';

const Expert = ({ expert }) => {
    return (
        <li>
            <strong>{expert.nom_complet}</strong>
            <Evenement evenements={expert.événements} />
        </li>
    );
};

export default Expert;
