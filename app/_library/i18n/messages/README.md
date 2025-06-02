# Internationalization

This directory contains the translations of the messages used in the
application. Each file contains the messages for a specific language.

---

### Different calls for server and client side

For Server Components you must use `getI18n` function to get the messages.
Note this is async function and you must await it.

For Client Components you must use `useI18n` hook to get the messages.

---

## Messages for Server Components and Client Components

The messages from one file are used in both types of components.

The Messages that are provided to the Client Components are stored in `"$"` key.
This name is chosen to reduce the length of key references when calling the hook

```ts
// Example

const t1 = useI18n('$.ErrorPage');
const t3 = useI18n('$.ErrorPage');
// instead of a possible naming option
const t2 = useI18n('clientSide.ErrorPage');
```

---
