# :calendar: calendar
## :page_with_curl: Краткое описание:
Это интерактивная SPA страница - календарь, в который пользователи могут добавлять или удалять события.
Проект реализован в рамках [тестового задания](https://interview.pages.iqdev.digital/junior-frontend-developer/) для компании [IQ Dev](https://iqdev.digital/) в соответствии с [макетом Figma ](https://www.figma.com/file/N8ahYKmWH4Hyj39MoIjuyx/Frontend-Calendar-test-task?node-id=110%3A4375&t=fAbnnZ2YKBMbYNa8-0).  

## :ballot_box_with_check: Функциональные возможности проекта:

:ballot_box_with_check: Переход к календарю со стартовой страницы реализован по клику на кнопку "CALENDAR";  
:ballot_box_with_check: При переходе отображается текущий месяц с датами;  
:ballot_box_with_check: Форматирование дат, а так же приведение их к ru локализации реализуется при помощи библиотеки date-fns;  
:ballot_box_with_check: Возможность листать календарь вперед/назад (просмотр следующих/предыдущих месяцев)  
:ballot_box_with_check: Возврат к текущему месяцу, реализуется, путем нажатия на кнопку "Сегодня";  
:ballot_box_with_check: Можно добавить событие на текущий день, путем нажатия на кнопку "Добавить" (в поле вводим название события);  
:ballot_box_with_check: Событие можно внести только одно;  
:ballot_box_with_check: Кликом по ячейке календаря открывается модальное окно, в поля которого можно ввести более подробное описание события (дату необходимо вводить в формате, указанном в подсказке поля ввода);  
:ballot_box_with_check: Ячейка, кликом по которой вызвали модальное окно, меняет цвет границ;  
:ballot_box_with_check: Модальное окно можно закрыть кликом по Esc, а так же нажатием на иконку крестика pop-up;  
:ballot_box_with_check: Удалить событие можно через кнопку "Удалить" в модальном окне (необходимо ввести дату по формату в подсказке);  
:ballot_box_with_check: Ячейки, в которых есть события меняют фон;  
:ballot_box_with_check: В строке "поиск" можно вводить текст (ключевое слово). Если есть событие, в названии которого встречаются данные с "поиск", то они будут отображаться в всплывающем списке (можно передвигаться по ним вниз кнопкой "Tab");  
:ballot_box_with_check: События сохраняются в LocalStorage;  

 ### :computer: Стек технологий:

JSX <img src="https://avatars.mds.yandex.net/i?id=3006e1b3daae3632480af65648c5f37d09cd1a1a-4356414-images-thumbs&n=13&exp=1" alt="JSX" width="20" height="20"/>  
CamelCase <img src="https://avatars.mds.yandex.net/i?id=d4d7bff7b763bc2d359c02ccbce124cd-5253062-images-thumbs&n=13&exp=1" alt="CamelCase" width="20" height="20"/>  
JavaScript <img src="https://img.icons8.com/color/38/000000/javascript--v1.png" alt="JS" width="20" height="20"/>  
React <img src="https://img.icons8.com/ultraviolet/38/000000/react--v1.png" alt="React" width="20" height="20"/>  
ReactHooks <img src="https://avatars.mds.yandex.net/i?id=3eb973eaaf9433d0d486f636964c20d1e113166b-5108022-images-thumbs&n=13&exp=1" alt="ReactHooks" width="20" height="20"/>  
CSS3 <img src="https://img.icons8.com/stickers/2x/css3.png" alt="CSS3" width="20" height="20"/>  
Flexbox <img src="https://avatars.mds.yandex.net/i?id=e1901bd3569a85ebdc91cec3b392a061-5234049-images-thumbs&n=13&exp=1" alt="Flexbox" width="20" height="20"/>  
Grid Layout <img src="https://avatars.mds.yandex.net/i?id=a279ee76ee07008dde73bc99de8b09a030da93f0-4162430-images-thumbs&n=13&exp=1;" width="20" height="20"/>  
BEM методология <img src="https://avatars.mds.yandex.net/i?id=2a0000017a06cd52ad8b3111bf59b6321726-4078058-images-thumbs&n=13&exp=1" width="20" height="20" alt="BEM"/>  
GitHub <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"  alt="GitHub" width="20" height="20"/>  
Figma <img src="https://img.icons8.com/color/32/000000/figma--v1.png" alt="Figma" width="20" height="20"/>  
date-fns :clock2: библиотека для управления датами :date:  


### :rocket: Установка и запуск проекта:

```
# клонирование репозитория
git clone https://github.com/NatalyMaxi/calendar.git

# установка зависимостей
$ npm install

# Запуск сервера
$ npm run start

```
#### :page_with_curl: Планы по доработке проекта:  
* Адаптировать проект под разные разрешения экрана, а так же для мобильной версии;  
* Реализовать удаление всех событий на текущий месяц (по кнопке "Обновить");  
* Добавить функционал быстрого поиск любой даты;  
* Добавить возможность переместиться к выбранному событию из поле поиска;  
* Добавить валидацию даты  
* Реализовать возможность быстрого добавления события на любую дату  
* Добавить управление состоянием данных и пользовательским интерфейсом при помощи библиотеки Redux

 :link: Ссылки
###### [Ссылка на репозиторий](https://github.com/NatalyMaxi/calendar.git)  
###### [Ссылка на проект Github Pages](https://natalymaxi.github.io/calendar/)  