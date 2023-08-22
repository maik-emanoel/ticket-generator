import { useState } from "react";
import { CardTicket } from "./components/CardTicket";
import { SuccessMessage } from "./components/SuccessMessage";
import { touchIsSupported } from "./utils/touchUtil";

import loadingImage from "./assets/loading.svg";

export function App() {
  const [userLogin, setUserLogin] = useState("");
  const [userImage, setUserImage] = useState(null);
  const [userName, setUserName] = useState(null);

  const [status, setStatus] = useState("");
  const [turnInvisible, setTurnInvisible] = useState(false);

  const [isLoading, setIsloading] = useState(false);

  function handleGenerateTicket() {
    async function getUserInfo() {
      const response = await fetch(`https://api.github.com/users/${userLogin}`);
      const data = await response.json();
      const { avatar_url, name } = data;
      setTurnInvisible(false);
      setIsloading(true);

      setTimeout(() => {
        setIsloading(false);

        if (!response.ok) {
          setStatus("error");
          setTimeout(() => {
            setTurnInvisible(true);
          }, 2400);

          setTimeout(() => {
            setStatus("");
          }, 3000);
          return;
        }

        setStatus("ok");
        setUserImage(avatar_url);
        setUserName(name);
      }, 1500);
    }

    getUserInfo();
  }

  return (
    <main className="max-w-[1200px] w-[85%] flex gap-8 mx-auto min-h-[400px] my-16 justify-around lg:flex-col-reverse">
      <div className="w-full max-w-[490px] self-center sm:max-w-[306px]">
        <h1
          className="bg-gradient bg-clip-text text-[40px] uppercase font-['Space_Grotesk'] leading-[130%] w-fit mb-8 lg:text-2xl lg:max-w-[384px] lg:mx-auto sm:text-xl"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          gere seu ticket e compartilhe com o mundo
        </h1>

        <form className="max-w-[384px] lg:mx-auto">
          <div className="flex flex-col mb-4">
            {status === "ok" ? (
              <SuccessMessage />
            ) : (
              <>
                <label
                  htmlFor="userLogin"
                  className="font-['Space_Grotesk'] text-grayLight text-xl leading-8 uppercase mb-4"
                >
                  Digite seu usuário do GitHub
                </label>
                <input
                  type="text"
                  placeholder="Nome de usuário"
                  id="userLogin"
                  className="bg-[url(./assets/logo-github.svg)] bg-no-repeat bg-[12px] py-4 px-3 pl-11 mb-1 focus:outline-0 placeholder:text-grayDark"
                  value={userLogin}
                  onChange={(e) => setUserLogin(e.target.value)}
                  autoComplete="off"
                />

                {status === "error" && (
                  <p
                    className={`leading-7 text-danger ${
                      turnInvisible ? "animate-fadeOut" : "animate-fadeIn"
                    } sm:text-sm`}
                  >
                    Usuário inválido. Verifique e tente novamente.
                  </p>
                )}
              </>
            )}
          </div>

          <button
            data-istouchable={touchIsSupported}
            className="w-full h-14 flex justify-center items-center bg-purpleNormal transition-colors duration-200 data-[istouchable=false]:hover:bg-purpleDark"
            onClick={(e) => {
              e.preventDefault();
              if (status === "ok") {
                alert("Falha ao tentar fazer download, tente novamente mais tarde!");
                return;
              }

              handleGenerateTicket();
            }}
          >
            {isLoading ? (
              <img
                src={loadingImage}
                alt="Ícone de carregamento"
                className="animate-spin"
              />
            ) : (
              <span className="font-bold uppercase text-sm text-white">
                {status === "ok" ? "Fazer download" : "Gerar ticket"}
              </span>
            )}
          </button>
        </form>
      </div>

      <CardTicket userImage={userImage} userName={userName} />
    </main>
  );
}
