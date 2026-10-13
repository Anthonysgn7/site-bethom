# BeThom - Site vitrine de Thomas, graphiste freelance

Site vitrine responsive (desktop et mobile) intégré à partir d'une maquette Figma, en HTML5, CSS3 et un peu de JavaScript.

Site en ligne : Site en ligne : https://bethom-anthony.alwaysdata.net

## Installation

1. Cloner le dépôt :
```
   git clone https://github.com/Anthonysgn7/site-bethom.git
```
2. Ouvrir le dossier `site-bethom` dans VS Code.
3. Ouvrir `index.html` dans le navigateur, ou lancer l'extension **Live Server** (clic droit sur `index.html`, puis « Open with Live Server »).

Aucune installation supplémentaire n'est nécessaire.

## Police utilisée

**Heebo** (Google Fonts), graisses 400, 500, 700 et 800, chargée par un lien dans le `<head>` de `index.html`.

## Structure du projet

```
site-bethom/
├── index.html
├── script.js          (menu burger sur mobile)
├── styles/style.css
└── assets/
    ├── cv-thomas.pdf
    └── images/        (images en WebP, icônes, favicon)
```

## Choix techniques

- Mise en page avec Flexbox et CSS Grid, couleurs en variables CSS.
- Menu fixe en haut, avec défilement doux vers les ancres.
- Version mobile : menu burger, sections sur une colonne (media query à 768px).
- Images converties en WebP pour alléger le site.

## Qualité

- HTML et CSS validés au W3C, sans erreur.
- Lighthouse : Performance 96, Accessibilité 100, Bonnes pratiques 100, SEO 100.

Corrections apportées après audit :

1. Contraste des couleurs renforcé (corail, turquoise, gris) pour atteindre le ratio de 4,5.
2. Icône Twitter déformée corrigée en conservant ses proportions.
3. Images allégées et converties en WebP (de 2,7 Mo à environ 47 Ko pour la plus lourde).

## Limites connues

Les liens « View all » et les réseaux sociaux (`href="#"`) sont des liens de démonstration et ne mènent nulle part.

## Auteur

Projet réalisé dans le cadre de la formation Product builder no code.