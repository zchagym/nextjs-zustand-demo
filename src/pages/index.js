import Link from "next/link";
import { useUserStore, useCartStore, useUIStore } from "./_app";

export default function Home() {
    const userStore = useUserStore();
    const cartStore = useCartStore();
    const uiStore = useUIStore();

    const user = userStore((s) => s.user);
    const setUser = userStore((s) => s.setUser);

    const items = cartStore((s) => s.items);
    const addItem = cartStore((s) => s.addItem);

    const dark = uiStore((s) => s.dark);
    const toggleDark = uiStore((s) => s.toggleDark);

    return (
        <div
            style={{
                background: dark ? "#222" : "#fafafa",
                color: dark ? "#fafafa" : "#222",
                minHeight: "100vh",
                padding: 24,
            }}
        >
            <h1>Next.js + Zustand 全局状态演示首页</h1>
            <nav>
                <Link href="/about">About</Link> |{" "}
                <Link href="/profile">Profile</Link> |{" "}
                <Link href="/cart">Cart</Link>
            </nav>
            <hr />
            <div style={{ marginTop: 16 }}>
                <b>用户：</b>
                {user ? (
                    <>
                        {user.name} ({user.email})
                    </>
                ) : (
                    "未登录"
                )}
            </div>
            <button onClick={() => setUser({ name: "HomeUser", email: "home@next.com" })}>
                登录/切换用户
            </button>
            <hr />
            <div>
                <b>购物车：</b> 共 {items.length} 个商品
                <button
                    onClick={() => addItem({ id: Date.now(), name: "首页商品", price: 9 })}
                >
                    + 加商品
                </button>
            </div>
            <hr />
            <div>
                <b>UI 主题：</b> {dark ? "深色" : "浅色"}
                <button onClick={toggleDark}>切换主题</button>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    return {
        props: {
            initialStates: {
                user: { user: { name: "首页SSR用户", email: "ssr@home.com" } },
                cart: { items: [{ id: 1, name: "SSR苹果", price: 8 }] },
                ui: { dark: false },
            },
        },
    };
}
