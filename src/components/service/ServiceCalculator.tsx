import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const baseRate = 6000;

interface ServiceCalculatorProps {
  openModal: (type: 'engineer' | 'order') => void;
}

const ServiceCalculator = ({ openModal }: ServiceCalculatorProps) => {
  const [hours, setHours] = useState(24);
  const [engineers, setEngineers] = useState(2);
  const [urgency, setUrgency] = useState('planned');
  const [weekend, setWeekend] = useState(false);
  const [location, setLocation] = useState('moscow');
  const [parts, setParts] = useState('');
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const baseCost = hours * engineers * baseRate;
    let coefficients = 0;
    if (urgency === 'urgent') coefficients += baseCost * 0.2;
    if (urgency === 'emergency') coefficients += baseCost * 0.5;
    if (weekend) coefficients += baseCost * 0.3;
    if (location === 'region500') coefficients += baseCost * 0.15;
    if (location === 'region500plus') coefficients += baseCost * 0.3;
    const partsCost = parts ? parseInt(parts.replace(/\s/g, '')) || 0 : 0;
    setTotalCost(baseCost + coefficients + partsCost);
  }, [hours, engineers, urgency, weekend, location, parts]);

  const formatPrice = (price: number) => price.toLocaleString('ru-RU') + ' ₽';

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#1B263B] mb-4 uppercase">Рассчитайте стоимость ремонта</h2>
          <p className="text-xl text-gray-500 mb-2">Прозрачное ценообразование</p>
          <p className="text-sm text-gray-400">Базовая ставка: 6 000 ₽/час на одного сервисного инженера + стоимость запчастей</p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#1B263B]">ПАРАМЕТРЫ РЕМОНТА</h3>

            <div>
              <label className="text-sm font-medium mb-3 block text-gray-700">Тип работ:</label>
              <select
                className="w-full p-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-[#CD7F32]"
                onChange={(e) => setHours(parseInt(e.target.value))}
                value={hours}
              >
                <option value="3">Диагностика и настройка (2-4 часа)</option>
                <option value="6">Мелкий ремонт (4-8 часов)</option>
                <option value="12">Средний ремонт (8-16 часов)</option>
                <option value="24">Крупный ремонт (16-40 часов)</option>
                <option value="80">Капитальный ремонт (40-120 часов)</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block text-gray-700">
                Предполагаемое время работ: <span className="font-mono text-[#CD7F32]">{hours}</span> часов
              </label>
              <Slider min={1} max={120} step={1} value={[hours]} onValueChange={(v) => setHours(v[0])} className="mb-2" />
              <div className="flex justify-between text-xs text-gray-400">
                <span>1 час</span><span>120 часов</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block text-gray-700">
                Количество инженеров: <span className="font-mono text-[#CD7F32]">{engineers}</span> чел.
              </label>
              <Slider min={1} max={4} step={1} value={[engineers]} onValueChange={(v) => setEngineers(v[0])} className="mb-2" />
              <div className="flex justify-between text-xs text-gray-400">
                <span>1</span><span>4</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block text-gray-700">Срочность выезда:</label>
              <div className="space-y-2">
                {[
                  { value: 'planned', label: 'Плановый (2-5 дней) — без наценки' },
                  { value: 'urgent', label: 'Срочный (24 часа) — +20%' },
                  { value: 'emergency', label: 'Экстренный (2-4 часа) — +50%' },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-3 p-3 border border-gray-200 rounded cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="urgency" value={opt.value} checked={urgency === opt.value} onChange={(e) => setUrgency(e.target.value)} />
                    <span className="text-sm">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded cursor-pointer hover:bg-gray-50">
              <input type="checkbox" checked={weekend} onChange={(e) => setWeekend(e.target.checked)} />
              <span className="text-sm">Выезд в выходные/праздники (+30%)</span>
            </label>

            <div>
              <label className="text-sm font-medium mb-3 block text-gray-700">Удалённость объекта:</label>
              <select className="w-full p-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-[#CD7F32]" value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="moscow">Екатеринбург / Свердловская область</option>
                <option value="region500">Регионы (до 500 км) — +15%</option>
                <option value="region500plus">Регионы (500+ км) — +30% + командировочные</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block text-gray-700">Необходимые запчасти (опционально):</label>
              <input
                type="text"
                placeholder="0"
                className="w-full p-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-[#CD7F32]"
                value={parts}
                onChange={(e) => setParts(e.target.value)}
              />
              <p className="text-xs text-gray-400 mt-2">Ориентировочная стоимость, если известна</p>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 rounded border border-gray-200 p-8 sticky top-24">
              <h3 className="text-xl font-semibold text-[#1B263B] mb-4">СТОИМОСТЬ РАБОТ</h3>
              <div className="h-0.5 bg-[#CD7F32] w-16 mb-6" />

              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-500">Базовая ставка:</span>
                  <span className="font-mono">6 000 ₽/час</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Количество часов:</span>
                  <span className="font-mono">{hours} ч.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Количество инженеров:</span>
                  <span className="font-mono">{engineers} чел.</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-medium">
                    <span>Работы (базовая):</span>
                    <span className="font-mono">{formatPrice(hours * engineers * baseRate)}</span>
                  </div>
                </div>
              </div>

              {(urgency !== 'planned' || weekend || location !== 'moscow') && (
                <div className="mb-6 space-y-2 text-sm">
                  <p className="font-medium text-gray-700">Коэффициенты:</p>
                  {urgency === 'urgent' && (
                    <div className="flex justify-between"><span>• Срочность (+20%):</span><span className="font-mono">+{formatPrice(hours * engineers * baseRate * 0.2)}</span></div>
                  )}
                  {urgency === 'emergency' && (
                    <div className="flex justify-between"><span>• Экстренный (+50%):</span><span className="font-mono">+{formatPrice(hours * engineers * baseRate * 0.5)}</span></div>
                  )}
                  {weekend && (
                    <div className="flex justify-between"><span>• Выходной день (+30%):</span><span className="font-mono">+{formatPrice(hours * engineers * baseRate * 0.3)}</span></div>
                  )}
                  {location === 'region500' && (
                    <div className="flex justify-between"><span>• Удалённость (+15%):</span><span className="font-mono">+{formatPrice(hours * engineers * baseRate * 0.15)}</span></div>
                  )}
                  {location === 'region500plus' && (
                    <div className="flex justify-between"><span>• Удалённость (+30%):</span><span className="font-mono">+{formatPrice(hours * engineers * baseRate * 0.3)}</span></div>
                  )}
                </div>
              )}

              {parts && (
                <div className="mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Запчасти:</span>
                    <span className="font-mono">+{formatPrice(parseInt(parts.replace(/\s/g, '')) || 0)}</span>
                  </div>
                </div>
              )}

              <div className="border-t-2 border-[#CD7F32] pt-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-[#1B263B]">ОБЩАЯ СТОИМОСТЬ:</span>
                  <span className="text-2xl font-bold text-[#CD7F32] font-mono">{formatPrice(totalCost)}</span>
                </div>
              </div>

              <Button
                className="w-full bg-[#CD7F32] hover:bg-[#D4822B] text-white mb-4"
                onClick={() => openModal('order')}
              >
                Заказать выезд инженера
              </Button>

              <div className="text-xs text-gray-400 space-y-1">
                <p>* Точная стоимость определяется после диагностики</p>
                <p>* Бесплатный аудит для оценки объёма работ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCalculator;
