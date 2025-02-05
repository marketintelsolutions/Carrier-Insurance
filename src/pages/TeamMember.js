import React, { useEffect } from 'react'
import TeamMemberBanner from '../components/TeamMember/TeamMemberBanner'
import { useParams } from 'react-router-dom';
import { team } from '../utils/data';
import MemberDetails from '../components/TeamMember/MemberDetails';
import AllMembers from '../components/TeamMember/AllMembers';

const TeamMember = () => {
    const { id } = useParams()

    const teammember = team.find((item) => item.slug === id)

    useEffect(() => {
        window.scroll(0, 0)
    }, [id])

    return (
        <>
            <TeamMemberBanner />
            <MemberDetails teammember={teammember} />
            <AllMembers teammember={teammember} />
        </>
    )
}

export default TeamMember