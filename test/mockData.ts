import { DateTime } from 'luxon';
import {
    AreaTag,
    CasvalUser,
    CasvalUserLocation,
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
        { id: 'tag2', tenant_id: 'tenant2', name: '4F Test Room' },
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
