
export type GetTrackDetailsOutputData = {
    id: string,
    attributes: {
        title: string,
        lyrics: string | null,
    }
}

type GetTrackDetailsOutput = {
    data: GetTrackDetailsOutputData
}


export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch(
        "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId,
        {
            headers: {
                "api-key": "a8d1cd20-c762-4bdc-829c-2ecc51f8a34b",
            },
        }
    )
        .then((res) => res.json())
    return promise;
}

type TrackAttachment = {
    url: string;
}

type TrackListItemAttributes = {
    title: string,
    attachments: Array<TrackAttachment>
}


export type TrackListItemResource = {
    id: string,
    attributes: TrackListItemAttributes
}


type GetTrackListOutput =  {
    data: Array<TrackListItemResource>
}
export const getTracks = () => {
    const promise: Promise<GetTrackListOutput> = fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
        headers: {
            "api-key": "a8d1cd20-c762-4bdc-829c-2ecc51f8a34b",
        },
    })
        .then((res) => res.json())
    return promise;
}
