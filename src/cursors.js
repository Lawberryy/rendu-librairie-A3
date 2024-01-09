// cursors.js

/**
 * Fonction permettant de définir le curseur personnalisé.
 *
 * @param string type - Les options de personnalisation du curseur..
 * @param string color - La couleur du curseur.
 * @param number size - La taille du curseur.
 * @returns url - l'url du curseur personnalisé. 
 */

  
function setCursor(type, color = "#000000", size = 32) {
    if (typeof color !== 'string' || typeof type !== 'string') {
      throw new Error('Parameters are not valid');
    }
  
    if (typeof size !== 'number') {
      return NaN;
    }
  
    if (type === "star") {
      const svg_star = `<svg id="star" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width='${size}' height='${size}' viewBox="0 0 32 32" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
        <path d="M14.869338,0.756872L11.583832,5.230025l-5.56151-.092454l3.706764,3.28688-1.975691,4.606773l5.721593-1.850158c0,0,5.276095,2.972076,5.276095,2.972076s-1.109027-4.921457-1.109027-4.921457L21.84826,6.752038L16.479144,5.729415L14.869338,0.756872Z" transform="matrix(.993246-.116025 0.132858 1.137344 1.168369 9.137932)" fill="${color}" stroke="${color}" stroke-width="1"/>
      </svg>`;
  
      const svg_url = `url("data:image/svg+xml;utf8,${encodeURIComponent(svg_star)}") 10 10, auto`;
  
      return svg_url;
    }
  
    // Ajoutez ici la logique pour les autres types (heart, rocket, rainbow) si nécessaire.
  
    throw new Error(`Invalid cursor type: ${type}`);
  }
  
  export { setCursor };
  
  