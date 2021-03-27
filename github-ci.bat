@echo off & echo Step 1: PUSH CHANGES TO THE GITHUB REPOSITORY

git add .
@echo off & set /p msg=Enter commit message:  
git commit -m "%msg%" & git push origin master & echo %msg%

@echo off & echo CHANGES PUSHED SUCCESSFULLY TO THE GITHUB REPOSITORY

@echo off & echo Step 2: BUILD THE PROJECT FOR PRODUCTION AND DEPLOY IT TO FIREBASE HOSTING

npm run build & firebase deploy