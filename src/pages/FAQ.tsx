import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Общие вопросы',
      questions: [
        {
          q: 'Какие услуги предоставляет Пумори?',
          a: 'Пумори предоставляет полный цикл услуг для металлообработки: инжиниринг и проектирование производств, поставка станков и инструмента (3000+ позиций на складе), механообработка на заказ, сервис и ремонт оборудования 24/7. Опыт работы 35 лет, более 1200 реализованных проектов.'
        },
        {
          q: 'В каких регионах работает Пумори?',
          a: 'Представительства Корпорации Пумори работают во всех основных индустриальных регионах России. Головной офис находится в Екатеринбурге. Осуществляем поставки и сервисное обслуживание по всей территории РФ.'
        },
        {
          q: 'Есть ли у Пумори собственное производство?',
          a: 'Да, в структуру корпорации входит УЗИС - Уральский завод инструментальных систем, который производит инструмент и оснастку для станков с ЧПУ. Также есть собственное конструкторское бюро и производственные мощности для выполнения заказов по механообработке.'
        }
      ]
    },
    {
      category: 'Инжиниринг',
      questions: [
        {
          q: 'Сколько времени занимает запуск производства под ключ?',
          a: 'В среднем от 6 до 12 месяцев в зависимости от масштаба проекта. Включает: технический аудит, проектирование, поставку оборудования, монтаж, наладку и обучение персонала. Предоставляем детальный график на старте проекта.'
        },
        {
          q: 'Делаете ли бесплатный технический аудит?',
          a: 'Да, мы проводим бесплатный технический аудит вашего производства или помещения под новый цех. Наши инженеры оценят текущее состояние, предложат решения по оптимизации и рассчитают ROI проекта.'
        },
        {
          q: 'Какие гарантии вы даёте на запуск производства?',
          a: 'Мы гарантируем выход производства на заявленные показатели: объём выпуска, качество продукции, сроки цикла. Если показатели не достигнуты — дорабатываем за свой счёт. Все условия фиксируем в договоре.'
        }
      ]
    },
    {
      category: 'Инструмент',
      questions: [
        {
          q: 'Как быстро можно получить инструмент?',
          a: 'При наличии на складе — отгрузка в день заказа. Доставка по Екатеринбургу — в течение дня, по России — 2-5 дней в зависимости от региона. Экстренная доставка — договариваемся индивидуально.'
        },
        {
          q: 'Есть ли техническая поддержка по подбору инструмента?',
          a: 'Да, наши технологи помогут подобрать оптимальный инструмент под вашу задачу: материал детали, тип обработки, требования к точности. Консультация бесплатная, работаем 24/7.'
        },
        {
          q: 'Можно ли вернуть инструмент, если не подошёл?',
          a: 'Да, неиспользованный инструмент можно вернуть в течение 14 дней с момента получения. Главное условие — сохранность упаковки и товарного вида.'
        }
      ]
    },
    {
      category: 'Сервис',
      questions: [
        {
          q: 'Как быстро выезжает бригада при поломке станка?',
          a: 'При экстренном вызове — в течение 4 часов в пределах Екатеринбурга и Свердловской области. В других регионах — в зависимости от удалённости, но не более суток. Работаем круглосуточно 24/7.'
        },
        {
          q: 'Есть ли запчасти в наличии?',
          a: 'На складе более 5000 наименований запчастей для станков разных производителей. Если нужной детали нет — организуем экстренную поставку у партнёров или изготовим на собственном производстве.'
        },
        {
          q: 'Какая гарантия на выполненные работы?',
          a: 'Гарантия на ремонт — от 3 до 12 месяцев в зависимости от типа работ. На установленные запчасти — гарантия производителя. Все условия указываем в акте выполненных работ.'
        }
      ]
    },
    {
      category: 'Производство',
      questions: [
        {
          q: 'Какой минимальный заказ по механообработке?',
          a: 'Минимального заказа нет — изготовим даже 1 деталь. Работаем как с единичными заказами, так и с крупными сериями до 10 000+ штук. Цена зависит от сложности и тиража.'
        },
        {
          q: 'Какую точность обработки вы гарантируете?',
          a: 'Точность до 0.005 мм (5 микрон) на современных обрабатывающих центрах. Контроль качества на каждом этапе, финальная проверка ОТК. При необходимости — предоставляем протоколы измерений.'
        },
        {
          q: 'Работаете ли по NDA?',
          a: 'Да, мы подписываем соглашения о неразглашении (NDA) перед началом работы. Все чертежи и техническая документация защищены, не передаются третьим лицам.'
        }
      ]
    },
    {
      category: 'Оплата и документы',
      questions: [
        {
          q: 'Какие формы оплаты доступны?',
          a: 'Работаем по безналичному расчёту с юридическими лицами и ИП. Для физических лиц — наличный расчёт или перевод на карту. Для крупных проектов возможна рассрочка или поэтапная оплата.'
        },
        {
          q: 'Как быстро получить консультацию и расчёт?',
          a: 'Консультация по телефону — в течение 5 минут в рабочее время. Коммерческое предложение с расчётом — в течение 1-2 рабочих дней. Для срочных запросов — ускоренная подготовка КП.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Часто задаваемые вопросы | FAQ по металлообработке и оборудованию"
        description="Ответы на популярные вопросы о инжиниринге, поставке инструмента, ремонте станков, механообработке. ✅ Сроки ✅ Гарантии ✅ Цены ✅ Условия работы. Не нашли ответ? → Звоните: +7 (343) 287-30-58"
        keywords="faq металлообработка, вопросы по инжинирингу, условия работы пумори, гарантии на ремонт станков, сроки изготовления деталей, как заказать инструмент"
        canonical="https://pumori360.online/faq"
      />
      <BreadcrumbSchema items={[
        { name: 'Главная', url: 'https://pumori360.online/' },
        { name: 'FAQ', url: 'https://pumori360.online/faq' }
      ]} />
      <Header />

      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-primary font-medium">FAQ</span>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] px-4 py-2 mb-6 font-bold text-sm uppercase tracking-wider">
              <Icon name="HelpCircle" size={16} />
              БАЗА ЗНАНИЙ
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase">
              Часто задаваемые вопросы
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] mb-6" />
            <p className="text-xl text-[#A8B2C0]">
              Ответы на популярные вопросы о наших услугах. Не нашли ответ? Звоните: <a href="tel:+73432873058" className="text-[#CD7F32] hover:underline font-bold">+7 (343) 287-30-58</a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-black text-[#1B263B] mb-6 uppercase flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#CD7F32] to-[#D4822B]" />
                  {category.category}
                </h2>
                
                <div className="space-y-3">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = faqs.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.questions.length, 0) + faqIndex;
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <div key={faqIndex} className="border-2 border-gray-200 rounded-lg overflow-hidden bg-white hover:border-[#3B82F6] transition-colors">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-bold text-[#1B263B] pr-4">{faq.q}</span>
                          <Icon 
                            name={isOpen ? "ChevronUp" : "ChevronDown"} 
                            size={24} 
                            className={`flex-shrink-0 text-[#3B82F6] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4 pt-2 text-gray-700 leading-relaxed border-t border-gray-100">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Icon name="MessageCircle" size={48} className="mx-auto mb-6 text-[#CD7F32]" />
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase">
              Не нашли ответ на свой вопрос?
            </h2>
            <p className="text-xl text-[#A8B2C0] mb-8">
              Наши специалисты ответят на любые вопросы по металлообработке и оборудованию
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+73432873058"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] hover:from-[#D4822B] hover:to-[#CD7F32] px-8 py-4 font-bold text-white uppercase transition-all hover:scale-105"
              >
                <Icon name="Phone" size={20} />
                Позвонить: +7 (343) 287-30-58
              </a>
              <button
                onClick={() => window.open('https://t.me/pumori360_bot', '_blank')}
                className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] px-8 py-4 font-bold text-white uppercase transition-all hover:scale-105"
              >
                <Icon name="Send" size={20} />
                Написать в Telegram
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;