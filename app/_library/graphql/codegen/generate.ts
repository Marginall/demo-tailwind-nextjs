import { CodegenConfig } from '@graphql-codegen/cli';
import { SCHEMA_SDL, DOCUMENTS, OUTPUT_TYPES } from './constants';

const config: CodegenConfig = {
	schema: SCHEMA_SDL,
	documents: DOCUMENTS,
	generates: {
		[OUTPUT_TYPES]: {
			plugins: ['typescript', 'typescript-operations'],
		},
	},
};

export { config as default };
