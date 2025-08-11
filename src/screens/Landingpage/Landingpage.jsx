import { Fa1 } from "react-icons/fa6";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import logo from "../../img/logo-clevergroup.svg";

export const Landingpage = () => {
  return (
    <div className="bg-[#15171c] min-h-screen w-full">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <Card className="flex flex-col justify-end p-4 sm:p-6 lg:p-8 min-h-screen bg-[radial-gradient(50%_50%_at_50%_50%,rgba(35,123,255,1)_0%,rgba(21,23,28,1)_70%)] border-none">
          <CardContent className="flex flex-col justify-end p-0 w-full h-full gap-4 lg:gap-6">
            <div className="font-sans font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl tracking-[0] leading-tight">
              DO SEU NICHO, <br />
              PARA O SEU SUCESSO.
            </div>

            <Button className="w-full sm:w-auto max-w-[303px] h-[50px] sm:h-[60px] bg-[#172f4e] font-extrabold text-[#237bff] text-sm sm:text-base flex items-center justify-center gap-2">
              Venha nos conhecer
              <Fa1 className="w-3 h-3" />
            </Button>
          </CardContent>
        </Card>

        {/* Header */}
        <header className="absolute w-full h-16 sm:h-20 top-0 left-0 bg-transparent shadow-[0px_4px_4px_#00000040] z-10">
          <div className="flex w-full h-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-4">
            <img
              className="w-12 h-10 sm:w-[65px] sm:h-[55px]"
              alt="Logo clevergroup"
              src={logo}
            />

            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <Button
                variant="link"
                className="font-sans font-semibold text-white text-sm lg:text-base tracking-[-0.20px] leading-6 whitespace-nowrap p-0 hover:text-[#237bff] transition-colors"
              >
                Sobre
              </Button>

              <Button
                variant="link"
                className="font-sans font-semibold text-white text-sm lg:text-base tracking-[-0.20px] leading-6 whitespace-nowrap p-0 hover:text-[#237bff] transition-colors"
              >
                Contato
              </Button>

              <Button
                variant="link"
                className="font-sans font-semibold text-white text-sm lg:text-base tracking-[-0.20px] leading-6 whitespace-nowrap p-0 hover:text-[#237bff] transition-colors"
              >
                Suporte
              </Button>
            </div>

            <Fa1 className="w-4 h-4 text-white hover:text-[#237bff] transition-colors cursor-pointer" />
          </div>
        </header>
      </div>

      {/* Second Section */}
      <Card className="w-full min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[linear-gradient(180deg,rgba(21,23,28,1)_0%,rgba(35,123,255,1)_40%,rgba(255,255,255,1)_100%)] border-none">
        <CardContent className="flex flex-col w-full max-w-7xl gap-10 lg:flex-row lg:gap-20 p-0">
          
          <div className="w-full lg:w-1/2 font-sans font-normal text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center lg:text-left tracking-[0] leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-right [text-shadow:0px_0px_110px_#ffffff] font-sans font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-[0] leading-tight">
            CRIAMOS SOLUÇÕES DIGITAIS QUE IMPULSIONAM NEGÓCIOS
          </div>

        </CardContent>
      </Card>

      {/* Contact Form Section */}
      <Card className="w-full min-h-screen p-4 sm:p-6 lg:p-8 bg-[linear-gradient(180deg,rgba(255,255,255,1)_20%)] border-none">
        <CardContent className="flex flex-col lg:flex-row gap-6 lg:gap-8 p-0 w-full max-w-7xl mx-auto h-full items-center justify-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="font-sans font-extrabold text-[#15171c] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[0] leading-tight">
              NOS CONTE SUA IDEIA, SEU NEGÓCIO COMEÇA AQUI.
            </div>

            <div className="font-sans font-normal text-[#15171c] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-[0] leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6">
            <div className="flex flex-col gap-4">
              <Input
                className="h-16 lg:h-[84px] px-4 py-0 rounded-[10px] border border-solid border-[#adaeb0] text-base lg:text-lg"
                placeholder="Nome Completo (Obrigatório)"
              />
              <Input
                className="h-16 lg:h-[84px] px-4 py-0 rounded-[10px] border border-solid border-[#adaeb0] text-base lg:text-lg"
                placeholder="E-mail"
              />
            </div>

            <Textarea
              className="h-32 lg:h-[147px] px-4 py-4 rounded-[10px] border border-solid border-[#adaeb0] resize-none text-base lg:text-lg"
              placeholder="Sua ideia de negócio"
            />

            <Button className="w-full h-12 lg:h-[60px] bg-[#172f4e] rounded-[10px] text-white font-normal text-sm lg:text-base flex items-center justify-center gap-2 hover:bg-[#1a3555] transition-colors">
              Enviar formulário
              <Fa1 className="w-3 h-3" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <footer className="w-full bg-[#15171c] p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col md:flex-row w-full items-center justify-between gap-6 max-w-7xl mx-auto">
          <div className="font-sans font-normal text-white text-sm lg:text-base tracking-[0] leading-normal text-center md:text-left">
            © Clever Group - Since 2025
          </div>

          <img
            className="w-12 h-10 sm:w-[65px] sm:h-[55px]"
            alt="Logo clevergroup"
            src={logo}
          />

          <div className="flex flex-col items-center md:items-end gap-3 lg:gap-4">
            <div className="font-sans font-normal text-white text-sm lg:text-base tracking-[0] leading-normal text-center md:text-right">
              clevergroupcontato@gmail.com
            </div>

            <div className="font-sans font-normal text-white text-sm lg:text-base tracking-[0] leading-normal text-center md:text-right">
              (00) 00000 - 0000
            </div>

            <div className="flex items-center justify-center gap-2">
              <Fa1 className="w-4 h-4 text-white hover:text-[#237bff] transition-colors cursor-pointer" />
              <div className="font-sans font-normal text-white text-sm lg:text-base tracking-[0] leading-normal">
                clevergroup_
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};