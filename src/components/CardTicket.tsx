import infoEvent from "../assets/info-event.png";
import imgCover from "../assets/img-cover.png";
import noUser from "../assets/no-user.png";

interface CardTicketProps {
    userImage: null,
    userName: null
}

export function CardTicket({userImage, userName}: CardTicketProps) {
  return (
    <div className="bg-borderGradient flex p-8 rounded-sm h-fit self-center xl:flex-col-reverse xl:p-5 xl:rounded-md">
      <div>
        <img
          src={imgCover}
          alt="Imagem com a logo do evento"
          className="h-full w-full object-cover xl:h-14"
        />
      </div>

      <div className="bg-grayLight p-4 flex flex-col items-center flex-shrink-0">
        <div className="flex-1 w-full flex flex-col items-center gap-2 mb-6">
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
  );
}
