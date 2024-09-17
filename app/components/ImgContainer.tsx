import Image from "next/image";

type Props = {
    photo: {
        id: string,
        src: string,
        title: string,
    },
    onClick?: () => void; // Add onClick prop
}

export default function ImgContainer({ photo }: Props) {
    return (
        <div key={photo.id} className=" h-[15rem] md:h-[30rem] w-[10rem] md:w-[17rem] rounded-xl overflow-hidden relative group">
            <Image
                src={`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${photo.id}).jpg`}
                alt={`image-${photo.title}${photo.id}`}
                fill={true}
                sizes="(min-width: 1420px) 272px, (min-width: 1080px) calc(5.63vw + 193px), (min-width: 800px) calc(33.08vw - 14px), (min-width: 540px) calc(50vw - 16px), calc(100vw - 16px)"
                priority={true}
                className=" object-cover group-hover:opacity-75"
            />
        </div>
    )
}