import React from "react";
import {getTracks, type TrackListItemResource} from "../dal/api.ts";

export function useTracks() {
    const [tracks, setTracks] = React.useState<Array<TrackListItemResource> | null>(null)
    React.useEffect(() => {
        getTracks()
            .then((json) => {
                setTracks(json.data);
            });
    }, []);

    return {tracks};
}