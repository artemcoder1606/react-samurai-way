import {useTrackDetail} from "../bll/UseTrackDetail.tsx";
import styles from './Track-detail.module.css'

type Props = {
  trackId: string | null;
}

export function TrackDetail({trackId} : Props) {
    const {trackDetails} = useTrackDetail(trackId)

    // useEffect(() =>{
    //     navigator.geolocation.getCurrentPosition(
    //         position => console.log(position),
    //         error => console.error(error)
    //     )
    // }, [] )

    return (
        <div className={styles.track}>
            <h3>Details</h3>
            {!trackId && "Track is not selected"}
            {!trackDetails && trackId && "loading..."}
            {trackDetails &&
                trackId &&
                trackDetails.id !== trackId &&
                "loading..."}

            {trackDetails && (
                <div>
                    <h3>{trackDetails.attributes.title}</h3>
                    <h4>Lyrics</h4>
                    <p>{trackDetails.attributes.lyrics ?? "no lyrics"}</p>
                </div>
            )}

        </div>

    )
}