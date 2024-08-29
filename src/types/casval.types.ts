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

export interface AreaTag {
    id: string;
    name: string;
    access_points: { id: string; name: string; mac_address: string }[];
}

export interface FetchedCasvalData {
    users: CasvalUser[];
    areaTag: AreaTag;
}
