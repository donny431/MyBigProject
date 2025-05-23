import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import shit from "../png/shit.webp";
import yulduz from "../png/Yuldiz.png";
import Tg from '../png/Telegram.png'
import Vk from '../png/Vk.png'
import Whatsapp from '../png/whatsapp.png'
export function TabsDefault() {
  const data = [
    {
      label: "2012",
      value: "2012",
      desc: `Мы работаем на рынке туристического страхования с 2012 года, и одними из первых предложили готовый онлайн-продукт для страхования самостоятельных путешественников. С начала нашего пути мы сделали выбор в пользу качества, отказавшись жертвовать им ради снижения цен, всегда ставя его на первое место.`,
    },
    {
      label: "2017",
      value: "2017",
      desc: `В 2017 году был запущен не имеющий аналогов продукт “Million” с беспрецедентным страховым лимитом и набором рисков, с опцией онлайн-доктора 24/7. Этот тариф хорошо адаптирован для экспатов и лонгстееров.`,
    },
    {
      label: "2018",
      value: "2018",
      desc: `C 2018 года мы самостоятельно обслуживаем обращения клиентов по страховым случаям через собственный сервисный центр внутри компании.`,
    },
    {
      label: "2022",
      value: "2022",
      desc: `В 2022 году были открыты новые направления в бизнесе (параметрическое урегулирование страховых случаев) и подразделения в Европе. Мы верим в то, что технологии меняют страхование и делают удобнее сервис. Мы непрерывно совершенствуем процессы обслуживания и оказания помощи клиентам, оставляя неизменным только одно — качество нашей страховки.`,
    },
  ];

  return (
    <div className=" container max-w-full font-semibold">
      <div className=" text-white p-32 bg-purple-400  flex items-center gap-40">
        <Tabs className="w-1/2" value="html">
          <div className="ml-3 mb-3">
            <h2 className="text-3xl">О нас </h2>
          </div>
          <TabsHeader className="ml-3">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel
                className="text-xl text-white mt-3"
                key={value}
                value={value}
              >
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
        <img className="w-60 mt-12" src={shit} alt="" />
      </div>
      <div className="flex items-center text-white justify-center bg-purple-400">
        <div className="flex items-center gap-2 hover:bg-gray-400 hover:rounded-xl p-5">
          <h1 className="text-3xl">4,9</h1>
          <p>
            <img src={yulduz} alt="" />
          </p>
          <p>
            <img src={yulduz} alt="" />
          </p>
          <p>
            <img src={yulduz} alt="" />
          </p>
          <p>
            <img src={yulduz} alt="" />
          </p>
          <p>
            <img src={yulduz} alt="" />
          </p>
        </div>
        <div className="flex items-center gap-2 hover:bg-gray-400 hover:rounded-xl  p-5">
          <h1 className="text-3xl">4,5</h1>
          <p>
            <img src={yulduz} alt="" />
          </p>
          <p>
            <img src={yulduz} alt="" />
          </p>
          <p>
            <img src={yulduz} alt="" />
          </p>
          <p>
            <img src={yulduz} alt="" />
          </p>
          <p>
            <img src={yulduz} alt="" />
          </p>
        </div>
        <div className="flex items-center gap-2 hover:bg-gray-400 hover:rounded-xl p-5">
          <h1 className="text-3xl">4,9</h1>
          <p>
            <img src={yulduz} alt="" />
          </p>
          <p>
            <img src={yulduz} alt="" />
          </p>
          <p>
            <img src={yulduz} alt="" />
          </p>
          <p>
            <img src={yulduz} alt="" />
          </p>
          <p>
            <img src={yulduz} alt="" />
          </p>
        </div>
        <div className="flex items-center gap-2 hover:bg-gray-400 hover:rounded-xl p-5">
          <h1 className="text-3xl">4,7</h1>
          <p>
            <img src={yulduz} alt="" />
          </p>
          <p>
            <img src={yulduz} alt="" />
          </p>
          <p>
            <img src={yulduz} alt="" />
          </p>
          <p>
            <img src={yulduz} alt="" />
          </p>
          <p>
            <img src={yulduz} alt="" />
          </p>
        </div>
      </div>

      <div className="p-28 ">
        <div>
          <h2 className="text-3xl">Пресса</h2>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div className="hover:bg-gray-400 rounded-xl p-4">
            <h2 className="text-blue-800 text-2xl">Forbes</h2>
            <p className="mt-3">
              Один из самых быстрорастущих сервисов страхования путешественников
              онлайн
            </p>
          </div>
          <div className="hover:bg-gray-400 rounded-xl p-4">
            <h2 className="text-2xl text-black font-bold">Коммерсанть</h2>
            <p className="mt-3">
              Блокчейн или ближайшее будущее туристического страхования от
              Tripinsurance.ru
            </p>
          </div>
          <div className="hover:bg-gray-400 rounded-xl p-4">
            <h2 className="text-2xl text-gray-500">Яндекс кью</h2>
            <p className="mt-3">
              Вопросы и ответы по страхованию путешественников. Форум
              Трипиншуранс
            </p>
          </div>
        </div>
      </div>

      <div className="p-28">
        <div>
          <h2 className="text-3xl">Немного о продукте</h2>
        </div>
        <div className="grid grid-cols-3 mt-5">
          <div className="hover:bg-gray-400 p-5 rounded-xl">
            <img
              src="https://tripinsurance.ru/Content/f/images/byeMondial/ic_about_world.svg"
              alt=""
            />
            <p>
              Страховой полис можно купить, уже находясь в путешествии. Для нас
              не играет роли гражданство или ВНЖ клиента.
            </p>
          </div>
          <div className="hover:bg-gray-400 p-5 rounded-xl">
            <img
              src="https://tripinsurance.ru/Content/f/images/byeMondial/ic_about_doc.svg"
              alt=""
            />
            <p>
              Все наши продукты включают опцию Доктор-онлайн, воспользоваться ей
              можно 24/7, не покидая наше приложение.
            </p>
          </div>
          <div className="hover:bg-gray-400 p-5 rounded-xl">
            <img
              src="https://tripinsurance.ru/Content/f/images/byeMondial/ic_about_diamond.svg"
              alt=""
            />
            <p>
              Наша страховка эксклюзивна (по набору рисков и лимитам), ее можно
              купить только на нашем сайте или через приложения. Мы не работаем
              с агрегаторами.
            </p>
          </div>
        </div>
      </div>

      <div className="p-28">
        <div>
          <h2 className="text-3xl">Интересные факты</h2>
        </div>
        <div className="grid grid-cols-3 p-5 gap-10 ">
          <div className="hover:bg-gray-500 rounded-xl p-3">
            <h2 className="text-3xl text-purple-500 mt-5 ">20.03.2012</h2>
            <p className="text-xl">продан первый полис на нашем сайте.</p>
          </div>
          <div className="hover:bg-gray-500 rounded-xl p-3">
            <h2 className="text-3xl text-purple-500 mt-5">732 909 ₽</h2>
            <p className="text-xl">
              cтоила самая дорогая страховка в истории сервиса. А самая дешевая
              - 1 рубль.
            </p>
          </div>
          <div className="hover:bg-gray-500 rounded-xl p-3">
            <h2 className="text-3xl text-purple-500 mt-5">38%</h2>
            <p className="text-xl">
              клиентов покупали у нас полис 2 и более раз
            </p>
          </div>
          <div className="hover:bg-gray-500 rounded-xl p-3">
            <h2 className="text-3xl text-purple-500 mt-5 ">265 стран</h2>
            <p className="text-xl">
              посетил один из наших клиентов - очень активный и известный
              путешественник.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-300 p-10">
        <div className="grid grid-cols-3 shadow-lg p-5">
          <div>
            <h2>Звонок в поддержку</h2>
            <p>+998903721710</p>
            <p>+998903721710</p>
          </div>
          <div>
            <h2>Чат с оператором</h2>
            <div className="flex gap-3">
              <img src={Tg} alt="" />
              <img src={Vk} alt="" />
              <img src={Whatsapp} alt="" />
            </div>
          </div>
          <div>
            <h2>Почта</h2>
            <p>supportrip@gmail.com</p>
          </div>
        </div>
        <div className="grid grid-cols-3 p-5">
          <div>
            <h2>Информационный центр</h2>
            <p>О нас</p>
            <p>Отзывы</p>
            <p>FAQ</p>
            <p>Страховой случай</p>
            <p>Партнерам</p>
          </div>
          <div>
            <h2>Продукты</h2>
            <p>Страховка для Шенгена</p>
            <p>Страховка для России</p>
            <p>Страховка в страны</p>
            <p>Горнолыжная страховка</p>
            <p>Годовая страховка</p>
          </div>
          <div>
            <h2>Документы</h2>
            <p>Пользовательское соглашение</p>
            <p>Политика обработки данных</p>
            <p>Политика информационной безопасности</p>
          </div>
        </div>
      </div>
    </div>
  );
}
