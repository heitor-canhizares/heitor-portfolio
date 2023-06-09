"use client";
import { useSwipeable } from "react-swipeable";
import { MenuReduced } from "./svgs";
import { useEffect, useState } from "react";
import Link from "next/link";
import localFont from "next/font/local";

const southCrew = localFont({
    src: "../SOUTH-CREW.ttf",
    display: "swap",
});

export default function Navbar() {
    const { ref: documentRef } = useSwipeable({
        onSwipedRight: () => {
            window.document.getElementById("menu")?.click();
        },
    });
    const handleLeft = useSwipeable({
        onSwipedLeft: () => {
            window.document.getElementById("menu")?.click();
        },
    });

    useEffect(() => {
        if (typeof window !== "undefined") documentRef(window.document as any);

        return () => documentRef(null);
    }, []);

    return (
        <nav
            className={`navbar bg-zinc-800 shadow-[0px_8px_4px_1px_rgba(0,0,0,0.45)] text-white p-4 z-[999] ${southCrew.className}`}
        >
            <div className="drawer sm:hidden ">
                <input id="menu" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div>
                        <label
                            htmlFor="menu"
                            className="btn btn-primary drawer-button btn-ghost"
                        >
                            <MenuReduced />
                        </label>
                    </div>
                </div>
                <div className="drawer-side" {...handleLeft}>
                    <label htmlFor="menu" className="drawer-overlay "></label>
                    <menu className="menu w-1/2 justify-evenly h-full bg-neutral p-0 opacity-80 rounded-e-full items-center">
                        <Link
                            href={"/"}
                            className="btn btn-ghost normal-case text-6xl text-neutral-content rounded-full w-fit"
                        >
                            Home
                        </Link>
                        <Link
                            href={"/About"}
                            className="btn btn-ghost normal-case text-6xl text-neutral-content rounded-full w-fit"
                        >
                            Sobre
                        </Link>
                        <Link
                            href={"/Projects"}
                            className="btn btn-ghost normal-case text-6xl text-neutral-content rounded-full w-fit"
                        >
                            Projetos
                        </Link>
                        <Link
                            href={"/Contact"}
                            className="btn btn-ghost normal-case text-6xl text-neutral-content rounded-full w-fit"
                        >
                            Contato
                        </Link>
                    </menu>
                </div>
            </div>
            <div className="flex flex-1">
                <Link
                    href={"/"}
                    className="btn btn-ghost normal-case text-6xl sm:inline-flex flex-1 tracking-widest"
                >
                    Home
                </Link>
                <Link
                    href={"/About"}
                    className="btn btn-ghost normal-case text-6xl hidden sm:inline-flex flex-1"
                >
                    Sobre
                </Link>
                <Link
                    href={"/Projects"}
                    className="btn btn-ghost normal-case text-6xl hidden sm:inline-flex flex-1"
                >
                    Projetos
                </Link>
                <Link
                    href={"/Contact"}
                    className="btn btn-ghost normal-case text-6xl hidden sm:inline-flex flex-1"
                >
                    Contato
                </Link>
                <button
                    className="btn btn-ghost normal-case hidden sm:inline-flex"
                    onClick={() => {
                        localStorage.removeItem("first_time");
                        window.location.replace("/");
                    }}
                >
                    Reset
                </button>
            </div>
        </nav>
    );
}
