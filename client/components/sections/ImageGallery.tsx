import { useMemo, useState } from "react";
import { useDragToScroll } from "@/hooks/useDragToScroll";

export default function ImageGallery({ categoryImages }: { categoryImages: Record<string, string[]> }) {

    const [activeCategory, setActiveCategory] = useState("Birthdays");
    const { scrollRef, isDragging, handlers } = useDragToScroll();

    const categories = useMemo(() => Object.keys(categoryImages), [categoryImages]);

    const images = useMemo(() => categoryImages[activeCategory] || [], [activeCategory, categoryImages]);

    return (
        <section className="bg-[#566336] py-8 px-4 font-sans">
            <div className="">

                <div 
                    ref={scrollRef}
                    {...handlers}
                    className={`flex overflow-x-auto xl:justify-center gap-3 pb-6 no-scrollbar ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                    style={{ userSelect: isDragging ? 'none' : 'auto' }}
                >
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveCategory(cat)}
                            className={"bg-[#FFF8E7] text-[#4a3e23] px-24 py-2 rounded-lg font-bold uppercase text-sm whitespace-nowrap shadow-md hover:bg-white transition-colors border-b-4" + (activeCategory == cat ? " border-[#FCBE5A]" : "")}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* --- MOBILE LAYOUT (Masonry Columns) --- */}
                <div className="block md:hidden">
                    {/* columns-2 creates the staggered masonry effect without gaps aligning perfectly */}
                    <div className="columns-2 gap-3 space-y-3">
                        {images.map((src, idx) => (
                            <div key={`mob-${idx}`} className="break-inside-avoid">
                                <img
                                    src={src}
                                    alt={`Gallery item ${idx}`}
                                    className={`w-full rounded-lg shadow-lg object-cover ${
                                        // Randomize aspect ratios slightly to mimic the screenshot's masonry feel
                                        idx % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'
                                        }`}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- DESKTOP LAYOUT (Structured Grid) --- */}
                <div className="hidden md:grid grid-cols-3 gap-4">
                    {images.map((src, idx) => {
                        // Logic to recreate the specific layout in image_e8c25a.jpg
                        // The 4th item (index 3) spans 2 columns
                        const isWide = idx === 3;

                        return (
                            <div
                                key={`desk-${idx}`}
                                className={`relative overflow-hidden rounded-xl shadow-xl group ${isWide ? 'col-span-2' : 'col-span-1'
                                    }`}
                            >
                                <img
                                    src={src}
                                    alt={`Gallery item ${idx}`}
                                    className={`w-full object-cover hover:scale-105 transition-transform duration-500 ease-out ${isWide ? 'aspect-[2/1]' : 'aspect-square'}`}
                                    loading="lazy"
                                />
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};
