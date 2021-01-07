import { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);

  return (
      <>
      <Head>
        <title>Sparta7</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SLWD7G5FMK"></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-SLWD7G5FMK');
              `,
          }}
        />
      </Head>

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <svg class="navbar-sparta7-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 365.59">
              <path class="cls-1" d="M42.76 245.62c-.58 2.53-2.15 11.12 3.51 16.2 3.13 2.73 8.59 4.1 14.06 4.1 4.88 0 10.93-1 14.26-3.32a13.74 13.74 0 005.66-11.32c0-5.08-2.34-8.2-6.64-10.15-3.32-1.56-7.62-2.35-14.06-3.71l-12.69-2.73c-8.39-1.76-17.18-4.3-23.62-9.57-4.5-3.51-11.13-11.12-11.13-24.79a47.24 47.24 0 0118.35-37.28c9.56-7.42 24.21-12.5 44.71-12.5 12.3 0 28.12 2 38.27 8.78 7.81 5.08 14.64 14.45 14.64 27.92a57.46 57.46 0 01-.39 5.86H87.86c.79-5.08-1-9.18-4.1-11.32-3.32-2.15-8.78-2.35-11.13-2.35-4.29 0-9.95 1-13.46 3.91a10 10 0 00-3.52 7.65c0 2.73 1.36 6 6.05 8.2 2.35 1.17 5.08 1.75 15.23 4.1l11.13 2.53c14.64 3.33 21.67 8 25.38 11.72 7.62 7.61 9 18 9 25.76 0 13.47-4.1 25.38-13.86 35C93.33 293.05 71.85 295 56.23 295c-12.3 0-29.67-1-41.78-10.15C8.39 280.17 0 270.8 0 253a48.41 48.41 0 01.39-7.41zM220.12 154.07c10.54 0 25.77.77 36.12 10.73 5.66 5.47 10.93 15 10.93 31 0 20.5-7.42 33-15.23 40.61-15.81 15-36.31 14.83-50.38 14.83h-26.93l-8.41 39.43h-42.56l29.1-136.64zm-38.47 64.42H202c4.5 0 11.72-1 15.43-3.72 3.13-2.34 5.47-7 5.47-12.29 0-5.67-2.73-8.39-4.69-9.57-2.14-1.37-5.47-1.95-10.74-1.95h-19.96zM276.8 290.71h-44.12l79.66-136.64h42l21.47 136.64h-44.14l-2.15-19.33h-42.37zm50.38-47.44l-4.3-41-21.28 41zM409.26 154.07h70.09c10.15 0 24.41.58 34.36 9.76 5.67 5.07 10.55 13.66 10.55 27.13 0 9.56-2.35 19.32-10.15 27.33a35.41 35.41 0 01-18.75 10l-.2 1a17.58 17.58 0 018.21 4.88 19.45 19.45 0 015.46 14.25 64 64 0 01-1.37 11.13l-1.95 11.12a51.85 51.85 0 00-1.16 9.57 22 22 0 002.53 10.54h-43.54a19.86 19.86 0 01-2.73-10.15 32.63 32.63 0 01.78-6.64l1.17-7.22c.59-3.9 1.56-7.81 1.56-11.52 0-3.32-1-7-4.69-9.36-2.92-1.76-8-2.35-11.9-2.35h-14.85l-10 47.24h-42.52zm29.67 60.12h23.83c5.07 0 12.29-1.76 15.81-5.66a14.57 14.57 0 003.51-9.76 10.89 10.89 0 00-4.09-9c-3.33-2.35-8-2.54-12.31-2.54h-20.89zM528.63 191.54l8-37.47h119.88l-8 37.47h-38.66l-21.09 99.17h-42.55l21.08-99.17zM655.79 290.71h-44.12l79.66-136.64h42l21.47 136.64h-44.14l-2.15-19.33h-42.37zm50.37-47.44l-4.29-41-21.28 41z"/>
              <path d="M773.34 111.5H925l-8.46 39.44a273.44 273.44 0 00-57.88 69.14A232 232 0 00832 290.75h-57.37c4.6-21.5 14.33-48.39 36.62-79.37 8.19-11.53 22.54-29.45 50.2-56.09h-97.33z" fill="#ffec00"/>
              <path d="M844.92 48A107 107 0 01952 155v.06h48A155.06 155.06 0 00844.92 0v48z" fill="#ce2420"/>
              <path class="cls-1" d="M882.44 250.77a24.13 24.13 0 0141.25 17.06A24.1 24.1 0 01899.57 292a24.18 24.18 0 01-17.13-41.18zm3.66 30.33a18.36 18.36 0 0013.47 5.62 18.9 18.9 0 0013.33-32.29 19.11 19.11 0 00-13.33-5.49 18.61 18.61 0 00-13.27 5.49 18.87 18.87 0 00-.2 26.67zm2.09-24.51h14.58c1.9 0 4.77.26 6.6 1.5a6.23 6.23 0 012.55 5.43 5.53 5.53 0 01-1.11 3.72 5.06 5.06 0 01-2.94 1.7v.13a5.43 5.43 0 012.48 1.31c1 1.11 1 2.29 1.12 3.73l.06 1.56a7.51 7.51 0 001 3.21h-8.3a3.5 3.5 0 01-.92-2.68l-.06-1.11c-.07-1-.07-2.1-.92-2.81a4.16 4.16 0 00-2.61-.72h-3.27v7.32h-8.24zm8.24 9.74h4.25a4.91 4.91 0 002.29-.39 1.64 1.64 0 00.85-1.64 1.78 1.78 0 00-.79-1.7 4.27 4.27 0 00-2.29-.39h-4.31z"/>
              <path class="cls-1" d="M349.48 330.19H335.8v-5h33v5h-13.68v34.94h-5.64zM401.69 365.13l-8.61-12.26c-1.06.08-1.9.12-2.5.12h-9.86v12.14H375v-39.9h15.56q7.74 0 12.19 3.71a12.55 12.55 0 014.45 10.2 13.31 13.31 0 01-2.28 7.86 12.9 12.9 0 01-6.5 4.74l9.46 13.39zm-3-19.32a8.14 8.14 0 002.85-6.67 8 8 0 00-2.85-6.64q-2.85-2.31-8.27-2.31h-9.68v17.95h9.68c3.58 0 6.35-.77 8.25-2.33zM420.55 361q-4.44-4.56-4.44-13.11v-22.66h5.7v22.46q0 12.82 11.23 12.82c3.64 0 6.44-1.05 8.37-3.16s2.91-5.33 2.91-9.66v-22.46h5.53v22.69q0 8.59-4.45 13.13t-12.4 4.53q-8 0-12.45-4.58zM464.47 364.19a17.87 17.87 0 01-6.59-3.62l2.11-4.45a17.51 17.51 0 005.85 3.34 21.53 21.53 0 007.32 1.28q4.95 0 7.41-1.68a5.19 5.19 0 002.45-4.48 4.43 4.43 0 00-1.34-3.33 9 9 0 00-3.31-2q-2-.67-5.55-1.54a57.4 57.4 0 01-7.27-2.16 11.93 11.93 0 01-4.73-3.34 8.89 8.89 0 01-2-6.06 10.28 10.28 0 011.68-5.76 11.58 11.58 0 015.11-4.1 20.62 20.62 0 018.49-1.54 26.79 26.79 0 016.95.91 18.5 18.5 0 015.87 2.62l-1.88 4.56a20.71 20.71 0 00-5.36-2.42 20 20 0 00-5.58-.83q-4.85 0-7.27 1.77a5.43 5.43 0 00-2.42 4.56 4.32 4.32 0 001.37 3.33 9.47 9.47 0 003.39 2 56.42 56.42 0 005.5 1.51 56.25 56.25 0 017.24 2.16 12.21 12.21 0 014.7 3.31 8.71 8.71 0 012 6 10.2 10.2 0 01-1.71 5.73 11.36 11.36 0 01-5.18 4.1 21.42 21.42 0 01-8.55 1.51 27.31 27.31 0 01-8.7-1.38zM504.28 330.19H490.6v-5h33v5h-13.68v34.94h-5.64zM553.06 330.19h-13.67v-5h33v5h-13.68v34.94h-5.65zM612.91 325.23v39.9h-5.7v-17.78H584.3v17.78h-5.7v-39.9h5.7v17.16h22.91v-17.16zM653.83 360.17v5h-29v-39.9H653v5h-22.42v12.26h20v4.84h-20v12.88zM706.15 328.94a13.91 13.91 0 010 20.4q-4.44 3.71-12.2 3.71h-9.86v12.08h-5.7v-39.9H694q7.71 0 12.15 3.71zm-4.1 16.84a9.16 9.16 0 000-13.28q-2.85-2.31-8.27-2.31h-9.69v17.9h9.69q5.42 0 8.27-2.31zM745.65 365.13L737 352.87c-1.06.08-1.9.12-2.51.12h-9.86v12.14H719v-39.9h15.56q7.76 0 12.2 3.71a12.58 12.58 0 014.45 10.2 13.31 13.31 0 01-2.31 7.86 12.9 12.9 0 01-6.5 4.74l9.46 13.39zm-3-19.32a8.14 8.14 0 002.85-6.67 8 8 0 00-2.85-6.64q-2.85-2.31-8.27-2.31h-9.69v17.95h9.69c3.62 0 6.35-.77 8.25-2.33zM767.53 362.93a19.55 19.55 0 01-7.61-7.32 21.09 21.09 0 010-20.86 19.62 19.62 0 017.61-7.32 23.58 23.58 0 0121.72 0 19.47 19.47 0 017.58 7.29 21.4 21.4 0 010 20.92 19.4 19.4 0 01-7.58 7.29 23.58 23.58 0 01-21.72 0zm18.78-4.41a14.67 14.67 0 005.53-5.5 16.15 16.15 0 000-15.68 14.67 14.67 0 00-5.53-5.5 15.63 15.63 0 00-7.89-2 16 16 0 00-7.95 2 14.55 14.55 0 00-5.59 5.5 16.22 16.22 0 000 15.68 14.55 14.55 0 005.59 5.5 16 16 0 007.95 2 15.63 15.63 0 007.89-2zM815.32 362.93a19.46 19.46 0 01-7.55-7.29 21.4 21.4 0 010-20.92 19.47 19.47 0 017.58-7.29 22.16 22.16 0 0110.83-2.65 22.67 22.67 0 018.55 1.56 17.58 17.58 0 016.61 4.65l-3.7 3.59a14.88 14.88 0 00-11.23-4.73 16.3 16.3 0 00-8 2 14.54 14.54 0 00-5.61 5.5 16.22 16.22 0 000 15.68 14.54 14.54 0 005.61 5.5 16.3 16.3 0 008 2 14.88 14.88 0 0011.23-4.79l3.7 3.6a17.69 17.69 0 01-6.64 4.66 22.52 22.52 0 01-8.58 1.59 22 22 0 01-10.8-2.66zM878.44 360.17v5h-29v-39.9h28.16v5h-22.41v12.26h20v4.84h-20v12.88zM890.61 364.19a17.9 17.9 0 01-6.58-3.62l2.11-4.45a17.56 17.56 0 005.84 3.34 21.57 21.57 0 007.32 1.28q5 0 7.41-1.68a5.18 5.18 0 002.46-4.48 4.43 4.43 0 00-1.34-3.33 9.17 9.17 0 00-3.31-2q-2-.67-5.56-1.54a57.18 57.18 0 01-7.26-2.16 11.86 11.86 0 01-4.73-3.34 8.84 8.84 0 01-2-6.06 10.28 10.28 0 011.68-5.76 11.49 11.49 0 015.1-4.1 20.62 20.62 0 018.49-1.54 26.81 26.81 0 017 .91 18.6 18.6 0 015.87 2.62l-1.88 4.56a20.86 20.86 0 00-5.36-2.42 20 20 0 00-5.59-.83q-4.85 0-7.26 1.77a5.41 5.41 0 00-2.43 4.56 4.35 4.35 0 001.37 3.33 9.47 9.47 0 003.39 2c1.35.47 3.19 1 5.5 1.51a55.76 55.76 0 017.24 2.16 12.14 12.14 0 014.7 3.31 8.71 8.71 0 012 6A10.2 10.2 0 01913 360a11.39 11.39 0 01-5.19 4.1 21.35 21.35 0 01-8.55 1.51 27.35 27.35 0 01-8.65-1.42zM926 364.19a17.87 17.87 0 01-6.59-3.62l2.11-4.45a17.56 17.56 0 005.84 3.34 21.63 21.63 0 007.33 1.28q4.95 0 7.41-1.68a5.19 5.19 0 002.45-4.48 4.43 4.43 0 00-1.34-3.33 9.09 9.09 0 00-3.31-2q-2-.67-5.55-1.54a56.89 56.89 0 01-7.27-2.16 11.93 11.93 0 01-4.73-3.34 8.89 8.89 0 01-2-6.06 10.28 10.28 0 011.68-5.76 11.49 11.49 0 015.1-4.1 20.64 20.64 0 018.5-1.54 26.79 26.79 0 017 .91 18.5 18.5 0 015.87 2.62l-1.88 4.56a20.71 20.71 0 00-5.36-2.42 20 20 0 00-5.58-.83c-3.23 0-5.66.59-7.27 1.77A5.4 5.4 0 00926 336a4.32 4.32 0 001.37 3.33 9.47 9.47 0 003.39 2 55.62 55.62 0 005.5 1.51 56.25 56.25 0 017.24 2.16 12.21 12.21 0 014.7 3.31 8.71 8.71 0 012 6 10.2 10.2 0 01-1.71 5.73 11.42 11.42 0 01-5.18 4.1 21.42 21.42 0 01-8.55 1.51 27.31 27.31 0 01-8.76-1.46z"/>
            </svg>
          </a>
        </div>
      </nav>

      <div className="container">

        <main className="main">

          <h1 className={styles.title}>
            <svg class="sparta7-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 365.59" alt="Sparta7 - trust the process">
              <path class="cls-1" d="M42.76 245.62c-.58 2.53-2.15 11.12 3.51 16.2 3.13 2.73 8.59 4.1 14.06 4.1 4.88 0 10.93-1 14.26-3.32a13.74 13.74 0 005.66-11.32c0-5.08-2.34-8.2-6.64-10.15-3.32-1.56-7.62-2.35-14.06-3.71l-12.69-2.73c-8.39-1.76-17.18-4.3-23.62-9.57-4.5-3.51-11.13-11.12-11.13-24.79a47.24 47.24 0 0118.35-37.28c9.56-7.42 24.21-12.5 44.71-12.5 12.3 0 28.12 2 38.27 8.78 7.81 5.08 14.64 14.45 14.64 27.92a57.46 57.46 0 01-.39 5.86H87.86c.79-5.08-1-9.18-4.1-11.32-3.32-2.15-8.78-2.35-11.13-2.35-4.29 0-9.95 1-13.46 3.91a10 10 0 00-3.52 7.65c0 2.73 1.36 6 6.05 8.2 2.35 1.17 5.08 1.75 15.23 4.1l11.13 2.53c14.64 3.33 21.67 8 25.38 11.72 7.62 7.61 9 18 9 25.76 0 13.47-4.1 25.38-13.86 35C93.33 293.05 71.85 295 56.23 295c-12.3 0-29.67-1-41.78-10.15C8.39 280.17 0 270.8 0 253a48.41 48.41 0 01.39-7.41zM220.12 154.07c10.54 0 25.77.77 36.12 10.73 5.66 5.47 10.93 15 10.93 31 0 20.5-7.42 33-15.23 40.61-15.81 15-36.31 14.83-50.38 14.83h-26.93l-8.41 39.43h-42.56l29.1-136.64zm-38.47 64.42H202c4.5 0 11.72-1 15.43-3.72 3.13-2.34 5.47-7 5.47-12.29 0-5.67-2.73-8.39-4.69-9.57-2.14-1.37-5.47-1.95-10.74-1.95h-19.96zM276.8 290.71h-44.12l79.66-136.64h42l21.47 136.64h-44.14l-2.15-19.33h-42.37zm50.38-47.44l-4.3-41-21.28 41zM409.26 154.07h70.09c10.15 0 24.41.58 34.36 9.76 5.67 5.07 10.55 13.66 10.55 27.13 0 9.56-2.35 19.32-10.15 27.33a35.41 35.41 0 01-18.75 10l-.2 1a17.58 17.58 0 018.21 4.88 19.45 19.45 0 015.46 14.25 64 64 0 01-1.37 11.13l-1.95 11.12a51.85 51.85 0 00-1.16 9.57 22 22 0 002.53 10.54h-43.54a19.86 19.86 0 01-2.73-10.15 32.63 32.63 0 01.78-6.64l1.17-7.22c.59-3.9 1.56-7.81 1.56-11.52 0-3.32-1-7-4.69-9.36-2.92-1.76-8-2.35-11.9-2.35h-14.85l-10 47.24h-42.52zm29.67 60.12h23.83c5.07 0 12.29-1.76 15.81-5.66a14.57 14.57 0 003.51-9.76 10.89 10.89 0 00-4.09-9c-3.33-2.35-8-2.54-12.31-2.54h-20.89zM528.63 191.54l8-37.47h119.88l-8 37.47h-38.66l-21.09 99.17h-42.55l21.08-99.17zM655.79 290.71h-44.12l79.66-136.64h42l21.47 136.64h-44.14l-2.15-19.33h-42.37zm50.37-47.44l-4.29-41-21.28 41z"/>
              <path d="M773.34 111.5H925l-8.46 39.44a273.44 273.44 0 00-57.88 69.14A232 232 0 00832 290.75h-57.37c4.6-21.5 14.33-48.39 36.62-79.37 8.19-11.53 22.54-29.45 50.2-56.09h-97.33z" fill="#ffec00"/>
              <path d="M844.92 48A107 107 0 01952 155v.06h48A155.06 155.06 0 00844.92 0v48z" fill="#ce2420"/>
              <path class="cls-1" d="M882.44 250.77a24.13 24.13 0 0141.25 17.06A24.1 24.1 0 01899.57 292a24.18 24.18 0 01-17.13-41.18zm3.66 30.33a18.36 18.36 0 0013.47 5.62 18.9 18.9 0 0013.33-32.29 19.11 19.11 0 00-13.33-5.49 18.61 18.61 0 00-13.27 5.49 18.87 18.87 0 00-.2 26.67zm2.09-24.51h14.58c1.9 0 4.77.26 6.6 1.5a6.23 6.23 0 012.55 5.43 5.53 5.53 0 01-1.11 3.72 5.06 5.06 0 01-2.94 1.7v.13a5.43 5.43 0 012.48 1.31c1 1.11 1 2.29 1.12 3.73l.06 1.56a7.51 7.51 0 001 3.21h-8.3a3.5 3.5 0 01-.92-2.68l-.06-1.11c-.07-1-.07-2.1-.92-2.81a4.16 4.16 0 00-2.61-.72h-3.27v7.32h-8.24zm8.24 9.74h4.25a4.91 4.91 0 002.29-.39 1.64 1.64 0 00.85-1.64 1.78 1.78 0 00-.79-1.7 4.27 4.27 0 00-2.29-.39h-4.31z"/>
              <path class="cls-1" d="M349.48 330.19H335.8v-5h33v5h-13.68v34.94h-5.64zM401.69 365.13l-8.61-12.26c-1.06.08-1.9.12-2.5.12h-9.86v12.14H375v-39.9h15.56q7.74 0 12.19 3.71a12.55 12.55 0 014.45 10.2 13.31 13.31 0 01-2.28 7.86 12.9 12.9 0 01-6.5 4.74l9.46 13.39zm-3-19.32a8.14 8.14 0 002.85-6.67 8 8 0 00-2.85-6.64q-2.85-2.31-8.27-2.31h-9.68v17.95h9.68c3.58 0 6.35-.77 8.25-2.33zM420.55 361q-4.44-4.56-4.44-13.11v-22.66h5.7v22.46q0 12.82 11.23 12.82c3.64 0 6.44-1.05 8.37-3.16s2.91-5.33 2.91-9.66v-22.46h5.53v22.69q0 8.59-4.45 13.13t-12.4 4.53q-8 0-12.45-4.58zM464.47 364.19a17.87 17.87 0 01-6.59-3.62l2.11-4.45a17.51 17.51 0 005.85 3.34 21.53 21.53 0 007.32 1.28q4.95 0 7.41-1.68a5.19 5.19 0 002.45-4.48 4.43 4.43 0 00-1.34-3.33 9 9 0 00-3.31-2q-2-.67-5.55-1.54a57.4 57.4 0 01-7.27-2.16 11.93 11.93 0 01-4.73-3.34 8.89 8.89 0 01-2-6.06 10.28 10.28 0 011.68-5.76 11.58 11.58 0 015.11-4.1 20.62 20.62 0 018.49-1.54 26.79 26.79 0 016.95.91 18.5 18.5 0 015.87 2.62l-1.88 4.56a20.71 20.71 0 00-5.36-2.42 20 20 0 00-5.58-.83q-4.85 0-7.27 1.77a5.43 5.43 0 00-2.42 4.56 4.32 4.32 0 001.37 3.33 9.47 9.47 0 003.39 2 56.42 56.42 0 005.5 1.51 56.25 56.25 0 017.24 2.16 12.21 12.21 0 014.7 3.31 8.71 8.71 0 012 6 10.2 10.2 0 01-1.71 5.73 11.36 11.36 0 01-5.18 4.1 21.42 21.42 0 01-8.55 1.51 27.31 27.31 0 01-8.7-1.38zM504.28 330.19H490.6v-5h33v5h-13.68v34.94h-5.64zM553.06 330.19h-13.67v-5h33v5h-13.68v34.94h-5.65zM612.91 325.23v39.9h-5.7v-17.78H584.3v17.78h-5.7v-39.9h5.7v17.16h22.91v-17.16zM653.83 360.17v5h-29v-39.9H653v5h-22.42v12.26h20v4.84h-20v12.88zM706.15 328.94a13.91 13.91 0 010 20.4q-4.44 3.71-12.2 3.71h-9.86v12.08h-5.7v-39.9H694q7.71 0 12.15 3.71zm-4.1 16.84a9.16 9.16 0 000-13.28q-2.85-2.31-8.27-2.31h-9.69v17.9h9.69q5.42 0 8.27-2.31zM745.65 365.13L737 352.87c-1.06.08-1.9.12-2.51.12h-9.86v12.14H719v-39.9h15.56q7.76 0 12.2 3.71a12.58 12.58 0 014.45 10.2 13.31 13.31 0 01-2.31 7.86 12.9 12.9 0 01-6.5 4.74l9.46 13.39zm-3-19.32a8.14 8.14 0 002.85-6.67 8 8 0 00-2.85-6.64q-2.85-2.31-8.27-2.31h-9.69v17.95h9.69c3.62 0 6.35-.77 8.25-2.33zM767.53 362.93a19.55 19.55 0 01-7.61-7.32 21.09 21.09 0 010-20.86 19.62 19.62 0 017.61-7.32 23.58 23.58 0 0121.72 0 19.47 19.47 0 017.58 7.29 21.4 21.4 0 010 20.92 19.4 19.4 0 01-7.58 7.29 23.58 23.58 0 01-21.72 0zm18.78-4.41a14.67 14.67 0 005.53-5.5 16.15 16.15 0 000-15.68 14.67 14.67 0 00-5.53-5.5 15.63 15.63 0 00-7.89-2 16 16 0 00-7.95 2 14.55 14.55 0 00-5.59 5.5 16.22 16.22 0 000 15.68 14.55 14.55 0 005.59 5.5 16 16 0 007.95 2 15.63 15.63 0 007.89-2zM815.32 362.93a19.46 19.46 0 01-7.55-7.29 21.4 21.4 0 010-20.92 19.47 19.47 0 017.58-7.29 22.16 22.16 0 0110.83-2.65 22.67 22.67 0 018.55 1.56 17.58 17.58 0 016.61 4.65l-3.7 3.59a14.88 14.88 0 00-11.23-4.73 16.3 16.3 0 00-8 2 14.54 14.54 0 00-5.61 5.5 16.22 16.22 0 000 15.68 14.54 14.54 0 005.61 5.5 16.3 16.3 0 008 2 14.88 14.88 0 0011.23-4.79l3.7 3.6a17.69 17.69 0 01-6.64 4.66 22.52 22.52 0 01-8.58 1.59 22 22 0 01-10.8-2.66zM878.44 360.17v5h-29v-39.9h28.16v5h-22.41v12.26h20v4.84h-20v12.88zM890.61 364.19a17.9 17.9 0 01-6.58-3.62l2.11-4.45a17.56 17.56 0 005.84 3.34 21.57 21.57 0 007.32 1.28q5 0 7.41-1.68a5.18 5.18 0 002.46-4.48 4.43 4.43 0 00-1.34-3.33 9.17 9.17 0 00-3.31-2q-2-.67-5.56-1.54a57.18 57.18 0 01-7.26-2.16 11.86 11.86 0 01-4.73-3.34 8.84 8.84 0 01-2-6.06 10.28 10.28 0 011.68-5.76 11.49 11.49 0 015.1-4.1 20.62 20.62 0 018.49-1.54 26.81 26.81 0 017 .91 18.6 18.6 0 015.87 2.62l-1.88 4.56a20.86 20.86 0 00-5.36-2.42 20 20 0 00-5.59-.83q-4.85 0-7.26 1.77a5.41 5.41 0 00-2.43 4.56 4.35 4.35 0 001.37 3.33 9.47 9.47 0 003.39 2c1.35.47 3.19 1 5.5 1.51a55.76 55.76 0 017.24 2.16 12.14 12.14 0 014.7 3.31 8.71 8.71 0 012 6A10.2 10.2 0 01913 360a11.39 11.39 0 01-5.19 4.1 21.35 21.35 0 01-8.55 1.51 27.35 27.35 0 01-8.65-1.42zM926 364.19a17.87 17.87 0 01-6.59-3.62l2.11-4.45a17.56 17.56 0 005.84 3.34 21.63 21.63 0 007.33 1.28q4.95 0 7.41-1.68a5.19 5.19 0 002.45-4.48 4.43 4.43 0 00-1.34-3.33 9.09 9.09 0 00-3.31-2q-2-.67-5.55-1.54a56.89 56.89 0 01-7.27-2.16 11.93 11.93 0 01-4.73-3.34 8.89 8.89 0 01-2-6.06 10.28 10.28 0 011.68-5.76 11.49 11.49 0 015.1-4.1 20.64 20.64 0 018.5-1.54 26.79 26.79 0 017 .91 18.5 18.5 0 015.87 2.62l-1.88 4.56a20.71 20.71 0 00-5.36-2.42 20 20 0 00-5.58-.83c-3.23 0-5.66.59-7.27 1.77A5.4 5.4 0 00926 336a4.32 4.32 0 001.37 3.33 9.47 9.47 0 003.39 2 55.62 55.62 0 005.5 1.51 56.25 56.25 0 017.24 2.16 12.21 12.21 0 014.7 3.31 8.71 8.71 0 012 6 10.2 10.2 0 01-1.71 5.73 11.42 11.42 0 01-5.18 4.1 21.42 21.42 0 01-8.55 1.51 27.31 27.31 0 01-8.76-1.46z"/>
            </svg>
          </h1>
          
          <br />
          <hr />

          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Free personal coaching consultation</h5>
                  <Link href="/coaching-consultation">
                    <a href="#" class="btn btn-primary">Get a free personal coaching consultation</a>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">14 day challenge</h5>
                  <Link href="/14-day-challenge">
                    <a href="#" class="btn btn-primary">Sign up for the 14 day challenge</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <hr></hr>

        </main>

      </div>

    </>
  )
}
