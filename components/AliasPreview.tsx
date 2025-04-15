import { AliasProps } from "@/types";
import { useRouter } from 'next/navigation'



export default function AliasPreview({alias}: {alias: AliasProps }) {
    // function goToLink(alias: AliasProps) {
    //     redirect.push('{alias.url}')
    // }

    const router = useRouter()

    return (
        <div className="bg-rose-100 rounded-xl p-4 mt-2 w-96">
            <button className="font-bold text-xl" onClick={() => router.push(alias.url)}>https://mp-5-pi.vercel.app/{alias.alias}</button>
        </div>
    );
}

