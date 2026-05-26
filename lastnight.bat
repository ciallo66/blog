@echo off
for /f "tokens=1-3 delims=/- " %%a in ('powershell -Command "(Get-Date).AddHours(-12).ToString('yyyy-MM-ddTHH:mm:ss+0800')"') do set newdate=%%a-%%bT%%c
git commit --amend --date="%newdate%" --no-edit
echo 已改为当前时间减12小时
