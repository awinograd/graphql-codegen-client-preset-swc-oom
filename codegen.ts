import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://rickandmortyapi.com/graphql",
  documents: ["pages/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./graphql/": {
      preset: "client",
    },
  },
};

export default config;
