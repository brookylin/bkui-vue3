<template>
  <div style="width: 100%; height: 500px">
    <bk-table ref="refTable" height="100%" :columns="columns" :data="tableData" :pagination="pagination"
      empty-cell-text="--" :pagination-heihgt="60" show-overflow-tooltip shift-multi-checked
      @selection-change="handleSelectionChange" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { DATA_FIX_COLUMNS } from './options';

const tableData = new Array(Math.ceil(Math.random() * 100) + 100).fill('').map((_, index) => ({
  ip: `${index}--192.168.0.x`,
  source: `${index}_QQ`,
  create_by: `user-admin-${index}`,
  status: '',
  create_time: `2018-05-25 15:02:24.${index}`,
}));

const pagination = ref({ count: tableData.length, limit: 10 });
const columns = DATA_FIX_COLUMNS.map(item => ({ ...item }));
const refTable = ref(null);
const handleSelectionChange = args => {
  console.log('handleSelectionChange', args, refTable.value?.getSelection());
};
</script>
