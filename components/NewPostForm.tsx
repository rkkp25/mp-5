import createNewAlias from "@/lib/createNewAlias";
import { AliasProps } from "@/types";
import { Textarea } from "@mui/joy";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function NewAliasForm({
    append,
}: {
append: (newAlias: AliasProps | null) => void;
}) {
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");

    return (
        <form
            className="w-96 rounded-xl p-4 bg-rose-300"
            onSubmit={async (e) => {
                e.preventDefault();
                createNewAlias(url, alias)
                .then((p) => append(p))
                .catch((err) => console.error(err));

            }}
        >
            <TextField
                variant="filled"
                sx={{ backgroundColor: "white", width: "100%" }}
                label="https://example.com/very/very/very/long/url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <TextField
                sx={{ backgroundColor: "white", width: "100%",
                }}
                variant="filled"
                label="alias"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
            />
            <div className="w-full flex justify-center">
                <button className="w-30 text-white bg-rose-400 hover:bg-rose-500 transition-colors font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-2" type="submit">
                    Shorten
                </button>
            </div>
        </form>
    );
}