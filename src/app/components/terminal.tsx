import { useState, useEffect } from "react";

export default function Terminal() {
    function documentoCarregado() {
        if (document.readyState === "interactive") {
            setTimeout(() => {
                let btn = document.getElementById("btn-modal");
                btn?.click();
            }, 750);
            setTimeout(() => {
                let lastpart = document.getElementById("pronto");
                if (lastpart) lastpart.style.display = "block";
            }, 3000);
            setTimeout(() => {
                window.modal.close();
            }, 3500);
        }
    }

    useEffect(() => {
        documentoCarregado();
    }, [document.readyState]);

    return (
        <div>
            <button
                className="btn hidden"
                id="btn-modal"
                onClick={() => window.modal.showModal()}
            ></button>
            <dialog id="modal" className="modal">
                <form method="dialog" className="modal-box p-0">
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
