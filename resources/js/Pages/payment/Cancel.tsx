export default function Cancel() {
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-green-600">
                Оплата не прошла!
            </h1>
            <a href="/" className="mt-4 text-blue-500 underline">
                Вернуться в магазин
            </a>
        </div>
    );
}
