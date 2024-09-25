import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useServerState } from "@/hooks/useServerState";
import MicButton from "@/icon/MicButton";
import { useEffect, useRef } from 'react';


export default function Record() {

    const logs = useServerState((state) => state.log);
    const dummy = useRef(null);

    useEffect(() => {
        if (dummy != null && dummy.current != null) {
            ((dummy.current as HTMLDivElement))?.scrollIntoView({ behavior: "instant", block: "end" });
        }

    }, [logs])

    return <Card className="h-full flex flex-col">
        <CardHeader className="flex-none ">
            <CardTitle>Record Audio</CardTitle>
            <CardDescription>
                create audio recordings
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 grow">
            <div className="flex justify-center items-center h-full">
                <MicButton />
            </div>
        </CardContent>
        <CardFooter className="block grow-0 h-64">
            <h2>Logs:</h2>
            <div className="border-slate-800 border-2 p-3 mt-3 border-rounded border-radius-10 h-[13rem] rounded-lg overflow-y-auto">
                {
                    logs.map((aLog) => <div key={aLog.id?.toString()} className={aLog.type == "error" ? "text-red-400" : "text-lime-300"}>{aLog.text}
                    </div>)
                }
                <div ref={dummy} />
            </div>
        </CardFooter>
    </Card>
}