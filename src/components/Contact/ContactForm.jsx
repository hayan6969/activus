"use client";

import { LoaderIcon, Send, SendHorizonal } from "lucide-react";
import React, { useState } from "react";

export default function ContactForm({data}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [isSuccess, setIsSuccess] = useState("");

  const sendMsg = async (e) => {
    e.preventDefault();
    const emailPattern = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (!name) {
      setIsError("Please enter name");
      return;
    } else if (!emailPattern.test(email)) {
      setIsError("Please enter valid email");
      return;
    } else if (!message) {
      setIsError("Please type a message");
      return;
    }
    setIsError('');
    setIsLoading(true);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    };
    await fetch(`/api/v1/mail/contact/sendMail`, options)
      .then((data) => data.json())
      .then((data) => {
        if (data?.success) {
          setIsSuccess(data?.message);
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setIsError(data?.message);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error?.message);
        console.error(error);
        setIsLoading(false);
      });
  };

  return (
    <div className=" p-2 grid gap-2">
      {isError && (
        <p className=" text-red-500 text-sm text-center font-semibold">
          {isError}
        </p>
      )}
      {isSuccess && (
        <p className=" text-green-500 text-sm text-center font-semibold">
          {isSuccess}
        </p>
      )}

      <form
        onSubmit={(e) => {
          sendMsg(e);
        }}
        className=" grid gap-6"
      >
        <input
          className=" inputTag w-full"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={data.name}
        />
        <input
          className=" inputTag w-full"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={data.email}
        />
        <textarea
          className=" inputTag w-full h-32"
          name="message"
          typeof="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={data.message}
        />
      <button
                disabled={isLoading}
                className="flex items-center justify-center gap-2 w-full group rounded-3xl bg-black text-white py-3"
                type="submit"
              >
                {isLoading ? (
                  <LoaderIcon className=" animate-spin" />
                ) : (
                  <>
                    <span className="text-lg">{data.sendBtn}</span>
                    <SendHorizonal
                      strokeWidth={2}
                      className=""
                    />
                  </>
                )}
              </button>
      </form>
    </div>
  );
}
