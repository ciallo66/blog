@echo off
powershell -Command "$d = (Get-Date).AddHours(-12).ToString('yyyy-MM-ddTHH:mm:ss+0800'); & git commit --amend --date=\"$d\" --no-edit"
echo 已改为当前时间减4小时
