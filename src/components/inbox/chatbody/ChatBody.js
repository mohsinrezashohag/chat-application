// import Blank from "./Blank";
import { useParams } from "react-router-dom";
import { useGetMessagesQuery } from "../../../features/messages/messageApi";
import ChatHead from "./ChatHead";
import Messages from "./Messages";
import Options from "./Options";
import Error from '../../ui/Error'

export default function ChatBody() {
    const { id } = useParams()
    const { data: messages, isLoading, isError, error } = useGetMessagesQuery(id)

    // decide what to render
    let content
    if (isLoading) {
        content = <div>Loading....</div>
    }
    else if (!isLoading && isError) {
        content = <Error message={error}> </Error>
    }
    else if (!isLoading && !isError && messages.length === 0) {
        content = <div className="text-red-400">No message started yet</div>
    }
    else if (!isLoading && !isError && messages.length > 0) {

        content = <>
            <ChatHead message={messages[0]} />
            <Messages messages={messages} />
            <Options />
            {/* <Blank /> */}
        </>
    }


    return (
        <div className="w-full lg:col-span-2 lg:block">
            <div className="w-full grid conversation-row-grid">
                {content}
            </div>
        </div>
    );
}
