<template>
  <a-list :class="prefixCls" bordered :pagination="getPagination">
    <template v-for="item in getData" :key="item.id">
      <a-list-item class="list-item" @click="handleNotifyClick(item)">
        <template #extra>
          <delete-outlined
            v-if="item.readed === 0"
            @click="handleDelete(item)"
            class="!text-red-500"
          />
        </template>
        <a-list-item-meta>
          <template #title>
            <div class="title">
              <a-typography-paragraph
                style="width: 100%; margin-bottom: 0 !important"
                :disabled="!!item.readed"
                :delete="!!item.readed"
                :ellipsis="true"
                :ellipsisTooltip="item.title"
                :content="item.title"
              />
              <div class="extra" v-if="item.extra">
                <a-tag class="tag" color="red">
                  {{ item.extra }}
                </a-tag>
              </div>
            </div>
          </template>

          <template #avatar>
            <a-avatar
              v-if="item.type == 1"
              class="avatar"
              src="https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png"
            />
          </template>

          <template #description>
            <div>
              <div class="description" v-if="item.context">
                <a-typography-paragraph
                  style="width: 100%; color: #7f838b; margin-bottom: 0 !important"
                  :disabled="!!item.readed"
                  :delete="!!item.readed"
                  :ellipsis="true"
                  :ellipsisTooltip="item.context"
                  :content="item.context"
                />
              </div>
              <div class="datetime">
                <clock-circle-outlined />
                {{ item.createTime }}
              </div>
            </div>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts">
  import { computed, defineComponent, PropType, ref, watch, unref } from 'vue';
  import { ClockCircleOutlined, DeleteOutlined } from '@ant-design/icons-vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { List, Avatar, Tag, Typography } from 'ant-design-vue';
  import { isNumber } from '/@/utils/is';
  import { NotifyItem } from '/@/api/system/model/notifyModel';
  export default defineComponent({
    components: {
      [Avatar.name]: Avatar,
      [List.name]: List,
      [List.Item.name]: List.Item,
      AListItemMeta: List.Item.Meta,
      ATypographyParagraph: Typography.Paragraph,
      ClockCircleOutlined,
      DeleteOutlined,
      [Tag.name]: Tag,
    },
    props: {
      list: {
        type: Array as PropType<NotifyItem[]>,
        default: () => [],
      },
      notifyType: {
        type: Number,
        default: 1,
      },
      pageSize: {
        type: [Boolean, Number] as PropType<Boolean | Number>,
        default: 5,
      },
      currentPage: {
        type: Number,
        default: 1,
      },
      titleRows: {
        type: Number,
        default: 1,
      },
      descRows: {
        type: Number,
        default: 2,
      },
      onNotifyClick: {
        type: Function as PropType<(Recordable) => void>,
      },
      onNotifyDel: {
        type: Function as PropType<(Recordable) => void>,
      },
    },
    emits: ['update:currentPage'],
    setup(props, { emit }) {
      const { prefixCls } = useDesign('header-notify-list');
      const current = ref(props.currentPage || 1);

      const getData = computed(() => {
        const { pageSize, list } = props;
        if (pageSize === false) return [];
        let size = isNumber(pageSize) ? pageSize : 5;
        return list.slice(size * (unref(current) - 1), size * unref(current));
      });
      watch(
        () => props.currentPage,
        (v) => {
          current.value = v;
        },
      );
      const getPagination = computed(() => {
        const { list, pageSize } = props;
        if (pageSize > 0 && list && list.length > pageSize) {
          return {
            total: list.length,
            pageSize,
            current: unref(current),
            onChange(page) {
              current.value = page;
              emit('update:currentPage', page);
            },
          };
        } else {
          return false;
        }
      });

      function handleNotifyClick(item: NotifyItem) {
        props.onNotifyClick && props.onNotifyClick(item);
      }
      /* delete */
      async function handleDelete(item: NotifyItem) {
        props.onNotifyClick && props.onNotifyClick(item);
      }
      return {
        prefixCls,
        getPagination,
        getData,
        handleNotifyClick,
        handleDelete,
      };
    },
  });
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-header-notify-list';

  .@{prefix-cls} {
    min-width: 280px;

    &::-webkit-scrollbar {
      display: none;
    }

    :deep(.ant-pagination-disabled) {
      display: inline-block !important;
    }

    .list-item {
      padding: 10px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.3s;

      .ant-list-item-meta {
        align-items: center;
      }

      .title {
        font-weight: bold;

        .extra {
          float: right;
          margin-top: -1.5px;
          margin-right: 0;
          font-weight: normal;

          .tag {
            margin-right: 0;
          }
        }

        .avatar {
          margin-top: 4px;
        }

        .description {
          font-size: 12px;
          line-height: 18px;
        }
      }
    }
  }

  .datetime {
    margin-top: 4px;
    font-size: 12px;
    line-height: 18px;
    color: #7f838b;
  }
</style>
