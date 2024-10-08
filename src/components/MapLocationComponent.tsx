import { Avatar, Tooltip } from '@mantine/core';
import { useMemo } from 'react';
import { FetchedCasvalData } from '../types/casval.types';
import { KasvotMember } from '../types/kasvot.types';
import { getCountIcon } from '../utilities/utilities';

interface Props {
    name: string;
    size: {
        left: string;
        top: string;
        width: string;
        height: string;
    };
    data: FetchedCasvalData[];
    active: string;
    handleClick: (value: string) => void;
    userEmail?: string | undefined;
    members: KasvotMember[] | undefined;
}

const MapLocationComponent = ({
    name,
    size,
    data,
    active,
    handleClick,
    userEmail,
    members,
}: Props) => {
    const [filteredData] = useMemo(() => {
        return data.filter((fetchedData) => fetchedData.areaTag.name === name);
    }, [data, name]);

    const userCount = getCountIcon(
        filteredData ? filteredData.users.length : 0
    );

    const userInGroup = useMemo(() => {
        if (userEmail && filteredData) {
            const user = filteredData.users.find(
                (user) => user.email === userEmail
            );
            if (user) {
                return true;
            }
        }
        return false;
    }, [filteredData, userEmail]);

    const avatars = useMemo(() => {
        if (!members || !filteredData) {
            return [];
        }

        const output: KasvotMember[] = [];

        members.forEach((member) => {
            const user = filteredData.users.find(
                (user) => user.email === member.email
            );
            if (user) {
                output.push(member);
            }
        });

        output.sort((a, b) => (a.name || '').localeCompare(b.name || ''));

        if (output.length <= 4) {
            return (
                <>
                    {output.map((user) => (
                        <Avatar src={user.imgUrl} key={user.id} />
                    ))}
                </>
            );
        } else {
            return (
                <>
                    <Avatar src={output[0].imgUrl} />
                    <Avatar src={output[1].imgUrl} />
                    <Avatar src={output[2].imgUrl} />
                    <Avatar src={output[3].imgUrl} />
                    <Avatar>+{output.length - 4}</Avatar>
                </>
            );
        }
    }, [filteredData, members]);

    return (
        <Tooltip
            label={<Avatar.Group>{avatars}</Avatar.Group>}
            className='bg-transparent'
            transitionProps={{ transition: 'pop', duration: 300 }}
            offset={-16}
        >
            <div
                onClick={() => handleClick(name)}
                onKeyDown={(e) => e.key === 'Enter' && handleClick(name)}
                data-note={name}
                style={{
                    left: size.left,
                    top: size.top,
                    width: size.width,
                    height: size.height,
                }}
                className={`${
                    userInGroup &&
                    !!userInGroup &&
                    '!opacity-100 !border-[3px] !border-white'
                } ${
                    active === name
                        ? 'opacity-100 border-[3px] border-white animate-pulse'
                        : 'opacity-25'
                } absolute rounded-lg hover:scale-95 transition-all flex justify-center items-center hover:border-[3px] hover:border-white hover:opacity-100 cursor-pointer`}
                tabIndex={0}
                role='button'
                aria-label={`${name} area button`}
            >
                {userCount && (
                    <img
                        src={userCount}
                        className={`${
                            userInGroup &&
                            !!userInGroup &&
                            'animate-wiggle-more animate-infinite'
                        } sm:h-[5rem] w-auto bg-white rounded-full border-[1px] border-[#003366]`}
                        alt='user count icon'
                    />
                )}
            </div>
        </Tooltip>
    );
};

export default MapLocationComponent;
