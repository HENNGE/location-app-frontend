export interface CasvalUser {
    id: string;
    email: string;
}

export interface CasvalUserLocation {
    id: string;
    name: string;
    area_tags: { id: string; tenant_id: string; name: string }[];
    last_seen: string;
    recent: boolean;
    device_id: string;
    device_name: string;
    device_is_primary: boolean;
}

export interface FetchedCasvalData {
    secondFloor: {
        user: CasvalUser;
        userLocation: CasvalUserLocation;
    }[];
    fourthFloor: {
        user: CasvalUser;
        userLocation: CasvalUserLocation;
    }[];
    fifthFloor: {
        user: CasvalUser;
        userLocation: CasvalUserLocation;
    }[];
    eleventhFloor: {
        user: CasvalUser;
        userLocation: CasvalUserLocation;
    }[];
}
