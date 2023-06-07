import Terminal from "./components/terminal";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
    return (
        <div>
            <Terminal />
            <div className="grid grid-flow-row justify-center">
                <div className="">
                    <span>Meu nome é Heitor Eduardo</span>
                </div>
                <div className="">
                    <span>Desenvolvedor Front End</span>
                </div>
                <div className="">conteudo</div>
            </div>
            <Analytics />
        </div>
    );
}
