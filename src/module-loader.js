const loadModule = () => {
  const existingScript = document.getElementById( 'ytiliSpa' );

  if ( existingScript ) {
    const css = document.createElement( 'link' );
    css.setAttribute( 'rel', 'stylesheet' );
    css.setAttribute( 'type', 'text/css' );
    css.setAttribute( 'href', 'https://iipdesignmodules.america.gov/microsites/ytili/ytili.css' );
    document.head.appendChild( css );

    const script = document.createElement( 'script' );
    script.src = 'https://iipdesignmodules.america.gov/microsites/ytili/ytili-main.min.js';
    script.defer = true;
    document.body.appendChild( script );

    script.onload = () => {
      if ( YTILI ) { // eslint-disable-line no-undef
        YTILI.ytiliSPA(); // eslint-disable-line no-undef
      }
    };
  }
};

loadModule();
