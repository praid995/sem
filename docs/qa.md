# Вопросы по проекту: Веб-сайт Семёна Суродина

Дата создания: 20.05.2025

Этот документ содержит вопросы, возникшие на этапе начального проектирования и требующие уточнения для дальнейшей успешной разработки.

## Общие вопросы и Дизайн:

1.  **Дизайн-макет:** Существует ли готовый дизайн-макет (Figma, Sketch, Adobe XD и т.д.) или его разработка входит в задачи проекта? Если да, есть ли брендбук или предпочтения по цветовой гамме, шрифтам?
    **Ответ (на основе предоставленного изображения и сообщения пользователя):** Да, пользователь предоставил макет стартовой страницы в Photoshop.
    *   **Цветовая гамма (визуально с макета):** Основные – белый/светло-серый (фон), черный/темно-серый (текст). Акцентный – красный. Дополнительный – серый (декоративные элементы).
    *   **Шрифты (визуально с макета):** Используются различные рубленые шрифты (sans-serif) для заголовков, подзаголовков и основного текста. Конкретные названия шрифтов требуют уточнения или анализа PSD-файла.
    *   **Брендбук:** Не указано, есть ли отдельный брендбук. Макет является основным источником визуального стиля на данный момент.

2.  **Референсы:** Есть ли примеры сайтов ведущих или лендингов, которые нравятся по стилю, структуре или функционалу?
    **Ответ (на основе предоставленного макета):** Предоставленный макет в Photoshop является основным референсом для дизайна и структуры стартовой страницы.

3.  **Логотип:** Предоставит ли Семён Суродин свой логотип в векторном формате? Если логотипа нет, требуется ли его разработка?
    **Ответ (на основе макета):** В шапке используется текстовое написание "SEMYON SURODIN" и в основной части крупно "Семён Суродин". Необходимо уточнить, является ли это окончательным вариантом логотипа или будет предоставлен отдельный графический/векторный логотип. Если текущее текстовое написание является логотипом, нужно уточнить используемый шрифт для "SEMYON SURODIN" в шапке.

## Контент:

4.  **Текстовый контент:** Кто будет предоставлять текстовый контент для всех секций (Обо мне, Услуги, Описание цен и т.д.)? Требуется ли помощь в копирайтинге или редактуре?
    **Ответ (частично на основе макета, требует уточнения по коду):** Макет содержит тексты для Hero-секции ("Семён Суродин", "КОРПОРАТИВЫ | СВАДЬБЫ | ДР | ВЕЧЕРИНКИ") и для красной ленты ("СОЗДАЮ МЕРОПРИЯТИЯ, НА КОТОРЫХ ВЫ КАЙФУЕТЕ !"). Наличие текстов для остальных секций ("Обо мне", "Услуги", "Цены" и т.д.) необходимо проверить в коде или запросить у пользователя/Семёна.

5.  **Фотографии:** Будут ли предоставлены профессиональные фотографии Семёна и фотографии с мероприятий в высоком качестве? Есть ли ограничения на использование каких-либо фото?
    **Ответ (на основе макета, требует уточнения по коду):** Макет содержит одну фотографию Семёна в Hero-секции. Наличие других фотографий для галереи и других секций необходимо проверить в коде (например, в `public/host/moments` или `lib/data.ts`) или запросить у пользователя/Семёна.

6.  **Видеоматериалы:** Аналогично фотографиям, будут ли предоставлены видеоматериалы (промо-ролики, нарезки с мероприятий)? В каком формате?
    **Ответ (на основе макета, требует уточнения по коду):** Макет содержит блок "ВИДЕО", что предполагает наличие видеоматериалов. Необходимо проверить в коде путь к видео (например, ранее был `/host/video/vid_vizitka.MP4`) и уточнить, актуален ли он и есть ли другие видео.

7.  **Отзывы:** В каком виде будут предоставлены отзывы клиентов (текст, скриншоты, видео)? Есть ли разрешение от клиентов на публикацию их отзывов и, возможно, фотографий?
    **Ответ (требует информации из кода или от пользователя):** На макете секция отзывов не показана. Необходимо проверить код на наличие компонента отзывов и уточнить у пользователя/Семёна формат и наличие контента для отзывов.

## Функционал и Технические детали:

8.  **Секция "Цены":** Насколько детальной должна быть информация о ценах? Будут ли это фиксированные пакеты или цены "от"? Или этот раздел лучше убрать, а цены предоставлять по запросу?
    **Ответ (требует информации из кода или от пользователя):** На макете секция цен не показана. Необходимо проверить код и уточнить у пользователя/Семёна, как будет реализована эта секция и будет ли она вообще.

9.  **Форма бронирования/Контакты:**
    *   Какие поля обязательны для заполнения в форме (Имя, Телефон, Email, Дата мероприятия, Тип мероприятия, Комментарий и т.д.)?
    *   На какой email-адрес должны приходить заявки с формы?
    *   Требуется ли интеграция с каким-либо CRM-сервисом для обработки заявок?
    *   Нужна ли защита от спама (например, reCAPTCHA)?
    **Ответ (требует информации из кода или от пользователя):** На макете форма бронирования/контактов не показана. Необходимо проверить код на наличие соответствующего компонента и логики отправки, а также уточнить детали у пользователя/Семёна.

10. **Доменное имя и хостинг:** Зарегистрировано ли уже доменное имя для сайта? Есть ли предпочтения по хостинг-провайдеру (если не Vercel)?
    **Ответ (требует информации от пользователя):** Данная информация не может быть получена из кода или макета.

11. **Многоязычность:** Планируется ли поддержка нескольких языков на сайте в будущем?
    **Ответ (требует информации от пользователя/анализа кода на предмет i18n):** На макете признаков многоязычности нет. Требуется уточнение у пользователя или проверка кода на наличие библиотек для интернационализации.

12. **Обновление контента:** Как часто Семён планирует обновлять контент на сайте (фото, видео, отзывы, услуги)? От этого зависит, стоит ли рассматривать интеграцию простой CMS в будущем.
    **Ответ (требует информации от пользователя):** Данная информация не может быть получена из кода или макета.

13. **Аналитика:** Есть ли существующие аккаунты Google Analytics / Яндекс.Метрики, которые нужно будет подключить, или создавать новые?
    **Ответ (требует информации от пользователя/анализа кода):** Требуется уточнение у пользователя или проверка кода на наличие скриптов аналитики.

## Сроки и бюджет (если обсуждается на данном этапе):

14. **Ожидаемые сроки запуска MVP?** (В `Project.md` заложен ориентир в 6 недель, но это требует подтверждения).
    **Ответ (требует информации от пользователя):** Данная информация не может быть получена из кода или макета.

15. **Есть ли определенный бюджет на разработку?**
    **Ответ (требует информации от пользователя):** Данная информация не может быть получена из кода или макета.

Ответы на эти вопросы помогут сформировать более точное видение проекта и спланировать разработку эффективнее. 