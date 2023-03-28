# Color-Code
### Интересная логическая игра из моего детства.
### 🔗 [Color Code](https://colorcode.little-wing.ru)<br><br><br>

##  📖 О Проекте<br>
📱 &nbsp; Приложение концептуально задумано и реализовано для использования с мобильного телефона. <br>
Проект написан на React и Redux, использован шаблон create-react-app;

##  ⌛️ Предыстория<br>
&nbsp;&nbsp;Color Code&nbsp;&mdash; это игра, в&nbsp;которую я&nbsp;играл
        в&nbsp;детстве. Пластмассовое игровое поле было разделено на&nbsp;зоны,
        где с&nbsp;помощью маленьких цветных фишек один игрок загадывал код,
        а&nbsp;второй пытался его угадать.<br>
&nbsp;&nbsp;Проблема была у&nbsp;игрока, который загадывал код&nbsp;&mdash; ему было
        просто скучно, т.к. его ролью было придумать комбинацию и&nbsp;ждать
        варианты ответов второго игрока.<br>
&nbsp;&nbsp;Я&nbsp;написал Color Code, т.к. очень любил эту игру. Сейчас код
        загадывается программой и&nbsp;игрок не&nbsp;зависит
        ни&nbsp;от&nbsp;кого.
        
##  🍿 Описание игры<br>
&nbsp;&nbsp; Итак, на&nbsp;старте есть скрытый от&nbsp;нас код, являющийся
        комбинацией цветов. Наша задача, используя логику, за&nbsp;определённое
        число попыток разгадать эту последовательность.<br>
&nbsp;&nbsp; После каждого хода мы&nbsp;получаем определённую информацию о&nbsp;том,
        насколько наш вариант соответствует &laquo;Секретному Коду&raquo;.<br>
Ответ строится из&nbsp;трёх иконок:<br>
        ![yes](https://user-images.githubusercontent.com/77357671/227785484-34ce32a4-3a9b-47c1-bfa5-fe6d875c996b.svg)
        &mdash;&nbsp;означает, что положение одного из&nbsp;цветов в&nbsp;нашем
        варианте полностью совпадает с&nbsp;таким&nbsp;же цветом
        и&nbsp;положением его в&nbsp;&laquo;Секретном Коде&raquo;;<br>
        ![almost](https://user-images.githubusercontent.com/77357671/227785597-720929ce-55ab-4888-b336-7872a4866ee4.svg)
         &mdash;&nbsp;означает, что один из&nbsp;цветов в&nbsp;нашем варианте
        есть и&nbsp;в&nbsp; &laquo;Секретном Коде&raquo;,
        но&nbsp;их&nbsp;положение не&nbsp;совпадает;<br>
        ![empty](https://user-images.githubusercontent.com/77357671/227785691-b64ef44a-5b4e-4a04-a985-befb10ff9443.svg)
        &mdash;&nbsp;говорит, что какой-то&nbsp;из&nbsp;цветов в&nbsp;нашем
        варианте отсутствует в&nbsp;&laquo;Секретном Коде&raquo;;<br><br>
  &nbsp;&nbsp;Цвета в&nbsp;&laquo;Секретном Коде&raquo; могут повторяться, например:
        красный синий красный красный.<br>
  &nbsp;&nbsp;Иконки ответа всегда распологаются в&nbsp;случайном порядке, т.е.
        положение иконки в&nbsp;ответе скорее всего не&nbsp;совпадает
        с&nbsp;положением цвета в&nbsp;&laquo;Секретном Коде&raquo; или цвета
        в&nbsp;нашем варианте.<br><br>
  &nbsp;&nbsp;Таким образом, делая ход и&nbsp;получая информацию мы&nbsp;решаем задачу
        и&nbsp;получаем &laquo;Секретный код&raquo;.

---
## 📸 Скриншоты<br>

<div style="display: flex;">
  <img style="width: 230px" src="https://user-images.githubusercontent.com/77357671/227786045-60ed35ca-cf9e-4cc1-95da-5f7540b39766.jpg"/>
  <img style="width: 230px" src="https://user-images.githubusercontent.com/77357671/227786155-8940c0d8-76fb-49ff-8983-2b09868536ed.jpg"/>
  <img style="width: 230px" src="https://user-images.githubusercontent.com/77357671/227786219-956ae553-536f-4cf6-bd17-f1ce76ad3bf0.jpg"/>
  <img style="width: 230px" src="https://user-images.githubusercontent.com/77357671/227786245-8eaa56bf-477b-41d7-a6b4-770663fc5ad3.jpg"/>
  <img style="width: 230px" src="https://user-images.githubusercontent.com/77357671/227786348-552b8f8c-90a8-4ceb-b3d0-14e2d5a505a3.jpg"/>
  <img style="width: 230px" src="https://user-images.githubusercontent.com/77357671/227786381-10750d83-e31d-4764-bc97-f28d79ffb002.jpg"/>
  <img style="width: 230px" src="https://user-images.githubusercontent.com/77357671/227786433-89d5f8e2-d920-43b8-a81c-381100df6429.jpg"/>
  <img style="width: 230px" src="https://user-images.githubusercontent.com/77357671/227786464-072f8fd1-26a0-4427-840a-8a537d2390b7.jpg"/>
  <img style="width: 230px" src="https://user-images.githubusercontent.com/77357671/227786494-c7241304-15a1-4fa2-9236-fda28cf82d6e.jpg"/>
  <img style="width: 230px" src="https://user-images.githubusercontent.com/77357671/227786540-acaad42a-6cd1-4595-bd39-ee00368ac22e.jpg"/>
  <img style="width: 230px" src="https://user-images.githubusercontent.com/77357671/227786594-1ca38a0f-0a53-4046-ba09-e81f3b2b91f9.jpg"/>
</div>
        
---
## 🛠 Стек, технологии, библиотеки<br>
<div>
  <a href="https://www.javascript.com/" >
    <img width="50" height="50" title="java-script" src="https://user-images.githubusercontent.com/77357671/210012086-6591b665-5700-4d93-ba8d-90f91bec4bd6.svg"/>
  </a>&nbsp;&nbsp;
  <a href="https://ru.reactjs.org/">
    <img width="50" height="50" title="react" src="https://user-images.githubusercontent.com/77357671/227791294-e6148c17-fff1-4b66-aedd-b4b76d77e62a.svg"/>
  </a>&nbsp;&nbsp;
  <a href="https://create-react-app.dev/">
    <img width="50" height="50" title="create-react-app" src="https://user-images.githubusercontent.com/77357671/227791473-81c85026-dc75-4a98-8d0d-d19a2b5ecb76.svg"/>
  </a>&nbsp;&nbsp;
  <a href="https://redux.js.org/">
    <img width="50" height="50" title="redux" src="https://user-images.githubusercontent.com/77357671/228323314-8fe17dfe-4b70-4367-8887-fdf3a65bddb1.svg"/>
  </a>&nbsp;&nbsp;
  <a href="https://sass-scss.ru/">
    <img width="50" height="50" title="sass" src="https://user-images.githubusercontent.com/77357671/227791678-949b584b-dc12-457c-85d1-ed110e5a1faa.svg"/>
  </a>
</div>

☘️&nbsp; [classnames](https://www.npmjs.com/package/classnames)<br>






















        
        
