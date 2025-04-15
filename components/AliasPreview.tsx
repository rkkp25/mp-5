import { AliasProps } from "@/types";
import { redirect } from 'next/navigation'



export default function AliasPreview({alias}: {alias: AliasProps }) {
    function goToLink(alias: string) {
        redirect("https://mp-5-pi.vercel.app/{alias}")
    }
    return (
        <div className="bg-rose-100 rounded-xl p-4 mt-2 w-96">
            <button className="font-bold text-xl" onClick={() => goToLink(alias.alias)}>https://mp-5-pi.vercel.app/{alias.alias}</button>
        </div>
    );
}

