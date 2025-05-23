import React from "react";
import { Link } from "react-router-dom";
import Logo from "../png/Logo.png";
import { Button, Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import Fon from "../png/Fon.png";
import { BiSupport } from "react-icons/bi";

export default function Navbar() {
  return (
    <div
      className="bg-repeat bg-cover bg-bottom w-full h-screen text-white p-10 font-semibold"
      style={{ backgroundImage: `url(${Fon})` }}
    >
      <div className="flex items-center justify-between">
        <img src={Logo} alt="" />
        <div>
          <ul className="flex flex-row gap-10 items-center">
            <Link to={"/"}>Дом</Link>
            <Link to={"otzv"}>Отзвы</Link>
            <Link to={"about"}>О нас</Link>
            <Link to={"prt"}>Партнерам</Link>
            <Link to={"support"}>
              <BiSupport />
            </Link>
            <Button className="bg-indigo-800">Регистрация</Button>
            <Button className="bg-indigo-800">Войти</Button>
          </ul>
        </div>
      </div>
      <div className="text-3xl text-center mt-52">
        <h1>Страхование путешественников</h1>
        <form className="w-1/6 m-auto flex items-center justify-center gap-5 mt-5">
          <Select className="text-white" label="Куда едем">
            <Option className="text-black">Авдаленд</Option>
            <Option className="text-black">Австрия</Option>
            <Option className="text-black">Багамские Острова</Option>
            <Option className="text-black">Бангладеш</Option>
            <Option className="text-black">Барбадос</Option>
            <Option className="text-black">Россия</Option>
            <Option className="text-black">Узбекистан</Option>
            <Option className="text-black">Япония</Option>
            <Option className="text-black">США</Option>
          </Select>
          <Input className="text-white" type="date" label="Дата прибытия" />
          <Input className="text-white" type="date" label="Дата отъезда" />
          <Input className="text-white" type="number" label="1 Человек " />
        </form>
        <Button className="mt-10 bg-indigo-800">Узнать стоимость</Button>
      </div>
    </div>
  );
}
