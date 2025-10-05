import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-home-img bg-cover bg-center bg-no-repeat min-h-screen w-full">
      <main className="bg-white/10 backdrop-blur-xs flex justify-center items-center min-h-screen">
        <div className="bg-black/50 text-center flex flex-col gap-6 text-white p-20 rounded-md border border-black/70 sm:text-2xl">
          <h1 className="font-bold text-4xl">RpR-Pc</h1>
          <address>Dhaka Bangladesh</address>
          <p>Open Daily: 9am to 5pm</p>
          <Link href={"tel:01400139998"}>01400139998</Link>
        </div>
      </main>
    </div>
  );
}
