<script lang="ts" setup>
import type { DropdownMenuItem } from "@nuxt/ui";

const props = defineProps<{ content: string; items?: DropdownMenuItem[] }>();
const emit = defineEmits<{ (e: "click", val: string, ev: MouseEvent): void }>();
const clipboard = useClipboard();
const copied = ref<boolean>(false);
function onClick(event: MouseEvent) {
  emit("click", props.content, event);
  clipboard.copy(props.content);
  copied.value = true;
  setTimeout(() => {
    return (copied.value = false);
  }, 1500);
}
</script>

<template>
  <UFieldGroup class="w-full">
    <UInput
      :model-value="content"
      aria-label="Copy text"
      readonly
      class="w-full"
    />
    <UButton
      type="button"
      variant="subtle"
      :color="copied ? 'success' : 'neutral'"
      size="sm"
      aria-label="copy content"
      :icon="copied ? 'i-feather-check-circle' : 'i-feather-copy'"
      @click="onClick"
    />
    <UDropdownMenu
      v-if="(items?.length ?? 0) > 0"
      :items="props.items ?? []"
    >
      <UButton
        color="neutral"
        variant="subtle"
        icon="i-feather-chevron-down"
        size="sm"
      />
    </UDropdownMenu>
  </UFieldGroup>
</template>
