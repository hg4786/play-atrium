type Props = {
    src: string;
    alt?: string;
}

export function HeaderImage(props: Props) {
    return (
        <div className="w-full overflow-hidden h-[300px] md:h-auto">
            <img className="w-full h-full object-cover md:object-contain md:h-auto" src={props.src} alt={props.alt} />
        </div>
    )
}