import success from "../assets/success.svg";

export function SuccessMessage() {
  return (
    <p className="flex gap-4 items-center">
      <img src={success} alt="Ícone de busca bem-sucedida" />
      <span className="text-xl leading-8 uppercase font-['Space_Grotesk'] text-grayLight sm:text-base">
        Ticket gerado com sucesso
      </span>
    </p>
  );
}
