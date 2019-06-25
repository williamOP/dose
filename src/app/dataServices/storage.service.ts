import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {}

  // Store a key-value pair
  async store(key: string, value: string) {
    await Storage.set({
      key,
      value: JSON.stringify(value)
    });
  }

  // Retrieve a key's value
  async retrieve(key: string): Promise<string> {
    const ret = await Storage.get({
      key
    });
    return JSON.parse(ret.value);

  }

  // Remove a key and it's value
  async remove(key: string) {
    await Storage.remove({
      key
    });
  }

  // Store a key-value pair log and return keys
  async keys(): Promise<{keys: string[]}> {
    const keys = await Storage.keys();
    console.log('Got keys: ', keys);
    return keys;
  }

  // Clear storage
  async clear() {
    await Storage.clear();
  }
}
