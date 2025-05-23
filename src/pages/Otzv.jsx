import React from "react";
import Yulduz from "../png/Yuldiz.png";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";
import { FaRegShareSquare } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Tg from "../png/Telegram.png";
import Vk from "../png/Vk.png";
import Whatsapp from "../png/whatsapp.png";

export default function Otzv() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const [active, setActive] = React.useState(1);

  const next = () => {
    if (active === 10) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };
  return (
    <div className="container max-w-full font-semibold">
      <div className="p-28">
        <div>
          <h1 className="text-3xl font-bold">Отзывы</h1>
          <div className="flex items-center gap-1">
            <img src={Yulduz} alt="" />
            <img src={Yulduz} alt="" />
            <img src={Yulduz} alt="" />
            <img src={Yulduz} alt="" />
            <img src={Yulduz} alt="" />
            <p className="text-blue-700">1085 Rewiews</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleOpen} variant="gradient">
            Написать коментарии
          </Button>
          <Dialog open={open} handler={handleOpen}>
            <DialogHeader>Напишите коментарии</DialogHeader>
            <DialogBody className="flex flex-col gap-10">
              <Input label="Title" />
              <Input label="Rewiew" />
              <Input label="Name" />
              <Input label="Email" />
              <p>Оценка</p>
              <Rating value={5} />;
            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Отмена</span>
              </Button>
              <Button variant="gradient" color="green" onClick={handleOpen}>
                <span>Отправить</span>
              </Button>
            </DialogFooter>
          </Dialog>
        </div>
      </div>
      <div className="p-10">
        <div className="shadow-md p-10">
          <p className="text-blue-500">Art</p>
          <h3 className="text-gray-500 text-xl">Наступил страховой случай</h3>
          <p>
            Находились в ОАЭ, попали в госпиталь. Все оплатили. Счет был порядка
            8000 евро. Из минусов то что пришлось всю ночь общаться с
            поддержкой, и на Английской языке.
          </p>
          <div className="flex mt-10 gap-3">
            <FaRegShareSquare />
            <AiOutlineLike />
            <AiOutlineDislike />
          </div>
        </div>
      </div>

      <div className="p-10">
        <div className="shadow-md p-10">
          <p className="text-blue-500">ANTON L</p>
          <h3 className="text-gray-500 text-xl">Quick, fast</h3>
          <p>
            no issues, everything was predictable, fast service, transparent
            rules
          </p>
          <div className="flex mt-10 gap-3">
            <FaRegShareSquare />
            <AiOutlineLike />
            <AiOutlineDislike />
          </div>
        </div>
      </div>

      <div className="p-10">
        <div className="shadow-md p-10">
          <p className="text-blue-500">EKATERINA M.</p>
          <h3 className="text-gray-500 text-xl">
            страховка туриста в таиланде
          </h3>
          <p>
            Добрый день) процесс оформления внятный, быстрый, порадовали
            наличием страховки при ДТП на автомобиле ( при соблюдении правил)),
            это было решающим фактором для нас) быстрые ответы на вопросы тоже
            хорошо) единственное пожелание: в конечной страховке( той что
            получаем на печать) раскрыть поподробнее что конкретно входит в
            страховые случаи) спасибо
          </p>
          <div className="flex mt-10 gap-3">
            <FaRegShareSquare />
            <AiOutlineLike />
            <AiOutlineDislike />
          </div>
        </div>
      </div>

      <div className="p-10">
        <div className="shadow-md p-10">
          <p className="text-blue-500">SERGEI L.</p>
          <h3 className="text-gray-500 text-xl">Покупка страховки</h3>
          <p>
            покупка страховки прошла безупречно,благодарны за профессиональный
            подход
          </p>
          <div className="flex mt-10 gap-3">
            <FaRegShareSquare />
            <AiOutlineLike />
            <AiOutlineDislike />
          </div>
        </div>
        <div className="flex items-center gap-8 justify-center mt-10">
          <IconButton
            size="sm"
            variant="outlined"
            onClick={prev}
            disabled={active === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
          <Typography color="gray" className="font-normal">
            Page <strong className="text-gray-900">{active}</strong> of{" "}
            <strong className="text-gray-900">10</strong>
          </Typography>
          <IconButton
            size="sm"
            variant="outlined"
            onClick={next}
            disabled={active === 10}
          >
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
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
