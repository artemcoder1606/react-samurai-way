import React from "react";

export const useTrackSelection = () => {
    const [trackId, setTrackId] = React.useState<string | null>(null);

    return {trackId, setTrackId}
}