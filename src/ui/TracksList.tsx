import {PageTitle} from "./PageTitle.tsx";
import {TrackItem} from "./TrackItem.tsx";
import {useTracks} from "../bll/useTracks.tsx";
import styles from "./Track.module.css"

type Props = {
    selectedTrackId: string | null;
    onTrackSelect: (id: string | null) => void;
}
export function TracksList({onTrackSelect, selectedTrackId} : Props) {
    const {tracks} = useTracks()
    if (!tracks) {
        return (
            <>
                <PageTitle/>
                <span>loading...</span>
            </>
        );
    }

    if (tracks.length === 0) {
        return (
            <>
                <PageTitle/>
                <span>no tracks</span>
            </>
        );
    }


    const handleReset = () => {
        onTrackSelect?.(null)
    }

    const handleClick = (trackId: string) => {
        onTrackSelect?.(trackId);
    }

    return (
        <div>
            <button onClick={handleReset }>reset
            </button>
            <ul className={styles.tracks}>
                {tracks.map((track) => {

                    return (
                      <TrackItem track={track} isSelected={track.id === selectedTrackId} onSelect={handleClick}></TrackItem>
                    );
                })}
            </ul>
        </div>
    )
}

