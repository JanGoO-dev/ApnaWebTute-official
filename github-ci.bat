@echo off & echo Step 1: PUSH CHANGES TO THE GITHUB REPOSITORY

pause

cls

git add .
@echo off & set /p msg=Enter commit message:  
git commit -m "%msg%" & git push origin master & echo %msg%

cls

@echo off & echo CHANGES PUSHED SUCCESSFULLY TO THE GITHUB REPOSITORY

pause

cls

@echo off & echo Step 2: BUILD THE PROJECT FOR PRODUCTION

pause

cls

npm run build & firebase deploy

@echo off & echo PRODUCTION VERSION DEPLOYED SUCCESSFULLY TO FIREBASE HOSTING

pause