import createNewAlias from "@/lib/createNewAlias";
import { AliasProps } from "@/types";
import { Textarea } from "@mui/joy";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import AliasPreview from "./AliasPreview";

export default function NewAliasForm() {
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [record, setRecord] = useState<AliasProps>()
    const [message, setMessage] = useState("");

    return (
        <form
            className="w-150 rounded-xl p-4 bg-rose-300 text-pretty"
            onSubmit={async (e) => {
                e.preventDefault();
                const result =  await createNewAlias(url, alias)
                if (result === "EMPTY") {
                    setMessage("Alias cannot be empty. Please try again.")
                }
                if (result === "BAD RESPONSE") {
                    setMessage("Invalid URL: Could not verity UR:. Please try again.")
                }
                if (result === "BAD URL") {
                    setMessage("Invalid URL: Could not verity UR:. Please try again.")
                }
                if (result === "EXISTS") {
                    setMessage("Alias already exists. Please try again.")
                }
                else if (typeof(result) !== "string") {
                    setMessage("")
                    setRecord(result)
                }

                // if (message === "" && typeof(result) !=="string" ){
                //     setRecord(result)
                // } 
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


            {
             (message !== ""  ||  !record )?(<div>{message}</div> ): <AliasPreview alias={record}/>

                
            }
        </form>
        
    );
}