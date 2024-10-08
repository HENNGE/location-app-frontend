import { DateTime } from 'luxon';
import {
    AreaTag,
    CasvalUser,
    CasvalUserLocation,
    FetchedCasvalData,
} from '../src/types/casval.types';
import { KasvotDepartment, KasvotMember } from '../src/types/kasvot.types';

export const mockMembers: KasvotMember[] = [
    {
        id: 'member-1',
        name: 'Member Name 1',
        email: 'member.one@example.com',
        imgUrl: 'https://example.com/img/member1.jpg',
        positionDepartment: [
            {
                id: 'dept-1',
                primary: 1,
                department: {
                    id: 'department-1',
                    name: 'Department 1',
                },
                position: {
                    id: 'position-1',
                    name: 'Position 1',
                    priority: 1,
                },
            },
        ],
    },
    {
        id: 'member-2',
        name: 'Member Name 2',
        email: 'member.two@example.com',
        imgUrl: 'https://example.com/img/member2.jpg',
        positionDepartment: [
            {
                id: 'dept-2',
                primary: 1,
                department: {
                    id: 'department-2',
                    name: 'Department 2',
                },
                position: {
                    id: 'position-2',
                    name: 'Position 2',
                    priority: 2,
                },
            },
        ],
    },
    {
        id: 'member-3',
        name: 'Member Name 3',
        email: 'member.three@example.com',
        imgUrl: 'https://example.com/img/member3.jpg',
        positionDepartment: [
            {
                id: 'dept-3',
                primary: 1,
                department: {
                    id: 'department-3',
                    name: 'Department 3',
                },
                position: {
                    id: 'position-3',
                    name: 'Position 3',
                    priority: 3,
                },
            },
        ],
    },
    {
        id: 'member-4',
        name: 'Member Name 4',
        email: 'member4@example.com',
        imgUrl: 'https://example.com/img/member4.jpg',
        positionDepartment: [
            {
                id: 'dept-4',
                primary: 1,
                department: {
                    id: 'department-4',
                    name: 'Department 4',
                },
                position: {
                    id: 'position-4',
                    name: 'Position 4',
                    priority: 4,
                },
            },
        ],
    },
    {
        id: 'member-5',
        name: 'Member Name 5',
        email: 'member5@example.com',
        imgUrl: 'https://example.com/img/member5.jpg',
        positionDepartment: [
            {
                id: 'dept-5',
                primary: 1,
                department: {
                    id: 'department-5',
                    name: 'Department 5',
                },
                position: {
                    id: 'position-5',
                    name: 'Position 5',
                    priority: 5,
                },
            },
        ],
    },
];

export const mockDepartments: KasvotDepartment[] = [
    {
        id: 'department-1',
        name: 'Department 1',
        currentMembersAndChildrenEmails: ['member1@example.com'],
    },
    {
        id: 'department-2',
        name: 'Department 2',
        currentMembersAndChildrenEmails: [
            'member2@example.com',
            'member3@example.com',
            'member4@example.com',
        ],
    },
    {
        id: 'department-3',
        name: 'Department 3',
        currentMembersAndChildrenEmails: [
            'member5@example.com',
            'member6@example.com',
        ],
    },
    {
        id: 'department-4',
        name: 'Department 4',
        currentMembersAndChildrenEmails: [
            'member7@example.com',
            'member8@example.com',
        ],
    },
    {
        id: 'department-5',
        name: 'Department 5',
        currentMembersAndChildrenEmails: [],
    },
];

export const mockDepartmentsTwo: KasvotDepartment[] = [
    {
        id: 'test-department',
        name: 'Test Department',
        currentMembersAndChildrenEmails: ['member.test@example.com'],
    },
    {
        id: 'test-department 2',
        name: 'Test Department 2',
        currentMembersAndChildrenEmails: [
            'member.test2@example.com',
            'member.test3@example.com',
            'member.test4@example.com',
            'member.test5@example.com',
        ],
    },
];

export const mockCasvalUserLocation: CasvalUserLocation = {
    id: '12345',
    name: 'Member Name 1',
    area_tags: [
        { id: 'tag1', tenant_id: 'tenant1', name: 'Shibuya' },
        { id: 'tag2', tenant_id: 'tenant2', name: 'HQ' },
        { id: 'tag2', tenant_id: 'tenant2', name: '4F-Forest-Center' },
    ],
    last_seen: DateTime.now().minus({ minutes: 5 }).toUTC().toISO(),
    recent: true,
    device_id: 'device123',
    device_name: 'iPhone 12',
    device_is_primary: true,
};

export const mockCasvalUserLocationTwo: CasvalUserLocation[] = [
    {
        id: '12345',
        name: '2F',
        area_tags: [
            { id: 'tag1', tenant_id: 'tenant1', name: 'Shibuya' },
            { id: 'tag2', tenant_id: 'tenant2', name: 'HQ' },
            { id: 'tag2', tenant_id: 'tenant2', name: '4F Test Room' },
        ],
        last_seen: DateTime.now().minus({ minutes: 5 }).toUTC().toISO(),
        recent: true,
        device_id: 'device123',
        device_name: 'iPhone 12',
        device_is_primary: true,
    },
    {
        id: '678',
        name: '4F',
        area_tags: [
            { id: 'tag1', tenant_id: 'tenant1', name: 'Shibuya' },
            { id: 'tag2', tenant_id: 'tenant2', name: 'HQ' },
            { id: 'tag2', tenant_id: 'tenant2', name: '4F Test Room' },
        ],
        last_seen: DateTime.now().minus({ minutes: 50 }).toUTC().toISO(),
        recent: true,
        device_id: '1',
        device_name: 'iPhone 1',
        device_is_primary: true,
    },
    {
        id: '6asd12378',
        name: '4F',
        area_tags: [
            { id: 'tag1', tenant_id: 'tenant1', name: 'Shibuya' },
            { id: 'tag2', tenant_id: 'tenant2', name: 'HQ' },
            { id: 'tag2', tenant_id: 'tenant2', name: '4F Test Room' },
        ],
        last_seen: DateTime.now().minus({ minutes: 5 }).toUTC().toISO(),
        recent: true,
        device_id: '1',
        device_name: 'iPhone 1',
        device_is_primary: true,
    },
    {
        id: '6754a358',
        name: '5F',
        area_tags: [
            { id: 'tag1', tenant_id: 'tenant1', name: 'Shibuya' },
            { id: 'tag2', tenant_id: 'tenant2', name: 'HQ' },
            { id: 'tag2', tenant_id: 'tenant2', name: '4F Test Room' },
        ],
        last_seen: DateTime.now().minus({ minutes: 5 }).toUTC().toISO(),
        recent: true,
        device_id: '1',
        device_name: 'iPhone 1',
        device_is_primary: true,
    },
    {
        id: '1231231',
        name: '11F',
        area_tags: [
            { id: 'tag1', tenant_id: 'tenant1', name: 'Shibuya' },
            { id: 'tag2', tenant_id: 'tenant2', name: 'HQ' },
            { id: 'tag2', tenant_id: 'tenant2', name: '4F Test Room' },
        ],
        last_seen: DateTime.now().minus({ minutes: 5 }).toUTC().toISO(),
        recent: true,
        device_id: '1',
        device_name: 'iPhone 1',
        device_is_primary: true,
    },
];

export const mockAreaTag: AreaTag = {
    id: '123',
    name: 'Shibuya',
    access_points: [
        { id: '456', name: 'access-point-1', mac_address: 'mac address' },
    ],
};

export const mockAreaTagTwo: AreaTag = {
    id: '456',
    name: '4F Forest',
    access_points: [
        { id: '123', name: 'access-point-2', mac_address: 'mac address 1' },
    ],
};

export const mockCasvalUsers: CasvalUser[] = [
    { id: mockMembers[0].id as string, email: mockMembers[0].email as string },
    { id: mockMembers[1].id as string, email: mockMembers[1].email as string },
];

export const mockFetchedCasvalData: FetchedCasvalData[] = [
    // 2F Area Tags
    {
        users: [
            { id: '1', email: 'user1@example.com' },
            { id: '2', email: 'user2@example.com' },
        ],
        areaTag: {
            id: 'area-1',
            name: '2F-Cafe-BYOD-AP',
            access_points: [
                {
                    id: 'ap-1',
                    name: '2F-Cafe-BYOD-AP',
                    mac_address: 'AA:BB:CC:DD:EE:01',
                },
                {
                    id: 'ap-2',
                    name: '2F-Cafe-AP-1',
                    mac_address: 'AA:BB:CC:DD:EE:02',
                },
            ],
        },
    },
    {
        users: [
            { id: '3', email: 'user3@example.com' },
            { id: '4', email: 'user4@example.com' },
        ],
        areaTag: {
            id: 'area-2',
            name: '2F-Wide-Deck-AP-1',
            access_points: [
                {
                    id: 'ap-3',
                    name: '2F-Wide-Deck-AP-1',
                    mac_address: 'AA:BB:CC:DD:EE:03',
                },
                {
                    id: 'ap-4',
                    name: '2F-Wide-Deck-AP-2',
                    mac_address: 'AA:BB:CC:DD:EE:04',
                },
            ],
        },
    },

    // 4F Area Tags
    {
        users: [
            { id: '5', email: 'user5@example.com' },
            { id: '6', email: 'user6@example.com' },
        ],
        areaTag: {
            id: 'area-3',
            name: '4F Lounge Walkway',
            access_points: [
                {
                    id: 'ap-5',
                    name: '4F-Lounge-3',
                    mac_address: 'AA:BB:CC:DD:EE:05',
                },
                {
                    id: 'ap-6',
                    name: '4F-Lounge-6',
                    mac_address: 'AA:BB:CC:DD:EE:06',
                },
            ],
        },
    },
    {
        users: [{ id: '7', email: 'member.one@example.com' }],
        areaTag: {
            id: 'area-4',
            name: '4F-Forest-Center',
            access_points: [
                {
                    id: 'ap-7',
                    name: '4F-Forest-Center',
                    mac_address: 'AA:BB:CC:DD:EE:07',
                },
                {
                    id: 'ap-8',
                    name: '4F-Forest-Walkway-Center',
                    mac_address: 'AA:BB:CC:DD:EE:08',
                },
            ],
        },
    },

    // 5F Area Tags
    {
        users: [
            { id: '9', email: 'user9@example.com' },
            { id: '10', email: 'user10@example.com' },
        ],
        areaTag: {
            id: 'area-5',
            name: '5F-Collaboration-NorthWest',
            access_points: [
                {
                    id: 'ap-9',
                    name: '5F (NorthWest)',
                    mac_address: 'AA:BB:CC:DD:EE:09',
                },
                {
                    id: 'ap-10',
                    name: '5F (North)',
                    mac_address: 'AA:BB:CC:DD:EE:10',
                },
            ],
        },
    },
    {
        users: [
            { id: '11', email: 'user11@example.com' },
            { id: '12', email: 'user12@example.com' },
        ],
        areaTag: {
            id: 'area-6',
            name: '5F-Meeting-Rooms',
            access_points: [
                {
                    id: 'ap-11',
                    name: '5F-Meeting-Rooms',
                    mac_address: 'AA:BB:CC:DD:EE:11',
                },
                {
                    id: 'ap-12',
                    name: '5F-Web-Meeting-Area',
                    mac_address: 'AA:BB:CC:DD:EE:12',
                },
            ],
        },
    },

    // 11F Area Tags
    {
        users: [
            { id: '13', email: 'user13@example.com' },
            { id: '14', email: 'user14@example.com' },
        ],
        areaTag: {
            id: 'area-7',
            name: '11F Guest Meeting Rooms',
            access_points: [
                {
                    id: 'ap-13',
                    name: '11F Guest Meeting Rooms',
                    mac_address: 'AA:BB:CC:DD:EE:13',
                },
                {
                    id: 'ap-14',
                    name: '11F Guest Meeting Rooms',
                    mac_address: 'AA:BB:CC:DD:EE:14',
                },
            ],
        },
    },
    {
        users: [
            { id: '15', email: 'user15@example.com' },
            { id: '16', email: 'user16@example.com' },
        ],
        areaTag: {
            id: 'area-8',
            name: '11F Open Lounge',
            access_points: [
                {
                    id: 'ap-15',
                    name: '11F Open Lounge',
                    mac_address: 'AA:BB:CC:DD:EE:15',
                },
                {
                    id: 'ap-16',
                    name: '11F Open Lounge',
                    mac_address: 'AA:BB:CC:DD:EE:16',
                },
            ],
        },
    },
];
