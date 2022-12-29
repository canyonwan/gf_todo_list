<script setup lang="ts">
import { deleteTodo, queryTodoList } from '~/api/todo'

const todoList = ref()
onMounted(() => {
  getTodoList()
})

async function getTodoList() {
  const res = await queryTodoList()
  todoList.value = res.data.list
}

async function onDelete(id: number) {
  const res = await deleteTodo(id)
  if (res.code === 0) {
    alert('删除成功')
    await getTodoList()
  }
}
defineExpose({
  getTodoList,
})
</script>

<template>
  <div class="todo-home inline-block">
    <div v-for="item in todoList" :key="item.id">
      <div class="item" hover="border border-purple-400" flex="~" justify="between" px="9" py="5" my="6" w="450px" border="~ rounded gray-200 dark:gray-700">
        <div>{{ item.id }}</div>
        <div>{{ item.title }}</div>
        <div text="red-400 xl" cursor="pointer" i-carbon-close @click="onDelete(item.id)" />
      </div>
    </div>
  </div>
</template>
