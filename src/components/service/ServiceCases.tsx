import { useState } from 'react';
import Icon from '@/components/ui/icon';

const cases = [
  {
    id: 1,
    category: 'Ремонт шпинделя',
    client: 'Уральский турбинный завод',
    industry: 'Энергетика',
    machine: 'Okuma MU-500V',
    problem: 'Биение шпинделя 0.04 мм при норме 0.005 мм — брак на лопатках ГТУ',
    solution: 'Демонтаж, дефектовка, замена подшипников SKF класса P4, балансировка ротора, юстировка',
    result: 'Биение снижено до 0.003 мм, Ra 1.6 мкм восстановлена',
    duration: '4 дня',
    icon: 'Settings',
  },
  {
    id: 2,
    category: 'Ремонт электроники ЧПУ',
    client: 'Турбомоторный завод',
    industry: 'Энергетика',
    machine: 'Станок с FANUC 31i',
    problem: 'Ошибка серво-усилителя 9001, отказ оси X — полная остановка производства',
    solution: 'Замена серво-модуля FANUC A06B-6114, перепрошивка параметров, проверка обратной связи',
    result: 'Простой устранён за 1 рабочий день, ось X в норме',
    duration: '1 день',
    icon: 'Cpu',
  },
  {
    id: 3,
    category: 'Замена датчиков',
    client: 'Уралвагонзавод',
    industry: 'Машиностроение',
    machine: 'Линия из 6 обрабатывающих центров',
    problem: 'Ложные срабатывания датчиков положения паллет — брак 15%, остановки каждые 2 часа',
    solution: 'Замена 18 индуктивных датчиков Balluff на аналоги, перекалибровка референтных точек, наладка',
    result: 'Брак снижен до 2%, линия работает без остановок',
    duration: '3 дня',
    icon: 'Radar',
  },
  {
    id: 4,
    category: 'Ремонт мотора подачи',
    client: 'Челябинский трубопрокатный завод',
    industry: 'Металлургия',
    machine: 'Токарный центр DMG CTX beta 800',
    problem: 'Перегрев сервомотора оси Z, скачки тока, потеря точности по оси',
    solution: 'Замена сервомотора Siemens 1FK7, обновление параметров привода SINAMICS S120, тест прогоном',
    result: 'Точность ±0.004 мм восстановлена, температура в норме',
    duration: '2 дня',
    icon: 'Zap',
  },
  {
    id: 5,
    category: 'Пуско-наладка',
    client: 'Уральский завод гражданской авиации',
    industry: 'Авиастроение',
    machine: 'Mazak Variaxis i-700',
    problem: 'Новый 5-осевой центр после транспортировки — смещение геометрии, ошибки компенсации',
    solution: 'Полная геометрическая калибровка по Renishaw Ballbar, настройка RTCP, пробная обработка детали-эталона',
    result: 'Допуск H7 выдержан, точность ±0.005 мм на партии 500 втулок',
    duration: '2 дня',
    icon: 'Target',
  },
  {
    id: 6,
    category: 'Плановое ТО',
    client: 'Липецкий механический завод',
    industry: 'Машиностроение',
    machine: 'Расточной станок НС212',
    problem: 'Накопленный износ направляющих, люфт в механизме подачи, вибрации при расточке',
    solution: 'Шабрение направляющих, замена ШВП, регулировка зазоров, замена смазочной системы',
    result: 'Расточка Ø90–480 мм, глубина 300 мм — без вибраций, в допуске',
    duration: '5 дней',
    icon: 'Wrench',
  },
];

const categories = ['Все', 'Ремонт шпинделя', 'Ремонт электроники ЧПУ', 'Замена датчиков', 'Ремонт мотора подачи', 'Пуско-наладка', 'Плановое ТО'];

const ServiceCases = ({ openModal }: { openModal: (type: 'engineer' | 'order') => void }) => {
  const [active, setActive] = useState('Все');

  const filtered = active === 'Все' ? cases : cases.filter(c => c.category === active);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#1B263B]/10 text-[#1B263B] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Icon name="FolderOpen" size={15} />
            Реальные кейсы
          </div>
          <h2 className="text-3xl font-bold text-[#1B263B] mb-3">Примеры выполненных работ</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Ремонт и обслуживание станков на предприятиях Урала и России</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                active === cat
                  ? 'bg-[#CD7F32] text-white border-[#CD7F32]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#CD7F32] hover:text-[#CD7F32]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filtered.map(item => (
            <div key={item.id} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-[#CD7F32] hover:shadow-md transition-all flex flex-col">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#1B263B]/10 flex items-center justify-center shrink-0">
                  <Icon name={item.icon} size={20} className="text-[#1B263B]" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#CD7F32] uppercase tracking-wide">{item.category}</span>
                  <p className="text-sm font-bold text-[#1B263B]">{item.client}</p>
                  <p className="text-xs text-gray-400">{item.industry} · {item.machine}</p>
                </div>
              </div>

              <div className="space-y-3 flex-1">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Проблема</p>
                  <p className="text-sm text-gray-600">{item.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Решение</p>
                  <p className="text-sm text-gray-600">{item.solution}</p>
                </div>
                <div className="pt-2 border-t border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-green-600">
                    <Icon name="CheckCircle" size={15} />
                    <span className="text-sm font-medium">{item.result}</span>
                  </div>
                  <span className="text-xs text-gray-400 shrink-0 ml-2">{item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => openModal('engineer')}
            className="inline-flex items-center gap-2 bg-[#CD7F32] hover:bg-[#D4822B] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            <Icon name="Phone" size={18} />
            Обсудить мою задачу
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCases;