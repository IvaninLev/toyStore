
export default function Success(){
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-green-600">
                Оплата прошла!
            </h1>
            <p>Твои игрушки уже собираются в путь.</p>
            <a href="/" className="mt-4 text-blue-500 underline">
                Вернуться в магазин
            </a>
        </div>
    );
}
