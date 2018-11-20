const loadModule = () => {
  const existingScript = document.getElementById( 'ytiliSpa' );

  if ( existingScript ) {
    const css = document.createElement( 'link' );
    css.setAttribute( 'rel', 'stylesheet' );
    css.setAttribute( 'type', 'text/css' );
    css.setAttribute( 'href', 'https://s3.amazonaws.com/iip-design-local-dev-modules/spas/ytili/ytili-spa.css' );
    document.head.appendChild( css );

    const script = document.createElement( 'script' );
    script.src = 'https://s3.amazonaws.com/iip-design-local-dev-modules/spas/ytili/ytili.min.js';
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
