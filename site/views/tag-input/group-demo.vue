<template>
  <bk-tag-input
    v-model="state.tags"
    :list="state.list"
    placeholder="请选择"
    trigger="focus"
    use-group
  />
</template>

<script setup>
  import { reactive } from 'vue';

  const state = reactive({
    tags: [],
    list: [
      {
        id: '1',
        name: '华中地区',
        children: [
          { id: '1-1', name: '河南省' },
          { id: '1-2', name: '湖北省' },
          { id: '1-3', name: '湖南省' },
        ],
      },
      {
        id: '2',
        name: '华北地区',
        children: [
          { id: '2-1', name: '北京市' },
          { id: '2-2', name: '天津市' },
          { id: '2-3', name: '河北省' },
        ],
      },
      {
        id: '3',
        name: '华南地区',
        children: [
          { id: '3-1', name: '广东省' },
          { id: '3-2', name: '海南省' },
        ],
      },
    ],
  });
</script>
