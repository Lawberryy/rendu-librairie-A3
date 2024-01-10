// cursors.js

/**
 * The setCursor function allows you to set a custom cursor for your website.
 *
 * @param {string} type - The type of cursor: choose from the list found in the README.md documentation.
 * @param {string} [color='#000000'] - The color of the cursor. This should be a valid CSS color.
 * @param {number} [size=32] - The size of the cursor. This should be a number. We recommend a value between 16 and 32.
 * @returns url - the URL of the custom cursor.
 * 
 * 
 *  * @example
 * 
 *     setCursor('star', '#ff0FF0', 24)
 */

  
function setCursor(type, color = "#000000", size = 32) {
    // Check if the color and type parameters are strings.
    // If not, throw an error.
    if (typeof color !== 'string' || typeof type !== 'string') {
      throw new Error('Parameters are not valid');
    }
  
    // Check if the size parameter is a number.
    // If not, return NaN.
    if (typeof size !== 'number') {
      return NaN;
    }

    if (type === "default") {
      const svg_default = `<svg id="eL5y4AUlFe31" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${size}" height="${size}" viewBox="0 0 32 32" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path d="M9.575241,16.543307l4.5-10l4.5,10-3.5-1.92v4.274331h-2v-4.269467l-3.5,1.915136Z" transform="matrix(2.026028-1.169728 1.169728 2.026028-28.312759 5.948613)" fill="none" stroke="${color}" stroke-width="0.5"/></svg>`;
    
      const default_url = `url("data:image/svg+xml;utf8,${encodeURIComponent(svg_default)}") 30 10, auto`;
    
      return default_url;
    }
  
    // If the type is 'star', return a URL for a star cursor.
    if (type === "star") {
      const svg_star = `<svg id="star" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${size}" height="${size}" viewBox="0 0 32 32" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
        <path d="M14.869338,0.756872L11.583832,5.230025l-5.56151-.092454l3.706764,3.28688-1.975691,4.606773l5.721593-1.850158c0,0,5.276095,2.972076,5.276095,2.972076s-1.109027-4.921457-1.109027-4.921457L21.84826,6.752038L16.479144,5.729415L14.869338,0.756872Z" transform="matrix(.993246-.116025 0.132858 1.137344 1.168369 9.137932)" fill="${color}" stroke="${color}" stroke-width="1"/>
      </svg>`;
  
      const svg_url = `url("data:image/svg+xml;utf8,${encodeURIComponent(svg_star)}") 30 10, auto`;
  
      return svg_url;
    }

    // If the type is 'heart', return a URL for a heart cursor.
    if (type === "heart") {
        const heart_url = `url("https://cdn-icons-png.flaticon.com/128/2324/2324510.png") 60 60, auto`;

        return heart_url;
    }

    // If the type is 'cat', return a URL for a cat cursor.
    if (type === "cat") {
        const cat_url = `url("https://cdn-icons-png.flaticon.com/128/3276/3276340.png") 60 80, auto`;

        return cat_url;
    }

    // If the type is 'sun', return a URL for a sun cursor.
    if (type === "sun") {
        const sun_url = `url("https://cdn-icons-png.flaticon.com/128/1196/1196517.png") 60 60, auto`;

        return sun_url;
    }

    // If the type is 'flower', return a URL for a flower cursor.
    if (type === "flower") {
      const svg_flower = `<svg id="eb2oimtOGyU1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${size}" height="${size}" viewBox="0 0 32 32" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path d="M11.124116,11.108681c0,0-3.459023-3.93349-3.459023-5.604622c0-2.864275,3.575399-4.566852,5.200921-4.371789q3.768783.452254,3.768783,4.371789v4.199708l3.284261-4.199708q2.368915-1.658264,4.554809-.829132c2.185894.829132,3.140765,4.85114.868738,5.803926q-2.272027.952786-5.423547,2.742887h3.047295c2.146288,0,3.085176.351073,4.070286,1.327399c1.027076,1.017918,1.19722,3.536238.452254,4.673292q-1.432137,2.185894-4.52254.507912c0,0-4.038808-2.522644-4.038808-2.522644s2.606671,5.395312,2.606671,5.395312q.635274,1.912961-.979884,3.629357c-1.615158,1.716396-4.513782.96264-5.032743-.846376q-.518961-1.809016-1.148062-8.592827l-1.507513,5.067414q-1.274798,3.391905-3.693408,4.371789c-2.41861.979884-4.748667-2.660564-3.316529-5.68151q1.432138-3.020946,5.268042-4.983801L4.499315,16.793165q-2.185894-.43501-2.939651-2.244026c-.753757-1.809016.376878-6.894953,4.899418-5.502424q4.52254,1.392529,4.665034,2.061966Z" transform="matrix(1.12464 0 0 1.124638-.480117 0.07889)" fill="#ffffff" stroke="${color}" stroke-width="0.5"/><ellipse rx="4.899418" ry="4.899419" transform="matrix(1.188636 0 0 1.188636 16 15.331679)" fill="#d2dbed" stroke-width="0"/></svg>
      `;
      const flower_url = `url("data:image/svg+xml;utf8,${encodeURIComponent(svg_flower)}") 30 10, auto`;

        return flower_url;
    }
  
    // If the type is not one defined above, throw an error.
    throw new Error(`Invalid cursor type: ${type}`);
  }
  
  // Export the setCursor function so it can be used in other files.
  export { setCursor };
  