import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { animate } from "animejs";
import { SetFormModal } from "../../pages/Landing_grabals/LandingGrabalsState";

const AuthModal = () => {
  const Modal = useRef(null);
  const Dispatch = useDispatch();
  const ActionModal = useSelector((state) => state.landing_page.form_modal);
  
  useEffect(() => {
    if (Modal.current) {
      animate(
        Modal.current,
        {
          opacity: [0, 1],
        },
        {
          duration: 0.6,
          easing: "easeOutExpo",
        }
      );
    }
  }, [ActionModal]);

  return (
    <div ref={Modal} className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:px-12 py-16 md:py-24 w-[360px] bg-slate-950 rounded-3xl h-[458px]">
      {ActionModal === "login" ? (
        <div className="ml-8 space-y-4">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-200 py-2 rounded-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Login
          </h1>
          <form className="space-y-8 max-w-lg w-full">
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="nama">
                Nama
              </label>
              <input
                id="nama"
                type="text"
                placeholder="Masukkan nama"
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="whatsapp">
                Nomor WhatsApp
              </label>
              <input
                id="whatsapp"
                type="tel"
                placeholder="08xxxxxxxxxx"
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold shadow-md transition duration-300"
            >
              Login
            </button>

            <p className="text-center text-gray-400 mt-4">
              Belum terdaftar?{" "}
              <button 
                className="text-emerald-400 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  Dispatch(SetFormModal("daftar"));
                }}
              >
                Daftar
              </button>
            </p>
          </form>
        </div>
      ) : (
        <div className="ml-8 space-y-4">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-200 py-2 rounded-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Daftar
          </h1>
          <form className="space-y-8 max-w-lg w-full">
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="nama-daftar">
                Nama
              </label>
              <input
                id="nama-daftar"
                type="text"
                placeholder="Masukkan nama"
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="whatsapp-daftar">
                Nomor WhatsApp
              </label>
              <input
                id="whatsapp-daftar"
                type="tel"
                placeholder="08xxxxxxxxxx"
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold shadow-md transition duration-300"
            >
              Daftar
            </button>

            <p className="text-center text-gray-400 mt-4">
              Sudah terdaftar?{" "}
              <button 
                className="text-emerald-400 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  Dispatch(SetFormModal("login"));
                }}
              >
                Login
              </button>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default AuthModal;