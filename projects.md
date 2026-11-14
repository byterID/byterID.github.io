# Проекты

## Silver Udochki: продакшен-инфраструктура веб-приложения на Laravel

- Репозиторий: https://github.com/byterID/Silver-Udochki
- Живой сайт: https://silver-udochki.ru
- Приложение: Laravel 13, PHP 8.4, PostgreSQL 17, spatie/laravel-permission. Во многом сгенерировано и доработано с помощью нейросети. Главное в проекте не код приложения, а то, как оно собирается, разворачивается и наблюдается.

Что сделано (по резюме):

- Контейнеры: стек в Docker Compose. Nginx, PHP-FPM, PostgreSQL 17, Apache Kafka (режим KRaft) с фоновыми воркерами.
- CI/CD в GitHub Actions: проверка стиля кода (Pint), статический анализ (PHPStan), тесты на PostgreSQL (PHPUnit), ShellCheck, сборка Docker-образа, поиск секретов (Gitleaks). Деплой на VPS по SSH из ветки main.
- Подготовка сервера: Ansible, TLS через Certbot, приватная сеть до сервера мониторинга через Tailscale.
- Мониторинг: Prometheus и Grafana, экспортеры node-exporter, cAdvisor, postgres-exporter, nginx-exporter. Правила алертов с уведомлениями в Telegram.

План: перенести проект на AWS в рамках подготовки к SAA.

## Скриншоты

Владелец снимет сам: пайплайн GitHub Actions, дашборд Grafana, вывод Ansible и другие по списку из плана. Сохранять в WebP, ширина около 1600 px.
