import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/dd60c00c-701b-431c-8b6f-12366a8f36c4/files/89d557a9-b914-4fcb-891c-612c2bedc8b3.jpg';

export default function Index() {
  const [form, setForm] = useState({ name: '', phone: '', service: '' });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/20">
      <header className="fixed top-0 z-40 w-full backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display text-2xl tracking-tight">
            Акценты<span className="text-accent">.</span>
          </span>
          <a
            href="#booking"
            className="text-sm font-medium px-5 py-2 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-colors"
          >
            Записаться
          </a>
        </div>
      </header>

      <section id="hero" className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="reveal text-accent text-sm tracking-[0.3em] uppercase mb-6">
              Пространство красоты «Акценты»
            </p>
            <h1 className="reveal font-display text-5xl md:text-6xl leading-[1.02] mb-8" style={{ animationDelay: '0.1s' }}>
              Красота рядом с домом —
              <br />
              <span className="italic text-accent">без очередей и спешки</span>
            </h1>
            <p className="reveal text-lg text-muted-foreground max-w-md leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Пространство красоты «Акценты» в Советском районе. Стрижки,
              маникюр, брови и уходы — у мастеров с душой. Запись за 1 минуту.
            </p>
            <a
              href="#booking"
              className="reveal inline-flex items-center gap-2 mt-10 px-7 py-3.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-accent transition-colors"
              style={{ animationDelay: '0.3s' }}
            >
              Записаться онлайн
              <Icon name="ArrowRight" size={16} />
            </a>
            <p className="reveal text-sm text-muted-foreground mt-5 leading-relaxed" style={{ animationDelay: '0.35s' }}>
              Работаем ежедневно 9:00–20:00 · ул. Брусничная, 3
              <br />
              <a href="tel:+79089999105" className="text-foreground font-medium hover:text-accent transition-colors">
                +7 (908) 999-91-05
              </a>
            </p>
          </div>
          <div className="reveal relative" style={{ animationDelay: '0.25s' }}>
            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10">
              <img src={HERO_IMG} alt="Интерьер салона красоты «Акценты»" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-2xl px-5 py-4 shadow-lg">
              <p className="font-display text-3xl">9:00–20:00</p>
              <p className="text-xs text-muted-foreground tracking-wide">ежедневно без выходных</p>
            </div>
          </div>
        </div>
      </section>

      <section id="species" className="px-6 py-20 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-14 border-b border-border pb-8">
          <div>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3">Услуги</p>
            <h2 className="font-display text-5xl">Всё, что нужно —<br />в одном месте</h2>
          </div>
          <p className="hidden md:block text-muted-foreground text-sm max-w-xs text-right">
            Приходи на одну услугу, уходи обновлённой — или доверь нам весь образ сразу
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden mb-10">
          {[
            {
              emoji: '💅',
              title: 'Ногтевой сервис',
              desc: 'Маникюр и педикюр: обрезной, аппаратный, комбинированный, японский · покрытие гель-лак · наращивание',
              from: 'от 1 800 ₽',
            },
            {
              emoji: '✂️',
              title: 'Парикмахерский зал',
              desc: 'Стрижки женские, мужские, детские · окрашивание · Air Touch · уходы L\'Oréal Molecular и Davines',
              from: 'от 1 200 ₽',
            },
            {
              emoji: '🌿',
              title: 'Брови и ресницы',
              desc: 'Коррекция · окрашивание · долговременная укладка · ботокс для бровей · ламинирование ресниц',
              from: 'от 1 100 ₽',
            },
            {
              emoji: '💄',
              title: 'Макияж',
              desc: 'Дневной, вечерний, свадебный, для фотосессии',
              from: 'от 3 500 ₽',
            },
          ].map((s) => (
            <div
              key={s.title}
              className="group bg-card p-8 hover:bg-secondary transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl">{s.emoji}</span>
                <span className="font-display text-2xl text-accent">{s.from}</span>
              </div>
              <h3 className="font-display text-2xl mb-3 leading-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-full text-sm font-medium hover:bg-secondary hover:border-foreground transition-colors"
          >
            📋 Смотреть полный прайс
            <Icon name="ExternalLink" size={15} />
          </a>
        </div>
      </section>

      <section id="trust" className="px-6 py-20 max-w-6xl mx-auto">
        <div className="mb-14 border-b border-border pb-8">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3">Доверие</p>
          <h2 className="font-display text-5xl">Нам доверяют —<br />и возвращаются</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden mb-12">
          {[
            { value: '5.0 ★', label: 'рейтинг на 2ГИС' },
            { value: '79', label: 'реальных оценок' },
            { value: '7-е место', label: 'во Владивостоке по ламинированию бровей (Zoon.ru)' },
          ].map((m) => (
            <div key={m.label} className="bg-card px-8 py-10 text-center">
              <p className="font-display text-5xl mb-3 text-accent">{m.value}</p>
              <p className="text-sm text-muted-foreground leading-snug">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            {
              text: '«Хочу поблагодарить мастера Анну — всегда тепло принимает, бровки получаются очень натуральные. Приятный мастер и профессионал своего дела.»',
              source: 'клиентка, Zoon.ru',
            },
            {
              text: '«Сделала пептидный уход Loreal Molecular у Эльвиры — волосы стали плотнее, живее, появился блеск. Очень довольна результатом!»',
              source: 'клиентка, Zoon.ru',
            },
          ].map((r, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-between gap-6">
              <p className="text-base leading-relaxed text-foreground">{r.text}</p>
              <p className="text-xs text-muted-foreground">— {r.source}</p>
            </div>
          ))}
        </div>

        <div className="bg-accent/10 border border-accent/25 rounded-2xl px-8 py-6 flex items-center gap-5">
          <span className="text-3xl shrink-0">🎁</span>
          <div>
            <p className="font-medium mb-1">Акция: услуга в 4 руки</p>
            <p className="text-sm text-muted-foreground">Приходи с подругой, сделайте всё вместе и сэкономьте время</p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-6 py-20 bg-secondary/50 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-14 border-b border-border pb-8">
            <div>
              <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3">Портфолио</p>
              <h2 className="font-display text-5xl">Наши работы —<br />лучший аргумент</h2>
            </div>
            <p className="hidden md:block text-muted-foreground text-sm max-w-xs text-right">
              Каждая фотография — это реальный результат, который вы можете получить
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {[
              { img: 'https://cdn.poehali.dev/projects/dd60c00c-701b-431c-8b6f-12366a8f36c4/files/31856dff-d09b-4cbc-8348-c7e28a4c8872.jpg', cat: '💅 Маникюр', label: 'Нюд-маникюр · гель-лак', price: 'от 2 900 ₽' },
              { img: 'https://cdn.poehali.dev/projects/dd60c00c-701b-431c-8b6f-12366a8f36c4/files/78544b81-1792-4b71-bfb5-7e495b65c670.jpg', cat: '💅 Маникюр', label: 'Миндаль · натуральные оттенки', price: 'от 2 900 ₽' },
              { img: 'https://cdn.poehali.dev/projects/dd60c00c-701b-431c-8b6f-12366a8f36c4/files/59dbec12-1720-4e09-a978-9835e1aefe48.jpg', cat: '🌿 Брови', label: 'Ламинирование бровей', price: 'от 2 300 ₽' },
              { img: 'https://cdn.poehali.dev/projects/dd60c00c-701b-431c-8b6f-12366a8f36c4/files/a1b4cdbf-aa02-4db3-84c2-90ed11a9c73e.jpg', cat: '✂️ Волосы', label: 'Укладка + стрижка', price: 'от 2 200 ₽' },
              { img: 'https://cdn.poehali.dev/projects/dd60c00c-701b-431c-8b6f-12366a8f36c4/files/7d167e63-43d1-41fc-bb01-8dbfa0b6c794.jpg', cat: '🦶 Педикюр', label: 'Педикюр + гель-лак · нюд', price: 'от 3 300 ₽' },
              { img: 'https://cdn.poehali.dev/projects/dd60c00c-701b-431c-8b6f-12366a8f36c4/files/a29c2d99-7ef4-4ba2-b837-ea6d0a201b46.jpg', cat: '🦶 Педикюр', label: 'Педикюр · французский', price: 'от 2 800 ₽' },
            ].map((item, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl bg-muted">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs text-primary-foreground/70 mb-0.5">{item.cat}</p>
                  <p className="text-sm font-medium text-primary-foreground leading-tight">{item.label}</p>
                  <p className="text-xs text-primary-foreground/80 mt-1">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.instagram.com/accents_space"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-full text-sm font-medium hover:bg-card hover:border-foreground transition-colors"
            >
              📸 Смотреть больше работ в Instagram
              <Icon name="ExternalLink" size={15} />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24 bg-secondary/40 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
              Устали от салонов, где вы —
              <br />
              <span className="italic text-accent">просто следующий номер в очереди?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              В «Акцентах» каждый визит — это забота, а не поток. Мы работаем
              в уютном пространстве Советского района, куда удобно заехать по
              пути домой или после работы. Здесь вас знают по имени.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {[
              {
                emoji: '🕐',
                title: 'Удобно',
                text: 'Ежедневно 9:00–20:00, запись онлайн или по WhatsApp',
              },
              {
                emoji: '⭐',
                title: 'Качественно',
                text: 'Рейтинг 5.0 на 2ГИС · 79 оценок · проверенные мастера',
              },
              {
                emoji: '💰',
                title: 'Честно',
                text: 'Фиксированные цены без скрытых доплат',
              },
            ].map((item) => (
              <div key={item.title} className="bg-card px-8 py-10 flex flex-col gap-4">
                <span className="text-3xl">{item.emoji}</span>
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="px-6 py-24 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-6">Запись</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.0] mb-6">
              Запишитесь прямо сейчас —
              <br />
              <span className="italic opacity-70">и приходите отдохнуть</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10">
              Без долгих ожиданий. Только вы, мастер и результат, который вам понравится.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/79089999105"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/20 rounded-full text-sm font-medium transition-colors"
              >
                <span className="text-lg">📱</span> WhatsApp
              </a>
              <a
                href="https://t.me/+79089999105"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/20 rounded-full text-sm font-medium transition-colors"
              >
                <span className="text-lg">✈️</span> Telegram
              </a>
              <a
                href="tel:+79089999105"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/20 rounded-full text-sm font-medium transition-colors"
              >
                <span className="text-lg">📞</span> +7 (908) 999-91-05
              </a>
            </div>

            <div className="mt-10 flex items-start gap-3 text-sm text-primary-foreground/60">
              <Icon name="MapPin" size={16} className="mt-0.5 shrink-0" />
              <span>Владивосток, ул. Брусничная, 3 (Советский район)<br />Ежедневно 9:00–20:00</span>
            </div>
          </div>

          <div className="bg-primary-foreground/10 border border-primary-foreground/15 rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[280px] text-center gap-4">
                <span className="text-5xl">✅</span>
                <h3 className="font-display text-3xl">Заявка отправлена!</h3>
                <p className="text-primary-foreground/70">Перезвоним в течение 15 минут в рабочее время</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', phone: '', service: '' }); }}
                  className="mt-4 text-sm underline underline-offset-4 opacity-60 hover:opacity-100 transition-opacity"
                >
                  Отправить ещё раз
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs text-primary-foreground/60 mb-2 tracking-wide">Ваше имя</label>
                  <input
                    type="text"
                    required
                    placeholder="Анна"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-4 py-3 text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-primary-foreground/60 mb-2 tracking-wide">Телефон / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-4 py-3 text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-primary-foreground/60 mb-2 tracking-wide">Услуга</label>
                  <select
                    value={form.service}
                    onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                    className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-foreground/50 transition-colors appearance-none"
                  >
                    <option value="" className="bg-foreground text-background">Выберите услугу</option>
                    <option value="nails" className="bg-foreground text-background">💅 Ногтевой сервис</option>
                    <option value="hair" className="bg-foreground text-background">✂️ Парикмахерский зал</option>
                    <option value="brows" className="bg-foreground text-background">🌿 Брови и ресницы</option>
                    <option value="makeup" className="bg-foreground text-background">💄 Макияж</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-foreground text-primary font-medium py-3.5 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Записаться
                  <Icon name="ArrowRight" size={16} />
                </button>
                <p className="text-xs text-primary-foreground/50 text-center">
                  Перезвоним в течение 15 минут в рабочее время
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-display text-xl text-foreground">Акценты<span className="text-accent">.</span></span>
        <span>© 2026 · Пространство красоты «Акценты» · Владивосток</span>
      </footer>


    </div>
  );
}