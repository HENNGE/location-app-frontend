import { ActionIcon, Group, Text } from '@mantine/core';
import { IconDirectionSign } from '@tabler/icons-react';
import { parseEmail } from '../utilities/utilities';

interface Props {
    email: string;
    lastSeenMinutes: number;
    areaName: string;
}

const DepartmentSearchUser = ({ email, lastSeenMinutes, areaName }: Props) => {
    return (
        <Group className='flex flex-col items-start p-2 m-1 border-[1px] rounded-md w-[16rem]'>
            <div>
                <Text size='md' fw={600}>
                    {parseEmail(email)}
                </Text>
                <Text size='xs' c='dimmed'>
                    {`Last seen: ${Math.floor(lastSeenMinutes)} minutes ago`}
                </Text>
            </div>
            <Group className='flex justify-between w-full'>
                <Text size='xs'>{areaName}</Text>
                <ActionIcon
                    aria-label='Go to user on map'
                    variant='filled'
                    size='sm'
                    color='#003366'
                    onClick={() =>
                        window.location.replace(
                            `/level-${areaName[0]}/${email}`
                        )
                    }
                >
                    <IconDirectionSign />
                </ActionIcon>
            </Group>
        </Group>
    );
};

export default DepartmentSearchUser;
