<template>
  <q-page class="row items-center justify-evenly">
    <q-field label="uuid">{{ uuid }}</q-field>
  </q-page>
</template>

<script setup lang="ts">
import { useMetaStore } from 'src/stores/meta';
import { storeToRefs } from 'pinia';
import { useMeta } from 'quasar';

const metaStore = useMetaStore();
const { uuid } = storeToRefs(metaStore);

useMeta(() => {
  return {
    title: uuid.value,
  };
});

defineOptions({
  async preFetch({ store }) {
    const _store = useMetaStore(store);
    await _store.execute();
  },
});
</script>
