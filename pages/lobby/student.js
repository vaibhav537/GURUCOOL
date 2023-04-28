import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useSocket } from "../context/SocketProvider";
import Head from "next/head";

const student = () => {
  const [room, setRoom] = useState("");
  const [studentEmail, setStudentEmail] = useState("");

  const router = useRouter();

  const socket = useSocket();

  useEffect(() => {
    if (!localStorage.getItem("student-token")) {
      router.push("/");
    }
  }, []);

  const getInformationStudent = async () => {
    if (await JSON.parse(localStorage.getItem("student-token"))) {
      const studentToken = await JSON.parse(
        localStorage.getItem("student-token")
      );

      const info = await fetch("/api/studentTokenData", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          token: studentToken,
        }),
      });

      const result = await info.json();

      if (result.status === true) {
        setStudentEmail(result.student.email);
      } else {
        console.log("Eror: " + result.status);
      }
    }
  };

  useEffect(() => {
    getInformationStudent();
  }, [router.query]);

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { studentEmail, room });
    },
    [studentEmail, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { studentEmail, room } = data;
      router.push(`/room/${room}`);
    },
    [router]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => socket.off("room:join", handleJoinRoom);
  }, [socket, handleJoinRoom]);

  return (
    <>
      <Head>
        <title>GURU COOL : LOBBY</title>
        <meta
          name="description"
          content="Generated by developer for the who needs to be thier doubts and want to learn from the expert"
        />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className="text-black flex items-center justify-center flex-col bg-blue-100 h-screen">
        <h1 className="text-7xl mt-[12rem]">Lobby</h1>
        <form onSubmit={handleSubmitForm}>
          <div className="my-20 flex flex-col">
            <label htmlFor="email" className="text-3xl">
              Email ID :{" "}
            </label>
            <input
              type="email"
              id="email"
              className="my-5 w-96 outline-none text-center select-none ring-2 ring-blue-500 bg-white focus:ring-4 p-1 text-lg transition-all duration-500 rounded"
              value={studentEmail}
              disabled
              autoComplete="off"
            />
          </div>
          <div className="my-20 flex flex-col">
            <label htmlFor="room" className="text-3xl">
              Room Number
            </label>
            <input
              type="text"
              id="room"
              className="my-5 w-96   outline-none select-none ring-2 ring-blue-500 bg-white focus:ring-4 p-1 text-lg transition-all duration-500 rounded"
              value={room}
              onChange={(e) => {
                setRoom(e.target.value);
              }}
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="mt-10 outline-none  bg-sky-600 w-[8rem] p-2 text-[19px] ml-[8rem] text-white rounded hover:shadow-3xl hover:bg-sky-300 transition-all duration-500"
          >
            Join
          </button>
        </form>
      </div>
    </>
  );
};

export default student;
