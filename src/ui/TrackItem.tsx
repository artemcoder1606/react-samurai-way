import clsx from "clsx";
import type {TrackListItemResource} from "../dal/api.ts";
import styles from "./Track.module.css"


type Props = {
    isSelected: boolean;
    onSelect: (trackId: string) => void;
    track: TrackListItemResource
}


export function TrackItem({track, isSelected, onSelect}: Props) {

    const handleClick = () => {onSelect?.(track.id)}


    const className = clsx({
        [styles.track]: true,
        [styles.selected]: isSelected,
    } )

    return (
        <li className={className}
            key={track.id}
            style={{
                borderColor:
                    isSelected ? "orange" : "#747bff",
            }}
        >
            <div
                style={{cursor: "pointer", marginBottom: "10px"}}
                onClick={handleClick}
            >
                {track.attributes.title}
            </div>
            {" "}
            <audio
                controls
                src={track.attributes.attachments[0].url}
            ></audio>
        </li>
    )
}