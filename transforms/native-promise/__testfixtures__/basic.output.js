import Foo from 'foo'; // untouched

async function awaitPromises() {
    await Promise.resolve();

    await Promise.reject(new Error('Error'));

    await Promise.resolve(123);
}
