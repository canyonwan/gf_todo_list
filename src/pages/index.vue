<script setup lang="ts">
import { saveTodo } from '~/api/todo'
import type { ITodoItem } from '~/api/types'

defineOptions({
  name: 'IndexPage',
})

const name = $ref('')
const todoRef = $ref<null>(null)

const onAdd = async () => {
  const params: ITodoItem = {
    title: name,
  }
  await saveTodo(params)
  if (todoRef)
    todoRef.getTodoList!()
}
</script>

<template>
  <div>
    <div i-carbon-campsite text-4xl inline-block />
    <p>
      <a rel="noreferrer" href="https://github.com/canyonwan" target="_blank">
        Todo List
      </a>
    </p>

    <div py-4 />

    <TheInput
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="onAdd"
    />

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="onAdd"
      >
        添加
      </button>
    </div>
    <!-- list -->
    <Todo ref="todoRef" />
  </div>
</template>
