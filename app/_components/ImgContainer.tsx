import Image from "next/image";

type Props = {
    photo: {
        id: string,
        src: string,
        title: string,
    },
    classString: string
    Click: () => void; // Add onClick prop
    
}

export default function ImgContainer({ photo, classString, Click }: Props) {
    return (
        <div
            key={photo.id}
            onClick={Click}
            className={ ` ${classString} rounded md:rounded-xl overflow-hidden relative group`}
        >
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