import { CodegenConfig } from '@graphql-codegen/cli';
import './load-env-config';
import { DOCUMENTS, SCHEMA_SDL, SCHEMA_URL } from './constants';

const config: CodegenConfig = {
	schema: SCHEMA_URL,
	documents: DOCUMENTS,
	ignoreNoDocuments: true,
	generates: {
		[SCHEMA_SDL]: {
			plugins: ['schema-ast'],
			config: {
				includeDirectives: true,
				commentDescriptions: true,
			},
		},
	},
};

export { config as default };
