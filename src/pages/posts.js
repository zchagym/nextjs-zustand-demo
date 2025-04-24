import Link from 'next/link'
// 假装这里是后端数据获取，模拟 SSR
async function fetchPosts() {
    return [
        {id: 1, title: 'Next.js + SSR 教程'},
        {id: 2, title: 'Zustand 全局状态Tips'}
    ]
}

export default function Posts({ posts }) {
    return (
        <div style={{padding: 24}}>
            <h2>文章列表（SSR）</h2>
            <ul>
                {posts.map(p => <li key={p.id}>{p.title}</li>)}
            </ul>
            <Link href="/">返回首页</Link>
        </div>
    )
}

export async function getServerSideProps() {
    const posts = await fetchPosts()
    return { props: { posts, initialStates: {} } }
}
