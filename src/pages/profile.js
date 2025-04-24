import Link from "next/link";
import { useUserStore } from "./_app";

export default function Profile() {
    const userStore = useUserStore();
    const user = userStore((s) => s.user);
    const setUser = userStore((s) => s.setUser);
    const logout = userStore((s) => s.logout);

    return (
        <div style={{ padding: 24 }}>
            <h2>用户信息页（SSR + 状态全同步）</h2>
            {user ? (
                <div>
                    <div>姓名：{user.name}</div>
                    <div>邮箱：{user.email}</div>
                    <button onClick={logout}>登出</button>
                </div>
            ) : (
                <button onClick={() => setUser({ name: "ProfileUser", email: "profile@next.com" })}>
                    登录
                </button>
            )}
            <Link href="/">返回首页</Link>
        </div>
    );
}

export async function getServerSideProps() {
    return {
        props: {
            initialStates: {
                user: { user: { name: "个人页SSR用户", email: "ssr@profile.com" } }
            }
        }
    }
}
