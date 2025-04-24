import Link from "next/link";
export default function About() {
    return (
        <div style={{ padding: 24 }}>
            <h2>About 页面（SSG）</h2>
            <Link href="/">返回首页</Link>
        </div>
    );
}

export async function getStaticProps() {
    return { props: { initialStates: {} } };
}
