import { useSelector } from "react-redux";
import { useGetConversationsQuery } from "../../features/conversations/conversationApi";
import ChatItem from "./ChatItem";
import Error from '../ui/Error'
import moment from "moment/moment";
import { getPartnerInfo } from '../../utils/getPartnerInfo'
import gravatarUrl from 'gravatar-url';
import { Link, useNavigate } from "react-router-dom";


export default function ChatItems() {
    const { user } = useSelector(state => state.auth)
    const { data: conversationData, isLoading, isError, error } = useGetConversationsQuery(user?.email)
    const navigate = useNavigate()



    let content;
    if (isLoading) {
        content = <div>Loading.......</div>
    }
    if (!isLoading && isError) {
        content = <Error message={error}></Error>
    }

    if (!isLoading && !isError && conversationData.length === 0) {
        content = <div style={{ color: 'orange' }}>There is no conversation</div>
    }

    if (!isLoading && !isError && conversationData.length > 0) {
        content = conversationData.map(conversation => {

            const { email } = user || {}
            const { id, timestamp, message, users } = conversation

            const partnerInfo = getPartnerInfo(email, users)

            return <li key={id}>


                <div onClick={() => navigate(`/inbox/${id}`)}>
                    <ChatItem
                        avatar={gravatarUrl(partnerInfo?.email, { size: 80 })}
                        name={partnerInfo?.name}
                        lastMessage={message}
                        lastTime={moment(timestamp).fromNow()}
                    />
                </div>


            </li >
        })

    }

    return (
        <ul>
            {content}
        </ul>
    );
}
