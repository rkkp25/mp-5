import { AliasProps } from "@/types";


export default function AliasPreview({alias}: {alias: AliasProps }) {
    return (
        <div className="bg-rose-100 rounded-xl p-4 mt-2 w-96">
            <a className="font-bold text-xl" target="_blank" href="https://cs391-url-shortener.vercel.app/{alias.alias}">https://cs391-url-shortener.vercel.app/{alias.alias}</a>
        </div>
    );
}

