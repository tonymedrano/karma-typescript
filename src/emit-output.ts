interface EmitOutput {
    isDeclarationFile: string;
    outputText: string;
    requiredModules: any[];
    sourceMapText: string;
}

export = EmitOutput;