set PORT=1337
@REM start /b python -m http.server %PORT%
@REM start "" "C:\Users\valentin\scoop\apps\firefox\current\firefox.exe" --kiosk --private-window "http://localhost:%PORT%/cowboy.html"
start "" "C:\Users\valentin\scoop\apps\firefox\current\firefox.exe" --kiosk --private-window "file:///C:/Users/valentin/.sacha/cowboy.html"