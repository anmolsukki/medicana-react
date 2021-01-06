import React from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';
import Routes from './router';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <React.Fragment>{renderRoutes(Routes)}</React.Fragment>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <meta name="description" content="India's best online pharmacy with a wide range of Prescription and OTC medicines. Order medicines online at Medicana medicine store in 100+ cities like - Patna, Bihar etc. with free home delivery and exciting offers. Check Now!">
        <meta name="keywords" content="online pharmacy, online medicine, medicine online, online medical store, buy medicine online, online pharmacy India, buy medicine online India, online chemist, online medicine purchase">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta data-react-helmet="true" name="robots" content="INDEX, FOLLOW" />
        <meta data-react-helmet="true" name="googlebot" content="INDEX, FOLLOW">

        <link data-react-helmet="true" rel="canonical" href="https://medicana.co.in/"/>
        <link rel="icon" type="image/x-icon" rel="icon" href="/assets/images/favicon.ico">
        <link rel="stylesheet" type="text/css" href="/assets/css/main.css?v=1.1">
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
        <link rel="stylesheet" href="/assets/css/blue.css">
        <link rel="stylesheet" href="/assets/css/owl.carousel.css">
        <link rel="stylesheet" href="/assets/css/owl.transitions.css">
        <link rel="stylesheet" href="/assets/css/animate.min.css">
        <link rel="stylesheet" href="/assets/css/rateit.css">
        <link rel="stylesheet" href="/assets/css/bootstrap-select.min.css">
        <link rel="stylesheet" href="/assets/css/font-awesome.css">

        <link href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,700' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,600italic,700,700italic,800' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_CODE_HERE"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_CODE_HERE');
        </script>

		  </head>
    <body>
      <div id="root">${content}</div>
      <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
      </script>

      <script src="/dist.js"></script>
      <script src="/assets/js/custom.js"></script>

      <script>
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', function() {
            navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
              return null;
            }, function(err) {
              return null;
            });
          });
        }
      </script>

	  </body>
    </html>
  `;
};
