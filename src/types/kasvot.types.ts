export interface KasvotMember {
    id?: string;
    name?: string;
    email?: string;
    imgUrl?: string;
    positionDepartment?: {
        id?: string;
        primary?: number;
        department?: {
            id?: string;
            name?: string;
        };
        position?: {
            id?: string;
            name?: string;
            priority?: number;
        };
    }[];
}

export interface KasvotDepartment {
    id?: string;
    name: string;
}
