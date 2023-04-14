GuruCool is a [Next.js](https://nextjs.org/) project 

## Steps to run the GuruCool:
 1. You have to copy the code to your machine 
     You can copy the code by cloning it or you can also download the zip file, and then extract the zip file.
 2. After completing the First step open the code in the Code editor,my prefrence is to use the VS Code 
 3. The VS code can be downloaded with this Link : [VSCode Download](https://code.visualstudio.com/)
 4. You Need Install the latest version of NodeJS
 5. Now to need to check the NodeJS version.
 6. To check the version you need to run command ```node --version ```
 7. And in GuruCool we use yarn package manager to install and remove our packages either you can use yarn or npm (defaut package manager).
 8. To install yarn you have run  command in VSCode's terminal ```npm install --global yarn ```.
 9. Now to Generate the `package.json` file you need to run  the command ```yarn init``` or ```npm init```.
 10. After generating `package.json` file you need to install dependencies.
 11. To install all the dependencies you need to run the command ```yarn install``` or ```npm  install```.
 12. This command will generate a `yarn.lock` file or `package-lock.json` file.
 13. Now need to configure the data base connection in `.env.local` file that shoolud be created manually.
 14. `.env.local` file should be created in the main folder below the `package.json` file.
 15. In `.env.local` file you need to configure the database Strings(4 database Strings) and **JWT_SECRET** and **CRYPTO_SECRET** sholud be given in `.env.local` file.
 16. After following all the steps we are ready  to **run the GURUCOOL**  by running the command ```yarn dev``` or ```npm run dev```.
