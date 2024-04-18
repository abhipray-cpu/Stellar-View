import { Carousel } from "@material-tailwind/react";

export default function CarouselComp({ images }) {
    const data = images.map(image => {
        return {
            "url": image.url,
            "description": image.explanation,
            "title": image.title
        };
    });

    return (
        <Carousel
            className="rounded-xl w-[98vw] lg:w-[80vw]"
            autoplay={true}
            transition={{ duration: 2 }}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            {data.map((val, index) => (
                <div className="relative w-[98vw] lg:w-[80vw]" key={index}>
                    <img
                        src={val.url}
                        alt={val.title}
                        className="h-[55vh] lg:h-[60vh] w-[98vw] lg:w-[80vw] object-fill rounded-xl"
                    />
                    <div className="absolute inset-0 mt-4 overflow-hidden h-[45vh] lg:h-[50vh] w-[96vw] lg:w-[78vw] ">
                        <h2 className="text-center text-white font-bold text-2xl lg:text-4xl tracking-wide text-clip">{val.title}</h2>
                        <p className="hidden sm:block ter mt-5 text-white font-normal text-sm lg:text-lg text-center text-clip">{val.description}</p>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}
