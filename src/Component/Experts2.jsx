import React, { useEffect, useState } from 'react';
import Expert from './Expert';

const Experts2 = () => {
    const [experts, setExperts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8003/Experts')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement des données');
                }
                return response.json();
            })
            .then((data) => setExperts(data))
            .catch((error) => setError(error.message));
    }, []);

    return (
        <div>
            <h1>Liste des Experts (depuis l'API)</h1>
            {error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {experts.map((expert) => (
                        <Expert key={expert.id} expert={expert} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Experts2;
