import { useSelector } from "react-redux";
import gravatarUrl from 'gravatar-url';


export default function ChatHead({ message }) {

    const { user: { email } } = useSelector(state => state.auth)

    const partner = message.sender.email !== email ? message.sender : message.receiver
    const { name, email: partnerEmail } = partner

    return (
        <div className="relative flex items-center p-3 border-b border-gray-300">
            <img
                className="object-cover w-10 h-10 rounded-full"
                src={gravatarUrl(partnerEmail, 80)}
                alt={name}
            />
            <span className="block ml-2 font-bold text-gray-600">{name}</span>
        </div>
    );
}
