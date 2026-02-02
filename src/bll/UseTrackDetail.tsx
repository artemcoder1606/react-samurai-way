import React from "react";
import {getTrack, type GetTrackDetailsOutputData} from "../dal/api.ts";

export function useTrackDetail(trackId: string | null) {
    const [trackDetails, setTrackDetails] = React.useState<GetTrackDetailsOutputData | null>(null);
    React.useEffect(() => {
        if (!trackId) {
            setTrackDetails(null)
            return
        }
        getTrack(trackId).then((json) => {
            setTrackDetails(json.data);
        });
    }, [trackId]);
    return {
        trackDetails
    }
}