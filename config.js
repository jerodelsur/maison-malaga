/* ════════════════════════════════════════════════════════════════
   CONFIGURATION — les seuls réglages à compléter pour le pilote
   ════════════════════════════════════════════════════════════════ */
window.MM_CONFIG = {
  // Lien de réservation Cal.com (ex. "https://cal.com/celine/appel-30min").
  // Vide → les boutons « Réserver » ouvrent WhatsApp avec un message pré-rempli.
  calUrl: "",

  // URL « action » du formulaire Brevo (…sibforms.com/serve/…).
  // Vide → le formulaire d’inscription est masqué en production
  // (il reste visible en local, en mode démonstration).
  brevoFormAction: "",

  // Liens facultatifs : laissés vides, ils n’apparaissent pas dans le pied de page.
  instagramUrl: "",
  email: "",

  // Photos de Céline à Málaga. Déposer les fichiers dans /photos puis indiquer le chemin.
  // Vide → l’emplacement est masqué en production (encadré pointillé en local).
  photos: {
    histoire: "",   // portrait vertical 4:5 — ex. "photos/celine-malaga.jpg"
    vivre: ""       // portrait vertical 4:5 — ex. "photos/celine-yoga.jpg"
  }
};
