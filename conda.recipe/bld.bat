set BLD_DIR=%cd%
cd /d %RECIPE_DIR%\..
if errorlevel 1 exit 1

cd bokehjs
rd /s /q node_modules
call npm -f install
if errorlevel 1 exit 1
cd /d ..

python setup.py --quiet install --build-js --single-version-externally-managed --record=record.txt
if errorlevel 1 exit 1

mkdir %PREFIX%\Examples
if errorlevel 1 exit 1

copy /Y examples %PREFIX%\Examples\bokeh
if errorlevel 1 exit 1
