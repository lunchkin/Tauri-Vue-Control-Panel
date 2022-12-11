import { ScriptArgument } from "./scriptArgument";

export type Script = {
    id: string;
    name: string;
    description: string;
    script: string;
    arguments?: ScriptArgument[];
}
