# Как я выстраивал архитектуру и разделял ответственность

### 1. Интерактивный слайдер проектов

Сделал секцию проектов с переиспользуемыми React-компонентами и вынесенной типизированной структурой данных.

- **TypeScript** — описал структуру проектов через интерфейсы `ISliderItem`, `ITag` и `ITranslations`.
- **Разделение данных и UI** — данные проектов вынесены в отдельный файл, поэтому добавление нового проекта не требует изменения компонентов.
- **Локализация** — названия, описания и другие текстовые данные работают через собственный `LanguageContext`.
- **Адаптивная компоновка** — на desktop текст и превью проектов чередуются по сторонам, а текстовая колонка использует `sticky`-позиционирование.
- **Два режима просмотра** — для каждого проекта можно переключаться между изображением и подробной информацией.
- **Bootstrap Carousel** — переключение между режимами реализовано через программное управление экземпляром `Carousel`.
- **Анимация при скролле** — заголовки и описания появляются с эффектом посимвольного набора через собственный хук `useScrollTypewriter`.
- **Live + GitHub** — каждый проект содержит ссылку на рабочую версию и, если доступен, исходный код.
- **Переиспользуемые компоненты** — секция разделена на `ProjectSlider`, `ProjectItem`, `SliderBlock` и `SliderCarousel`.

**Основные файлы:**

- [`sliderData.ts`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/widgets/sliderBlock/sliderData/sliderData.ts) — данные проектов и TypeScript-интерфейсы
- [`ProjectSlider.tsx`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/widgets/projectSlider/projectSlider.tsx) — основной компонент списка проектов
- [`SliderBlock.tsx`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/widgets/sliderBlock/SliderBlock.tsx) — переключение режимов просмотра
- [`SliderCarousel.tsx`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/widgets/sliderCarousel/SliderCarousel.tsx) — управление Bootstrap Carousel
- [`useScrollTypewriter.ts`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/shared/hooks/useScrollTypewriter.ts) — анимация текста при скролле


### 2. Двуязычный интерфейс (en / ru)

Реализовал переключение интерфейса между **русским и английским языками** через собственный `LanguageContext`.

- **React Context API** — состояние текущего языка доступно компонентам приложения через `useLanguage`.
- **Сохранение выбора** — выбранный язык сохраняется в `localStorage` и восстанавливается после перезагрузки страницы.
- **Централизованные переводы** — все текстовые значения интерфейса хранятся в едином объекте `translations`.
- **Типизация данных** — структура переводов используется совместно с TypeScript-типом `ITranslations`.
- **Переиспользуемый переключатель** — отдельный `LanguageSwitcher` отвечает только за смену языка и отображение активного состояния.
- **Без дублирования компонентов** — один и тот же UI используется для обоих языков, меняются только данные.

**Основные файлы:**

- [`languageContext.js`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/shared/i18n/languageContext.js) — контекст, состояние языка и сохранение в `localStorage`
- [`languageSwitcher.js`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/shared/i18n/languageSwitcher.js) — переключатель EN / RU
- [`translations.js`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/shared/i18n/translations.js) — словарь переводов интерфейса
- [`sliderData.ts`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/widgets/sliderBlock/sliderData/sliderData.ts) — использование переводов для данных проектов

### 3. Интеграция внешних API: новости и погода

Реализовал два виджета, работающих с внешними API: **технологические новости** через NewsAPI и **погода** через OpenWeather API.

- **REST API** — получение данных реализовано через отдельные API-функции `fetchTechNews` и `fetchWeather`.
- **Собственные React-хуки** — бизнес-логика работы с API вынесена в `useNews` и `useWeather`, а UI-компоненты отвечают только за отображение данных.
- **Пагинация новостей** — реализована загрузка новостей порциями по 4 записи с кнопкой `Load More`.
- **Определение местоположения** — погодный виджет использует `Geolocation API` браузера и получает погоду по координатам пользователя.
- **Fallback по городу** — если пользователь не предоставил доступ к геолокации или она недоступна, используется город по умолчанию.
- **Серверный proxy для API** — запросы к внешним API проходят через PHP-обработчики, поэтому API-ключи не находятся в клиентском JavaScript.
- **Кэширование на сервере** — ответы NewsAPI и OpenWeather сохраняются в JSON-файлы с временем жизни 10 минут.
- **Fallback на старый кэш** — если внешний API временно недоступен, сервер пытается вернуть ранее сохранённые данные.
- **Обработка состояний** — для виджетов предусмотрены состояния загрузки, ошибок и отсутствия данных.
- **Fallback для изображений** — если изображение новости отсутствует или не загрузилось, используется локальное изображение-заглушка.
- **TypeScript** — данные статей описаны интерфейсом `IArticle`.
- **Динамическое отображение погоды** — иконка погодных условий определяется на основе weather.weather[0].id и дневного/ночного кода OpenWeather.

**Основные файлы:**

- [`newsApi.js`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/shared/api/newsApi.js) — клиентский запрос новостей
- [`weatherApi.js`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/shared/api/weatherApi.js) — клиентский запрос погоды
- [`useNews.js`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/shared/hooks/useNews.js) — React-хук загрузки и пагинации новостей
- [`useWeather.js`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/shared/hooks/useWeather.js) — React-хук получения погоды и геолокации
- [`News.tsx`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/widgets/news/news.tsx) — отображение новостей
- [`WeatherWidget.js`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/widgets/weather/WeatherWidget.js) — погодный виджет
- [`news.php`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/news.php) — серверный proxy и кэширование NewsAPI
- [`weather.php`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/weather.php) — серверный proxy и кэширование OpenWeather API

### 4. Архитектура приложения и маршрутизация

Организовал приложение через React Router и разделил общую структуру страниц, секции и служебную логику.

- **React Router** — маршрутизация между основной страницей, страницей политики конфиденциальности и кастомной страницей `404`.
- **Layout-компоненты** — общий `MainLayout` содержит `Footer` и кнопку возврата наверх, а `PolicyLayout` позволяет отделить служебные страницы от основной структуры.
- **Outlet** — дочерние маршруты рендерятся внутри соответствующего layout, без дублирования общей разметки.
- **Централизованное управление скроллом** — собственный `useAppController` управляет ссылками на секции и действиями навигации между ними.
- **Плавный скролл** — `lenisRef` передаётся в компоненты, которым требуется управление плавной прокруткой.
- **Разделение ответственности** — маршрутизация, layout, секции страницы и UI-компоненты разделены по отдельным модулям.
- **TypeScript** — пропсы `MainLayout` типизированы через `MainLayoutProps`, включая `RefObject` для DOM-элементов.
- **Аналитика** — подключён отдельный хук `useYandexMetrika`, поэтому аналитика не смешивается с UI-логикой приложения.

**Основной файл:**

- [`App.tsx`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/app/App.tsx) — маршрутизация, layout и сборка основных секций приложения

**Связанные файлы:**

- [`useAppController.ts`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/app/hooks/useAppController.ts) — управление ссылками на секции и навигацией
- [`useYandexMetrika.ts`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/shared/hooks/useYandexMetrika.ts) — интеграция Яндекс Метрики
- [`Page404.js`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/pages/404/Page404.js) — страница 404
- [`policy.js`](https://github.com/anarkilimitz/Portfolio-react-2026/blob/main/src/pages/policy/policy.js) — страница политики конфиденциальности

## 5. Локальная разработка

- `npm start` запускает React dev server и PHP-бэкенд на `http://127.0.0.1:8000`.
- Скрипт сам пробует найти PHP в `PATH`, а затем в типовых установках вроде OSPanel и MAMP.
- Если хочешь принудительно указать конкретный PHP, в PowerShell задай `PHP_BIN`, например `$env:PHP_BIN='C:\OSPanel\modules\PHP-7.4\PHP\php.exe'; npm start`.
- Фронт обращается к `/news.php`, `/weather.php` и `/mailer/mailer.php`, а `src/setupProxy.js` проксирует эти запросы в локальный PHP-сервер.
