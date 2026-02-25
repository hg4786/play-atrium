import { motion } from "framer-motion";

interface Props {
  title: string;
  titlePosition: string // "top" | "bottom"
  items: {
    name: string;
    price: string;
    image: string;
    imagePosition: string; // "left" | "right"
  }[];
  showCustomNote: boolean;
}

export function BalloonGarlandCard(props: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="w-[420px] lg:w-[450px] min-h-[650px] bg-golden flex flex-col py-8 px-5 lg:px-8 flex-shrink-0"
    >
      {/* Title at Top */}
      {props.titlePosition === "top" && (
        <div className="mb-6 flex-shrink-0">
          <h3
            className="font-fredoka text-[32px] lg:text-[40px] text-beige text-center tracking-tight leading-tight"
            style={{ WebkitTextStroke: "3px #5E2E1C" }}
          >
            {props.title}
          </h3>
        </div>
      )}

      {/* Items */}
      <div className="flex-1 flex flex-col justify-around">
        {props.items.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className={`flex items-center gap-4 ${item.imagePosition === "right" ? "flex-row-reverse text-right" : "text-left"}`}
          >
            {/* Image */}
            <div className="w-[180px] lg:w-[210px] flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain select-none"
                draggable={false}
              />
            </div>

            {/* Details */}
            <div
              className={`flex flex-col gap-2 flex-1 ${item.imagePosition === "right" ? "items-end" : "items-start"}`}
            >
              <p className="text-black font-inter font-medium leading-tight text-xs lg:text-sm">
                {item.name}
              </p>
              <p
                className="font-poppins text-[24px] lg:text-[32px] text-beige font-bold"
                style={{ WebkitTextStroke: "2px #5E2E1C" }}
              >
                {item.price}
              </p>
              <button className="w-fit px-4 lg:px-6 py-1.5 text-[10px] lg:text-xs bg-brown text-beige rounded-full font-inter font-semibold tracking-wide hover:bg-olive transition-colors shadow-md">
                BOOK NOW
              </button>
            </div>
          </div>
        ))}

        {/* Custom colors note */}
        {props.showCustomNote && (
          <div className="bg-gradient-to-r from-beige/40 via-[rgba(255,197,2,0.39)] to-beige/40 p-2 text-center rounded-lg">
            <p className="text-black text-[10px] lg:text-xs font-inter">
              Custom colors & themes available
            </p>
          </div>
        )}
      </div>

      {/* Title at Bottom */}
      {props.titlePosition === "bottom" && (
        <div className="mt-6 flex-shrink-0">
          <h3
            className="font-fredoka text-[32px] lg:text-[40px] text-beige text-center tracking-tight leading-tight"
            style={{ WebkitTextStroke: "3px #5E2E1C" }}
          >
            {props.title}
          </h3>
        </div>
      )}
    </motion.div>
  );
}
