import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ServiceHero from '@/components/service/ServiceHero';
import ServicesList from '@/components/service/ServicesList';
import ServiceCalculator from '@/components/service/ServiceCalculator';
import ServiceSubscription from '@/components/service/ServiceSubscription';
import ServiceCases from '@/components/service/ServiceCases';
import ServiceReviews from '@/components/service/ServiceReviews';
import ServiceFAQ from '@/components/service/ServiceFAQ';

const API_URL = 'https://functions.poehali.dev/665592c9-5ce8-4dc9-813b-296a3866cb7f';
const baseRate = 6000;

const Service = () => {
  const [totalCost, setTotalCost] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'engineer' | 'order'>('engineer');
  const [form, setForm] = useState({ name: '', phone: '', company: '', machine: '', problem: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const formatPrice = (price: number) => price.toLocaleString('ru-RU') + ' ₽';

  const openModal = (type: 'engineer' | 'order') => {
    setModalType(type);
    setModalOpen(true);
    setSent(false);
    setError('');
    setForm({ name: '', phone: '', company: '', machine: '', problem: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Пожалуйста, заполните имя и телефон');
      return;
    }
    setSending(true);
    setError('');
    try {
      const payload: Record<string, unknown> = {
        ...form,
        request_type: modalType === 'engineer' ? 'Вызов инженера' : 'Заказ выезда (расчёт)',
      };
      if (modalType === 'order') {
        payload.total = formatPrice(totalCost);
      }
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setError('Ошибка отправки. Попробуйте позвонить: +7 (343) 287-08-08');
      }
    } catch {
      setError('Ошибка сети. Попробуйте позвонить: +7 (343) 287-08-08');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Ремонт станков ЧПУ в Екатеринбурге | Выезд от 2 часов · ПУМОРИ"
        description="Ремонт и обслуживание станков с ЧПУ в Свердловской области. Выезд инженера от 2 часов (сроки согласовываются индивидуально). Бесплатный аудит, пуско-наладка, гарантия 6 месяцев. Звоните: +7 (343) 287-08-08"
        keywords="ремонт станков чпу екатеринбург, ремонт станков свердловская область, обслуживание станков чпу екатеринбург, аварийный ремонт станков екатеринбург, пуско-наладка станков чпу, технический аудит оборудования екатеринбург, ремонт металлообрабатывающих станков, обслуживание чпу оборудования, выездной ремонт станков екатеринбург, ремонт токарных станков с чпу, ремонт фрезерных станков чпу, сервис станков екатеринбург"
        canonical="https://pumori360.online/service"
      />
      <BreadcrumbSchema items={[
        { name: 'Главная', url: 'https://pumori360.online/' },
        { name: 'Решения', url: 'https://pumori360.online/' },
        { name: 'Сервис и обслуживание', url: 'https://pumori360.online/service' }
      ]} />

      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <span>Решения</span>
            <Icon name="ChevronRight" size={16} />
            <span className="text-primary font-medium">Сервис</span>
          </div>
        </div>
      </div>

      <ServiceHero openModal={openModal} />
      <ServicesList openModal={openModal} />
      <ServiceCases openModal={openModal} />
      <ServiceReviews />
      <ServiceFAQ />
      <ServiceCalculator openModal={openModal} />
      <ServiceSubscription
        openModal={openModal}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        modalType={modalType}
        form={form}
        setForm={setForm}
        sending={sending}
        sent={sent}
        error={error}
        totalCost={totalCost}
        formatPrice={formatPrice}
        handleSubmit={handleSubmit}
      />

      <section className="bg-gray-50 border-t border-gray-200 py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-500 leading-relaxed">
            <span className="font-semibold text-gray-600">Важная информация.</span> Все заявки обрабатываются индивидуально. Сроки выезда, диагностики и ремонта, указанные на сайте, являются ориентировочными минимальными значениями и достижимы при наличии свободного специалиста нужной квалификации в вашем регионе и при соответствующей сложности задачи. Фактические сроки согласовываются менеджером после получения заявки и могут отличаться в зависимости от загруженности, удалённости объекта, наличия необходимых запчастей и технической сложности работ. Итоговая стоимость работ определяется после диагностики и согласовывается с заказчиком до начала ремонта.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Service;