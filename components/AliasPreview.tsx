import { AliasProps } from "@/types";
export default function AliasPreview({alias}: {alias: AliasProps }) {

    console.log(`${window.location.origin}/${alias.alias}`)

    return (
        <div className="bg-rose-100 rounded-xl p-4 mt-2 w-96">
            <a target="_blank" href={`${window.location.origin}/${alias.alias}`}>{window.location.origin}/{alias.alias}</a>
        </div>
    );
}