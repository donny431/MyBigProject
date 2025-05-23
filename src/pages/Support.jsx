import { Button, Input } from "@material-tailwind/react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Support() {
  let form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("contact_service", "contact_form", this).then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  emailjs
    .sendForm("service_hef19ia", "template_dt9rivj", form.current, {
      publicKey: "cQO8PEQM7cpl8KbTR",
    })
    .then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  return (
    <div className="p-20 bg-gray-900 ">
      <div className="bg-gray-800 p-10 mx-auto w-2/4">
      <form
        className="mx-auto w-60 flex flex-col gap-10"
        ref={form}
        onSubmit={sendEmail}
      >
        <h1 className="text-3xl text-white font-semibold text-center">Написать нам</h1>
        <Input 
          type="text"
          placeholder="Enter your name"
          label="name"
          name="user_name"
        />
        <Input
          type="email"
          placeholder="Enter your email "
          label="email"
          name="user_t "
        />
        <textarea className='' name="message" placeholder="Enter your problem" />
        <Button type="submit">Send</Button>
      </form>
    </div>
    </div>
  );
}
