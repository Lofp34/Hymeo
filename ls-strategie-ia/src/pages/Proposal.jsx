import React from 'react';

export default function Proposal() {
  const css = `
    :root {
      --bg: #f5f5f7;
      --text: #1d1d1f;
      --accent: #0071e3;
    }
    body {margin:0}
    .prop-wrapper{background:var(--bg);color:var(--text);font-family:"Inter",-apple-system,BlinkMacSystemFont,sans-serif;line-height:1.6;}
    .prop-wrapper h1{font-size:clamp(2rem,6vw,4rem);font-weight:600;letter-spacing:-0.02em;margin:0;}
    .prop-wrapper h2{font-size:2rem;font-weight:600;margin:0;text-align:center;}
    .prop-wrapper header{min-height:60vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:0 1rem;}
    .prop-wrapper header p{margin-top:1rem;font-size:clamp(1rem,2vw,1.25rem);max-width:40rem;}
    .prop-wrapper .cta{margin-top:2rem;display:inline-block;padding:.8rem 2rem;border-radius:40px;background:var(--accent);color:#fff;font-weight:600;text-decoration:none;transition:background .3s;}
    .prop-wrapper .cta:hover{background:#005bb5;}
    .prop-section{padding:4rem 1.5rem;max-width:1100px;margin:0 auto;}
    .prop-grid{display:grid;gap:3rem;margin-top:3rem;}
    @media(min-width:768px){.prop-grid{grid-template-columns:repeat(2,1fr);} }
    .card{background:#fff;border-radius:28px;padding:2rem;box-shadow:0 20px 40px rgba(0,0,0,.05);}
    .card h3{margin-bottom:1rem;font-size:1.25rem;}
    .card p{opacity:.8;}
    .kpi{font-size:2.5rem;font-weight:600;color:var(--accent);}
    .kpi + p{margin-top:.5rem;opacity:.7;}
    .prop-footer{padding:4rem 1rem;text-align:center;font-size:.9rem;opacity:.6;}
  `;

  return (
    <div className="prop-wrapper">
      <style>{css}</style>
      <header>
        <h1>Votre Pipe. Votre Trésorerie.<br />Maîtrisés en 90&nbsp;jours.</h1>
        <p>
          Une proposition sur-mesure pour Mathias &amp; l’équipe Hyméo&nbsp;: structure
          commerciale, IA neutre et pipe visuel connecté à Extrabat.
        </p>
        <a className="cta" href="#plan">Découvrir le plan</a>
      </header>

      <section id="plan" className="prop-section">
        <h2>Parcours en&nbsp;3&nbsp;étapes</h2>
        <div className="prop-grid">
          <div className="card">
            <h3>
              01&nbsp;· Bootcamp Commercial<br />
              <span style={{ fontWeight: 300 }}>4&nbsp;semaines – 4 950 €</span>
            </h3>
            <p>
              Entretiens individuels, atelier Plan de Vente, formation terrain et 2
              coachings IA par vendeur. Objectif&nbsp;: un cadre commun sans rigidité «
              Procter&nbsp;&amp;&nbsp;Gamble ».
            </p>
          </div>
          <div className="card">
            <h3>
              02&nbsp;· POC Pipe&nbsp;360°<br />
              <span style={{ fontWeight: 300 }}>30&nbsp;jours – 3 900 €</span>
            </h3>
            <p>
              API Extrabat &rarr; Pipe visuel auto-priorisé. Liste « À appeler aujourd’hui
              » à 8 h00, KPI live pour Mathias, lecture seule pour Florian.
            </p>
          </div>
          <div className="card">
            <h3>
              03&nbsp;· Industrialisation<br />
              <span style={{ fontWeight: 300 }}>1 €/dossier actif/mois</span>
            </h3>
            <p>
              Hébergement sécurisé, maintenance, évolutions IA : Deep Search rendez-vous,
              génération de devis automatiques, reporting trésorerie.
            </p>
          </div>
        </div>
      </section>

      <section className="prop-section">
        <h2>Résultats attendus</h2>
        <div className="prop-grid">
          <div className="card" style={{ textAlign: 'center' }}>
            <div className="kpi">+10 pts</div>
            <p>de taux de signature<br />(18 % ➜ 28 %)</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div className="kpi">ROI &lt; 3&nbsp;mois</div>
            <p>amorti sur 4&nbsp;ventes piscine coque</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div className="kpi">–1 h</div>
            <p>de charge mentale<br />commerciale / jour</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div className="kpi">+15 pts</div>
            <p>fiabilité prévisions CA<br />pour Florian</p>
          </div>
        </div>
      </section>

      <section className="prop-section">
        <h2>Pourquoi ça marche&nbsp;?</h2>
        <div className="prop-grid">
          <div className="card">
            <h3>Neutralité IA</h3>
            <p>
              Coaching automatique des entretiens : feedback diplomate, accepté par tous
              les vendeurs seniors comme juniors.
            </p>
          </div>
          <div className="card">
            <h3>Zero Changement d’Habitude</h3>
            <p>
              Extrabat reste l’unique source ; nous n’ajoutons qu’une sur-couche visuelle
              pour prioriser.
            </p>
          </div>
          <div className="card">
            <h3>Décision Cycle Court</h3>
            <p>
              Investissement initial &lt; 10 k € ; Florian valide sans comité long, Mathias voit le
              gain opérationnel dès le POC.
            </p>
          </div>
          <div className="card">
            <h3>Transmission Senior</h3>
            <p>
              Atelier Plan de Vente valorise l’expertise d’Hubert &amp; Didier : la méthode
              devient capital immatériel de l’entreprise.
            </p>
          </div>
        </div>
      </section>

      <section className="prop-section" style={{ textAlign: 'center' }}>
        <h2>Prêt à passer à l’action ?</h2>
        <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
          Planifiez votre audit flash gratuit de 45 minutes.<br />Nous importons vos 100
          derniers leads Allianz pour une démo live.
        </p>
        <a
          className="cta"
          href="mailto:ls@laurentserre.com?subject=Audit%20flash%20Hym%C3%A9o"
        >
          Réserver un créneau</a>
      </section>

      <footer className="prop-footer">
        © 2025 – Laurent&nbsp;Serre Développement. Design inspiré par la simplicité chère à
        Jony Ive.
      </footer>
    </div>
  );
}