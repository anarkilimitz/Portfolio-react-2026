# Portfolio

## Локальная разработка

- `npm start` запускает React dev server и PHP-бэкенд на `http://127.0.0.1:8000`.
- Скрипт сам пробует найти PHP в `PATH`, а затем в типовых установках вроде OSPanel и MAMP.
- Если хочешь принудительно указать конкретный PHP, в PowerShell задай `PHP_BIN`, например `$env:PHP_BIN='C:\OSPanel\modules\PHP-7.4\PHP\php.exe'; npm start`.
- Фронт обращается к `/news.php`, `/weather.php` и `/mailer/mailer.php`, а `src/setupProxy.js` проксирует эти запросы в локальный PHP-сервер.
