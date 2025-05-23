import { Button } from "@material-tailwind/react";
import React from "react";
import Chimodan from "../png/chimodan.png";
import Samalet from "../png/samalyet.png";
import Nastroyka from "../png/nastroyka.png";
import Komp from "../png/komp.png";
import Pasport from "../png/pasport.png";
import Sumka from "../png/sumka.png";
import Tg from "../png/Telegram.png";
import Vk from "../png/Vk.png";
import Whatsapp from "../png/whatsapp.png";
export default function Prt() {
  return (
    <div className="container max-w-full font-semibold">
      <div className="p-28 bg-purple-500 text-white">
        <div className="text-center p-10">
          <h1 className="text-4xl">Партнерская программа</h1>
          <p className="text-2xl mt-5 ">
            Продажа туристических страховок для сайтов, турформ, агентств
          </p>
          <Button className="bg-orange-400 text-black mt-7">Регистрация</Button>
        </div>
      </div>

      <div className="p-28">
        <div className="text-center text-3xl">
          <h2>Что мы предлагаем?</h2>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-10">
          <div className="text-center">
            <img className="ml-32" src={Chimodan} alt="" />
            <h2 className="text-2xl mt-5">Страхование путешественников</h2>
            <p className="text-xl mt-5">
              Страховка для получения визы и не только
            </p>
          </div>
          <div className="text-center">
            <img className="ml-32" src={Samalet} alt="" />
            <h2 className="text-2xl mt-5">Страхование отмены поездки</h2>
            <p className="text-xl mt-5">Компенсация, если срывается поездка</p>
          </div>
          <div className="text-center">
            <img className="ml-32" src={Nastroyka} alt="" />
            <h2 className="text-2xl mt-5">Продукт Лайт для профи</h2>
            <p className="text-xl mt-5">Специальный продукт для турагентов</p>
          </div>
        </div>
      </div>

      <div className="p-28">
        <div className="text-center text-3xl">
          <h2>Кто может стать партнером?</h2>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-10">
          <div className="text-center ">
            <img className="ml-32" src={Komp} alt="" />
            <h2 className="text-2xl mt-5">Туристические сайты и блогеры</h2>
            <p className="text-xl mt-5">
              У вас есть сайт о туризме? Блог о путешествиях? Размещайте на
              своем ресурсе один из наших партнерских модулей: Вам понадобится
              не более 5 минут времени, чтобы попробовать.
            </p>
          </div>

          <div className="text-center ">
            <img className="ml-32" src={Pasport} alt="" />
            <h2 className="text-2xl mt-5">Турагентства и визовые центры</h2>
            <p className="text-xl mt-5">
              Работаете с клиентами в офлайне? Хотите вести расчеты по безналу?
              Заключите с нами договор и оформляйте страховые полисы прямо из
              личного кабинета.
            </p>
          </div>

          <div className="text-center ">
            <img className="ml-36" src={Sumka} alt="" />
            <h2 className="text-2xl mt-5">Корпоративные клиенты</h2>
            <p className="text-xl mt-5">
              Ваши сотрудники регулярно отправляются в зарубежные командировки?
              Станьте нашим агентом и оформляйте для них страховые полисы на
              выгодных условиях.
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
