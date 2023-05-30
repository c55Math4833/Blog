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
          <q-route-tab to="/NotePage" label="Note" />
          <q-route-tab to="/Code" label="Code" />
          <q-route-tab to="/Photo" label="Photo" />
        </q-tabs>
      </q-toolbar>
    </q-header>

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
