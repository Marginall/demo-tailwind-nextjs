import { onError } from '@apollo/client/link/error';

export function getErrorLink() {
	return onError(({ graphQLErrors, networkError, operation }) => {
		if (graphQLErrors) {
			graphQLErrors.forEach((error) => {
				if (error.extensions?.category === 'translated' && error.message) {
					console.error({
						operation: operation.operationName,
						variables: operation.variables,
						error: error.message,
					});
				} else if (error.extensions?.category === 'internal') {
					console.error({
						operation: operation.operationName,
						variables: operation.variables,
						error,
					});
				}
			});
		}

		if (networkError) {
			console.error({ operation: operation.operationName, variables: operation.variables, error: networkError });
		}
	});
}
