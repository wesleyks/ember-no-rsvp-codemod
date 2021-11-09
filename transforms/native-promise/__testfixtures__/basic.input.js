import { Promise, reject, resolve, all } from 'rsvp';
import Foo from 'foo'; // untouched

async function awaitPromises() {
    await Promise.resolve();

    await reject(new Error('Error'));

    await resolve(123);

    await all();
}
