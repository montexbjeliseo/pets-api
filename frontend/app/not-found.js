import Link from "next/link";

export default function Custom404() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <h1 className="text-3xl font-bold">404 - Página no encontrada</h1>
            <p className="text-2xl p-4">La página que buscas no existe</p>
            <Link className="text-2xl text-red-500" href="/">Volver a la página principal</Link>
        </main>
    )
}