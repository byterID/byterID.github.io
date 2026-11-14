# Тексты сайта

Источник для `messages/en.json`, `ru.json`, `hy.json`. Английский основной. Армянский ЧЕРНОВИК: до вычитки носителем языка не показывать в переключателе.

## Мета

| | EN | RU | HY |
|---|---|---|---|
| title | Artemii Gladkov · DevOps & Backend Engineer | Артемий Гладков · DevOps и Backend-инженер | Արտեմի Գլադկով · DevOps և Backend ինժեներ |
| description | Junior DevOps and backend engineer in Yerevan. CI/CD, monitoring, Ansible, Docker, PHP/Laravel. | Junior DevOps и backend-инженер в Ереване. CI/CD, мониторинг, Ansible, Docker, PHP/Laravel. | Junior DevOps և backend ինժեներ Երևանում։ CI/CD, մոնիթորինգ, Ansible, Docker, PHP/Laravel։ |

## Меню

| EN | RU | HY |
|---|---|---|
| Home | Главная | Գլխավոր |
| Work | Работы | Աշխատանքներ |
| Contact | Контакты | Կապ |

## Герой

| | EN | RU | HY |
|---|---|---|---|
| Надпись | Based in Yerevan | Ереван, Армения | Երևան, Հայաստան |
| Заголовок | **DevOps** & Backend Engineer | **DevOps** и Backend-инженер | **DevOps** և Backend ինժեներ |
| О себе | Hi, I'm Artemii. I set up CI/CD, monitoring and server automation, and spent two years building PHP backend for a system with 500+ users. | Привет, я Артемий. Настраиваю CI/CD, мониторинг и автоматизацию серверов. Два года писал backend на PHP для системы с 500+ пользователями. | Բարև, ես Արտեմին եմ։ Կարգավորում եմ CI/CD, մոնիթորինգ և սերվերների ավտոմատացում։ Երկու տարի գրել եմ PHP backend 500+ օգտատեր ունեցող համակարգի համար։ |
| Кнопка 1 | See my work | Мои работы | Իմ աշխատանքները |
| Кнопка 2 | Download CV | Скачать резюме | Ներբեռնել CV |

Жирным отмечено слово в акцентном цвете.

## Технологии

| | EN | RU | HY |
|---|---|---|---|
| Заголовок | Current technologies | Технологии | Տեխնոլոգիաներ |
| Вступление | What I use for infrastructure, deployment and backend work. AWS is what I'm studying now. | С чем я работаю в инфраструктуре, деплое и backend. AWS изучаю сейчас. | Ինչով եմ աշխատում ենթակառուցվածքի, տեղակայման և backend-ի վրա։ AWS-ը հիմա ուսումնասիրում եմ։ |

| Карточка | EN | RU | HY |
|---|---|---|---|
| Linux | Servers and VMs | Серверы и ВМ | Սերվերներ և VM-ներ |
| Bash | Scripts, ShellCheck | Скрипты, ShellCheck | Սկրիպտներ, ShellCheck |
| Docker | Compose stacks | Стеки на Compose | Compose ստեկեր |
| Nginx | Web server, proxy | Веб-сервер, прокси | Վեբ սերվեր, պրոքսի |
| Git | Version control | Контроль версий | Տարբերակների կառավարում |
| GitHub Actions | CI/CD pipelines | Пайплайны CI/CD | CI/CD փայփլայններ |
| Ansible | Server provisioning | Настройка серверов | Սերվերների կարգավորում |
| Prometheus | Metrics and alerts | Метрики и алерты | Մետրիկաներ և ազդանշաններ |
| Grafana | Dashboards | Дашборды | Դաշբորդներ |
| AWS | Learning, SAA-C03 goal | Изучаю, цель SAA-C03 | Սովորում եմ, նպատակը՝ SAA-C03 |
| PostgreSQL | SQL, query tuning | SQL, оптимизация запросов | SQL, հարցումների օպտիմալացում |
| PHP / Laravel | Backend, 2 years | Backend, 2 года | Backend, 2 տարի |

## Work

| | EN | RU | HY |
|---|---|---|---|
| Заголовок | Silver Udochki: production infrastructure | Silver Udochki: продакшен-инфраструктура | Silver Udochki՝ production ենթակառուցվածք |
| Вступление | A Laravel web app running on my own VPS. The project is about everything around the code: how it is built, deployed and monitored. | Веб-приложение на Laravel, которое работает на моём VPS. Проект про всё, что вокруг кода: как он собирается, разворачивается и мониторится. | Laravel վեբ հավելված, որն աշխատում է իմ VPS-ի վրա։ Նախագիծը կոդի շուրջ ամեն ինչի մասին է՝ ինչպես է այն հավաքվում, տեղակայվում և մոնիթորինգ արվում։ |
| Ссылка 1 | All projects | Все проекты | Բոլոր նախագծերը |
| Ссылка 2 | Live site | Живой сайт | Կայքը |
| Ссылка в карточке | View in repo | Смотреть в репозитории | Դիտել ռեպոզիտորիայում |

### Карточка 1: Containerized stack

- RU: Контейнерный стек. HY: Կոնտեյներային ստեկ.
- EN: Nginx, PHP-FPM, PostgreSQL 17 and Kafka with background workers in one Docker Compose setup.
- RU: Nginx, PHP-FPM, PostgreSQL 17 и Kafka с фоновыми воркерами в одном Docker Compose.
- HY: Nginx, PHP-FPM, PostgreSQL 17 և Kafka՝ ֆոնային worker-ներով, մեկ Docker Compose կոնֆիգուրացիայում։
- Теги: Docker Compose, Nginx, PHP-FPM, PostgreSQL 17, Kafka (KRaft)

### Карточка 2: CI/CD pipeline

- RU: CI/CD-пайплайн. HY: CI/CD փայփլայն.
- EN: Every push runs code style checks, static analysis, tests on PostgreSQL, ShellCheck and a secrets scan. Main deploys to the VPS over SSH.
- RU: Каждый push проходит проверку стиля, статический анализ, тесты на PostgreSQL, ShellCheck и поиск секретов. Ветка main деплоится на VPS по SSH.
- HY: Յուրաքանչյուր push անցնում է կոդի ոճի ստուգում, ստատիկ վերլուծություն, թեստեր PostgreSQL-ի վրա, ShellCheck և գաղտնիքների որոնում։ main ճյուղը տեղակայվում է VPS SSH-ով։
- Теги: GitHub Actions, Pint, PHPStan, PHPUnit, ShellCheck, Gitleaks

### Карточка 3: Server provisioning

- RU: Настройка сервера. HY: Սերվերի կարգավորում.
- EN: The server is set up with Ansible. TLS comes from Certbot, and the monitoring host is reached over a private Tailscale network.
- RU: Сервер настраивается через Ansible. TLS выдаёт Certbot, до сервера мониторинга идёт приватная сеть Tailscale.
- HY: Սերվերը կարգավորվում է Ansible-ով։ TLS-ը տրամադրում է Certbot-ը, իսկ մոնիթորինգի սերվերին միանում է Tailscale մասնավոր ցանցով։
- Теги: Ansible, Certbot, Tailscale, Linux

### Карточка 4: Monitoring & alerts

- RU: Мониторинг и алерты. HY: Մոնիթորինգ և ազդանշաններ.
- EN: Prometheus collects host, container, database and Nginx metrics. Grafana shows the dashboards, and alerts go to Telegram.
- RU: Prometheus собирает метрики сервера, контейнеров, базы и Nginx. В Grafana дашборды, алерты приходят в Telegram.
- HY: Prometheus-ը հավաքում է սերվերի, կոնտեյներների, տվյալների բազայի և Nginx-ի մետրիկաները։ Grafana-ում դաշբորդներն են, ազդանշանները գալիս են Telegram։
- Теги: Prometheus, Grafana, node-exporter, cAdvisor, postgres-exporter, nginx-exporter

## Freelance

| | EN | RU | HY |
|---|---|---|---|
| Заголовок | Freelance | Беру заказы | Պատվերներ |
| Строка | I also take small projects for businesses in Yerevan and remotely. | Беру небольшие проекты для бизнеса в Ереване и удалённо. | Վերցնում եմ նաև փոքր նախագծեր Երևանի բիզնեսների համար և հեռավար։ |
| Услуга 1 | Websites and landing pages | Сайты и лендинги | Կայքեր և լենդինգներ |
| Услуга 2 | Telegram bots | Telegram-боты | Telegram բոտեր |
| Услуга 3 | Automation and admin panels | Автоматизация и админ-панели | Ավտոմատացում և ադմին վահանակներ |
| Услуга 4 | Server setup and deployment | Настройка сервера и деплой | Սերվերի կարգավորում և տեղակայում |
| Кнопка | Discuss in Telegram | Обсудить в Telegram | Քննարկել Telegram-ով |

## Contact

| | EN | RU | HY |
|---|---|---|---|
| Заголовок | Hiring a junior DevOps or backend engineer? Write to me. | Ищете junior DevOps или backend-инженера? Напишите мне. | Փնտրո՞ւմ եք junior DevOps կամ backend ինժեներ։ Գրեք ինձ։ |
| Кнопка 1 | Telegram | Telegram | Telegram |
| Кнопка 2 | Email | Email | Email |

Ссылки: Telegram https://t.me/PandemWanted, email mailto:lfeanite@gmail.com.

## Подвал

| | EN | RU | HY |
|---|---|---|---|
| Имя | Artemii Gladkov | Артемий Гладков | Արտեմի Գլադկով |
| Копирайт | © 2026 | © 2026 | © 2026 |
| Колонки | Navigate · Project · Socials | Навигация · Проект · Соцсети | Նավիգացիա · Նախագիծ · Սոցցանցեր |
| Ссылки проекта | Repository · Live site | Репозиторий · Живой сайт | Ռեպոզիտորիա · Կայքը |

Соцсети: GitHub https://github.com/byterID, LinkedIn https://www.linkedin.com/in/artemii-gladkov-dev/, Telegram https://t.me/PandemWanted.
