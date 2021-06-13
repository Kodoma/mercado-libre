import React from 'react';
import Head from 'next/head';

const HeadSeo = () => {
    return (
        <Head>
            <title>Codo a codo desde casa en Mercado Libre Argentina</title>
            <meta
                name="description"
                content="Encontrá lo que buscás en Codo a codo desde casa. Todo lo que necesitas lo conseguís en un solo lugar, en Mercado Libre"
                data-head-react="true"
            />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
            <meta name="HandheldFriendly" content="True" />
            <meta httpEquiv="cleartype" content="on" />
            <meta name="browser-support" content="samesite=true" />
            <link
                href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.5/mercadolibre/favicon.svg"
                rel="icon"
                data-head-react="true"
            />
            <link
                href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.5/mercadolibre/180x180.png"
                rel="apple-touch-icon"
                data-head-react="true"
            />
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
        </Head>
    );
};

export default HeadSeo;
