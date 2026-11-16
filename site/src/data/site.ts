// All the site copy in one place.

/**
 * Colour theme. `accent: null` = pure black & white. Otherwise the accent
 * colour only touches small details (cursors, squares, progress, active menu).
 * Presets: blue '#2E68FF' (ink '#FFFFFF') · yellow '#FFD60A' (ink '#0E0E0E').
 */
export const THEME: { accent: string | null; accentInk: string } = {
	accent: '#2E68FF',
	accentInk: '#FFFFFF',
};

export const ACCENT_PRESETS = {
	blue: { accent: '#2E68FF', accentInk: '#FFFFFF' },
	yellow: { accent: '#FFD60A', accentInk: '#0E0E0E' },
	none: { accent: null, accentInk: '#0E0E0E' },
} as const;

export const SITE = {
	name: 'Omar Mechenane',
	city: '',
	email: 'contact@omar-mechenane.fr',
	/** Optional — leave empty ('') to hide the phone everywhere */
	phone: '',
	socials: [
		{ label: 'LinkedIn', href: '#' },
		{ label: 'GitHub', href: 'https://github.com/omar1234a' },
		{ label: 'Malt', href: '#' },
	],
};

/**
 * Every visible sentence of the site, section by section. Titles are arrays:
 * one entry per line of the big pixel title (keep each line short).
 */
export type ExtraField =
	| { label: string; kind: 'date' }
	| { label: string; kind: 'select'; options: string[] }
	| { label: string; kind: 'text'; placeholder: string };

export const COPY = {
	hero: {
		label: '[Portfolio]',
		tagline: "Agents IA, assistants RAG, automatisations. Huit images pour entrer dans l'atelier.",
	},
	intro: {
		label: '[01] — Studio',
		title: ['Architecte IA', '& automatisation'],
		text: 'Je conçois des agents IA, des assistants RAG et des automatisations sur mesure pour les PME et les équipes métier. Des systèmes utiles, mesurables, mis en production.',
		primaryCta: 'Démarrer un projet',
		secondaryCta: 'Voir les projets',
	},
	services: { label: 'Services' },
	work: {
		label: '[02] — Travaux',
		title: ['Projets', 'récents.'],
		text: 'Agents, assistants et workflows conçus pour des équipes métier. Cliquez sur un projet pour découvrir le détail.',
	},
	process: {
		label: '[03] — Processus',
		title: ['Du besoin', 'à la production.'],
	},
	about: {
		label: '[04] — À propos',
		title: ["L'utile", "d'abord."],
		text: "Je suis Omar Mechenane, architecte IA & automatisation, formé chez Jedha. Je conçois des agents, des assistants RAG et des workflows qui font gagner du temps aux équipes, sans jargon et avec des résultats mesurables.",
		cta: 'Travaillons ensemble',
		/** Area of the portrait kept free of pixels (the face), in 0–1 coordinates */
		face: { x0: 0.33, y0: 0.17, x1: 0.75, y1: 0.63 },
	},
	testimonials: {
		label: '[05] — Ils en parlent',
		rating: '5/5 · 3 avis',
	},
	faq: {
		label: '[06] — FAQ',
		title: ['Questions', 'fréquentes.'],
		aside: 'Une autre question ?',
		asideLink: 'Écrivez-moi',
		asideEnd: ', je réponds sous 24 h.',
	},
	contact: {
		label: '[07] — Contact',
		title: ['Parlons', 'projet.'],
		text: 'Décrivez-moi votre besoin : je vous réponds sous 24 h avec une première piste et un devis.',
		typeLabel: 'Type de mission',
		sessionTypes: ['Agent IA', 'Assistant RAG', 'Automatisation', 'Audit & conseil', 'Autre'],
		// 4th field of the form, next to the type: pick what this trade needs to quote.
		// kind 'date' (photographer: date of the shoot), 'select' (budget, deadline…)
		// or 'text' (free answer, with a placeholder)
		extraField: { label: 'Budget', kind: 'select', options: ['< 3 k€', '3 – 8 k€', '8 – 15 k€', '> 15 k€'] } as ExtraField,
		messageLabel: 'Votre besoin',
		messagePlaceholder: 'Tâche à automatiser, outils utilisés, volume de données… quelques mots suffisent.',
		responseTime: 'Réponse sous 24 h',
		mailSubject: 'Demande de devis',
	},
	footer: {
		description: 'Architecte IA & automatisation en freelance. Agents IA, assistants RAG et workflows sur mesure pour les entreprises.',
	},
	header: { cta: 'Démarrer un projet', ctaShort: 'Démarrer' },
};

export const NAV = [
	{ label: 'Travaux', id: 'travaux' },
	{ label: 'Processus', id: 'processus' },
	{ label: 'À propos', id: 'apropos' },
	{ label: 'Contact', id: 'contact' },
];

export const STATS = [
	{ value: '9', label: 'Projets IA réalisés' },
	{ value: '3', label: 'Expertises clés' },
	{ value: '2 sem.', label: 'Pour un premier prototype' },
	{ value: '24 h', label: 'Délai de réponse' },
];

/** Services scrolling in the band under the intro (short, one or two words each) */
export const SERVICES = [
	'Agents IA',
	'Assistants RAG',
	'Automatisation n8n',
	'Intégration LLM',
	'Audit IA',
	'Chatbots métier',
	'Pipelines de données',
	'Formation équipes',
];

export const PROCESS = [
	{
		title: 'Cadrage',
		text: 'Un appel de 30 minutes pour comprendre votre métier, la tâche à automatiser et le gain attendu.',
		duration: 'S1',
		icon: 'chat',
	},
	{
		title: 'Architecture',
		text: 'Choix du modèle, des données et des outils. Vous recevez un schéma clair, un planning et un devis ferme.',
		duration: 'S2',
		icon: 'plan',
	},
	{
		title: 'Développement',
		text: 'Un prototype testé sur vos vrais cas, puis amélioré avec vos équipes à chaque démonstration.',
		duration: 'S3-S5',
		icon: 'code',
	},
	{
		title: 'Mise en production',
		text: 'Déploiement, suivi des coûts et de la qualité, documentation et prise en main par vos équipes.',
		duration: 'S6',
		icon: 'rocket',
	},
] as const;

export const TESTIMONIALS = [
	{
		quote:
			'Le tri des demandes clients nous prenait deux heures par jour. L’agent le fait maintenant seul, et l’équipe ne traite plus que les cas délicats.',
		author: 'Sarah Benali',
		role: 'Responsable service client — PME e-commerce',
	},
	{
		quote:
			'Nos collaborateurs retrouvent enfin une réponse fiable dans nos procédures, avec la source à côté. Omar a su expliquer chaque choix simplement.',
		author: 'Julien Faure',
		role: 'Directeur des opérations — Cabinet de conseil',
	},
	{
		quote:
			'Les factures arrivent, sont lues et classées sans personne. Livré dans les délais, documenté, et on sait exactement ce que ça coûte par mois.',
		author: 'Nadia Roussel',
		role: 'Gérante — Cabinet comptable',
	},
];

export const FAQ = [
	{
		q: 'Combien de temps faut-il pour un premier résultat ?',
		a: 'Comptez deux semaines pour un prototype qui tourne sur vos vrais cas, et quatre à six semaines pour une mise en production complète.',
	},
	{
		q: 'Mes données restent-elles confidentielles ?',
		a: 'Oui. Je travaille sous accord de confidentialité, avec des fournisseurs qui n’entraînent pas leurs modèles sur vos données, et un hébergement en Europe ou chez vous si besoin.',
	},
	{
		q: 'Faut-il déjà avoir une équipe technique ?',
		a: 'Non. Je m’adapte à vos outils existants (messagerie, CRM, tableurs, ERP) et je forme vos équipes à l’utilisation et au suivi de la solution.',
	},
	{
		q: 'Que se passe-t-il après la livraison ?',
		a: 'Vous êtes propriétaire du code, des workflows et de la documentation. Je propose un suivi mensuel facultatif pour surveiller la qualité et les coûts.',
	},
	{
		q: 'Comment se passe le paiement ?',
		a: 'Un acompte de 30 % au lancement, le solde à la livraison. Les coûts d’usage des modèles sont estimés dans le devis et restent à votre nom.',
	},
];
