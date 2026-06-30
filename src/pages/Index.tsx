import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/dd60c00c-701b-431c-8b6f-12366a8f36c4/files/89d557a9-b914-4fcb-891c-612c2bedc8b3.jpg';

interface Species {
  id: string;
  latin: string;
  name: string;
  family: string;
  size: string;
  habitat: string;
  colony: string;
  fact: string;
  description: string;
}

const SPECIES: Species[] = [
  {
    id: '01',
    latin: 'Camponotus',
    name: 'Муравей-древоточец',
    family: 'Formicinae',
    size: '7–14 мм',
    habitat: 'Леса умеренной зоны',
    colony: 'до 50 000 особей',
    fact: 'Строит гнёзда внутри древесины, не поедая её',
    description:
      'Крупнейшие муравьи Европы. Прокладывают галереи в мёртвой и живой древесине, создавая многоуровневые гнёзда. Активны ночью, питаются падью тлей и насекомыми.',
  },
  {
    id: '02',
    latin: 'Formica rufa',
    name: 'Рыжий лесной муравей',
    family: 'Formicinae',
    size: '4–9 мм',
    habitat: 'Хвойные леса',
    colony: 'до 1 000 000 особей',
    fact: 'Возводит купола из хвои высотой более метра',
    description:
      'Главный санитар леса. За день муравейник уничтожает тысячи вредных насекомых. Поддерживает постоянную температуру внутри купола благодаря солнечному теплу и брожению.',
  },
  {
    id: '03',
    latin: 'Atta',
    name: 'Муравей-листорез',
    family: 'Myrmicinae',
    size: '2–16 мм',
    habitat: 'Тропики Америки',
    colony: 'до 8 000 000 особей',
    fact: 'Выращивает грибные сады из пережёванных листьев',
    description:
      'Первые земледельцы планеты. Не едят листья напрямую, а используют их как субстрат для разведения особого гриба — единственного источника пищи. Колония имеет строгую кастовую систему.',
  },
  {
    id: '04',
    latin: 'Eciton burchellii',
    name: 'Кочевой муравей',
    family: 'Dorylinae',
    size: '3–12 мм',
    habitat: 'Тропические леса',
    colony: 'до 700 000 особей',
    fact: 'Не строит гнёзд — живёт в живых «биваках» из тел',
    description:
      'Хищники-кочевники. Образуют гигантские рейды шириной до 20 метров, сметая всё на пути. Из собственных тел строят временные укрытия — биваки, сцепляясь лапками.',
  },
  {
    id: '05',
    latin: 'Paraponera clavata',
    name: 'Муравей-пуля',
    family: 'Paraponerinae',
    size: '18–30 мм',
    habitat: 'Дождевые леса',
    colony: 'до 1 000 особей',
    fact: 'Обладает сильнейшим жалом среди насекомых',
    description:
      'Назван за укус, который сравнивают с огнестрельным ранением. Боль длится до суток. Несмотря на грозную репутацию, ведёт скрытный образ жизни в небольших колониях.',
  },
  {
    id: '06',
    latin: 'Solenopsis invicta',
    name: 'Огненный муравей',
    family: 'Myrmicinae',
    size: '2–6 мм',
    habitat: 'Тёплые регионы',
    colony: 'до 250 000 особей',
    fact: 'Во время паводка сцепляется в живой плот',
    description:
      'Один из самых инвазивных видов. При наводнении колония превращается в плавучий шар из тел, способный держаться на воде неделями, защищая матку и личинок.',
  },
];

export default function Index() {
  const [active, setActive] = useState<Species | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/20">
      <div className="pointer-events-none fixed top-1/3 left-0 z-0 w-8 opacity-[0.07]">
        <Icon name="Bug" className="ant-track" size={28} />
      </div>

      <header className="fixed top-0 z-40 w-full backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display text-2xl tracking-tight">
            Акценты<span className="text-accent">.</span>
          </span>
          <nav className="hidden sm:flex gap-8 text-sm text-muted-foreground">
            <a href="#hero" className="hover:text-accent transition-colors">Главная</a>
            <a href="#species" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#about" className="hover:text-accent transition-colors">О салоне</a>
          </nav>
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
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3">Каталог</p>
            <h2 className="font-display text-5xl">Виды муравьёв</h2>
          </div>
          <p className="hidden md:block text-muted-foreground text-sm max-w-xs text-right">
            Шесть удивительных видов с описанием их характеристик и образа жизни.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {SPECIES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s)}
              className="group text-left bg-card p-8 hover:bg-secondary transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-xl text-muted-foreground">{s.id}</span>
                <Icon
                  name="ArrowUpRight"
                  size={20}
                  className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <p className="text-xs italic text-accent mb-2">{s.latin}</p>
              <h3 className="font-display text-2xl mb-4 leading-tight">{s.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{s.fact}</p>
              <div className="flex gap-4 text-xs text-muted-foreground border-t border-border/60 pt-4">
                <span className="flex items-center gap-1">
                  <Icon name="Ruler" size={13} /> {s.size}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="Users" size={13} /> {s.colony}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="about" className="px-6 py-24 bg-secondary/40 border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <Icon name="Bug" size={32} className="mx-auto text-accent mb-8" />
          <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
            Муравьи существуют дольше,
            <br />чем цветковые растения
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Их совокупная биомасса сопоставима с биомассой всего человечества.
            Они строят города, ведут сельское хозяйство и войны — задолго до
            того, как этому научились мы.
          </p>
        </div>
      </section>

      <footer className="px-6 py-12 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-display text-xl text-foreground">Мирмекс<span className="text-accent">.</span></span>
        <span>© 2026 · Энциклопедия муравьёв</span>
      </footer>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-primary/40 backdrop-blur-sm animate-in fade-in"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-card rounded-3xl max-w-lg w-full p-8 sm:p-10 shadow-2xl relative animate-in slide-in-from-bottom-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 text-muted-foreground hover:text-accent transition-colors"
            >
              <Icon name="X" size={22} />
            </button>
            <span className="font-display text-lg text-muted-foreground">{active.id}</span>
            <p className="text-xs italic text-accent mt-4 mb-1">{active.latin}</p>
            <h3 className="font-display text-4xl mb-6">{active.name}</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">{active.description}</p>
            <div className="grid grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
              {[
                { icon: 'Network', label: 'Семейство', value: active.family },
                { icon: 'Ruler', label: 'Размер', value: active.size },
                { icon: 'MapPin', label: 'Ареал', value: active.habitat },
                { icon: 'Users', label: 'Колония', value: active.colony },
              ].map((row) => (
                <div key={row.label} className="bg-card p-4">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                    <Icon name={row.icon} size={13} /> {row.label}
                  </div>
                  <p className="text-sm font-medium">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}