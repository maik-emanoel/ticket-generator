import infoEvent from "./assets/info-event.png";
import imgCover from "./assets/img-cover.png";
import noUser from "./assets/no-user.png";
import { useState } from "react";

export function App() {
  const [userLogin, setUserLogin] = useState("");
  const [userImage, setUserImage] = useState(null);
  const [userName, setUserName] = useState(null);

  function handleGenerateTicket() {
    async function getUserInfo() {
      const response = await fetch(`https://api.github.com/users/${userLogin}`);
      const data = await response.json();
      const { avatar_url, name } = data;

      if(!response.ok) {
        setUserName(null)
        setUserImage(null)
      }

      setUserImage(avatar_url);
      setUserName(name);
    }

    getUserInfo();
  }

  return (
    <main className="max-w-[1200px] w-[90%] flex gap-8 mx-auto">
      <div className="w-full max-w-[490px]">
        <h1
          className="bg-gradient bg-clip-text text-[40px] uppercase font-['Space_Grotesk'] leading-[130%] w-fit mb-8"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          gere seu ticket e compartilhe com o mundo
        </h1>

        <form className="max-w-[384px]">
          <div className="flex flex-col gap-4 mb-4">
            <label
              htmlFor="userLogin"
              className="font-['Space_Grotesk'] text-grayLight text-xl leading-8 uppercase"
            >
              Digite seu usuário do GitHub
            </label>
            <input
              type="text"
              placeholder="Nome de usuário"
              id="userLogin"
              className="bg-[url(./assets/logo-github.svg)] bg-no-repeat bg-[12px] py-4 px-3 pl-11 focus:outline-0 placeholder:text-grayDark"
              value={userLogin}
              onChange={(e) => setUserLogin(e.target.value)}
            />
          </div>

          <button
            className="w-full h-14 flex justify-center items-center bg-purpleNormal"
            onClick={(e) => {
              e.preventDefault();
              handleGenerateTicket();
            }}
          >
            <span className="font-bold uppercase text-sm text-white">
              Gerar meu ticket
            </span>
          </button>
        </form>
      </div>

      <div className="bg-borderGradient flex p-8 rounded-sm">
        <div>
          <img
            src={imgCover}
            alt="Imagem com a logo do evento"
            className="h-full"
          />
        </div>

        <div className="bg-grayLight p-4 flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col items-center gap-2">
            <div className="max-w-[128px] max-h-[128px] h-full flex justify-center">
              <img
                src={userImage != null ? userImage : noUser}
                alt="Foto para quando nenhum usuário for inserido"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col text-center">
              <span className="font-['Space_Grotesk'] font-medium text-xs uppercase tracking-[1.26px] text-purpleNormal">
                Tripulante
              </span>
              <span className="font-bold leading-5">
                {userName != null ? userName : "Seu nome aqui"}
              </span>
            </div>
          </div>

          <img
            src={infoEvent}
            alt="Imagem que detalha as informações do evento"
          />
        </div>
      </div>
    </main>
  );
}
