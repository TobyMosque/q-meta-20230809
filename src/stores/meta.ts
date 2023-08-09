import { defineStore } from 'pinia';
import { uid } from 'quasar';
import { ref } from 'vue';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const useMetaStore = defineStore('meta', () => {
  const uuid = ref('');
  async function execute() {
    await sleep(1000);
    uuid.value = uid();
  }
  return {
    uuid,
    execute,
  };
});
