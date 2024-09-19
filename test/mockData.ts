import { CasvalUserLocation } from '../src/types/casval.types';
import { KasvotDepartment, KasvotMember } from '../src/types/kasvot.types';

export const mockMembers: KasvotMember[] = [
    {
        id: 'member-1',
        name: 'Member Name 1',
        email: 'member1@example.com',
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
        email: 'member2@example.com',
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
        email: 'member3@example.com',
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

export const mockCasvalUserLocation: CasvalUserLocation = {
    id: '12345',
    name: 'Member Name 1',
    area_tags: [
        { id: 'tag1', tenant_id: 'tenant1', name: 'Shibuya' },
        { id: 'tag2', tenant_id: 'tenant2', name: 'HQ' },
        { id: 'tag2', tenant_id: 'tenant2', name: '4F Test Room' },
    ],
    last_seen: '2024-09-19T14:30:00Z',
    recent: true,
    device_id: 'device123',
    device_name: 'iPhone 12',
    device_is_primary: true,
};
