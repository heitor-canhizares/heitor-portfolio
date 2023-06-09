"use client";
import { useEffect } from "react";

declare global {
    interface Window {
        readonly modal: HTMLDialogElement;
    }
}

export default function Terminal() {
    function documentoCarregado() {
        window.document.body.style.opacity = "0";
        window.modal.showModal();
        setTimeout(() => {
            let lastpart = document.getElementById("pronto");
            if (lastpart) lastpart.style.display = "block";
        }, 3000);
        setTimeout(() => {
            window.modal.close();
            window.document.body.style.opacity = "100";
            localStorage.setItem("first_time", "false");
        }, 3500);
    }

    useEffect(() => {
        if (typeof window !== "undefined")
            if (!localStorage.getItem("first_time")) documentoCarregado();
    }, []);

    return (
        <div className="z-10">
            <dialog id="modal" className="modal backdrop-brightness-[0.05] ">
                <form method="dialog" className="modal-box p-1 bg-black">
                    <div className="mockup-code typewriter">
                        <div>
                            <pre data-prefix="$" className="pr-0">
                                <code>npm run dev</code>
                            </pre>
                        </div>
                        <div id="pronto" className="hidden">
                            <pre data-prefix=">" className="text-success">
                                <code>heitor-portfolio@0.1.0</code>
                            </pre>
                            <pre data-prefix=">" className="text-success">
                                <code>next dev</code>
                            </pre>
                        </div>
                    </div>
                </form>
            </dialog>
        </div>
    );
}
