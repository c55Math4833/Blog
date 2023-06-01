<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal bordered class="bg-primary text-dark" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="" />
          </q-avatar>
          <text-h3>c55Math4833 Blog</text-h3>
        </q-toolbar-title>
        <q-tabs align="right">
          <q-route-tab to="/notes" label="Note" />
          <q-route-tab to="/Code" label="Code" />
          <q-route-tab to="/Photo" label="Photo" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerModel" show-if-above side="left">
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-accent">
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-pgflight text-white">
      <q-toolbar>
        <q-toolbar-title>
          <text-h3>c55Math4833</text-h3>
          <div></div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

const menuList = [
  {
    label: 'Inbox',
    separator: true
  },
  {
    label: 'Outbox',
    separator: false
  },
  {
    label: 'Trash',
    separator: false
  },
  {
    label: 'Spam',
    separator: true
  },
  {
    label: 'Settings',
    separator: false
  },
  {
    label: 'Send Feedback',
    separator: false
  },
  {
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
]

export default {
  setup () {
    return {
      drawer: ref(false),
      menuList
    }
  }
}
</script>
