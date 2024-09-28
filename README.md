![image](https://github.com/user-attachments/assets/45beaf4c-6875-4c3b-b906-02cf028f73b7)

# [HIT Piraeus Office](https://hot.dit.hua.gr/) ![version](https://img.shields.io/badge/version-1.0.0-blue.svg)

The Hellenic Institute of Transport (HIT) of the Centre for Research and Technology Hellas (CERTH) is the leading transport research Institute in the country and one of the most recognized research bodies at European and international level, with a strong expertise in shipping and maritime transport, and significant research experience on sustainable urban and regional development. The aim of Piraeus Office activities is to bring together research with businesses and local industry, enhancing the innovation and competitiveness ecosystem. The Piraeus Office is housed in the Piraeus Chamber of Commerce and Industry (PCCI), in the heart of the city of Piraeus.
<br/><br/>

## Installation
1) Download and Install NodeJs LTS version from [NodeJs Official Page](https://nodejs.org/en/download/).
2) Clone this repository to your local machine.
3) In the project directory, run: `npm install`.
4) In the project directory, run: `npm start`.
5) Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
<br/>

## Deployment
1) In the project directory, you can run: `npm run build`.
2) Deploy the build folder to the server.
<br/>

## Troubleshooting routing
Navigate to your server directory where `intex.html` is located. Create a file named `.htaccess` with the following code save the changes.
   ```
   <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
   </IfModule>
   ```
<br/>

## Software Development Team
* Stylianos Zindros
* Xenofon Kitsios
<br/>

## Special thanks
For the development of this website, we used [Material Kit 2 React](http://demos.creative-tim.com/material-kit-react/#/?ref=readme-mkr) from [Creative Tim](https://www.creative-tim.com/) and we want to thank them for this amazing theme.
