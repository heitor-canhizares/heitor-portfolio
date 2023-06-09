import Terminal from "./components/terminal";

export default function Home() {
    return (
        <main className="flex-1">
            <Terminal />
            <section className="grid grid-flow-row justify-center font-lacquer bg-white">
                Titulo
            </section>
            <section className="grid grid-flow-row justify-center font-lacquer bg-white">
                Experiencia/Conhecimento
            </section>
        </main>
    );
}
