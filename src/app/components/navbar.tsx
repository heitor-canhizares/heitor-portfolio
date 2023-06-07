"use client";
import { useSwipeable } from "react-swipeable";
import { MenuReduced } from "./svgs";
import { useEffect, useState } from "react";
import Link from "next/link";

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
        <div className="navbar bg-base-300 rounded-b-3xl shadow-2xl">
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
                            className="btn btn-ghost normal-case text-xl text-neutral-content rounded-full w-fit"
                        >
                            Home
                        </Link>
                        <Link
                            href={"/About"}
                            className="btn btn-ghost normal-case text-xl text-neutral-content rounded-full w-fit"
                        >
                            Sobre
                        </Link>
                        <Link
                            href={"/Projects"}
                            className="btn btn-ghost normal-case text-xl text-neutral-content rounded-full w-fit"
                        >
                            Projetos
                        </Link>
                        <Link
                            href={"/Contact"}
                            className="btn btn-ghost normal-case text-xl text-neutral-content rounded-full w-fit"
                        >
                            Contato
                        </Link>
                    </menu>
                </div>
            </div>
            <div className="flex flex-1 justify-evenly">
                <Link href={"/"} className="btn btn-ghost normal-case text-xl ">
                    Home
                </Link>
                <Link
                    href={"/About"}
                    className="btn btn-ghost normal-case text-xl hidden sm:inline-flex"
                >
                    Sobre
                </Link>
                <Link
                    href={"/Projects"}
                    className="btn btn-ghost normal-case text-xl hidden sm:inline-flex"
                >
                    Projetos
                </Link>
                <Link
                    href={"/Contact"}
                    className="btn btn-ghost normal-case text-xl hidden sm:inline-flex"
                >
                    Contato
                </Link>
            </div>
        </div>
    );
}
