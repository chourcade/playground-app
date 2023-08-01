import Page2 from '@/screens/page2';
import LoginPage from '../../screens/login'
import { useRouter } from 'next/router';

const CustomRouter = ({ path = '' }: { path?: string }) => {
    return routes.find((ob) => path === ob.path)?.component()
}
const routes = [
    {
        path: "",
        component: () => <></>
    },
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/page2",
        component: Page2
    }
]

export default function PlaygroundPage() {
    const router = useRouter()

    return (
        <>
            <nav style={{
                background: 'white',
                padding: '10px',
                color: 'black'
            }}>
                <button onClick={() => { router.push('/playground/login') }} style={{margin:5}}>Login</button>
                <button onClick={() => { router.push('/playground/page2') }} style={{margin:5}}>Page 2</button>
            </nav>

            <CustomRouter path={`/${router.query.path}` as string} />
        </>
    )
}



