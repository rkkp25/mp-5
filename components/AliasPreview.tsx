import { AliasProps } from "@/types";
export default function AliasPreview({alias}: {alias: AliasProps }) {

    console.log(`${window.location.origin}/${alias.alias}`)

    return (
        <div className="bg-rose-100 rounded-xl p-4 mt-2 justify-center text-wrap">
            <a className="text-wrap" target="_blank" href={`${window.location.origin}/${alias.alias}`}>{window.location.origin}/{alias.alias}</a>
        </div>
    );
}