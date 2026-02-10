# AURA — Premium Interior Design Landing Page

Live Demo: https://landing-page-aura-fvgk.vercel.app/

<img width="1896" height="858" alt="aura" src="https://github.com/user-attachments/assets/2eec89a0-904a-48e5-bd5e-813f28ad1836" />

Одностраничный сайт студии премиального интерьерного дизайна **AURA**.  
Реализован как чистый HTML/CSS/JavaScript без фреймворков.

## Демо
Открыть `index.html` в браузере.

## Стек
- HTML5 (семантическая разметка)
- CSS3 (CSS Variables, Grid, Flexbox, Media Queries)
- Vanilla JavaScript (ES6)
- Google Fonts (Cormorant Garamond, Manrope)

## Функциональность
- Фиксированный хедер с изменением состояния при скролле
- Адаптивное мобильное меню (ARIA-совместимое)
- Плавный скролл по якорям
- Reveal-анимации через Intersection Observer
- Параллакс-фон в Hero-секции
- Интерактивная форма с имитацией отправки
- Полная адаптивность (desktop / tablet / mobile)

## Структура проекта
```

/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md

```

## Архитектура
- JS разбит по ответственностям: навигация, скролл, анимации, форма
- Без глобальных утечек
- CSS через дизайн-токены (`:root`)
- Компонентный подход на уровне классов
- Анимации без сторонних библиотек

## Доступность
- `aria-label`, `aria-expanded`, `aria-controls`
- Клавиатурная навигация
- Контрастная типографика

## Производительность
- Без зависимостей
- Lazy-поведение через Intersection Observer
- Минимум JS в основном потоке

## Назначение
- Портфолио
- Коммерческий лендинг
- Шаблон для дизайн-студий / агентств

## Лицензия
Свободное использование для личных и коммерческих проектов.

