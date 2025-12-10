# Лабораторна робота № 4: Використання JavaScript для динамічного оновлення web-сторінки + Git (Командна робота)

## Учасники

Для виконання лабораторної роботи було здійснено розподіл на наступних учасників:

| Учасник | Ім'я та прізвище |
| :--- | :--- |
| 1 | Чернега Сергій |
| 2 | Гевко Андрій |
| 3 | Ремінський Максим |

## Початкова конфігурація

### Усім учасникам:

| Завдання | Команда Git |
| :--- | :--- |
| Налаштувати інформацію користувача | `git config --global user.name "Ваше Ім'я"` <br> `git config --global user.email "your.email@example.com"` |

### Тільки для Учасника 1 (ініціатор репозиторія):

| Завдання | Команда Git |
| :--- | :--- |
| Створити репозиторій у папці «Прізвище студента» | `git init` |
| Створити віддалений репозиторій (GitHub) та підключити його | `git remote add origin git@github.com:username/repository-name.git` |

### Для Учасників 2 та 3:

| Завдання | Команда Git |
| :--- | :--- |
| Клонувати репозиторій | `git clone git@github.com:username/countries-api-lab4.git` |

---

## УЧАСНИК 1

### Завдання для першого учасника:

| Завдання | Команда Git |
| :--- | :--- |
| Створити гілку `feature/html-structure` | `git checkout -b feature/html-structure` |
| Створити файл `index.html` з базовою структурою (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`) | - |
| Додати контейнер для випадаючого списку країн (`<select id="countrySelect">` з placeholder опцією) | - |
| Додати контейнер для відображення інформації про країну (`<div id="countryInfo">`) | - |
| Підключити майбутній JavaScript файл (`<script src="script.js"></script>`) | - |
| Зробити коміт змін | `git commit -m "Створено HTML-структуру для відображення країн"` |
| Відправити гілку у віддалений репозиторій | `git push origin feature/html-structure` |

---

## УЧАСНИК 2

### Завдання для другого учасника:

| Завдання | Команда Git |
| :--- | :--- |
| Оновити main перед роботою | `git pull origin main` |
| Створити гілку `feature/fetch-countries` | `git checkout -b feature/fetch-countries` |
| Створити файл `script.js` | - |
| Ознайомитися з REST Countries API ([https://restcountries.com](https://restcountries.com)) | - |
| Реалізувати функцію отримання списку країн: `fetch('https://restcountries.com/v3.1/all')` | - |
| Обробити отримані дані та заповнити випадаючий список (використати `.then()` або `async/await`) | - |
| Відсортувати країни за назвою (за бажанням: `.sort()` за `name.common`) | - |
| Додати обробку помилок (`try/catch` або `.catch()`) | - |
| Зробити коміт змін | `git commit -m "Додано функціонал отримання та відображення списку країн"` |
| Відправити гілку у віддалений репозиторій | `git push origin feature/fetch-countries` |

---

## УЧАСНИК 3

### Завдання для третього учасника:

| Завдання | Команда Git |
| :--- | :--- |
| Оновити main перед роботою | `git pull origin main` |
| Створити гілку `feature/country-details` | `git checkout -b feature/country-details` |
| Додати обробник події для випадаючого списку (`addEventListener('change')` на select) | - |
| Реалізувати функцію отримання деталей країни: `fetch('https://restcountries.com/v3.1/name/{countryName}')` | - |
| Відобразити обов'язкові параметри (назва, столиця, населення, прапор) | - |
| Додати 3 додаткові параметри на вибір (наприклад: регіон, мови, валюта, площа, пояс) | - |
| Стилізувати відображення інформації | - |
| Додати обробку помилок та завантаження | - |
| Зробити коміт змін | `git commit -m "Додано функціонал відображення детальної інформації про країну"` |
| Відправити гілку у віддалений репозиторій | `git push origin feature/country-details` |

---

## Технічні вимоги

### API endpoints:
- Отримання всіх країн: `https://restcountries.com/v3.1/all`
- Отримання конкретної країни: `https://restcountries.com/v3.1/name/{countryName}`

### Обов'язкові параметри для відображення:
1. Назва країни (`name.common` або `name.official`)
2. Столиця (`capital[0]`)
3. Населення (`population`)
4. Прапор (`flags.png` або `flags.svg`)

### Додаткові параметри (оберіть 3):
- Регіон (`region`)
- Субрегіон (`subregion`)
- Мови (`languages`)
- Валюта (`currencies`)
- Площа (`area`)
- Часовий пояс (`timezones`)
- Кордони з іншими країнами (`borders`)

### Асинхронність:
- Використати `fetch()` API
- Обробити Promise за допомогою `.then()/.catch()` або `async/await`
- Додати обробку помилок мережі

---

## Контрольні питання

1. **Типи даних в JavaScript**
   - Примітивні: string, number, boolean, null, undefined, symbol, bigint
   - Об'єктні: object, array, function

2. **Оператори**
   - Арифметичні: `+`, `-`, `*`, `/`, `%`, `**`
   - Порівняння: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
   - Логічні: `&&`, `||`, `!`
   - Присвоєння: `=`, `+=`, `-=`, `*=`, `/=`

3. **Робота з DOM**
   - `document.getElementById()`
   - `document.querySelector()`
   - `element.innerHTML`, `element.textContent`
   - `element.addEventListener()`

4. **Обробка подій в JavaScript**
   - `addEventListener(event, handler)`
   - Події: `click`, `change`, `submit`, `load`
   - Event object та його властивості

5. **Способи реалізації асинхронності в JavaScript**
   - Callbacks
   - Promises (`.then()`, `.catch()`, `.finally()`)
   - Async/Await
   - `fetch()` API

---

## Примітки:

1. Перед роботою кожен учасник виконує: `git pull origin main`
2. Після завершення — створює **Pull Request у main**
3. Коміти пишуться **українською**, коротко і по суті
4. Обов'язкові вимоги:
   - Валідна структура HTML5
   - Асинхронна робота з API
   - Обробка помилок
   - Коментарі в коді
5. Рекомендації:
   - Використати `async/await` для читабельності
   - Додати CSS для покращення вигляду
   - Реалізувати loading indicator
   - Перевірити роботу в різних браузерах

## Приклад структури коду

```javascript
// Приклад функції отримання країн
async function fetchCountries() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    // Обробка даних...
  } catch (error) {
    console.error('Помилка:', error);
  }
}

// Приклад обробника події
document.getElementById('countrySelect').addEventListener('change', async (e) => {
  const countryName = e.target.value;
  // Отримання та відображення інформації...
});
```
