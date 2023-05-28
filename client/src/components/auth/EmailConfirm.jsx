import React from "react";

const EmailConfirm = () => {
  return (
    <div>
      <div className="flex h-screen items-center ">
        <div className="group relative mx-auto w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
          <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
          <div className="relative rounded-[15px] bg-white p-6">
            <div className="space-y-4">
              <img src="https://nuxt.com/assets/home/ux-fast-light.svg" alt="" />
              <p className="text-lg font-semibold text-slate-800">Email confirm!</p>
             <p className="font-md text-slate-500"> Czasy litewskie i moskiewskie Od 1362 do 1569 r. Kijów był częścią Wielkiego Księstwa Litewskiego, od 1569 do 1654 r. częścią Rzeczypospolitej (jako część ziem Korony Polskiej). W 1654 r. wybuchło w mieście powstanie antypolskie i Kijów przeszedł „pod rękę cara moskiewskiego”. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailConfirm;
