<template>
  <div>
    <bk-input
      class="mb8"
      prefix="https://"
      type="url"
    />
    <bk-input
      class="mb8"
      suffix=".com"
    >
      <template #prefix>
        <bk-dropdown class="protocol-list-dropdown">
          <span class="protocol-list-trigger">
            {{ protocol }}
            <angle-down
              class="toggle-indicator"
              :class="{
                opened: opened,
              }"
            />
          </span>
          <template #content>
            <bk-dropdown-menu>
              <bk-dropdown-item
                v-for="item in dropdownList"
                :key="item"
                @click="updateProtocol(item)"
              >
                {{ item }}
              </bk-dropdown-item>
            </bk-dropdown-menu>
          </template>
        </bk-dropdown>
      </template>
    </bk-input>
    <bk-input
      class="mb8"
      suffix="@qq.com"
      type="url"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import { AngleDown } from 'bkui-vue/lib/icon';
  const dropdownList = ['http://', 'https://'];
  const protocol = ref(dropdownList[0]);
  const opened = ref(false);
  function updateProtocol(item) {
    protocol.value = item;
  }
</script>

<style lang="postcss" scoped>
  .mb8 {
    margin-bottom: 8px;
  }

  .protocol-list-dropdown {
    height: 32px;
    margin: -1px 0 0 -1px;
    border: 1px solid #c4c6cc;
    border-radius: 2px 0 0 2px;

    &:hover {
      border-color: #3a84ff;
    }

    .protocol-list-trigger {
      display: flex;
      height: 30px;
      padding: 0 10px;
      cursor: pointer;
      align-items: center;
      justify-content: center;

      .toggle-indicator {
        margin-left: 5px;
        font-size: 14px;
      }
    }
  }
</style>
