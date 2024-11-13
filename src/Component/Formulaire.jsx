
import React, { useState } from 'react';

const Formulaire = () => {
    const [theme, setTheme] = useState('');
    const [dateDebut, setDateDebut] = useState('');
    const [dateFin, setDateFin] = useState('');
    const [coutJournalier, setCoutJournalier] = useState('');
    const [expert, setExpert] = useState('');
    const [result, setResult] = useState(null);

    const handleConfirm = () => {
        const debut = new Date(dateDebut);
        const fin = new Date(dateFin);
        const duree = (fin - debut) / (1000 * 60 * 60 * 24) + 1;
        const coutTotal = duree * coutJournalier;

        setResult({
            theme,
            dateDebut,
            dateFin,
            coutJournalier,
            expert,
            duree,
            coutTotal
        });
    };

    return (
        <div>
            <h2>Formulaire de l’événement</h2>
            <form>
                <div>
                    <label>Thème :</label>
                    <input type="text" value={theme} onChange={(e) => setTheme(e.target.value)} />
                </div>
                <div>
                    <label>Date de début :</label>
                    <input type="date" value={dateDebut} onChange={(e) => setDateDebut(e.target.value)} />
                </div>
                <div>
                    <label>Date de fin :</label>
                    <input type="date" value={dateFin} onChange={(e) => setDateFin(e.target.value)} />
                </div>
                <div>
                    <label>Coût Journalier :</label>
                    <input type="number" value={coutJournalier} onChange={(e) => setCoutJournalier(e.target.value)} />
                </div>
                <div>
                    <label>Expert :</label>
                    <input type="text" value={expert} onChange={(e) => setExpert(e.target.value)} />
                </div>
                <button type="button" onClick={handleConfirm}>Confirmer</button>
            </form>

            {result && (
                <div>
                    <h3>Informations de l’événement</h3>
                    <p>Thème : {result.theme}</p>
                    <p>Date de début : {result.dateDebut}</p>
                    <p>Date de fin : {result.dateFin}</p>
                    <p>Coût Journalier : {result.coutJournalier} DH</p>
                    <p>Expert : {result.expert}</p>
                    <p>
                        L’expert {result.expert} assurera le thème : {result.theme}, avec un coût journalier de {result.coutJournalier} DH,
                        pour une durée de {result.duree} jours, soit un coût total de {result.coutTotal} DH.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Formulaire;
