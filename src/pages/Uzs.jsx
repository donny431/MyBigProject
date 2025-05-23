import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
  Rating,
} from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { instance } from "../utils/axios";

export default function Uzs() {
  const handleGet = async () => {
    const res = await instance.get("product");

    console.log(res.data);
    return res.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["getProducts"],
    queryFn: handleGet,
  });

  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="font-semibold w-full">
      <div className="flex px-20 gap-24">
        <div className="w-1/4">
          <div className="mt-8">
            <h1 className="text-2xl p-5">Отзывы</h1>
            <div className="flex items-center">
              <p>5.0</p>
              <Rating value={5} />
            </div>
            <div>
              <Carousel className="rounded-xl">
                <img
                  src="https://skorozvon.ru/uploads/2023/03/img-14.webp"
                  alt="image 2"
                  className="h-full w-full object-cover"
                />
                <img
                  src="https://feedback.hh.ru/public/attachments/fdcfbadf4012cd919fcead3c62fbe58d.png"
                  alt="image 3"
                  className="h-full w-full object-cover"
                />
              </Carousel>
            </div>
          </div>
          <Accordion open={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              Медицинская помощь
            </AccordionHeader>
            <AccordionBody>
              Расходы по пребыванию и лечению в госпитале, оплата лекарств,
              простых средств фиксации Расходы на амбулаторные приемы врача
              Расходы на купирование обострения аллергии, кроме аллергии на
              солнце Расходы на лечение последствий укуса собак, обезьян и иных
              животных Расходы на транспортировку в больницу машиной скорой
              помощи или такси Расходы на эвакуацию к постоянному месту
              жительства, если требуется проведение отложенной операции при
              внезапном заболевании или травме Посмертная репатриация
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              Экстренная стоматология
            </AccordionHeader>
            <AccordionBody>
              Болеутоляющее лечение естественного зуба при повреждении или
              воспалении, включая установку пломб
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              Хронические заболевания
            </AccordionHeader>
            <AccordionBody>
              Экстренная помощь при обострении хронического заболевания,
              направленная на спасение жизни или купирование острого состояния
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4}>
            <AccordionHeader onClick={() => handleOpen(4)}>
              COVID-19, денге и прочие вирусы
            </AccordionHeader>
            <AccordionBody>
              Неотложная помощь при коронавирусе, в том числе при возникновении
              расходов на карантин заболевшего Неотложная помощь при вирусах
              Денге, Коксаки, Зика, малярии, оспе обезьян и других вирусах Не
              покрываются особо опасные инфекции и вирусы из списка ВОЗ, такие
              как Эбола, лихорадки Марбург, Ласса, тиф, холера, чума и подобные
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 5}>
            <AccordionHeader onClick={() => handleOpen(5)}>
              Визит третьего лица
            </AccordionHeader>
            <AccordionBody>
              Оплата авиабилета туда-обратно эконом-классом родственнику или
              близкому человеку для визита к больному и ухода за ним
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 6}>
            <AccordionHeader onClick={() => handleOpen(6)}>
              Досрочное возвращение домой
            </AccordionHeader>
            <AccordionBody>
              Расходы на авиабилет для возвращения из-за границы в случае смерти
              или экстренной госпитализации близкого родственника, а также в
              случае существенного повреждения или уничтожения имущества
              застрахованного в стране постоянного проживания
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 9}>
            <AccordionHeader onClick={() => handleOpen(9)}>
              Задержка авиарейса
            </AccordionHeader>
            <AccordionBody>
              Компенсация задержки регулярного рейса больше, чем на 4 часа.
              Компенсируются расходы на приобретение продуктов питания, напитков
              и размещение в гостинице.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 7}>
            <AccordionHeader onClick={() => handleOpen(7)}>
              Аварии на мотобайке
            </AccordionHeader>
            <AccordionBody>
              Травмы, полученные в результате аварии (столкновения, падения) при
              управлении мотобайком или другим транспортным средством
              (автомобиль, мотоцикл), при условии трезвости, наличии прав, шлема
              (для мотобайка) Ущерб транспортному средству и гражданская
              ответственность полисом не покрывается
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 8}>
            <AccordionHeader onClick={() => handleOpen(8)}>
              Франшиза
            </AccordionHeader>
            <AccordionBody>
              Франшиза - сумма, которую застрахованный оплачивает самостоятельно
              при обращении по каждому случаю. Например, счет из клиники 500
              USD, мы оплатим 450 USD, вы - 50 USD Денежную франшизу можно
              убрать (снизить до 0) при расчете, стоимость полиса будет
              увеличена Временная франшиза - для страны, в которой находится
              застрахованный в момент покупки, полис вступит в силу на 6-й день
            </AccordionBody>
          </Accordion>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-10 w-full">
        {data?.map((product) => (
          <div className="text-center border-2 rounded-lg p-5 flex flex-col gap-3 bg-blue-gray-100 h-full ">
            
              <div key={product.id}>
                <h1 className="text-2xl">{product.name}</h1>
                <p className="text-xl text-purple-400">{product.price}$</p>
                <p>{product.desc}</p>
              </div>  
            
            <Button className="bg-yellow-500 text-black">Выбрать</Button>

            <div className="flex flex-col gap-10 p-2">
              <p className="shadow-md p-2 ">35 000$</p>
              <p className="shadow-md p-2">200$</p>
              <p className="shadow-md p-2">3 000$</p>
              <p className="shadow-md p-2">35 00$</p>
              <p className="shadow-md p-3"></p>
              <p className="shadow-md p-3"></p>
              <p className="shadow-md p-3"></p>
              <p className="shadow-md p-2">Да</p>
              <Select label="50$">
                <Option>Нет</Option>
                <Option>50$</Option>
              </Select>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
