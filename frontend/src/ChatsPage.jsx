import { PrettyChatWindow } from 'react-chat-engine-pretty';


const ChatsPage = (props) => {
    const key = import.meta.env.VITE_PROJECT_KEY
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId={key}
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100vh' }}
            />
        </div>
    )
}

export default ChatsPage