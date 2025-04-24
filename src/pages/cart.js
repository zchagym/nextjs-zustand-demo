import Link from "next/link";
import { useCartStore } from "./_app";

export default function Cart() {
    const cartStore = useCartStore();
    const items = cartStore((s) => s.items);
    const addItem = cartStore((s) => s.addItem);
    const removeItem = cartStore((s) => s.removeItem);
    const clearCart = cartStore((s) => s.clearCart);
    const totalPrice = cartStore((s) => s.totalPrice)();

    return (
        <div style={{ padding: 24 }}>
            <h2>购物车页（SSR+状态同步）</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} {item.price}元
                        <button onClick={() => removeItem(item.id)} style={{ marginLeft: 10 }}>
                            删除
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={() => addItem({ id: Date.now(), name: "新加商品", price: 10 })}>
                加商品
            </button>
            <button onClick={clearCart} style={{ marginLeft: 12 }}>
                清空
            </button>
            <p>总价：{totalPrice}元</p>
            <Link href="/">返回首页</Link>
        </div>
    );
}

export async function getServerSideProps() {
    return {
        props: {
            initialStates: {
                cart: { items: [{ id: 11, name: "SSR初始化商品", price: 66 }] }
            }
        }
    }
}
