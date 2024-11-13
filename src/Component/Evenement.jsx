import React from 'react';

const Evenement = ({ evenements }) => {
    const totalCout = evenements.reduce((total, evenement) => {
        const coutTotalEvent = evenement.cout_journalier * evenement.durée;
        return total + coutTotalEvent;
    }, 0);

    return (
        <div>
            <table className="table table-striped" border="1">
                <thead>
                    <tr>
                        <th>Thème</th>
                        <th>Date de début</th>
                        <th>Date de fin</th>
                        <th>Description</th>
                        <th>Coût Journalier</th>
                        <th>Durée (jours)</th>
                        <th>Coût Total Event</th>
                    </tr>
                </thead>
                <tbody>
                    {evenements.map((event, index) => {
                        const coutTotalEvent = event.cout_journalier * event.durée;
                        return (
                            <tr key={index}>
                                <td>{event.théme}</td>
                                <td>{event.date_debut}</td>
                                <td>{event.date_fin}</td>
                                <td>{event.description}</td>
                                <td>{event.cout_journalier} DH</td>
                                <td>{event.durée}</td>
                                <td>{coutTotalEvent} DH</td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="6">Total des coûts des événements assurés est :</td>
                        <td>{totalCout} DH</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Evenement;
