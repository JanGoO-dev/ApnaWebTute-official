git add . & @echo off & set /p msg=Enter commit message:  
git commit -m "%msg%" & git push origin master & echo %msg%