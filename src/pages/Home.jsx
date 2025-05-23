import React from "react";
import Ekspanti from "../png/ekspanti.png";
import Polis from "../png/Polis.png";
import Klinika from "../png/Klinika.png";
import Yuldiz from "../png/Yuldiz.png";
import Otzv1 from "../png/otzv1.png";
import Otzv2 from "../png/otzv2.png";
import Otzv3 from "../png/otzv3.png";
import Tg from "../png/Telegram.png";
import Vk from "../png/Vk.png";
import Whatsapp from "../png/whatsapp.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const goToCountry = () => {
    navigate("/rus");
  };
  const uzs = () => {
    navigate("/uzs");
  };
  return (
    <div className="container mx-auto font-semibold">
      <div className="p-10 flex items-center justify-center gap-10">
        
        <div className="w-2/6">
          <h1 className="text-2xl mb-3"></h1>
          <p></p>
        </div>
      </div>

      <div className="p-10 flex items-center justify-center gap-10">
        <div className="w-2/6">
          <h1 className="text-2xl mb-3">Подходит для экспатов</h1>

          <p>
            Полис подойдет для долгих поездок, его можно купитьуже в поездке.
            Страховка работает, если у вас рабочая виза или ВНЖ в стране
            поездки. Покроем обостренияхронических заболеваний
          </p>
        </div>
        <div>
          <img src={Ekspanti} alt="" />
        </div>
      </div>

      <div className="p-10 flex items-center justify-center gap-10">
        <div>
          <img src={Polis} alt="" />
        </div>
        <div className="w-2/6">
          <h1 className="text-2xl mb-3">Страховое покрытие до 1 000 000 </h1>
          <p>
            Уникальное предложение, такая страховая сумма покроет неотложные
            операции, медицинскую репатриацию, лечение в странах с дорогой
            медициной
          </p>
        </div>
      </div>

      <div className="p-10 flex items-center justify-center gap-10">
        <div className="w-2/6">
          <h1 className="text-3xl">Доктор онлайн 24/7</h1>
          <p>
            Онлайн-консультация терапевта или педиатра включена во все полисы
            независимо от тарифа. Врач ответит сразу в видео- или онлайн- чате
            через наше приложение
          </p>
        </div>
        <video autoPlay muted loop playsInline className="w-96 rounded-3xl">
          <source
            src="https://tripinsurance.ru/Content/f/images/advantages/doctor/doc.mp4#t=1.0"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="p-10 flex items-center justify-center gap-10">
        <div>
          <img src={Klinika} alt="" />
        </div>
        <div className="w-2/6">
          <h1 className="text-2xl mb-3">Только проверенные клиники</h1>
          <p>
            Мы контролируем качество работы медицинских учреждений с помощью
            Ваших рейтингов и отзывов на нашем сайте. Если мы получаем более 2-х
            негативных отзывов по клинике, то просто перестаем с ней работать.
            Таким образом, наших клиентов направляют только в проверенные
            клиники, где быстро оказывают квалифицированную медицинскую помощь.
          </p>
        </div>
      </div>

      <div className="p-10 ">
        <div className="flex items-center justify-between ">
          <h1 className="text-3xl">Отзывы</h1>
          <div className="flex items-center gap-2">
            <p>4,7</p>
            <img src={Yuldiz} alt="" />
            <img src={Yuldiz} alt="" />
            <img src={Yuldiz} alt="" />
            <img src={Yuldiz} alt="" />
            <img src={Yuldiz} alt="" />
            <p>1085 отзывов </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-between mt-10">
          <img src={Otzv1} alt="" />
          <img src={Otzv2} alt="" />
          <img src={Otzv3} alt="" />
        </div>
      </div>

      <div className="p-10">
        <div className="text-3xl p-10">
          <h1>Страны</h1>
        </div>
        <div className="grid grid-cols-4 p-10 flex-col gap-5  ">
          <div className="flex items-center gap-3">
            <img
              src="https://img.freepik.com/premium-vector/round-flag-bulgaria-vector-illustration_739746-106.jpg"
              alt=""
              className="w-10"
            />
            <h3 className="text-2xl">Болгария</h3>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://img.freepik.com/premium-photo/flag-great-britain-round-as-button_406939-4031.jpg"
              alt=""
              className="w-10"
            />
            <h3 className="text-2xl">Британия</h3>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://img.freepik.com/premium-vector/round-flag-germany-vector-illustration_739746-113.jpg"
              alt=""
              className="w-10"
            />
            <h3 className="text-2xl">Германия</h3>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://media.istockphoto.com/id/1125103680/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B3%D1%80%D0%B5%D1%86%D0%B8%D1%8F-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D1%8B%D0%B9-%D1%84%D0%BB%D0%B0%D0%B3-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B0%D1%8F-%D0%B8%D0%BA%D0%BE%D0%BD%D0%B0.jpg?s=612x612&w=0&k=20&c=YGewas-Syge42TvBbw-q0pQKO3YjIb1NDzhs4iyGjgY="
              alt=""
              className="w-10"
            />
            <h3 className="text-2xl">Греция</h3>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://media.istockphoto.com/id/1032072886/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BE%D0%B1%D1%8A%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B0%D1%80%D0%B0%D0%B1%D1%81%D0%BA%D0%B8%D0%B5-%D1%8D%D0%BC%D0%B8%D1%80%D0%B0%D1%82%D1%8B-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D1%8B%D0%B9-%D1%84%D0%BB%D0%B0%D0%B3-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B0%D1%8F-%D0%B8%D0%BA%D0%BE%D0%BD%D0%B0.jpg?s=612x612&w=0&k=20&c=Efs93rslXS_42FerwVVivABzYzhVDtNU8he8bx_WoZE="
              alt=""
              className="w-10"
            />
            <h3 className="text-2xl">ОАЭ</h3>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://media.istockphoto.com/id/1124220477/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B8%D0%BD%D0%B4%D0%BE%D0%BD%D0%B5%D0%B7%D0%B8%D1%8F-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D1%8B%D0%B9-%D1%84%D0%BB%D0%B0%D0%B3-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B0%D1%8F-%D0%B8%D0%BA%D0%BE%D0%BD%D0%B0.jpg?s=170667a&w=0&k=20&c=qCm3rg5IoCqlHExI8o_ljBW4qm_TUrk5h70tOiHasCM="
              alt=""
              className="w-10"
            />
            <h3 className="text-2xl">Индонезия</h3>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://media.istockphoto.com/id/990992334/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B8%D1%81%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D1%8B%D0%B9-%D1%84%D0%BB%D0%B0%D0%B3-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B0%D1%8F-%D0%B8%D0%BA%D0%BE%D0%BD%D0%B0.jpg?s=612x612&w=0&k=20&c=SVBFSRL7KG2JpTBifvgweU48iQmcJd6BjUO3KrfktXM="
              alt=""
              className="w-10"
            />
            <h3 className="text-2xl">Испания</h3>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiolOI196plDZqXlitCB57bSKk2RWlITa7Lg&s"
              alt=""
              className="w-10"
            />
            <h3 className="text-2xl">Италия</h3>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://media.istockphoto.com/id/1453252777/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D1%8B%D0%B9-%D1%84%D0%BB%D0%B0%D0%B3-%D0%B8%D0%BD%D0%B4%D0%B8%D0%B8.jpg?s=612x612&w=0&k=20&c=S5DJno-HBRuELvqOgJTU-Uk7ggurRJhWh_46lCeVcLk="
              alt=""
              className="w-10"
            />
            <h3 className="text-2xl">Индиа</h3>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://img.freepik.com/premium-vector/round-flag-china-vector-illustration_739746-108.jpg"
              alt=""
              className="w-10"
            />
            <h3 className="text-2xl">Китай</h3>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/197/197605.png"
              className="w-10"
              alt=""
            />
            <h3 className="text-2xl">Латвия</h3>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://img.freepik.com/premium-vector/uzbekistan-flag-button-round-flag-uzbekistan-vector-flag-symbol-colors-proportion-correctly_847658-237.jpg"
              className="w-10"
              alt=""
            />
            <span onClick={uzs} className="cursor-pointer">
              <h3 className="text-2xl">Узбекистан</h3>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/197/197408.png"
              className="w-10"
              alt=""
            />
            <span onClick={goToCountry} className="cursor-pointer">
              <h3 className="text-2xl">Россия</h3>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://thumbs.dreamstime.com/b/%D0%BA%D1%80%D1%83%D0%B3-%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D1%84%D0%BB%D0%B0%D0%B3-%D1%81%D1%88%D0%B0-114898487.jpg"
              className="w-10"
              alt=""
            />
            <h3 className="text-2xl">США</h3>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://media.istockphoto.com/id/1032082664/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D1%82%D0%B0%D0%B8%D0%BB%D0%B0%D0%BD%D0%B4-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D1%8B%D0%B9-%D1%84%D0%BB%D0%B0%D0%B3-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B0%D1%8F-%D0%B8%D0%BA%D0%BE%D0%BD%D0%B0.jpg?s=612x612&w=0&k=20&c=9o1Vhk57b2A2rriDzNnxqohV4KKwuTn0n76zWU9pr4I="
              className="w-10"
              alt=""
            />
            <h3 className="text-2xl">Таиланд</h3>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://img.freepik.com/premium-vector/round-flag-japan-vector-illustration_739746-116.jpg?w=360"
              alt=""
              className="w-10"
            />
            <h3 className="text-2xl">Япония</h3>
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
