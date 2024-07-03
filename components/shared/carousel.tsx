import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export const ImgCarousel = ({ imgs }: { imgs: string[] }) => {
  return (
    <Carousel
      opts={{ loop: true, align: "center", active: true }}
      className="w-full cursor-grab active:cursor-grabbing rounded-lg overflow-hidden"
    >
      <CarouselContent>
        {imgs.map((img, i) => (
          <CarouselItem
            key={img + i}
            className="relative w-full aspect-video overflow-hidden"
          >
            <Image
              fill
              src={img}
              alt="Project Image"
              className="object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="transition bg-background disabled:bg-background/60 size-10 md:size-12 lg:size-14 text-lg md:text-xl lg:text-2xl rounded-none left-0 rounded-r-full"
        variant={"secondary"}
        size={"icon"}
      />
      <CarouselNext
        className="transition bg-background disabled:bg-background/60 size-10 md:size-12 lg:size-14 text-lg md:text-xl lg:text-2xl rounded-none right-0  rounded-l-full"
        variant={"secondary"}
        size={"icon"}
      />
    </Carousel>
  )
}
