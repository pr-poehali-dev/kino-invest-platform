import Icon from '@/components/ui/icon';

const reviews = [
  {
    id: 1,
    name: 'Алексей Громов',
    position: 'Главный механик',
    company: 'Уральский турбинный завод',
    text: 'Обратились с проблемой шпинделя — биение вышло за все допуски прямо в разгар выпуска партии. Ребята приехали на следующий день, за 4 дня восстановили станок полностью. Теперь бьёт 0.003 мм. Работаем с Пумори постоянно.',
    rating: 5,
    tag: 'Ремонт шпинделя',
  },
  {
    id: 2,
    name: 'Дмитрий Савин',
    position: 'Начальник производства',
    company: 'Уралвагонзавод',
    text: 'Линия из шести центров вставала каждые два часа — ложные срабатывания датчиков. За три дня заменили все 18 датчиков, перекалибровали. Брак упал с 15% до 2%. Результат говорит сам за себя.',
    rating: 5,
    tag: 'Замена датчиков',
  },
  {
    id: 3,
    name: 'Сергей Ковалёв',
    position: 'Технический директор',
    company: 'Турбомоторный завод',
    text: 'FANUC выдал ошибку 9001, ось X встала. Производство простаивало. Пумори приехали, диагностировали, привезли модуль и подняли станок за один день. Ценю что не тянули и сразу привезли запчасть.',
    rating: 5,
    tag: 'Ремонт электроники ЧПУ',
  },
  {
    id: 4,
    name: 'Игорь Петренко',
    position: 'Руководитель участка ЧПУ',
    company: 'Уральский завод гражданской авиации',
    text: 'После перевозки новый Mazak потерял геометрию. Пумори провели полную калибровку по Renishaw, настроили RTCP. Первая же партия втулок — допуск H7 с первого раза. Очень профессиональная команда.',
    rating: 5,
    tag: 'Пуско-наладка',
  },
  {
    id: 5,
    name: 'Евгений Носов',
    position: 'Мастер механического цеха',
    company: 'Челябинский трубопрокатный завод',
    text: 'Сервомотор оси Z перегревался и терял точность. Заменили мотор, перенастроили привод — точность вернулась к ±0.004 мм. Срок выдержали. Теперь на плановом ТО тоже работаем только с Пумори.',
    rating: 5,
    tag: 'Ремонт мотора',
  },
  {
    id: 6,
    name: 'Владимир Астахов',
    position: 'Технолог',
    company: 'Липецкий механический завод',
    text: 'Провели плановое ТО на расточном НС212 — шабрение направляющих, замена ШВП. Станок как новый: работает тихо, в допуске. Хорошо что взялись, другие подрядчики от таких старых машин отказывались.',
    rating: 5,
    tag: 'Плановое ТО',
  },
];

const ServiceReviews = () => {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#1B263B]/10 text-[#1B263B] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Icon name="Star" size={15} />
            Отзывы клиентов
          </div>
          <h2 className="text-3xl font-bold text-[#1B263B] mb-3">Что говорят на предприятиях</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Отзывы технических специалистов заводов, с которыми работаем</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(review => (
            <div key={review.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#CD7F32] hover:shadow-md transition-all flex flex-col">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Icon key={i} name="Star" size={15} className="text-[#CD7F32] fill-[#CD7F32]" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">«{review.text}»</p>

              <div className="border-t border-gray-100 pt-4 flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-bold text-[#1B263B]">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.position}</p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">{review.company}</p>
                </div>
                <span className="text-xs bg-[#1B263B]/8 text-[#1B263B] px-2 py-1 rounded-full shrink-0 font-medium">
                  {review.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceReviews;
