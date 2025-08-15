import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const imageHover = {
  rest: { x: 0, transition: { type: "spring", stiffness: 220, damping: 22 } },
  hover: { x: 14, transition: { type: "spring", stiffness: 220, damping: 22 } },
};

function Doodle({ className = "" }) {
  return (
    <svg
      className={`absolute ${className} opacity-25 text-gray-700`}
      viewBox="0 0 80 80"
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeWidth="2"
        d="M10 60 C20 40, 30 50, 40 30 C50 10, 60 50, 70 30"
      />
    </svg>
  );
}

function ShopButton({ label = "Shop Now" }) {
  return (
    <button className="inline-flex items-center gap-1.5 rounded-full bg-emerald-700 px-4 py-1.5 text-white text-xs font-semibold hover:brightness-110 focus:outline-none">
      {label}
      <ArrowRight className="h-3.5 w-3.5" />
    </button>
  );
}

function PromoCard({ children, bg = "bg-emerald-50", className = "" }) {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      className={`group relative overflow-hidden rounded-3xl ${bg} shadow-sm ring-1 ring-black/5 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_120%_10%,rgba(0,0,0,0.06),transparent_50%)]" />
      {children}
    </motion.div>
  );
}

export default function PromoGrid() {
  return (
    <section className="mx-auto max-w-7xl mt-22 px-4 md:px-6">
      {/* Updated grid layout: mimic reference with mixed spans */}
      <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-[repeat(2,minmax(240px,1fr))] gap-6">

        {/* 1) Opening Soon Sushi - tall card */}
        <PromoCard bg="bg-teal-50" className="md:col-span-2 md:row-span-2 p-6">
          <Doodle className="left-4 top-4 h-20 w-20" />
          <div className="relative z-10 flex h-full flex-col justify-center gap-3">
            <p className="text-[13px] font-semibold text-rose-500">Up to 25% off</p>
            <h3 className="text-2xl font-extrabold text-emerald-900">Opening Soon Sushi</h3>
            <ShopButton />
          </div>
          <motion.img
            variants={imageHover}
            src="/assets/Sushi.png"
            alt="Sushi"
            className="absolute right-4 bottom-4 max-h-[160px] w-auto select-none"
            draggable={false}
          />
        </PromoCard>

        {/* 2) Grand Opening - wide */}
        <PromoCard bg="bg-amber-50" className="md:col-span-4 md:row-span-1 p-6">
          <Doodle className="left-4 top-4 h-20 w-20" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <p className="text-sm text-emerald-700">You're invited to our</p>
            <h3 className="text-5xl font-extrabold tracking-widest text-emerald-900">GRAND</h3>
            <p className="text-3xl font-extrabold text-lime-700">Opening</p>
            <p className="mt-2 text-xs text-emerald-700/80">29.11.2022</p>
          </div>
          <motion.img
            variants={imageHover}
            src="/assets/opener-fruits.png"
            alt="Citrus"
            className="absolute right-4 bottom-4 max-h-[140px] w-auto select-none"
            draggable={false}
          />
        </PromoCard>

        {/* 3) Best Seller - normal */}
        <PromoCard bg="bg-rose-50" className="md:col-span-2 md:row-span-1 p-6">
          <Doodle className="left-4 top-4 h-20 w-20" />
          <div className="relative z-10 flex h-full flex-col justify-center gap-2">
            <p className="text-sm font-semibold text-lime-700">Best Seller</p>
            <h3 className="text-2xl font-extrabold text-emerald-900">Save 50%</h3>
            <p className="text-emerald-700/80">Fresh & Organic</p>
            <ShopButton />
          </div>
          <motion.img
            variants={imageHover}
            src="/assets/fruit-crate.png"
            alt="Fruit crate"
            className="absolute right-4 bottom-2 max-h-[140px] w-auto select-none"
            draggable={false}
          />
        </PromoCard>

        {/* 4) Extra Strong Coffee - normal */}
        <PromoCard bg="bg-green-50" className="md:col-span-2 md:row-span-1 p-6">
          <Doodle className="left-4 top-4 h-20 w-20" />
          <div className="relative z-10 flex h-full flex-col justify-center gap-2">
            <h4 className="text-sm font-semibold text-emerald-700">Summer Sale</h4>
            <h3 className="text-2xl font-extrabold text-emerald-900">Extra Strong Coffee</h3>
            <p className="mt-1 text-[13px] text-emerald-800/80">
              The most consumed drink in the world!
            </p>
            <ShopButton />
          </div>
          <motion.img
            variants={imageHover}
            src="/assets/coffee-pack.png"
            alt="Coffee pack"
            className="absolute right-4 bottom-4 max-h-[140px] w-auto select-none"
            draggable={false}
          />
        </PromoCard>

        {/* 5) Fresh Fruits - normal */}
        <PromoCard bg="bg-pink-50" className="md:col-span-2 md:row-span-1 p-6">
          <Doodle className="left-4 top-4 h-20 w-20" />
          <div className="relative z-10 flex h-full flex-col justify-center gap-2">
            <p className="text-sm font-semibold text-lime-700">Summer Sale</p>
            <h3 className="text-2xl font-extrabold text-emerald-900">Fresh Fruits</h3>
            <p className="text-[13px] text-emerald-800/80">When customers buy online!</p>
            <div className="mt-2 text-[13px]">
              <span className="font-bold text-rose-600">Order now:</span> (1800)-88-66-991
            </div>
          </div>
          <motion.img
            variants={imageHover}
            src="https://static.vecteezy.com/system/resources/previews/010/856/626/non_2x/ripe-dragon-fruit-pitaya-or-pitahaya-hylocercus-undatus-brit-rose-isolated-on-a-white-background-fruit-healthy-concept-png.png"
            alt="Dragon fruit"
            className="absolute right-4 bottom-2 max-h-[150px] w-auto select-none"
            draggable={false}
          />
        </PromoCard>

        {/* 6) Free Shipping - normal */}
        <PromoCard bg="bg-lime-50" className="md:col-span-2 md:row-span-1 p-6">
          <Doodle className="left-4 top-4 h-20 w-20" />
          <div className="relative z-10 flex h-full flex-col justify-center gap-2">
            <p className="text-sm font-semibold text-lime-700">Special Offer</p>
            <h3 className="text-2xl font-extrabold text-emerald-900">Free Shipping</h3>
            <p className="text-[13px] text-emerald-800/80">Online store only!</p>
            <ShopButton />
          </div>
          <motion.img
            variants={imageHover}
            src="/assets/grapes.png"
            alt="Grapes"
            className="absolute right-4 bottom-2 max-h-[140px] w-auto select-none"
            draggable={false}
          />
        </PromoCard>
      </div>
    </section>
  );
}





