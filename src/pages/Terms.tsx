import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-primary font-medium">Пользовательское соглашение</span>
          </div>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-black text-[#1B263B] mb-8 uppercase">
              Пользовательское соглашение
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-sm text-gray-500">Дата последнего обновления: 18 января 2026 г.</p>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">1. Общие положения</h2>
                <p>
                  Настоящее Пользовательское соглашение (далее – Соглашение) регулирует отношения между 
                  ООО "ИНЖЕНЕРНЫЙ ЦЕНТР "ПУМОРИ" (далее – Компания) и физическим или юридическим лицом, 
                  акцептовавшим настоящее Соглашение (далее – Пользователь).
                </p>
                <p>
                  Использование сайта означает согласие Пользователя с настоящим Соглашением и указанными 
                  в нём условиями. В случае несогласия с данными условиями Пользователь должен воздержаться 
                  от использования сайта.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">2. Предмет соглашения</h2>
                <p>
                  Компания предоставляет Пользователю доступ к информации о продукции, услугах и сервисах, 
                  представленным на сайте, а также возможность обратной связи для получения коммерческих 
                  предложений и консультаций.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">3. Права и обязанности Пользователя</h2>
                <p><strong>Пользователь имеет право:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Получать информацию о продукции и услугах Компании</li>
                  <li>Направлять запросы и заявки на оказание услуг</li>
                  <li>Получать консультации по интересующим вопросам</li>
                </ul>
                <p className="mt-4"><strong>Пользователь обязуется:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Предоставлять достоверную информацию о себе</li>
                  <li>Не использовать сайт в целях, противоречащих законодательству РФ</li>
                  <li>Не нарушать работоспособность сайта</li>
                  <li>Не копировать и не распространять материалы сайта без согласия Компании</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">4. Права и обязанности Компании</h2>
                <p><strong>Компания имеет право:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Изменять содержание сайта, состав услуг, условия настоящего Соглашения</li>
                  <li>Ограничивать доступ к сайту в случае нарушения Пользователем условий Соглашения</li>
                  <li>Использовать технологии для сбора информации о предпочтениях Пользователя (cookies)</li>
                </ul>
                <p className="mt-4"><strong>Компания обязуется:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Обеспечивать функционирование сайта</li>
                  <li>Соблюдать конфиденциальность персональных данных Пользователя</li>
                  <li>Предоставлять достоверную информацию о продукции и услугах</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">5. Интеллектуальная собственность</h2>
                <p>
                  Вся текстовая информация и графические изображения, размещенные на сайте, являются 
                  собственностью Компании или её партнёров.
                </p>
                <p>
                  Копирование, распространение или иное использование материалов сайта без письменного 
                  разрешения Компании запрещено.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">6. Ответственность</h2>
                <p>
                  Компания не несёт ответственности за:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Временные технические сбои и перерывы в работе сайта</li>
                  <li>Убытки, которые Пользователь может понести в связи с использованием сайта</li>
                  <li>Содержание и доступность сторонних сайтов, ссылки на которые могут присутствовать на сайте</li>
                </ul>
                <p>
                  Пользователь несёт ответственность за достоверность предоставленной информации.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">7. Конфиденциальность</h2>
                <p>
                  Обработка персональных данных Пользователя осуществляется в соответствии с{' '}
                  <Link to="/privacy" className="text-[#3B82F6] hover:underline">Политикой конфиденциальности</Link>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">8. Разрешение споров</h2>
                <p>
                  Все споры и разногласия, возникающие в связи с настоящим Соглашением, разрешаются путём 
                  переговоров. В случае недостижения согласия спор передаётся на рассмотрение в суд в 
                  соответствии с законодательством РФ.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">9. Изменение условий Соглашения</h2>
                <p>
                  Компания оставляет за собой право в любое время изменять условия настоящего Соглашения. 
                  Изменения вступают в силу с момента их публикации на сайте.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">10. Обратная связь</h2>
                <p>
                  Все вопросы и предложения по работе сайта направляйте на адрес:{' '}
                  <a href="mailto:info@pumori-engineering.ru" className="text-[#3B82F6] hover:underline">
                    info@pumori-engineering.ru
                  </a>
                </p>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg mt-12">
                <h2 className="text-2xl font-bold text-[#1B263B] mb-4">Реквизиты</h2>
                <div className="space-y-2 text-sm">
                  <p><strong>Полное наименование:</strong> ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ИНЖЕНЕРНЫЙ ЦЕНТР "ПУМОРИ"</p>
                  <p><strong>Сокращённое наименование:</strong> ООО "ИЦ "ПУМОРИ"</p>
                  <p><strong>ИНН:</strong> 6658354899</p>
                  <p><strong>ОГРН:</strong> 1106658001284</p>
                  <p><strong>КПП:</strong> 667901001</p>
                  <p><strong>Юридический адрес:</strong> 620017, Свердловская область, г. Екатеринбург, ул. Монтёрская, стр. 3, офис 201</p>
                  <p><strong>Генеральный директор:</strong> Ревзин Владимир Борисович</p>
                  <p><strong>Телефон:</strong> +7 (343) 287-30-58</p>
                  <p><strong>Email:</strong> info@pumori-engineering.ru</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
